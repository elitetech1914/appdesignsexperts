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
      { src: '/images/ios/swift.svg', name: 'Swift' },
      { src: '/images/ios/objective.svg', name: 'Objective-C' },
      { src: '/images/ios/xcode.svg', name: 'Xcode' },
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
                iOS App Development Company
              </h1>

              <p className="mt-6 text-gray-300">
                We are the go-to iOS app development company for businesses belonging to multiple business sizes and across the globe. We engineer feature-rich and appealing iPhone apps for both established enterprises and startups.
              </p>

              <div className="mt-8 flex items-center justify-center gap-4">
                <Link
                  href="/contactus"
                  className="inline-block rounded-full px-6 py-3 font-semibold text-black bg-gradient-to-r from-[#1cd9ff] to-[#fc00ff]"
                >
                  Hire iOS Developers
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
              iOS App Development Services
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff] mx-auto rounded-full"></div>
            <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
              Wr are a iPhone app development company that carries an extensive expertise around building iOS solutions that help businesses meet their ROI targets. We know the nitty-gritties of integrating next-gen technology stack with your product in a way that ensures your business is prepared for the future.
              Our team of iOS app developers are subject matter experts of building robust software that runs seamlessly across different Apple platforms and OS versions. We combine innovation with your customer needs perfectly, giving your customers an unmatched digital experience. We are the digital service provider that delivers change-proof iOS app development services.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto justify-items-center">
            {[
              {
                title: "iOS app development consultation",
                description: "The competition in the iPhone space is all time high and so is the demand for new applications. Amidst the new growing demand from digital consumers, it’s important for businesses to launch the right product. Our team of business consultants help you with that."
              },
              {
                title: "iPhone app UI/UX",
                description: "Our team of iPhone UI/UX designers are a team of experts who don’t just understand your customers’ wants inside out but also your business objectives. We combine this knowledge to design every individual UI element and the UX journey."
              },
              {
                title: "Custom iOS app development",
                description: "We are the iPad app development company that has worked around every Apple device right from watches to smartphones and AppleTVs. Our team of developers use the best technology stack and mix it with the market knowledge to build you a solution that the world trusts."
              },
              {
                title: "iOS software testing",
                description: "The secret of Apple's success lies in the unhackable structure that the operating system promises. iPhone apps development comes with the toolset that is required to make it hack-proof and our team of QA experts know how to apply those tech stack in the best manner."
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
                name: "Monogamish",
                image: "/images/ios/portfolio/monogamish.png",
                category: "Social Networking",
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
                q: "How do you ensure the confidentiality of your clients and their App Idea?",
                a: "Every time a client comes to us with their exclusive out-of-the-box idea for app development, they sign a confidentiality agreement. This non-disclosure agreement is proof of trust between us and the client. This NDA agreement assures that your idea and creations if any are safely protected and kept exclusively yours only.We take your trust seriously and we want you to see how seriously we take our work."
              },
              {
                q: "What list of programming languages do you use for iPad and iPhone app development?",
                a: "We are the premier mobile development company with a proven track record of creating elegant and functional apps and custom software. Our native iOS app developers have received training in Objective C and Swift programming languages. We employ React Native and Flutter for iOS apps in our cross-platform app development."
              },
              {
                q: "How can I benefit from outsourcing my iOS App needs from you?",
                a: "We have a team of professionals with years of experience in developing, designing, and deploying numerous iPhone applications.Reach new levels of productivity, gain access to quality services, cost-effective pricing, fast development times, flexible working hours, and assured quality services with our expert app developers at affordable prices"
              },
              {
                q: "Do you update your clients throughout the project?",
                a: "Our iOS app development process is collaborative, one covering all phases of the product life cycle while working closely with our clients at each stage. We communicate every detail with utmost transparency at every stage of product development and make sure that the client stays well informed about the process.Our objective is to make sure our clients stay informed about what we're doing at each stage through clear communication, for a successful end result."
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

