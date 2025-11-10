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

	const [selected, setSelected] = useState<'frontend' | 'frameworks' | 'platforms'>('frontend');

	const techSets: Record<string, { src: string; name: string }[]> = {
		frontend: [
			// Use all icons from the `mobile frontend` folder
			{ src: '/images/android/tech/mobile-frontend/cordova.svg', name: 'Cordova' },
			{ src: '/images/android/tech/mobile-frontend/iconic.svg', name: 'Ionic' },
			{ src: '/images/android/tech/mobile-frontend/kotlin.svg', name: 'Kotlin/Java' },
			{ src: '/images/android/tech/mobile-frontend/react.svg', name: 'React Native' },
			{ src: '/images/android/tech/mobile-frontend/xnative.svg', name: 'Xamarin' },
		],
		frameworks: [
			{ src: '/images/android/tech/frameworks/androidauto.svg', name: 'Android Auto' },
			{ src: '/images/android/tech/frameworks/androidstudio.svg', name: 'Android Studio' },
			{ src: '/images/android/tech/frameworks/arcore.svg', name: 'ARCore' },
			{ src: '/images/android/tech/frameworks/googleassistntsdk.svg', name: 'Google Assistant SDK' },
			{ src: '/images/android/tech/frameworks/googlefit.svg', name: 'Google Fit' },
			{ src: '/images/android/tech/frameworks/opengl.svg', name: 'OpenGL' },
		],
		platforms: [
			{ src: '/images/android/tech/platforms/aws.svg', name: 'AWS' },
			{ src: '/images/android/tech/platforms/azure.svg', name: 'Azure' },
			{ src: '/images/android/tech/platforms/cicd.svg', name: 'AppCenter for CI/CD' },
			{ src: '/images/android/tech/platforms/firebase.svg', name: 'Firebase' },
			{ src: '/images/android/tech/platforms/googlecloud.svg', name: 'Google Cloud' },
			{ src: '/images/android/tech/platforms/kubernetes.svg', name: 'Kubernetes' },
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
								Android App Development Company
							</h1>

							<p className="mt-6 text-gray-300">
								Looking to build a successful Android application for your business? Need a scalable and high-performing solution? Look no further! We guarantee unique and fully capable Android app development services that not only digitally transform your business but also let you stay ahead of your competition.
							</p>

							<div className="mt-8 flex items-center justify-center gap-4">
								<Link
									href="/contactus"
									className="inline-block rounded-full px-6 py-3 font-semibold text-black bg-gradient-to-r from-[#1cd9ff] to-[#fc00ff]"
								>
									Hire Android Developers
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
							Full-Fledged Android App Development Services
						</h1>
						<div className="w-24 h-1 bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff] mx-auto rounded-full"></div>
						<p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
							As a leading Android app development company, we understand the importance of mobile apps in today&apos;s digital world. Our team of experienced developers, designers, and strategists is here to help turn your ideas into reality. We specialize in creating custom Android apps that are not only user-friendly but also deliver a seamless user experience.
							Whether you have a complex application to build or a simple MVP android app, we are well-versed in providing the ultimate solutions with robust and innovative technologies while also ensuring that our team and you are on the same page by effectively communicating at every stage of the development.
						</p>
					</div>
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto justify-items-center">
						{[
							{
								title: "Android app development consultation",
								description: "Android apps have their user base and set of client requirements. We assist companies in integrating their concepts with these standards and an Android-specific customer base. Our Android app developers assist you in determining the ideal Android platform and methods for dominating the market."
							},
							{
								title: "Android app UI/UX",
								description: "One of the most expensive ecosystems is Android. It has a variety of equipment that works in it. Across all Android devices and versions, our team of Android app designers is skilled at producing engaging experiences."
							},
							{
								title: "Custom android app development",
								description: "Our Android app development services are equipped with creating dependable, scalable Android solutions. We develop unique Android apps for a variety of global companies. We work with you to create a product that exhibits your genuine voice in a shop with millions of apps."
							},
							{
								title: "Android software testing",
								description: "Security and performance come first in our Android mobile app development approach. We make sure that the creation of your Android mobile application is flawless and lag-free. For future-proof Android software development, we combine manual and automated testing procedures."
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
									onClick={() => setSelected('frontend')}
									className={`border border-[#1cd9ff] ${selected === 'frontend' ? 'bg-[#1cd9ff] text-black' : 'hover:bg-black hover:text-[#00ab7d]'}`}>
									Mobile Frontend
								</Button>
								<Button
									variant="ghost"
									onClick={() => setSelected('frameworks')}
									className={`border border-[#1cd9ff] ${selected === 'frameworks' ? 'bg-[#1cd9ff] text-black' : 'hover:bg-black hover:text-[#00ab7d]'}`}>
									Framework
								</Button>
								<Button
									variant="ghost"
									onClick={() => setSelected('platforms')}
									className={`border border-[#1cd9ff] ${selected === 'platforms' ? 'bg-[#1cd9ff] text-black' : 'hover:bg-black hover:text-[#00ab7d]'}`}>
									Platform
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
										<p className="mt-2 text-sm text-gray-300">{project.description}</p>
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
								q: "What does an Android app development company do?",
								a: "For devices using the Android operating system, an Android developer is in charge of creating applications. An Android developer must pay close attention to the application's compatibility with various Android versions and device kinds due to the fragmentation of this ecosystem."
							},
							{
								q: "How much does it cost to make an Android App?",
								a: "The cost to develop an android application ranges from $30,000 to $250,000, with an average cost of $171,450, according to the most recent statistics from the industry. Remember that these costs are simply estimates and that depending on the specifications of the specific project, they may turn out to be much higher or lower."
							},
							{
								q: "Which tools and technologies do you use?",
								a: "The main programming languages used in creating Android mobile apps are Java, Kotlin, Python, R programming, C++, HTML5, and C#. Swift, Objective-C, C#, and HTML5 are some of the programming languages used to power iOS mobile apps."
							},
							{
								q: "Does Elite Technology offer a free consultation or quote?",
								a: "Yes. You can get in touch with us and we'll work together to discuss your idea. We seek to advance startup companies by providing insightful data. We offer free consultations that are focused on comprehending your idea and goal."
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

