// components/TestimonialCarousel.tsx
"use client";

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
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

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ 
  testimonials 
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);

  // Set mounted state to true after component mounts on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Duplicate testimonials for seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const getCardWidth = () => {
    // Card width + margin (w-full max-w-3xl + gap-6)
    return 768 + 24; // Approximate width including margin
  };

  const scrollToIndex = (index: number, behavior: 'smooth' | 'auto' = 'smooth') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = getCardWidth();
    const scrollPosition = index * cardWidth;
    
    container.scrollTo({
      left: scrollPosition,
      behavior: behavior
    });

    currentIndexRef.current = index;
    updateArrowVisibility();
  };

  const scroll = (direction: 'left' | 'right') => {
    const totalTestimonials = testimonials.length;
    let newIndex;
    
    if (direction === 'right') {
      newIndex = (currentIndexRef.current + 1) % totalTestimonials;
    } else {
      newIndex = currentIndexRef.current - 1;
      if (newIndex < 0) newIndex = totalTestimonials - 1;
    }

    scrollToIndex(newIndex);
    resetAutoScroll();
  };

  const updateArrowVisibility = () => {
    if (!scrollContainerRef.current) return;
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = getCardWidth();
    const scrollPosition = container.scrollLeft;
    const newIndex = Math.round(scrollPosition / cardWidth) % testimonials.length;
    
    currentIndexRef.current = newIndex;
    updateArrowVisibility();
  };

  // Auto-scroll to next testimonial
  const startAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }

    autoScrollRef.current = setInterval(() => {
      if (!isPaused && scrollContainerRef.current) {
        scroll('right');
      }
    }, 4000); // Scroll every 4 seconds for testimonials
  };

  const resetAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    startAutoScroll();
  };

  const pauseAutoScroll = () => {
    setIsPaused(true);
  };

  const resumeAutoScroll = () => {
    setIsPaused(false);
  };

  // Initialize auto-scroll only on client side
  useEffect(() => {
    if (isMounted) {
      startAutoScroll();
      
      // Reset to middle section for infinite scroll
      if (scrollContainerRef.current) {
        const middleSection = testimonials.length;
        scrollToIndex(middleSection, 'auto');
      }
    }
    
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isMounted, testimonials, isPaused]);

  // Render stars for rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  // Don't render the interactive parts until mounted on client
  if (!isMounted) {
    return (
      <div className="mt-20 flex items-center justify-center">
        <Card className="w-full max-w-3xl bg-gradient-to-r from-zinc-900/60 to-black/60 border border-zinc-800 p-6">
          <div className="flex items-center gap-6">
            <Avatar>
              <AvatarImage src={testimonials[0]?.avatar} alt="avatar" />
              <AvatarFallback>{testimonials[0]?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{testimonials[0]?.name}</p>
                  <p className="text-sm text-slate-400">{testimonials[0]?.role}</p>
                </div>
                <div className="flex text-yellow-400">
                  {renderStars(testimonials[0]?.rating || 5)}
                </div>
              </div>
              <p className="mt-4 text-slate-300">&quot;{testimonials[0]?.quote}&quot;</p>
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
      {/* Left Arrow Button */}
      <button
        onClick={() => scroll('left')}
        className="absolute -left-7 top-[40%] transform -translate-y-1/2 z-20 bg-gradient-to-r from-[#02f8b5] to-[#1cd9ff] text-black rounded-full p-3 transition-all duration-300 shadow-lg hover:scale-110 hover:shadow-xl"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6 pr-[2px]"/>
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex overflow-hidden scrollbar-hide scroll-smooth gap-6 px-12"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="flex-shrink-0 w-full max-w-3xl transform transition-all duration-300 hover:scale-105 py-6"
          >
            <Card className="w-full bg-gradient-to-r from-zinc-900/60 to-black/60 border border-zinc-800 p-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 border-2 border-cyan-400">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-slate-400">
                        {testimonial.role}
                        {testimonial.company && `, ${testimonial.company}`}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-300">&quot;{testimonial.quote}&quot;</p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={() => scroll('right')}
        className="absolute -right-7 top-[40%] transform -translate-y-1/2 z-20 bg-gradient-to-r from-[#02f8b5] to-[#1cd9ff] text-black rounded-full p-3 transition-all duration-300 shadow-lg hover:scale-110 hover:shadow-xl"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6 pl-[2px]" />
      </button>


      {/* Dots indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              scrollToIndex(index);
              resetAutoScroll();
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndexRef.current % testimonials.length
                ? 'bg-[#02f8b5]'
                : 'bg-gray-600'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
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