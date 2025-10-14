'use client';

import HoveringGlassHeader from "@/components/Header";
import ServicesSection from '@/components/ServicesSection';
import AppDemoSection from "@/components/AppDemoSection";
import LetsTalkSection from "@/components/LetsTalkSection";
import Footer from "@/components/Footer";
import { Service } from '@/types/services';

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
    description: "Transform your ideas into stunning iOS applications that users will love. Our expert team specializes in creating native iOS apps with cutting-edge features and seamless performance.",
    technologies: ["Swift", "SwiftUI", "ARKit", "CoreML"],
    category: "Mobile"
  },
  {
    id: 3,
    title: "Web Development",
    description: "Create powerful web applications that drive your business forward. From responsive designs to progressive web apps, we deliver solutions that make an impact.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript"],
    category: "Web"
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Craft beautiful, intuitive interfaces that users love to interact with. Our design team focuses on creating engaging experiences that convert visitors into customers.",
    technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    category: "Design"
  }
];

const HomeContent = () => {
  return (
    <div className="bg-black min-h-screen">
      <HoveringGlassHeader />
      <ServicesSection services={servicesData} />
      <AppDemoSection/>
      <LetsTalkSection />
      <Footer />
    </div>
  );
};

export default HomeContent;