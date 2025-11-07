"use client";

import React from "react";
import { HeartPulse, ShoppingCart, Users, Briefcase, Trophy, Clock, Activity, MapPin, BookOpen } from "lucide-react";

type Item = {
  id: string | number;
  title: string;
  subtitle?: string;
  image?: string; // optional background image (can be '/images/x.jpg' from public/)
};

export default function AutoMarquee({ items, duration = 18 }: { items: Item[]; duration?: number }) {
  // duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="marquee w-full" style={{ ['--marquee-duration' as string]: `${duration}s` }}>
      <div className="marquee__track" aria-hidden={false}>
        {doubled.map((it, idx) => (
          <MarqueeCard key={`${it.id}-${idx}`} {...it} />
        ))}
      </div>
    </div>
  );
}

/* single card — gradient fallback or image background with overlay */
function MarqueeCard({ title, subtitle, image }: { title: string; subtitle?: string; image?: string }) {
  const backgroundStyle: React.CSSProperties = image
    ? {
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.28), rgba(0,0,0,0.18)), url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        background: "linear-gradient(90deg,#1cd9ff,#1cd9ff)",
      };

  // small helper to pick a lucide icon (optional)
  const Icon = chooseIcon(title);

  return (
    <div
      className="marquee__item flex-shrink-0 w-56 md:w-64 lg:w-72 h-36 md:h-40 lg:h-44 rounded-xl overflow-hidden relative shadow-lg"
      style={backgroundStyle}
      role="group"
      aria-label={title}
    >
      {/* dark overlay exists via background linear-gradient above; if no image, it's gradient */}
      {/* decorative icon badge */}
      <div
        className="absolute left-3 top-3 w-10 h-10 rounded-md flex items-center justify-center"
        style={{ background: "linear-gradient(90deg,#1cd9ff,#1cd9ff)" }}
        aria-hidden
      >
        {Icon ? <Icon className="h-5 w-5 text-black" /> : <span className="block w-3 h-3 rounded-full bg-black/80" />}
      </div>

      {/* content */}
      <div className="relative z-10 p-4 text-white">
        <div className="font-semibold text-sm md:text-base leading-tight">{title}</div>
        {subtitle && <div className="text-xs md:text-sm mt-1 text-white/90">{subtitle}</div>}
      </div>

      {/* subtle inner border */}
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/20" />
    </div>
  );
}

/* choose a simple lucide icon based on title */
function chooseIcon(title?: string) {
  if (!title) return null;
  const t = title.toLowerCase();
  if (t.includes("health")) return HeartPulse;
  if (t.includes("e-com") || t.includes("commerce") || t.includes("ecommerce")) return ShoppingCart;
  if (t.includes("social")) return Users;
  if (t.includes("business")) return Briefcase;
  if (t.includes("sport")) return Trophy;
  if (t.includes("demand") || t.includes("on-demand")) return Clock;
  if (t.includes("fitness")) return Activity;
  if (t.includes("travel")) return MapPin;
  if (t.includes("educ") || t.includes("learn")) return BookOpen;
  return null;
}
