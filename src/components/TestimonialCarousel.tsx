// components/TestimonialCarousel.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  company?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const autoScrollRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // measured card width (includes gap) — determined by ResizeObserver
  const cardWidthRef = useRef<number>(0);
  const currentIndexRef = useRef<number>(0);

  // duplicate for infinite feel (prefix + middle + suffix)
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const baseIndexOffset = testimonials.length;

  useEffect(() => setIsMounted(true), []);

  // get computed gap from container (px)
  const getContainerGap = (container: HTMLElement | null) => {
    if (!container) return 0;
    const style = window.getComputedStyle(container);
    const gap = parseFloat(style.gap || style.columnGap || "0") || 0;
    return gap;
  };

  // compute card width using first .carousel-card element or container fallback
  const computeCardWidth = (): number => {
    const container = scrollContainerRef.current;
    if (!container) return 0;
    const first = container.querySelector<HTMLElement>(".carousel-card");
    if (first) {
      const w = first.getBoundingClientRect().width;
      const gap = getContainerGap(container);
      return Math.round(w + gap);
    }
    // fallback: use container width (assume 1 card per view)
    const fallback = Math.round(container.getBoundingClientRect().width);
    return fallback;
  };

  // scroll to logical index (0..n-1)
  const scrollToIndex = (indexRelative: number, behavior: ScrollBehavior = "smooth") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = cardWidthRef.current || computeCardWidth();
    if (!cardWidth) return;
    const absoluteIndex = baseIndexOffset + indexRelative;
    container.scrollTo({ left: Math.round(absoluteIndex * cardWidth), behavior });
    currentIndexRef.current = ((indexRelative % testimonials.length) + testimonials.length) % testimonials.length;
  };

  const scrollRightOne = () => {
    const next = (currentIndexRef.current + 1) % testimonials.length;
    scrollToIndex(next);
    resetAutoScroll();
  };
  const scrollLeftOne = () => {
    const prev = (currentIndexRef.current - 1 + testimonials.length) % testimonials.length;
    scrollToIndex(prev);
    resetAutoScroll();
  };
  const handleArrow = (direction: "left" | "right") =>
    direction === "left" ? scrollLeftOne() : scrollRightOne();

  // react to manual scrolling and keep currentIndexRef in sync
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = cardWidthRef.current || computeCardWidth();
    if (!cardWidth) return;
    const absoluteIndexFloat = container.scrollLeft / cardWidth;
    const absoluteIndex = Math.round(absoluteIndexFloat);
    const relative = ((absoluteIndex - baseIndexOffset) % testimonials.length + testimonials.length) % testimonials.length;
    currentIndexRef.current = relative;
  };

  // auto-scroll controls
  const startAutoScroll = () => {
    if (autoScrollRef.current != null) {
      window.clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
    autoScrollRef.current = window.setInterval(() => {
      if (!isPaused) scrollRightOne();
    }, 4000) as unknown as number;
  };

  const resetAutoScroll = () => {
    if (autoScrollRef.current != null) {
      window.clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
    startAutoScroll();
  };

  const pauseAutoScroll = () => setIsPaused(true);
  const resumeAutoScroll = () => setIsPaused(false);

  // measure card width via ResizeObserver and only scroll to middle when valid width found
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const ro = new ResizeObserver(() => {
      const measured = computeCardWidth();
      if (measured > 10) {
        cardWidthRef.current = measured;
        // center to middle chunk on first measurement (only once)
        // use a tiny timeout to ensure layout stabilized (images/fonts)
        window.setTimeout(() => {
          if (!scrollContainerRef.current) return;
          scrollContainerRef.current.scrollTo({ left: Math.round(baseIndexOffset * measured), behavior: "auto" });
          currentIndexRef.current = 0;
        }, 30);
      }
    });

    // observe the first card if present, otherwise observe container
    const elToObserve = container.querySelector<HTMLElement>(".carousel-card") || container;
    ro.observe(elToObserve as Element);

    // start auto-scroll after measurement stabilizes
    const startId = window.setTimeout(() => {
      startAutoScroll();
    }, 200);

    const onResize = () => {
      // recompute width and recentre on current logical index
      const w = computeCardWidth();
      if (w > 10) {
        cardWidthRef.current = w;
        if (scrollContainerRef.current) {
          const absolute = baseIndexOffset + currentIndexRef.current;
          scrollContainerRef.current.scrollTo({ left: Math.round(absolute * w), behavior: "auto" });
        }
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      ro.disconnect();
      window.clearTimeout(startId);
      if (autoScrollRef.current != null) {
        window.clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted, testimonials.length]);

  // stars
  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-cyan-400 text-cyan-400" : "text-gray-600"}`} />
    ));

  // server-safe small card until mounted
  if (!isMounted) {
    const t = testimonials[0] || {
      id: "0",
      name: "Loading",
      role: "",
      avatar: "",
      rating: 5,
      quote: "",
    };
    return (
      <div className="mt-20 flex items-center justify-center px-4">
        <Card className="w-full max-w-3xl bg-gradient-to-r from-zinc-900/60 to-black/60 border border-zinc-800 p-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <Avatar className="h-12 w-12">
              <AvatarImage src={t.avatar} alt={t.name} />
              <AvatarFallback>{t.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
                <div className="flex text-cyan-400">{renderStars(t.rating)}</div>
              </div>
              <p className="mt-4 text-slate-300">&quot;{t.quote}&quot;</p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className="mt-14 relative"
      onMouseEnter={pauseAutoScroll}
      onMouseLeave={resumeAutoScroll}
      onTouchStart={pauseAutoScroll}
      onTouchEnd={resumeAutoScroll}
    >
      {/* desktop arrows */}
      <button
        onClick={() => handleArrow("left")}
        aria-label="Previous testimonial"
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff] text-black rounded-full p-3 ml-2 transition-transform duration-200 shadow-lg hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory touch-pan-x gap-6 px-4 sm:px-8 py-2 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {duplicatedTestimonials.map((testimonial, idx) => (
          <div
            key={`${testimonial.id}-${idx}`}
            className="carousel-card snap-center flex-shrink-0"
            style={{ minWidth: "min(92vw,720px)" }}
            aria-hidden={false}
          >
            <Card className="w-full bg-gradient-to-r from-zinc-900/60 to-black/60 border border-zinc-800 p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <Avatar className="h-14 w-14 sm:h-20 sm:w-20 border-2 border-cyan-400">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-start sm:items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-slate-400">
                        {testimonial.role}
                        {testimonial.company ? `, ${testimonial.company}` : ""}
                      </p>
                    </div>

                    <div className="flex gap-1 mt-3 sm:mt-0">{renderStars(testimonial.rating)}</div>
                  </div>

                  <p className="mt-4 text-sm text-slate-300">&quot;{testimonial.quote}&quot;</p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* desktop right arrow */}
      <button
        onClick={() => handleArrow("right")}
        aria-label="Next testimonial"
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff] text-black rounded-full p-3 mr-2 transition-transform duration-200 shadow-lg hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* mobile tiny arrows */}
      <div className="flex md:hidden gap-2 justify-between px-6 mt-4">
        <button onClick={() => handleArrow("left")} aria-label="Previous testimonial" className="bg-zinc-800/60 text-white rounded-full p-2 shadow-sm">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button onClick={() => handleArrow("right")} aria-label="Next testimonial" className="bg-zinc-800/60 text-white rounded-full p-2 shadow-sm">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* dots */}
      <div className="flex justify-center mt-6 space-x-2 px-2">
        {testimonials.map((_, idx) => {
          const isActive = idx === (currentIndexRef.current % testimonials.length);
          return (
            <button
              key={idx}
              onClick={() => {
                scrollToIndex(idx);
                resetAutoScroll();
              }}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${isActive ? "bg-[#1cd9ff]" : "bg-gray-600"}`}
            />
          );
        })}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TestimonialCarousel;
