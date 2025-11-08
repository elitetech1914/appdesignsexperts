'use client';

import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      // Calculate how much the user has scrolled
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / docHeight;
      setProgress(scrollProgress);
    };

    // Add scroll event listener
    window.addEventListener('scroll', updateProgress);
    
    // Initial call to set progress
    updateProgress();

    // Cleanup
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div 
        className="h-full bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff] transition-all duration-150"
        style={{ 
          width: `${progress * 100}%`,
          boxShadow: '0 0 10px rgba(28, 217, 255, 0.5)'
        }}
      />
    </div>
  );
};

export default ScrollProgress;