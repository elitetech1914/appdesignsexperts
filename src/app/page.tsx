'use client'

import HoveringGlassHeader from "@/components/Header";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Marquee } from "@/components/ui/marquee"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import Image from "next/image";
import ServicesSection from '@/components/ServicesSection';
import { Service } from '@/types/services';
import AppDemoSection from "@/components/AppDemoSection";
import LetsTalkSection from "@/components/LetsTalkSection";
import Footer from "@/components/Footer";

const logos = [
  { src: '/images/logo.png', alt: 'Company One', width: 281, height: 81, href: 'https://company.one' },
  { src: '/images/logo.png', alt: 'Company One', width: 281, height: 81, href: 'https://company.one' },
  { src: '/images/logo.png', alt: 'Company One', width: 281, height: 81, href: 'https://company.one' },
  { src: '/images/logo.png', alt: 'Company One', width: 281, height: 81, href: 'https://company.one' },
  { src: '/images/logo.png', alt: 'Company One', width: 281, height: 81, href: 'https://company.one' },
];

// Sample data - you can replace this with data from an API or CMS
const servicesData: Service[] = [
  {
    id: 1,
    title: "Android App Development",
    description: "Looking to build a successful Android application for your business? Need a scalable and high-performing solution? Look no further! Meta App Coders guarantees unique and fully capable Android app development services that not only digitally transform your business but also let you stay ahead of your competition.",
    technologies: ["Android", "Google Fit", "Android Auto", "ARCore"],
    category: "Mobile"
  },
  {
    id: 2,
    title: "iOS App Development",
    description: "We are the go-to iOS app development company for businesses belonging to multiple business sizes and across the globe. We engineer feature-rich and appealing iPhone apps for both established enterprises and startups.",
    technologies: ["Swift", "Objective-C", "XCode", "Flutter"],
    category: "Mobile"
  },
  {
    id: 3,
    title: "React Native App Development",
    description: "Build an app that delights users with a feature-rich and branded-looking mobile app for both iOS and Android platforms. Meta App Coders, a React Native app development company, gives perfect app development solutions that not only save time and cost of app development but also tune your business into a successful app faster.",
    technologies: ["Redux", "JavaScript", "Firebase", "XCode"],
    category: "Cross-Platform"
  },
  {
    id: 4,
    title: "Website Development",
    description: "Website development has become the greatest boon for businesses across globe. Following the latest trend to meet user's expectations is something our company excel in. We help you complete your digital presence.",
    technologies: ["Frontend", "Backend", "FullStack", "DevOps"],
    category: "Web"
  },
  {
    id: 5,
    title: "Android App Development",
    description: "Looking to build a successful Android application for your business? Need a scalable and high-performing solution? Look no further! Meta App Coders guarantees unique and fully capable Android app development services that not only digitally transform your business but also let you stay ahead of your competition.",
    technologies: ["Android", "Google Fit", "Android Auto", "ARCore"],
    category: "Mobile"
  },
  {
    id: 6,
    title: "iOS App Development",
    description: "We are the go-to iOS app development company for businesses belonging to multiple business sizes and across the globe. We engineer feature-rich and appealing iPhone apps for both established enterprises and startups.",
    technologies: ["Swift", "Objective-C", "XCode", "Flutter"],
    category: "Mobile"
  },
  {
    id: 7,
    title: "React Native App Development",
    description: "Build an app that delights users with a feature-rich and branded-looking mobile app for both iOS and Android platforms. Meta App Coders, a React Native app development company, gives perfect app development solutions that not only save time and cost of app development but also tune your business into a successful app faster.",
    technologies: ["Redux", "JavaScript", "Firebase", "XCode"],
    category: "Cross-Platform"
  },
  {
    id: 8,
    title: "Website Development",
    description: "Website development has become the greatest boon for businesses across globe. Following the latest trend to meet user's expectations is something our company excel in. We help you complete your digital presence.",
    technologies: ["Frontend", "Backend", "FullStack", "DevOps"],
    category: "Web"
  }
];

export default function Home() {

  return (
    <div className="overflow-x-hidden relative">
      <HoveringGlassHeader title="My Site" subtitle="Beta" />
      <WavyBackground colors={['#02f8b5', '#1cd9ff']} className="max-w-4xl w-full mx-auto pb-20 flex flex-col gap-5 justify-center items-center relative">
        <div className="w-full px-4">
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            Redefining Experience
          </p>
          <p className="text-2xl font-medium md:text-lg mt-4 text-white inter-var text-center">
            Transforming The Digital Landscape To
            Shape The Vision Into Reality
          </p>
        </div>
        <div className="mt-3 flex gap-5 items-center">
          <ShimmerButton 
            shimmerColor={'rgba(0, 0, 0, 0.9)'} 
            shimmerDuration={'2s'} 
            background="linear-gradient(to right, #02f8b5, #1cd9ff)"
            className="shadow-6xl"
          >
            <span className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-black lg:text-lg">
              DISCUSS WITH A CONSULTANT
            </span>
          </ShimmerButton>
          <ShimmerButton shimmerColor={'#02f8b5'} shimmerDuration={'2s'} className="shadow-2xl">
            <span className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-lg dark:from-white dark:to-slate-900/10">
              OUR WORK
            </span>
          </ShimmerButton>

        </div>
        <div className="absolute -bottom-60 left-1/2 -translate-x-1/2 w-screen">
          <Marquee className="w-full overflow-hidden">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="pr-20"
              />
            ))}
          </Marquee>
        </div>
      </WavyBackground>
      <ServicesSection services={servicesData} />
      <AppDemoSection/>
      <LetsTalkSection />
      <Footer />
    </div>

  );
}
