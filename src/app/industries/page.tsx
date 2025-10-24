"use client";

import React from "react";
import { Phone, HeartPulse, ShoppingCart, Users, Briefcase, Trophy, Clock, Activity, MapPin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import AutoScrollBar from "@/components/AutoScrollBar";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const sampleTestimonials = [
    {
        id: '1',
        name: 'Darren Legg',
        role: 'Director',
        company: 'Stantricia',
        avatar: '/images/reviews/darren-legg-starfinda.jpg',
        rating: 5,
        quote: 'They understood the scope of our project better than anyone else.'
    },
    {
        id: '2',
        name: 'Sarah Johnson',
        role: 'CEO',
        company: 'TechFlow',
        avatar: '/images/reviews/healthy-luxe.png',
        rating: 5,
        quote: 'The quality of work exceeded our expectations. Truly transformative digital solutions.'
    },
    {
        id: '3',
        name: 'Uber',
        role: 'Strategic Program Manager',
        company: 'Uber',
        avatar: '/images/reviews/Uber.jpg',
        rating: 5,
        quote: 'Outstanding attention to detail and incredible technical expertise across multiple industries.'
    },
    {
        id: '4',
        name: 'David Kim',
        role: 'Founder',
        company: 'HealthTech Plus',
        avatar: '/images/reviews/garry-jedkins-aktv.jpg',
        rating: 5,
        quote: 'The healthcare solutions they built have revolutionized our patient care platform.'
    }
];

const sampleBoxes = [
    {
        id: '1',
        imageUrl: '/images/HL.png',
        title: 'HealthyLuxe'
    },
    {
        id: '2',
        imageUrl: '/images/Pharmasses.png',
        title: 'Pharmasses'
    },
    {
        id: '3',
        imageUrl: '/images/oberit.png',
        title: 'Oberit'
    },
    {
        id: '4',
        imageUrl: '/images/otb.png',
        title: 'On The Ball'
    },
    {
        id: '5',
        imageUrl: '/images/thoduand-greens.png',
        title: 'Thousand Greens'
    },
];

export default function IndustriesPage() {
    // clip path polygon used for a diagonal top. Adjust the first Y (5%) to increase/decrease slope.
    const diagonalClip = {
        WebkitClipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 100%)",
        clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 100%)",
    };

    return (
        <main
            className="min-h-screen bg-black text-white"
            style={{
                fontFamily:
                    'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
            }}
        >
            <div style={{ ["--accent-1" as string]: "#02f8b5", ["--accent-2" as string]: "#1cd9ff" }}>
                {/* HERO */}
                <section className="relative h-[420px] md:h-[520px] lg:h-[620px] overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('images/industries-head.png')`,
                            filter: "brightness(100%)",
                        }}
                        aria-hidden
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

                    <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
                        <div className="w-full md:w-2/3">
                            <p className="text-sm text-slate-300 mb-2">Industries</p>
                            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight" style={{ color: "white" }}>
                                Industries We Serve
                            </h1>
                            <p className="mt-4 text-slate-300 max-w-2xl">
                                Discover how Metro App Coders breakthrough technologies are transforming industries.
                            </p>

                            <div className="mt-6 flex items-center gap-4">
                                <Button
                                    className="rounded-full px-5 py-3 bg-gradient-to-r text-black"
                                    style={{ backgroundImage: `linear-gradient(90deg, var(--accent-1), var(--accent-2))` }}
                                >
                                    Talk to our Experts
                                </Button>
                                <Button variant="outline" className="rounded-full text-black px-4 py-2 border-slate-700">
                                    <Phone className="mr-2 h-4 w-4" /> Contact
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTENT SECTION — pulled up with negative margin to overlap the hero */}
                <section className="mx-auto -mt-16 md:-mt-20 lg:-mt-28 relative z-30 pb-16">
                    {/* The clipped container: background is pure black now; clip-path gives diagonal top. */}
                    <div
                        className="mx-auto shadow-sm overflow-hidden"
                        style={{
                            background: "#000", // pure black background
                            ...diagonalClip,
                        }}
                    >
                        <div className="max-w-6xl m-auto">
                            {/* Increased top padding so internal content sits below the diagonal and isn't hidden */}
                            <div className="px-6 pt-16 md:pt-20 lg:pt-24 pb-12">
                                {/* The overlapping block (no extra bg here since container is black) */}
                                <div className="mb-12 pt-5 py-8 bg-transparent text-center">
                                    <h2 className="text-5xl font-bold text-[var(--accent-1)]">Industry Solutions</h2>
                                    <p className="mt-3 m-auto max-w-[900px] text-lg text-slate-300">
                                        Digitally change your business with support from a trusted Metro App Coders expert who knows all aspects of
                                        different industries and technologies.
                                    </p>
                                </div>

                                {/* Two column: left content, right boxes grid */}
                                <div className="text-center">
                                    <div className="lg:col-span-2">
                                        <h3 className="text-5xl font-bold text-[var(--accent-2)]">Transformational App & Web Development Across Industries</h3>
                                        <p className="mt-4 text-slate-300 text-lg max-w-[900px] m-auto">
                                            Leverage next-gen technologies to build industry leading solutions that offer scalable and transformational user experience seamlessly.
                                            Our software experts have deep domain knowledge and use modern tools to deliver holistic app and web solutions tailored to your needs.
                                        </p>
                                    </div>

                                </div>

                                {/* Domains grid */}
                                <div className="mt-14">
                                    <h4 className="text-xl text-[var(--accent-1)] font-medium mb-6">Domains</h4>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {[
                                            {
                                                title: "Healthcare",
                                                icon: HeartPulse,
                                                desc: "Delivering secure healthcare solutions to improve patient outcomes.",
                                            },
                                            {
                                                title: "E-commerce",
                                                icon: ShoppingCart,
                                                desc: "Robust commerce platforms tailored to your business.",
                                            },
                                            {
                                                title: "Social Media",
                                                icon: Users,
                                                desc: "Engaging social experiences for your users.",
                                            },
                                            {
                                                title: "Business",
                                                icon: Briefcase,
                                                desc: "Enterprise-grade systems for operations and growth.",
                                            },
                                            {
                                                title: "Sports",
                                                icon: Trophy,
                                                desc: "Competitive, real-time sports experiences and tracking.",
                                            },
                                            {
                                                title: "On-Demand",
                                                icon: Clock,
                                                desc: "Fast on-demand services with reliable delivery and tracking.",
                                            },
                                            {
                                                title: "Health & Fitness",
                                                icon: Activity,
                                                desc: "Fitness tracking, coaching and wellness platforms.",
                                            },
                                            {
                                                title: "Travel & Transport",
                                                icon: MapPin,
                                                desc: "Routing, booking and fleet management solutions.",
                                            },
                                            {
                                                title: "Education & E-learning",
                                                icon: BookOpen,
                                                desc: "Interactive learning platforms and course management.",
                                            },
                                        ].map((d) => {
                                            const Icon = d.icon;
                                            return (
                                                <div
                                                    key={d.title}
                                                    className="p-6 rounded-2xl bg-gradient-to-br from-black/40 to-zinc-900 border border-zinc-800"
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <div className="flex-shrink-0">
                                                            {/* gradient square that contains the icon */}
                                                            <div
                                                                className="w-12 h-12 rounded-lg flex items-center justify-center"
                                                                style={{
                                                                    backgroundImage: `linear-gradient(90deg, var(--accent-1), var(--accent-2))`,
                                                                }}
                                                                aria-hidden
                                                            >
                                                                <Icon className="h-6 w-6 text-black" />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <h5 className="font-semibold text-white">{d.title}</h5>
                                                            <p className="text-sm text-slate-300 mt-2">{d.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>


                                {/* Our Work / Success Stories */}
                                <h3 className="text-5xl mt-20 text-center mb-4 font-bold text-[var(--accent-1)]">Success Stories</h3>
                                <p className="mt-4 text-slate-300 text-lg max-w-[900px] m-auto text-center mb-4">
                                    We did it together.....
                                </p>
                                <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-none">
                                    <AutoScrollBar boxes={sampleBoxes} />
                                </div>


                                {/* Testimonial */}
                                <h3 className="text-5xl mt-24 text-center font-bold text-[var(--accent-2)]">What Client Says</h3>
                                <TestimonialCarousel testimonials={sampleTestimonials} />
                            </div>
                        </div>
                    </div>
                </section>


                <div className="border-t border-zinc-800 py-12">
                    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 className="text-xl font-bold">Ready to transform your industry?</h4>
                            <p className="text-slate-300">Talk to our experts and start the journey today.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button style={{ backgroundImage: `linear-gradient(90deg, var(--accent-1), var(--accent-2))` }} className="rounded-full px-6 py-3">Get Started</Button>
                            <Button variant="ghost" className="rounded-full">Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
