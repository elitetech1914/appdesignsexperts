// import AutoScrollBar from "@/components/AutoScrollBar";
import BlogSection from "@/components/BlogSection";
import LetsTalkSection from "@/components/LetsTalkSection";
import { Marquee } from "@/components/ui/marquee";
import { Award } from "lucide-react";
import Image from "next/image";

const logos = [
  { src: '/images/AwardsLogos/designrush.png', alt: 'DesignRush', width: 228, height: 228 },
  { src: '/images/AwardsLogos/itrate.png', alt: 'Itrate', width: 228, height: 228 },
  { src: '/images/AwardsLogos/top-mobile-award.png', alt: 'TopMobileAward', width: 228, height: 228 },
  { src: '/images/AwardsLogos/visualobject.svg', alt: 'VisualObject', width: 228, height: 228 }
];

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen pt-16">
      <BlogSection />
      <LetsTalkSection />
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
            {logos.map((logo, index) => (
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
    </main>
  );
}
