import Image from "next/image";
import React from "react";

// HoveringGlassHeader.tsx
// Default-exported React component (Tailwind CSS) that shows a floating header
// with glassmorphism and a gentle hover "lift" effect.
// Drop this file into your components folder and import it where needed.

export type NavItem = {
  label: string;
  href?: string;
};

export default function HoveringGlassHeader({
  navItems = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ],
  compact = false,
  topOffset = 24, // px from top
}: {
  title?: string;
  subtitle?: string;
  navItems?: NavItem[];
  compact?: boolean;
  topOffset?: number;
}) {
  return (
    // Container centers the header and keeps it above content
    <div
      aria-hidden={false}
      style={{ top: `${topOffset}px` }}
      className="fixed left-1/2 z-50 transform -translate-x-1/2 w-full max-w-5xl px-4 pointer-events-auto"
    >
      <header
        role="banner"
        className={
          "mx-auto w-full rounded-2xl border border-white/10 backdrop-blur-md bg-white/6 shadow-lg transition-transform duration-300 ease-out " +
          (compact ? "py-2 px-4" : "py-3 px-6")
        }
        // Add Safari support for backdrop-filter when Tailwind not present
        style={{ WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)" }}
      >
        <div className="flex items-center gap-4">
          {/* logo / brand */}
          <div className="flex items-center gap-3">
              <Image
              src={'/images/logo.png'}
              alt="logo"
              width={281}
              height={81}
              className="w-32"
              />
          
          </div>

          {/* nav */}
          <nav aria-label="Primary" className="ml-auto flex items-center gap-3">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href ?? "#"}
                className="rounded-full px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/6 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
              >
                {item.label}
              </a>
            ))}

            <button
              className="ml-2 rounded-full px-3 py-2 text-sm font-medium bg-white/10 border border-white/12 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
              aria-pressed="false"
            >
              Get Started
            </button>
          </nav>
        </div>

        {/* Hover/float effect "lift" */}
        <style jsx>{`
          header:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0,0,0,0.35);
          }

          header {
            /* we keep an initial transform to enable GPU acceleration */
            transform: translateZ(0);
          }

          @media (prefers-reduced-motion: reduce) {
            header, header:hover {
              transition: none !important;
              transform: none !important;
            }
          }
        `}</style>
      </header>
    </div>
  );
}

/*
Usage notes:
- This component relies on Tailwind CSS utilities (backdrop-blur, bg-opacity, etc.).
- Place it on pages with darker backgrounds so the glass effect reads nicely.
- Props:
  - title, subtitle: brand text
  - navItems: array of {label, href}
  - compact: reduces vertical padding
  - topOffset: pixels from top of viewport

Example:
import HoveringGlassHeader from '@/components/HoveringGlassHeader';

<HoveringGlassHeader title="My Site" subtitle="Beta" />
*/
