/*
OurNumbersSection.jsx
React + Tailwind component that recreates the "Numbers Speak Louder Than Words" section shown in the image.

Usage:
- Tailwind CSS required.
- Save as components/OurNumbersSection.jsx and import where needed.
- Colors use a lime accent -- change the CSS variable --accent if you want a different color.

Notes:
- The layout is responsive: two-column on md+, stacked on mobile. The stats are a responsive grid.
- Review badges use placeholders; replace with your logos or components as needed.
*/

import Image from "next/image";


const STAT_ITEMS = [
  { value: '150+', label: 'Team Members' },
  { value: '200+', label: 'Customers' },
  { value: '50+', label: 'Technology Solutions' },
  { value: '5', label: 'Global Offices' },
  { value: '100%', label: 'Customer Satisfaction' },
];

export default function OurNumbersSection() {
  return (
    <section className="bg-[#0b0d0e] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="md:flex md:items-sxtart md:justify-between md:gap-8">
          {/* Left column - heading + description */}

            <div className="md:w-auto flex gap-44 justify-between max-md:flex-col max-md:gap-10">
                <div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#1cd9ff]">Numbers Speak Louder Than Words</h3>
                    <div className="w-20 h-[2px] bg-[#1cd9ff] mt-4 mb-6"/>

                    <p className="text-slate-300 max-w-3xl text-lg leading-relaxed">
                        We prioritize delivering the best web and mobile app development solutions to our clients that leads to supreme customer satisfaction.
                    </p>
                </div>


                <div className="flex items-center gap-8 ml-2">
                    {/* Placeholder review logos — replace src with actual logos */}
                    <div>
                        <Image src="/images/clutch-review.svg" width={250} height={250} alt="Clutch" className="h-20"/>
                    </div>

                    <div>
                        <Image src="/images/glass-review.svg" width={250} height={250} alt="Glassdoor" className="h-20"/>
                    </div>
                </div>


          </div>
        </div>
            <p className="mt-8 text-2xl font-semibold text-slate-100">From Uber to Startups, we have worked with world changing innovative ideas</p>

          {/* Right column - stats */}
          <div className="mt-10 md:mt-0 md:w-1/3">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-8 gap-x-32 max-md:gap-x-0 items-start mt-10 text-center md:text-left">
              {STAT_ITEMS.map((s) => (
                <div key={s.label} className="min-w-[110px]">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#1cd9ff]">{s.value}</div>
                  <div className="mt-2 text-sm text-slate-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        {/* Reimagining section below */}
        <div className="mt-10">
          <h4 className="text-2xl font-extrabold text-[#1cd9ff]">Reimagining</h4>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">The Entrepreneurial Ecosystem</h2>
          <p className="mt-4 text-slate-300 max-w-2xl text-lg">From eCommerce to IT and mLearning industries, we have empowered over 12+ domains and we are only getting started!</p>
        </div>
      </div>
    </section>
  );
}
