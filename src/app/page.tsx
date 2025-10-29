'use client'
import { motion } from "motion/react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Marquee } from "@/components/ui/marquee"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import Image from "next/image";
import ServicesSection from '@/components/ServicesSection';
import { Service } from '@/types/services';
import AppDemoSection from "@/components/AppDemoSection";
import OurProcesss from "@/components/OurProcesss";
import LetsTalkSection from "@/components/LetsTalkSection";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { Award } from "lucide-react";
import OurNumbersSection from "@/components/OurNumbersSection";

const awardslogos = [
  { src: '/images/AwardsLogos/designrush.png', alt: 'DesignRush', width: 228, height: 228},
  { src: '/images/AwardsLogos/itrate.png', alt: 'Itrate', width: 228, height: 228},
  { src: '/images/AwardsLogos/top-mobile-award.png', alt: 'TopMobileAward', width: 228, height: 228},
  { src: '/images/AwardsLogos/visualobject.svg', alt: 'VisualObject', width: 228, height: 228}
];

const logos = [
  { src: '/images/herologos/antler-hm.svg', alt: 'Company One', width: 281, height: 81},
  { src: '/images/herologos/google-hm.svg', alt: 'Company One', width: 281, height: 81},
  { src: '/images/herologos/healthyluxe-hm.svg', alt: 'Company One', width: 281, height: 81},
  { src: '/images/herologos/ivet-hm.svg', alt: 'Company One', width: 281, height: 81},
  { src: '/images/herologos/ondeck-hm.svg', alt: 'Company One', width: 281, height: 81},
  { src: '/images/herologos/otb-hm.svg', alt: 'Company One', width: 281, height: 81},
  { src: '/images/herologos/roo-hm.svg', alt: 'Company One', width: 281, height: 81},
  { src: '/images/herologos/sesh-hm.svg', alt: 'Company One', width: 281, height: 81},
  { src: '/images/herologos/tanishq-hm.svg', alt: 'Company One', width: 281, height: 81},
  { src: '/images/herologos/uber-hm.svg', alt: 'Company One', width: 281, height: 81},
  { src: '/images/herologos/zabbit-hm.svg', alt: 'Company One', width: 281, height: 81},
  { src: '/images/herologos/zaggle-hm.svg', alt: 'Company One', width: 281, height: 81},
];


const servicesData: Service[] = [
  {
    id: 1,
    title: "Android App Development",
    description: "Looking to build a successful Android application for your business? Need a scalable and high-performing solution? Look no further! We guarantee unique and fully capable Android app development services that not only digitally transform your business but also let you stay ahead of your competition.",
    technologies: [{ name: "Android", logo: "androidstudio.svg" }, { name: "Google Fit", logo: "googlefit.svg" }, { name: "Auto", logo: "androidauto.svg" }, { name: "ARCore", logo: "arcore.svg" }],
    category: "Mobile",
    url: "android-app-development"
  },
  {
    id: 2,
    title: "iOS App Development",
    description: "We are the go-to iOS app development company for businesses belonging to multiple business sizes and across the globe. We engineer feature-rich and appealing iPhone apps for both established enterprises and startups.",
    technologies: [{ name: "Swift", logo: "swift.svg" }, { name: "Objective-C", logo: "objective.svg" }, { name: "XCode", logo: "xcode.svg" }, { name: "Flutter", logo: "flutter.svg" }],
    category: "Mobile",
    url: "ios-app-development"
  },
  {
    id: 3,
    title: "React Native App Development",
    description: "Build an app that delights users with a feature-rich and branded-looking mobile app for both iOS and Android platforms. We are a React Native app development company, gives perfect app development solutions that not only save time and cost of app development but also tune your business into a successful app faster.",
    technologies: [{ name: "Redux", logo: "redux.svg" }, { name: "JavaScript", logo: "javascript.svg" }, { name: "Firebase", logo: "firebase.svg" }, { name: "XCode", logo: "xcode.svg" }],
    category: "Cross-Platform",
    url: "react-native-app-development"
  },
  {
    id: 4,
    title: "Website Development",
    description: "Website development has become the greatest boon for businesses across globe. Following the latest trend to meet user's expectations is something our company excel in. We help you complete your digital presence.",
  technologies: [{ name: "Frontend", logo: "frontend.svg" }, { name: "Backend", logo: "backend.svg" }, { name: "FullStack", logo: "fullstack.svg" }, { name: "DevOps", logo: "devops.svg" }],
    category: "Web",
    url: "website-development"
  },
];

export default function Home() {

  return (
    <div className="overflow-x-hidden relative">
      <WavyBackground colors={['#02f8b5', '#1cd9ff']} className="max-w-4xl w-full mx-auto pb-20 flex flex-col gap-5 justify-center items-center relative">
        <div className="w-full px-4">
          <motion.div className="text-white text-[200px] relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
            <LayoutTextFlip
              text="Redefining"
              words={["Experience", "Development",]}
            />
          </motion.div>
          <p className="text-sm font-medium md:text-lg mt-4 text-white inter-var text-center">
            Transforming The Digital Landscape To
            Shape The Vision Into Reality
          </p>
        </div>
        <div className="max-sm:flex-col mt-3 flex gap-5 items-center">
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
        <div className="absolute max-sm:-bottom-30 -bottom-50 left-1/2 -translate-x-1/2 w-screen">
          <Marquee className="w-full overflow-hidden">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="pr-10"
              />
            ))}
          </Marquee>
        </div>
      </WavyBackground>
      <ServicesSection services={servicesData} />
      <OurProcesss/>
      <AppDemoSection />
      <OurNumbersSection/>

      <section>
        <div className='text-center mt-12 flex flex-col gap-5 justify-center items-center px-6'>
          <div className='flex gap-3 text-[#02f8b5]'>
            <Award className='max-sm:hidden' size={40}/>
            <h2 className="text-3xl mb-5 font-bold text-[#02f8b5]">Awards and Recognitions</h2>
          </div>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed px-6">
                With the utmost priority of adding value to the projects we undertake, we ensure that our partners stay ahead of the clutter and achieve excellence.
              </p>
        </div>
          <Marquee className="w-full overflow-hidden py-16">
            {awardslogos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="pr-20 object-contain"
              />
            ))}
          </Marquee>
      </section>
      <LetsTalkSection />

    </div>

  );
}
