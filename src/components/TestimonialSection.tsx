"use client";
import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";

const testimonials = [
  {
    id: "1",
    name: "Hannah Singleton",
    role: "Founder",
    company: "Heathy Luxe",
    avatar: "/images/reviews/healthy-luxe.png",
    rating: 5,
    quote: "Instead of just taking orders, they're able to offer their own suggestions to improve the app.",
  },
  {
    id: "2",
    name: "Garry Jedkins",
    role: "Creator",
    company: "Aktv",
    avatar: "/images/reviews/garry-jedkins-aktv.jpg",
    rating: 5,
    quote: "Their response time and knowledge of mobile apps really stand out.",
  },
  {
    id: "3",
    name: "Darren Legg",
    role: "Director",
    company: "Starfinda",
    avatar: "/images/reviews/darren-legg-starfinda.jpg",
    rating: 5,
    quote: "They understand the scope of our project better than anyone has.",
  },
    {
    id: "4",
    name: "Uber",
    role: "Strategic Program Manager",
    company: "Uber",
    avatar: "/images/reviews/Uber.jpg",
    rating: 5,
    quote: "They are very good at execution",
  },
];

export function TestimonialSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center mb-12">
          What Client Says
        </h2>
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}