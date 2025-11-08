'use client';

import { ServicesSectionProps } from '@/types/services';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <section className="py-16 bg-black min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#00e5ff] to-[#00ddff] bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ddff] to-[#00ddff] mx-auto rounded-full"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Comprehensive digital solutions to transform your business and drive growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link href={`/${service.url}`} key={service.id}>
            <div
              className="bg-gray-900 rounded-2xl border border-gray-800 transition-all duration-500 group overflow-hidden hover:shadow-2xl hover:shadow-[#02f8b5]/30"
            >
              {/* Service Header */}
              <div className="p-6 h-72 border-b border-gray-800">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00ffee] group-hover:to-[#fc00ff] group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Explore Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold bg-gradient-to-r from-[#00e5ff] to-[#fc00ff] bg-clip-text text-transparent uppercase tracking-wide">
                    Explore
                  </span>
                  <div className="w-8 h-px bg-gradient-to-r from-[#00e5ff] to-[#00e5ff] flex-1 ml-2"></div>
                </div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {service.technologies.map((tech, index) => (
                    <div

                      key={index}
                      className="flex items-center justify-between gap-3 bg-gray-800 rounded-lg px-4 py-2 text-center transition-all duration-300 border border-gray-700"
                    >
                      <p className="text-xs font-medium text-white text-nowrap">
                        {tech.name}
                      </p>
                     <Image
                        src={`/images/${tech.logo}`}
                        className='justify-end'
                        alt='logo'
                        width={30}
                        height={30}
                        />
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Badge */}
              <div className="px-6 pb-6 flex justify-between items-center">
                <span className="inline-block bg-gradient-to-r from-[#02f8b5]/20 to-[#1cd9ff]/20 text-white text-xs font-medium px-4 py-2 rounded-full border border-[#02f8b5]/30">
                  {service.category}
                </span>
                <span>

                  <ArrowRight className="inline-block ml-2 text-[#00ffee]" size={25} />
                  
                </span>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

  );
};

export default ServicesSection;