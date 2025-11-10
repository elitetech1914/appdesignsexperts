"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import OurProcess from "@/components/OurProcesss";

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

export default function AndroidPage() {

    const [selected, setSelected] = useState<'Technologies'>('Technologies');

    const techSets: Record<string, { src: string; name: string }[]> = {
        Technologies: [
            { src: '/images/flutter-app-development/dart.svg', name: 'Dart' },
            { src: '/images/flutter-app-development/mongodb.svg', name: 'MongoDB' },
            { src: '/images/flutter-app-development/dotnet.svg', name: '.NET' },
        ],
    };

    return (
        <div className="min-h-screen bg-black text-white m-8">

            {/* HERO */}
            <section className="relative overflow-hidden py-24">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center gap-6 relative z-10">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl sm:text-6xl font-bold leading-tight" style={{ color: "#1cd9ff" }}>
                                Elevate your brand&apos;s visibility with Flutter App Development Company
                            </h1>

                            <p className="mt-6 text-gray-300">
                                We are a reputable provider of Flutter app development services, dominating the market with the right cross-platform capabilities. Our agile developers have created 300+ apps to date, and they have proven to be feature-rich and quality-focused for businesses. Join us today to begin your digital journey!
                            </p>

                            <div className="mt-8 flex items-center justify-center gap-4">
                                <Link
                                    href="/contactus"
                                    className="inline-block rounded-full px-6 py-3 font-semibold text-black"
                                    style={{ background: "linear-gradient(90deg,#1cd9ff,#1cd9ff)" }}
                                >
                                    Hire Flutter App Developers
                                </Link>

                                <Link href="#services" className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/10 text-white hover:bg-white/5 transition-colors">
                                    Learn more
                                </Link>
                            </div>

                            <div className="mt-10 flex items-center justify-center gap-4">
                                <Card className="p-4 w-32 bg-black/50 backdrop-blur border-white/10 text-center">
                                    <Image src="/images/android/features/cost-effective.png" alt="Cost Effective" width={48} height={48} className="mx-auto" />
                                    <p className="text-sm text-white">Cost <br />Effective</p>
                                </Card>

                                <Card className="p-4 w-32 bg-black/50 backdrop-blur border-white/10 text-center">
                                    <Image src="/images/android/features/high-performance.png" alt="High Performance" width={48} height={48} className="mx-auto" />
                                    <p className="text-sm text-white">High <br />Performance</p>
                                </Card>

                                <Card className="p-4 w-32 bg-black/50 backdrop-blur border-white/10 text-center">
                                    <Image src="/images/android/features/web-support.png" alt="Web Support" width={48} height={48} className="mx-auto" />
                                    <p className="text-sm text-white">Web <br />Support</p>
                                </Card>

                                <Card className="p-4 w-32 bg-black/50 backdrop-blur border-white/10 text-center">
                                    <Image src="/images/android/features/open-source.png" alt="Open Source" width={48} height={48} className="mx-auto" />
                                    <p className="text-sm text-white">Open <br />Source</p>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES / TECHNOLOGIES */}
            <section id="services" className="py-16 border-t border-white/6">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
                    <div className="text-center mb-16 mt-8">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff] bg-clip-text text-transparent mb-6">
                            Empower your business with our Flutter App Development services
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff] mx-auto rounded-full"></div>
                        <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
                            We are a leading flutter app development company that holds an empowering team of Flutter app developers to build robust and feature-rich applications to inspire not only our clients but also investors. We work on industry niches and are always thrilled to take up versatile projects. Hire our dedicated flutter developers to create a cross-platform app that successfully transforms your digital presence to full throttle.
                        </p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto justify-items-center">
                        {[
                            {
                                title: "Flutter App Development Consultation",
                                description: "To get going on the correct path is an important aspect. Our Flutter app developers can help you analyze your present setup and build tailored flutter apps while using Flutter consulting solutions for an innovative business strategy."
                            },
                            {
                                title: "Flutter App UI/UX",
                                description: "Our Flutter app developers strive to deliver robust, quick-to-design apps. We can help develop Flutter apps that wow users with stunning UI and seamless UX while being easy to use and maintain."
                            },
                            {
                                title: "Custom Flutter App Development",
                                description: "To achieve outstanding results, work with our flutter app developers. We approach every project with a personalized and case-by-case basis. We are renowned for its professionalism, commitment, and tailored solutions that address certain business needs."
                            },
                            {
                                title: "Flutter Software Testing",
                                description: "Being a leading provider of flutter app development services, we make sure that your application is created to be bug-free and resilient to hackers. Our team of QA specialists ensures that the software is still change-proof regardless of market trends."
                            }
                        ].map((service, idx) => (
                            <Card key={idx} className="p-4 bg-black backdrop-blur border-white/10 hover:border-[#1cd9ff] transition-colors mx-auto text-center">
                                <h4 className="font-semibold text-[#1cd9ff]">{service.title}</h4>
                                <p className="text-sm text-gray-300">{service.description}</p>
                            </Card>
                        ))}
                    </div>



                    <div className="mt-12">
                        <div className="flex items-center justify-center gap-8">
                            <ButtonGroup>
                                <Button
                                    variant="ghost"
                                    onClick={() => setSelected('Technologies')}
                                    className={`border border-[#1cd9ff] ${selected === 'Technologies' ? 'bg-[#1cd9ff] text-black' : 'hover:bg-black hover:text-[#00ab7d]'}`}>
                                    Technologies
                                </Button>
                            </ButtonGroup>
                        </div>
                        {/* icons for the selected set */}
                        <div className="mt-6 flex flex-wrap justify-center gap-12">
                            {(techSets[selected] || []).map((tech, idx) => (
                                <div key={idx} className="group hover:border-[#1cd9ff]/50 transition-colors">
                                    <div className="flex flex-col items-center justify-center p-4 bg-black">
                                        <Image src={tech.src} alt={tech.name} width={80} height={40} className="group-hover:scale-110 transition-transform" />
                                        <p className="mt-2 text-xs text-gray-400 group-hover:text-[#1cd9ff]">{tech.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR NUMBERS */}
            <section className="py-16 bg-gradient-to-r from-black via-[#02121a] to-black">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff] bg-clip-text text-transparent mb-6">
                            Our Numbers
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff] mx-auto rounded-full"></div>
                        <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
                            Results that speak for themselves
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { number: "200+", label: "Apps Delivered" },
                            { number: "95%", label: "Client Satisfaction" },
                            { number: "80%", label: "Return Clients" },
                            { number: "50+", label: "Expert Developers" }
                        ].map((stat, idx) => (
                            <Card key={idx} className="p-6 bg-black/50 backdrop-blur border-white/10 text-center">
                                <h4 className="text-3xl font-bold" style={{ color: "#1cd9ff" }}>{stat.number}</h4>
                                <p className="text-gray-300">{stat.label}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section>
                <OurProcess />
            </section>

            {/* PORTFOLIO */}
            <section className="py-16 border-t border-white/6 bg-black">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff] bg-clip-text text-transparent mb-6">
                            Portfolio
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff] mx-auto rounded-full"></div>
                        <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
                            Selected Android apps we built for clients.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center items-center gap-6">
                        {[
                            {
                                name: "MyShift",
                                image: "/images/flutter-app-development/myshift.png",
                                category: "Business"
                            },
                            {
                                name: "Gynios",
                                image: "/images/flutter-app-development/gynios.png",
                                category: "E-Commerce",
                            }
                        ].map((project, i) => (
                            <div key={i}>
                                {/* Image block - larger and separate from text */}
                                <Card className="bg-black/50 backdrop-blur border-white/10 max-w-[290px]">
                                    <div className="overflow-hidden rounded-lg bg-black">
                                        <Image src={project.image} alt={project.name} width={1600} height={900} className="w-full h-64 sm:h-72 md:h-80 object-cover" />
                                    </div>
                                    {/* Text card separate from image */}
                                    <div className="px-4 pb-4 h-28 flex flex-col gap-2">
                                        <div>
                                            <h5 className="font-semibold text-[#1cd9ff]">{project.name}</h5>
                                            <p className="text-sm text-gray-300">{project.category}</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Link
                            href="/portfolio"
                            className="inline-block rounded-full px-6 py-3 font-semibold text-black"
                            style={{ background: "linear-gradient(90deg,#1cd9ff,#1cd9ff)" }}
                        >
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-16 border-t border-white/6">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff] bg-clip-text text-transparent mb-6">
                            Why Choose Us
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff] mx-auto rounded-full"></div>
                        <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
                            Expertise, commitment and proven results make us your ideal Android development partner.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="bg-black/50 backdrop-blur border-white/10 p-6">
                            <h4 className="font-semibold text-[#1cd9ff]">Client satisfaction</h4>
                            <p className="mt-2 text-sm text-gray-300">80% return client rate with long-lasting partnerships built on trust and results.</p>
                        </Card>

                        <Card className="bg-black/50 backdrop-blur border-white/10 p-6">
                            <h4 className="font-semibold text-[#1cd9ff]">Hack-proof software</h4>
                            <p className="mt-2 text-sm text-gray-300">Robust security measures and best practices to protect your app and users.</p>
                        </Card>

                        <Card className="bg-black/50 backdrop-blur border-white/10 p-6">
                            <h4 className="font-semibold text-[#1cd9ff]">On-time delivery</h4>
                            <p className="mt-2 text-sm text-gray-300">Committed to timelines with transparent progress tracking and communication.</p>
                        </Card>

                        <Card className="bg-black/50 backdrop-blur border-white/10 p-6">
                            <h4 className="font-semibold text-[#1cd9ff]">Marketing support</h4>
                            <p className="mt-2 text-sm text-gray-300">End-to-end assistance from development to market success and growth.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-16 bg-black/50">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff] bg-clip-text text-transparent mb-6">
                            What Clients Say
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff] mx-auto rounded-full"></div>
                        <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
                            Trusted by leading companies worldwide
                        </p>
                    </div>

                    <TestimonialCarousel testimonials={sampleTestimonials} />
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <h3 className="text-xl font-semibold">FAQs</h3>
                    <div className="mt-6 space-y-4">
                        {[
                            {
                                q: "What potential benefits does outsourcing Flutter app development offer?",
                                a: "The following are some of the main advantages of outsourcing the development of your Flutter app to a nation like India:Adaptable to working hours of your time zoneShorter development periodsCutting- edge technologiesAn improved understanding of various platformsLow cost of development and operationHaving access to seasoned developersQuality services guaranteed"
                            },
                        {
                            q: "Can we use flutter for Web development?",
                            a: "Flutter enables you to build effective and interesting online apps. For static internet pages, however, it is not suitable. It works perfectly for interactive single-page applications with lots of UI components and animations. For static website pages with a lot of text, a higher standard website development process may yield better results, faster load times, and more manageable maintenance."
                            },
                        {
                            q: "How much does it cost to build a Flutter application?",
                            a: "Flutter app development might cost you anything from $25,000 to $200,000. The factors that decide the overall Flutter App Development cost are -The Complexity of the AppHardware structureLevel of features involvedIn Design and Development, etc.Keep in mind, though, that this is merely an approximate estimate based on industry-standard development practices."
                            }
                        ].map((faq, i) => (
                        <Card key={i} className="bg-black/50 backdrop-blur border-white/10 overflow-hidden hover:border-[#1cd9ff]/50 transition-colors">
                            <details className="p-4">
                                <summary className="cursor-pointer font-medium text-[#1cd9ff]">{faq.q}</summary>
                                <div className="mt-4 pl-4 text-gray-300 border-l-2 border-[#1cd9ff]">{faq.a}</div>
                            </details>
                        </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="relative py-12 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                    <div className="text-center md:text-left">
                        <h4 className="text-2xl font-bold" style={{ color: "#1cd9ff" }}>Lets work together</h4>
                        <p className="mt-2 text-gray-300">Get a free consultation to scope your Android app project.</p>
                    </div>

                    <div>
                        <Link
                            href="/contactus"
                            className="inline-block rounded-full px-6 py-3 font-semibold text-black"
                            style={{ background: "linear-gradient(90deg,#1cd9ff,#1cd9ff)" }}
                        >
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

