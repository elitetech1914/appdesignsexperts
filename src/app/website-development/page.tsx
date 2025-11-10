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

export default function WebsitePage() {
    const [selected, setSelected] = useState<'Frontend' | 'Backend' | 'Frameworks' | 'CMS'>('Frontend');

    const techSets: Record<string, { src: string; name: string }[]> = {
        Frontend: [
            { src: '/images/website-development/html5.svg', name: 'HTML5' },
            { src: '/images/website-development/css3.svg', name: 'CSS3' },
            { src: '/images/website-development/javascript.svg', name: 'JavaScript' },
            { src: '/images/website-development/tech/react.svg', name: 'React' },
        ],
        Backend: [
            { src: '/images/website-development/tech/nodejs.svg', name: 'Node.js' },
            { src: '/images/website-development/php.svg', name: 'PHP' },
            { src: '/images/website-development/python.svg', name: 'Python' },
            { src: '/images/website-development/java.svg', name: 'Java' },
        ],
        Frameworks: [
            { src: '/images/website-development/tech/nextjs.png', name: 'Next.js' },
            { src: '/images/website-development/bootstrap.svg', name: 'Bootstrap' },
            { src: '/images/website-development/angular.svg', name: 'Angular' },
        ],
        CMS: [
            { src: '/images/website-development/wordpress.svg', name: 'WordPress' },
            { src: '/images/website-development/drupal.svg', name: 'Drupal' },
            { src: '/images/website-development/php.svg', name: 'PHP CMS' }, // Reusing PHP icon for custom CMS
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
                                Custom Website Development Services
                            </h1>

                            <p className="mt-6 text-gray-300">
                                Transform your digital presence with our expert web development services. We create modern, responsive, and feature-rich websites that drive growth and enhance user experience.
                            </p>

                            <div className="mt-8 flex items-center justify-center gap-4">
                                <Link
                                    href="/contactus"
                                    className="inline-block rounded-full px-6 py-3 font-semibold text-black"
                                    style={{ background: "linear-gradient(90deg,#1cd9ff,#1cd9ff)" }}
                                >
                                    Start Your Project
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
                            Our Web Development Services
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff] mx-auto rounded-full"></div>
                        <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
                            We offer comprehensive web development solutions tailored to your business needs. From responsive design to complex web applications, our team delivers cutting-edge solutions that drive results.
                        </p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto justify-items-center">
                        {[
                            {
                                title: "Custom Website Development",
                                description: "Build tailored websites that perfectly align with your business objectives and user needs. Our development team creates scalable, secure, and high-performance web solutions."
                            },
                            {
                                title: "E-commerce Development",
                                description: "Create powerful online stores with seamless checkout processes, secure payment gateways, and intuitive product management systems."
                            },
                            {
                                title: "Full-Stack Development",
                                description: "End-to-end web development services covering both front-end and back-end development, ensuring smooth integration and optimal performance."
                            },
                            {
                                title: "Web Application Development",
                                description: "Develop sophisticated web applications with modern frameworks and technologies, focusing on scalability, security, and user experience."
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
                                    onClick={() => setSelected('Frontend')}
                                    className={`border border-[#1cd9ff] ${selected === 'Frontend' ? 'bg-[#1cd9ff] text-black' : 'hover:bg-black hover:text-[#00ab7d]'}`}>
                                    Frontend
                                </Button>
                                <Button
                                    variant="ghost"
                                    onClick={() => setSelected('Backend')}
                                    className={`border border-[#1cd9ff] ${selected === 'Backend' ? 'bg-[#1cd9ff] text-black' : 'hover:bg-black hover:text-[#00ab7d]'}`}>
                                    Backend
                                </Button>
                                <Button
                                    variant="ghost"
                                    onClick={() => setSelected('Frameworks')}
                                    className={`border border-[#1cd9ff] ${selected === 'Frameworks' ? 'bg-[#1cd9ff] text-black' : 'hover:bg-black hover:text-[#00ab7d]'}`}>
                                    Frameworks
                                </Button>
                                <Button
                                    variant="ghost"
                                    onClick={() => setSelected('CMS')}
                                    className={`border border-[#1cd9ff] ${selected === 'CMS' ? 'bg-[#1cd9ff] text-black' : 'hover:bg-black hover:text-[#00ab7d]'}`}>
                                    CMS
                                </Button>
                            </ButtonGroup>
                        </div>
                        {/* icons for the selected set */}
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-12">
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
                            { number: "500+", label: "Websites Launched" },
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
                            Featured web projects we&apos;ve delivered
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center items-center gap-6">
                        {[
                            {
                                name: "E-Commerce Platform",
                                image: "/images/website-development/ecommerce.jpg",
                                category: "E-Commerce",
                            },
                            {
                                name: "Corporate Websites",
                                image: "/images/website-development/sites.PNG",
                                category: "Business",
                            }
                        ].map((project, i) => (
                            <div key={i}>
                                {/* Image block - larger and separate from text */}
                                <Card className="bg-black/50 backdrop-blur border-white/10 max-w-[290px] min-w-[290px]">
                                    <div className="overflow-hidden rounded-lg bg-black">
                                        <Image src={project.image} alt={project.name} width={1600} height={900} className="w-full h-64 sm:h-72 md:h-80 object-cover" style={{ objectPosition: '25% center' }} />
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
                            Partner with us for exceptional web development solutions
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="bg-black/50 backdrop-blur border-white/10 p-6">
                            <h4 className="font-semibold text-[#1cd9ff]">Expert Team</h4>
                            <p className="mt-2 text-sm text-gray-300">Skilled developers with extensive experience in modern web technologies.</p>
                        </Card>

                        <Card className="bg-black/50 backdrop-blur border-white/10 p-6">
                            <h4 className="font-semibold text-[#1cd9ff]">Custom Solutions</h4>
                            <p className="mt-2 text-sm text-gray-300">Tailored web development services that match your specific requirements.</p>
                        </Card>

                        <Card className="bg-black/50 backdrop-blur border-white/10 p-6">
                            <h4 className="font-semibold text-[#1cd9ff]">Timely Delivery</h4>
                            <p className="mt-2 text-sm text-gray-300">Committed to meeting deadlines without compromising on quality.</p>
                        </Card>

                        <Card className="bg-black/50 backdrop-blur border-white/10 p-6">
                            <h4 className="font-semibold text-[#1cd9ff]">Ongoing Support</h4>
                            <p className="mt-2 text-sm text-gray-300">Comprehensive maintenance and support after launch.</p>
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
                                q: "What technologies do you use for web development?",
                                a: "We use modern web technologies including React, Next.js, Node.js, and other cutting-edge frameworks to build robust and scalable web solutions. Our tech stack is chosen based on your specific project requirements."
                            },
                            {
                                q: "How long does it take to build a website?",
                                a: "The timeline varies depending on the complexity and requirements of your project. A simple website might take 4-6 weeks, while complex web applications can take 3-6 months. We provide detailed timelines after understanding your specific needs."
                            },
                            {
                                q: "Do you provide ongoing maintenance and support?",
                                a: "Yes, we offer comprehensive maintenance and support packages to ensure your website remains secure, up-to-date, and performs optimally. Our team is available for updates, security patches, and technical support."
                            },
                            {
                                q: "Can you help with SEO and digital marketing?",
                                a: "Absolutely! We build websites with SEO best practices in mind and can provide additional digital marketing services to help improve your online visibility and drive traffic to your website."
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
                        <h4 className="text-2xl font-bold" style={{ color: "#1cd9ff" }}>Let&apos;s work together</h4>
                        <p className="mt-2 text-gray-300">Get a free consultation to scope your web development project.</p>
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
