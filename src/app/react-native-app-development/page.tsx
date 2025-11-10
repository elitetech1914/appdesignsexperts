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
            { src: '/images/react-native-app-development/javascript.svg', name: 'JavaScript' },
            { src: '/images/react-native-app-development/redux.svg', name: 'Redux' },
            { src: '/images/react-native-app-development/firebase.svg', name: 'Firebase' },
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
                                Enhance Your Market Presence With React Native App Development Company
                            </h1>

                            <p className="mt-6 text-gray-300">
                                Build an app that delights users with a feature-rich and branded-looking mobile app for both iOS and Android platform.., a React Native app development company, gives perfect app development solutions that not only save time and cost of app development but also tune your business into a successful app faster.
                            </p>

                            <div className="mt-8 flex items-center justify-center gap-4">
                                <Link
                                    href="/contactus"
                                    className="inline-block rounded-full px-6 py-3 font-semibold text-black bg-gradient-to-r from-[#1cd9ff] to-[#fc00ff]"
                                >
                                    Hire React Native App Developers
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
                            Leverage Our React Native App Development Services
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff] mx-auto rounded-full"></div>
                        <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
                            Our React Native app development team delivers high-performing mobile apps that bring your business ideas to life. From customization to consulting and support, We offer the whole spectrum of React Native app development services. We also take care of the design, development, and deployment of your React Native app backed by high-growth engines to ensure your app is ready to escalate in the market from day one.
                        </p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto justify-items-center">
                        {[
                            {
                                title: "React Native App Consultation & Support",
                                description: "Developing a React Native app comes with countless advantages and complications as well. Therefore, to allow you a seamless ride our React Native app services ensure that they understand your product expectations and offer you the best-fitting solution that aligns with your business mission and vision."
                            },
                            {
                                title: "React Native for Android & iOS App Development",
                                description: "Leverage our end-to-end React Native mobile app development solutions for both iOS and Android platforms. Hire dedicated React Native app developers to build apps with the latest technology stack while ensuring that your app runs perfectly on the operating system simultaneously."
                            },
                            {
                                title: "Cross-Platform Migration Services",
                                description: "With our expertise in migration, we assist you in converting your present iOS or Android application into a React Native application. As we expand your app to different mobile platforms, the web, and smart devices, our React Native app development company deployment professionals make sure that your users' experience is flawless at all times."
                            },
                            {
                                title: "React Native UI/UX services",
                                description: "We create the entire React Native library to offer the most engaging and user-centric experience for your business applications. We are driven to deliver a real-time experience across a multitude of devices to ensure UI/UX gaps are filled."
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
                                name: "AKTV",
                                image: "/images/android/portfolio/aktv.png",
                                category: "Health & Fitness"
                            },
                            {
                                name: "Oberit",
                                image: "/images/android/portfolio/oberit.png",
                                category: "Health & Fitness",
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
                            className="inline-block rounded-full px-6 py-3 font-semibold text-black bg-gradient-to-r from-[#1cd9ff] to-[#fc00ff]"
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
                                q: "What is React Native used for?",
                                a: "React Native enables developers to create cross-platform applications, sharing code between iOS and Android. With native-like performance and access to device features, React Native app development services is ideal for efficient app development."
                            },
                            {
                                q: "Why choose React Native for app development?",
                                a: "While there are multiple reasons to choose React Native framework for app development a few of the critical ones are: It enables Hot Reloading feasibility, Allows developers to build apps with just a single code-base, backed by Facebook which means it is a trustable and reliable framework."
                            },
                            {
                                q: "Why is React Native so popular among other app development frameworks?",
                                a: "The reason why React Native is gaining popularity among developers and its competitors is that the platform caters to both iOS and Android development for mobile app developers, this means you can code an app in JavaScript once and use it for both platforms. Also, React Native gives similar looks and feels to native apps making it a perfect choice for app development."
                            },
                            {
                                q: "What are the benefits of choosing React Native app development company?",
                                a: "Understanding React Native framework might be complicated if you are a newbie, therefore having a React Native app development company can help you in knowing the various aspects of app development and also provide you with the best mobile app development solutions."
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
                            className="inline-block rounded-full px-6 py-3 font-semibold text-black bg-gradient-to-r from-[#1cd9ff] to-[#fc00ff]"
                        >
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

