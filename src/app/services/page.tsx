import LetsTalkSection from '@/components/LetsTalkSection'
import ServicesSection from '@/components/ServicesSection'
import { Service } from '@/types/services';
import Image from 'next/image';

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
    technologies: [{ name: "Redux", logo: "redux.svg" }, { name: "JavaScript", logo: "javaScript.svg" }, { name: "Firebase", logo: "firebase.svg" }, { name: "XCode", logo: "xcode.svg" }],
    category: "Cross-Platform",
    url: "react-native-app-development"
  },
  {
    id: 4,
    title: "Website Development",
    description: "Website development has become the greatest boon for businesses across globe. Following the latest trend to meet user's expectations is something our company excel in. We help you complete your digital presence.",
    technologies: [{ name: "Frontend", logo: "frontend.svg" }, { name: "Backend", logo: "backend.svg" }, { name: "FullStack", logo: "fullStack.svg" }, { name: "DevOps", logo: "devops.svg" }],
    category: "Web",
    url: "website-development"
  },
];

const Services = () => {
  return (
    <section style={{ ["--accent-1" as string]: "#02f8b5", ["--accent-2" as string]: "#1cd9ff" }} className='pt-20 text-white'>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* LEFT: Heading, subcopy, CTA */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--accent-1)] leading-tight">
              We Provide Solutions  <br /> That Can Change Your Life
            </h1>

            <div className="mt-8 flex items-center gap-6">
              <a
                href="#contact"
                className="inline-block rounded-full px-6 py-3 font-semibold text-black"
                style={{ background: "linear-gradient(90deg,#02f8b5,#1cd9ff)" }}
              >
                TALK WITH CONSULTANT
              </a>
            </div>
          </div>

          {/* RIGHT: Full-size image on desktop */}
          <div className="w-full">
            <div className="w-full rounded-lg overflow-hidden">
              <Image
                src="/images/srv_main.png"
                alt="Brand logos"
                width={1600}
                height={900}
                className="w-full h-64 md:h-80 lg:h-[420px] xl:h-[560px] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <ServicesSection services={servicesData} />
      <LetsTalkSection />
    </section>
  )
}

export default Services