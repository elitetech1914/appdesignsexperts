// components/AboutPage.tsx
import React from 'react';

const AboutPage = () => {
  const journeyItems = [
    {
      year: '2020',
      items: ['Recognition & Android', 'Mobifone', 'Disregistration']
    },
    {
      year: '2022', 
      items: ['Web App', 'Cookie', 'Encodernment', 'Ying-ao-Yang', 'Graham', 'Admission', 'Microsoft', 'Android']
    }
  ];

  const values = [
    'Innovation', 'Quality', 'Excellence', 'Collaboration', 'Integrity'
  ];

  const awards = [
    'Best Mobile App 2023',
    'Top Development Company 2022', 
    'Innovation Excellence Award',
    'Client Choice Award 2023'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            We are <span className="text-[#02f8b5]">innovators</span>, 
            <br />
            empowering the <span className="text-[#1cd9ff]">digital landscape</span>.
          </h1>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#02f8b5]">Our Journey</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {journeyItems.map((journey, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-[#1cd9ff] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">{journey.year}</span>
                </div>
                <div className="ml-12">
                  <div className="space-y-3">
                    {journey.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 border-l-4 border-[#02f8b5]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#02f8b5]">Our Mission</h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              All apps are being digital and accessible with our programs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[#1cd9ff] rounded-full"></div>
                <span>Employee-Cookie</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[#1cd9ff] rounded-full"></div>
                <span>Clear-Cookie</span>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#02f8b5]">Our Vision</h2>
            <p className="text-2xl font-semibold text-[#1cd9ff] mb-6">
              Leading Web, Mobile & Software Development Company
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-[#02f8b5]">Our Values</h3>
            <div className="flex flex-wrap gap-3">
              {values.map((value, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-700 rounded-full text-sm hover:bg-[#02f8b5] hover:text-black transition-all duration-300 cursor-pointer"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognitions */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#02f8b5] text-center">
            Awards and Recognitions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-[#1cd9ff] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#02f8b5] rounded-lg mb-4 flex items-center justify-center group-hover:bg-[#1cd9ff] transition-colors duration-300">
                  <span className="text-black font-bold">★</span>
                </div>
                <h3 className="text-lg font-semibold">{award}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#02f8b5] to-[#1cd9ff]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Turn Your App Idea into Brand Success!
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Let&apos;s Create General Communication
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;