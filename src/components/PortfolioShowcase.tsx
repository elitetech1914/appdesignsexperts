"use client";

import Image from "next/image";
import React from "react";
import { Globe, Apple, Play } from "lucide-react";

// Simple, single-file component that reproduces the screenshot layout.
// Drop this file into a Next.js page or component folder and import it where needed.

export default function PortfolioShowcase(){
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* CSS variable for accent color */}
      <div style={{ ['--accent' as string]: '#1cd9ff' }}>
        {/* Top bar */}
        <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo - replace with your logo image in /public/logo.png */}
            <div className="w-40 h-10 relative">
              <Image src="/logo-white.png" alt="Thousand Greens" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button aria-label="website" className="p-1">
              <Globe className="h-6 w-6 text-white" />
            </button>
            <button aria-label="apple" className="p-1">
              <Apple className="h-6 w-6 text-white" />
            </button>
            <button aria-label="playstore" className="p-1">
              <Play className="h-6 w-6 text-white" />
            </button>
          </div>
        </header>

        {/* Main content area */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
          {/* two-column on large screens; stack on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:items-center">
            {/* Left content (heading + sub + CTA) */}
            <div className="pt-6 lg:pt-12">
              <h3 className="text-4xl md:text-5xl font-semibold" style={{ color: 'var(--accent)' }}>Sports</h3>
              <p className="mt-6 text-xl text-slate-200 max-w-xl">Mobile &amp; Web App Development</p>

              <button
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white text-black px-6 py-3 font-semibold tracking-widest shadow"
                aria-label="case study"
              >
                CASE STUDY
              </button>

              {/* Spacer so the images appear lower like the screenshot */}
              <div className="hidden md:block h-24" />
            </div>

            {/* Right visual area (overlapping iPad images) */}
            <div className="relative h-72 md:h-96 lg:h-[420px] flex items-center justify-center">
              {/* Back iPad */}
              <div className="absolute left-1/4 top-8 md:top-12 transform -translate-x-1/2 md:-rotate-2 drop-shadow-2xl">
                <div className="w-64 md:w-80 lg:w-[520px] h-40 md:h-56 lg:h-[360px] bg-zinc-900 rounded-lg overflow-hidden">
                  <Image
                    src="/images/ipad-back.jpg"
                    alt="ipad back"
                    width={520}
                    height={360}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Front iPad */}
              <div className="absolute right-1/4 bottom-0 md:bottom-6 transform translate-x-0 md:translate-x-0 md:rotate-0 z-10">
                <div className="w-72 md:w-96 lg:w-[560px] h-44 md:h-64 lg:h-[380px] bg-zinc-900 rounded-lg overflow-hidden drop-shadow-2xl">
                  <Image
                    src="/images/ipad-front.jpg"
                    alt="ipad front"
                    width={560}
                    height={380}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
  Integration notes:
  - Place your assets in /public:
    - /public/logo-white.png  (the top-left logo)
    - /public/images/ipad-front.jpg
    - /public/images/ipad-back.jpg

  - This component uses Next/Image. If you are not in a Next environment, replace with <img>.
  - Tailwind classes assume Tailwind is configured. Adjust sizes as needed for your design.
  - The icons use lucide-react. Install via `npm i lucide-react` if not already installed.
*/
