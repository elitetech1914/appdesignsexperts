"use client"

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";

export type NavItem = {
  label: string;
  href?: string;
};

export default function HoveringGlassHeader({
  navItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blogs", href: "/blogs" },
  ],
  compact = false,
  topOffset = 24,
}: {
  title?: string;
  subtitle?: string;
  navItems?: NavItem[];
  compact?: boolean;
  topOffset?: number;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Only apply scroll behavior after component mounts
  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [lastScrollY]);

  // Base classes that are consistent between server and client
  const baseContainerClasses = "fixed left-1/2 z-50 transform -translate-x-1/2 w-full max-w-5xl px-4 pointer-events-auto transition-transform duration-300 ease-out";
  
  // Only add visibility classes after mounting to avoid hydration mismatch
  const containerClasses = isMounted 
    ? `${baseContainerClasses} ${isVisible ? 'translate-y-0' : '-translate-y-24'}`
    : baseContainerClasses;

  return (
    <div
      aria-hidden={false}
      style={{ top: `${topOffset}px` }}
      className={containerClasses}
    >
      <header
        role="banner"
        className={
          "mx-auto w-full rounded-2xl border border-white/10 backdrop-blur-md bg-white/6 shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl " +
          (compact ? "py-2 px-4" : "py-3 px-6")
        }
        style={{ WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)" }}
      >
        <div className="flex items-center justify-between gap-4">
          {/* logo / brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={'/images/logo.png'}
              alt="logo"
              width={281}
              height={81}
              className="w-32"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="ml-auto flex items-center gap-3 max-sm:hidden">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href ?? "#"}
                className="rounded-full px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/6 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contactus"
              className="ml-2 rounded-full px-3 py-2 text-sm font-medium bg-white/10 border border-white/12 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
            >
              Contact us
            </Link>
          </nav>

          {/* Mobile Sheet Navigation */}
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-10 w-10 text-white border-0"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="bg-gray-900 border-l border-gray-700 text-white w-[280px] sm:w-[540px]"
              >
                <SheetHeader className="text-left">
                  <SheetTitle className="text-white flex items-center gap-3">
                    <Link href={'/'}>
                      <Image
                        src={'/images/logo.png'}
                        alt="logo"
                        width={281}
                        height={81}
                        className="w-24"
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href ?? "#"}
                      className="rounded-lg px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  <Link
                    href="/contactus"
                    className="mt-4 rounded-lg px-4 py-3 text-base font-medium bg-white/10 border border-white/12 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition text-left"
                  >
                    Contact us
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}