"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function AndroidPage() {
	return (
		<div className="min-h-screen bg-black text-white m-8">
			
			{/* HERO */}
			<section className="relative overflow-hidden py-24">
				<div className="max-w-6xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
						<div>
							<h1 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ color: "#02f8b5" }}>
								Android App Development Company
							</h1>

							<p className="mt-6 text-gray-300 max-w-xl">
								Build scalable, secure and high-performance Android apps with our experienced team. From MVPs to
								enterprise-grade apps — we design, develop and ship delightful mobile experiences.
							</p>

							<div className="mt-8 flex flex-wrap gap-3">
								<Link href="#contact">
									<ShimmerButton className="rounded-full px-8">
										Hire Android Developers
									</ShimmerButton>
								</Link>

								<Link href="#services" className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/10 text-white hover:bg-white/5 transition-colors">
									Learn more
								</Link>
							</div>

							<div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
								<Card className="p-4 bg-black/50 backdrop-blur border-white/10 text-center">
									<Image src="/images/android/features/cost-effective.png" alt="Cost Effective" width={48} height={48} className="mx-auto" />
									<p className="mt-2 text-sm text-white">Cost Effective</p>
								</Card>

								<Card className="p-4 bg-black/50 backdrop-blur border-white/10 text-center">
									<Image src="/images/android/features/high-performance.png" alt="High Performance" width={48} height={48} className="mx-auto" />
									<p className="mt-2 text-sm text-white">High Performance</p>
								</Card>

								<Card className="p-4 bg-black/50 backdrop-blur border-white/10 text-center">
									<Image src="/images/android/features/web-support.png" alt="Web Support" width={48} height={48} className="mx-auto" />
									<p className="mt-2 text-sm text-white">Web Support</p>
								</Card>

								<Card className="p-4 bg-black/50 backdrop-blur border-white/10 text-center">
									<Image src="/images/android/features/open-source.png" alt="Open Source" width={48} height={48} className="mx-auto" />
									<p className="mt-2 text-sm text-white">Open Source</p>
								</Card>
							</div>
						</div>

						<div className="order-first lg:order-last">
							<div className="w-full aspect-[4/3] rounded-2xl flex items-center justify-center">
								<Image src="/images/android-app-dev.png" alt="mobile gif" width={560} height={420} className="rounded-xl" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES / TECHNOLOGIES */}
			<section id="services" className="py-16 border-t border-white/6">
				<div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
					<h2 className="text-2xl font-semibold" style={{ color: "#1cd9ff" }}>
						Full-Fledged Android App Development Services
					</h2>

					<p className="mt-4 text-gray-300 max-w-3xl mx-auto">
						We provide end-to-end Android development: consultation, UI/UX, custom native apps, cross-platform solutions and
						testing.
					</p>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto justify-items-center">
						{[
							{
								title: "Android app development consultation",
								description: "Expert guidance on technology stack, architecture, and development roadmap"
							},
							{
								title: "Android app UI/UX",
								description: "User-centered design with modern Material Design principles"
							},
							{
								title: "Custom android app development",
								description: "Native and cross-platform solutions tailored to your needs"
							},
							{
								title: "Android software testing",
								description: "Comprehensive QA including functional, performance, and security testing"
							}
						].map((service, idx) => (
								<Card key={idx} className="p-4 bg-black backdrop-blur border-white/10 hover:border-[#02f8b5] transition-colors mx-auto text-center">
									<h4 className="font-semibold text-[#02f8b5]">{service.title}</h4>
									<p className="mt-2 text-sm text-gray-300">{service.description}</p>
								</Card>
							))}
					</div>

					<div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
						{[
							{ src: "/images/android/tech/kotlin.svg", name: "Kotlin/Java" },
							{ src: "/images/android/tech/xnative.svg", name: "Xamarin" },
							{ src: "/images/android/tech/cordova.svg", name: "Cordova" },
							{ src: "/images/android/tech/iconic.svg", name: "Ionic" },
							{ src: "/images/android/tech/react.svg", name: "React Native" },
						].map((tech, idx) => (
							<Card key={idx} className="group hover:border-[#02f8b5]/50 transition-colors">
								<div className="flex flex-col items-center justify-center p-4 bg-black">
									<Image src={tech.src} alt={tech.name} width={80} height={40} className="group-hover:scale-110 transition-transform" />
									<p className="mt-2 text-xs text-gray-400 group-hover:text-[#02f8b5]">{tech.name}</p>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* OUR NUMBERS */}
			<section className="py-16 bg-gradient-to-r from-black via-[#02121a] to-black">
				<div className="max-w-6xl mx-auto px-6 lg:px-8">
					<h3 className="text-xl font-semibold text-center">Our Numbers</h3>
					<p className="mt-3 text-gray-300 text-center">Results that speak for themselves</p>

					<div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{ number: "200+", label: "Apps Delivered" },
							{ number: "95%", label: "Client Satisfaction" },
							{ number: "80%", label: "Return Clients" },
							{ number: "50+", label: "Expert Developers" }
						].map((stat, idx) => (
							<Card key={idx} className="p-6 bg-black/50 backdrop-blur border-white/10 text-center">
								<h4 className="text-3xl font-bold" style={{ color: "#02f8b5" }}>{stat.number}</h4>
								<p className="mt-2 text-gray-300">{stat.label}</p>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* PROCESS */}
			<section className="py-16">
				<div className="max-w-6xl mx-auto px-6 lg:px-8">
					<h3 className="text-xl font-semibold">Our Process</h3>
					<p className="mt-3 text-gray-300 max-w-3xl">
						A pragmatic and iterative approach: discovery, design, development, QA, launch and continuous improvement.
					</p>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
						{[
							{
								title: "Discovery",
								description: "We analyze users, markets, and objectives to define the right product strategy.",
								step: "01"
							},
							{
								title: "Design",
								description: "User-centered design approach with interactive prototypes for rapid validation.",
								step: "02"
							},
							{
								title: "Development",
								description: "Agile development with modern tools and best practices for quality code.",
								step: "03"
							},
							{
								title: "Testing & Launch",
								description: "Comprehensive QA, performance optimization, and successful deployment.",
								step: "04"
							}
						].map((step, idx) => (
							<Card key={idx} className="group relative p-6 bg-black/50 backdrop-blur border-white/10 hover:border-[#02f8b5] transition-all duration-300">
								<div className="absolute -top-4 left-6 px-2 py-1 bg-gradient-to-r from-[#02f8b5] to-[#1cd9ff] rounded text-black text-sm font-bold">
									{step.step}
								</div>
								<h4 className="font-semibold text-[#02f8b5] mt-2">{step.title}</h4>
								<p className="mt-2 text-sm text-gray-300">{step.description}</p>
								<div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#02f8b5] to-[#1cd9ff] transition-all duration-300" />
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* PORTFOLIO */}
			<section className="py-16 border-t border-white/6 bg-black">
				<div className="max-w-6xl mx-auto px-6 lg:px-8">
					<h3 className="text-xl font-semibold">Portfolio</h3>
					<p className="mt-3 text-gray-300">Selected Android apps we built for clients.</p>

					<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
						{[
							{
								name: "AKTV",
								image: "/images/android/portfolio/aktv.png",
								category: "Health & Fitness",
								description: "A comprehensive fitness tracking and workout planning application"
							},
							{
								name: "Oberit",
								image: "/images/android/portfolio/oberit.png",
								category: "Health & Fitness",
								description: "Personalized nutrition and meal planning platform"
							}
						].map((project, i) => (
							<div key={i} className="group">
								{/* Image block - larger and separate from text */}
								<div className="overflow-hidden rounded-lg bg-black">
									<Image src={project.image} alt={project.name} width={1600} height={900} className="w-full h-64 sm:h-72 md:h-80 object-cover" />
								</div>
								{/* Text card separate from image */}
								<Card className="mt-3 p-4 bg-black/50 backdrop-blur border-white/10">
									<h5 className="font-semibold text-[#02f8b5]">{project.name}</h5>
									<p className="text-sm text-gray-300">{project.category}</p>
									<p className="mt-2 text-sm text-gray-300">{project.description}</p>
								</Card>
							</div>
						))}
					</div>
					<div className="mt-8 text-center">
						<Link href="/portfolio">
							<ShimmerButton className="px-8">
								View All Projects
							</ShimmerButton>
						</Link>
					</div>
				</div>
			</section>

			{/* WHY CHOOSE US */}
			<section className="py-16 border-t border-white/6">
				<div className="max-w-6xl mx-auto px-6 lg:px-8">
					<h3 className="text-xl font-semibold">Why Choose Us</h3>
					<p className="mt-3 text-gray-300">Expertise, commitment and proven results make us your ideal Android development partner.</p>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<Card className="bg-black/50 backdrop-blur border-white/10 p-6">
							<h4 className="font-semibold text-[#02f8b5]">Client satisfaction</h4>
							<p className="mt-2 text-sm text-gray-300">80% return client rate with long-lasting partnerships built on trust and results.</p>
						</Card>

						<Card className="bg-black/50 backdrop-blur border-white/10 p-6">
							<h4 className="font-semibold text-[#02f8b5]">Hack-proof software</h4>
							<p className="mt-2 text-sm text-gray-300">Robust security measures and best practices to protect your app and users.</p>
						</Card>

						<Card className="bg-black/50 backdrop-blur border-white/10 p-6">
							<h4 className="font-semibold text-[#02f8b5]">On-time delivery</h4>
							<p className="mt-2 text-sm text-gray-300">Committed to timelines with transparent progress tracking and communication.</p>
						</Card>

						<Card className="bg-black/50 backdrop-blur border-white/10 p-6">
							<h4 className="font-semibold text-[#02f8b5]">Marketing support</h4>
							<p className="mt-2 text-sm text-gray-300">End-to-end assistance from development to market success and growth.</p>
						</Card>
					</div>
				</div>
			</section>

			{/* TESTIMONIALS */}
			<section className="py-16 bg-black/50">
				<div className="max-w-6xl mx-auto px-6 lg:px-8">
					<h3 className="text-xl font-semibold text-center">What Clients Say</h3>
					<p className="mt-3 text-gray-300 text-center">Trusted by leading companies worldwide</p>

					<div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								name: "John D.",
								role: "Project Manager at Uber",
								review: "They are very good at execution and delivered our project on time.",
								rating: 5
							},
							{
								name: "Sarah M.",
								role: "CTO at HealthTech",
								review: "Outstanding Android development team. They understood our requirements perfectly.",
								rating: 5
							},
							{
								name: "Michael R.",
								role: "Founder at TechStartup",
								review: "Professional, responsive and delivered high-quality code.",
								rating: 5
							}
						].map((testimonial, idx) => (
							<Card key={idx} className="p-6 bg-black/50 backdrop-blur border-white/10">
								<div className="flex items-center gap-4 mb-4">
									<div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#02f8b5] to-[#1cd9ff] flex items-center justify-center text-black font-bold">
										{testimonial.name[0]}
									</div>
									<div>
										<h4 className="font-semibold">{testimonial.name}</h4>
										<p className="text-sm text-gray-400">{testimonial.role}</p>
									</div>
								</div>
								<p className="text-gray-300">{testimonial.review}</p>
								<div className="mt-4 flex gap-1">
									{Array.from({ length: testimonial.rating }).map((_, i) => (
										<span key={i} className="text-[#02f8b5]">★</span>
									))}
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="py-16">
				<div className="max-w-6xl mx-auto px-6 lg:px-8">
					  <h3 className="text-xl font-semibold">FAQs</h3>
					<div className="mt-6 space-y-4">
						{[
							{
								q: "What does an Android app development company do?",
								a: "An Android app development company specializes in designing, developing, testing, and deploying mobile applications for the Android platform. We handle everything from initial concept and UI/UX design to development, testing, deployment, and post-launch maintenance."
							},
							{
								q: "How much does it cost to make an Android App?",
								a: "The cost varies depending on app complexity, features, and requirements. Simple apps might start from $15,000, while complex enterprise solutions can range from $50,000 to $200,000+. We provide detailed quotes after understanding your specific needs."
							},
							{
								q: "Which tools and technologies do you use?",
								a: "We use modern Android development tools including Kotlin/Java, Android Studio, Flutter, React Native, and various SDKs. Our tech stack is chosen based on project requirements to ensure optimal performance and maintainability."
							},
							{
								q: "Does Meta App Coders offer a free consultation or quote?",
								a: "Yes, we offer free initial consultations to discuss your project requirements, provide technical insights, and develop a preliminary project plan. This helps us provide accurate quotes and timelines."
							}
						].map((faq, i) => (
							<Card key={i} className="bg-black/50 backdrop-blur border-white/10 overflow-hidden hover:border-[#02f8b5]/50 transition-colors">
								<details className="p-4">
									<summary className="cursor-pointer font-medium text-[#1cd9ff]">{faq.q}</summary>
									<div className="mt-4 pl-4 text-gray-300 border-l-2 border-[#02f8b5]">{faq.a}</div>
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
						<h4 className="text-2xl font-bold" style={{ color: "#02f8b5" }}>Lets work together</h4>
						<p className="mt-2 text-gray-300">Get a free consultation to scope your Android app project.</p>
					</div>

					<div>
						<Link href="/contactus">
							<ShimmerButton className="px-8 py-3">
								Start Your Project
							</ShimmerButton>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

