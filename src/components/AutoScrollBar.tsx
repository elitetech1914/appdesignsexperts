// components/AutoScrollBarEnhanced.tsx
"use client";

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollBox {
  id: string;
  imageUrl: string;
  title?: string;
}

interface AutoScrollBarProps {
  boxes: ScrollBox[];
}

const AutoScrollBar: React.FC<AutoScrollBarProps> = ({ 
  boxes 
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);

  // Duplicate boxes for seamless infinite loop
  const duplicatedBoxes = [...boxes, ...boxes, ...boxes];

  const getCardWidth = () => {
    return 320 + 16; // w-80 (320px) + mx-4 (16px) = 336px
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
    const totalCards = boxes.length;
    let newIndex;
    
    if (direction === 'right') {
      newIndex = (currentIndexRef.current + 1) % totalCards;
    } else {
      newIndex = currentIndexRef.current - 1;
      if (newIndex < 0) newIndex = totalCards - 1;
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
    const newIndex = Math.round(scrollPosition / cardWidth) % boxes.length;
    
    currentIndexRef.current = newIndex;
    updateArrowVisibility();
  };

  // Auto-scroll to next card
  const startAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }

    autoScrollRef.current = setInterval(() => {
      if (!isPaused) {
        scroll('right');
      }
    }, 2000); // Scroll every 2 seconds
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

  // Initialize
  useEffect(() => {
    // Start auto-scroll
    startAutoScroll();
    
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [boxes, isPaused]);

  // Reset to middle section on mount for infinite scroll in both directions
  useEffect(() => {
    if (scrollContainerRef.current) {
      const middleSection = boxes.length; // Start at the second set of duplicates
      scrollToIndex(middleSection, 'auto');
    }
  }, []);

  return (
    <div 
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-r from-[#02f8b5] to-[#1cd9ff] py-8"
      onMouseEnter={pauseAutoScroll}
      onMouseLeave={resumeAutoScroll}
      onTouchStart={pauseAutoScroll}
      onTouchEnd={resumeAutoScroll}
    >
      {/* Left Arrow Button */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-r from-[#02f8b5] to-[#1cd9ff] text-black rounded-full p-3 transition-all duration-300 shadow-lg hover:scale-110 hover:shadow-xl"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex overflow-hidden scrollbar-hide whitespace-nowrap scroll-smooth px-12"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {duplicatedBoxes.map((box, index) => (
          <div
            key={`${box.id}-${index}`}
            className="flex-shrink-0 mx-4 group cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <div
              className="w-80 h-80 my-2 rounded-2xl bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url(${box.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {box.title && (
                <div className="absolute bottom-4 left-4 text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {box.title}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-r from-[#02f8b5] to-[#1cd9ff] text-black rounded-full p-3 transition-all duration-300 shadow-lg hover:scale-110 hover:shadow-xl"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AutoScrollBar;