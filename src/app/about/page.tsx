// components/AboutPage.tsx
import { Marquee } from '@/components/ui/marquee';
import { 
  Rocket, 
  Target, 
  Eye, 
  Heart, 
  Award, 
  MessageCircle, 
  Phone, 
  Star,
  Users,
  Calendar,
  Globe,
  Code,
  Smartphone,
  Zap,
  CheckCircle,
} from 'lucide-react';
import Image from 'next/image';

const logos = [
  { src: '/images/AwardsLogos/designrush.png', alt: 'DesignRush', width: 228, height: 228},
  { src: '/images/AwardsLogos/itrate.png', alt: 'Itrate', width: 228, height: 228},
  { src: '/images/AwardsLogos/top-mobile-award.png', alt: 'TopMobileAward', width: 228, height: 228},
  { src: '/images/AwardsLogos/visualobject.svg', alt: 'VisualObject', width: 228, height: 228}
];

const AboutPage = () => {
  // Timeline Data
  const timelineEvents = [
    {
      year: "2020",
      title: "Foundation & Breakthrough",
      icon: <Rocket className="w-6 h-6" />,
      achievements: [
        {
          title: "Recognition & Android",
          description: "Awarded for innovative Android solutions",
          icon: <Award className="w-4 h-4" />
        },
        {
          title: "Mobifone Partnership",
          description: "Strategic partnership with telecom giant",
          icon: <Users className="w-4 h-4" />
        },
        {
          title: "Platform Launch",
          description: "Successfully launched our development platform",
          icon: <Zap className="w-4 h-4" />
        }
      ],
      color: "from-[#1cd9ff] to-[#1cd9ff]",
      stats: "50+ Projects"
    },
    {
      year: "2022",
      title: "Expansion & Innovation",
      icon: <Globe className="w-6 h-6" />,
      achievements: [
        {
          title: "Web App Suite",
          description: "Launched comprehensive web application services",
          icon: <Code className="w-4 h-4" />
        },
        {
          title: "Microsoft Partnership",
          description: "Became Microsoft certified development partner",
          icon: <Award className="w-4 h-4" />
        },
        {
          title: "Mobile Excellence",
          description: "Recognized for outstanding Android applications",
          icon: <Smartphone className="w-4 h-4" />
        },
        {
          title: "Global Reach",
          description: "Expanded services to international markets",
          icon: <Globe className="w-4 h-4" />
        }
      ],
      color: "from-[#1cd9ff] to-[#1cd9ff]",
      stats: "200+ Projects"
    }
  ];

  // Values Data
  const values = [
    { name: 'Innovation', icon: <Rocket className="w-4 h-4" /> },
    { name: 'Quality', icon: <Star className="w-4 h-4" /> },
    { name: 'Excellence', icon: <Award className="w-4 h-4" /> },
    { name: 'Collaboration', icon: <Users className="w-4 h-4" /> },
    { name: 'Integrity', icon: <Target className="w-4 h-4" /> }
  ];

  return (
    <div className="pt-20 min-h-screen text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff] rounded-2xl">
              <Rocket className="w-12 h-12 text-black" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            We are <span className="text-[#1cd9ff]">innovators</span>, 
            <br />
            empowering the <span className="text-[#1cd9ff]">digital landscape</span>.
          </h1>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-[#1cd9ff]" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#1cd9ff]">Our Journey</h2>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted development partner
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center Line - Desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#1cd9ff] to-[#1cd9ff] hidden lg:block z-0"></div>
            
            {/* Mobile Progress Line */}
            <div className="absolute left-4 md:left-8 top-0 w-0.5 h-full bg-gradient-to-b from-[#1cd9ff] to-[#1cd9ff] lg:hidden z-0"></div>

            {/* Timeline Events */}
            <div className="space-y-16 lg:space-y-24 relative z-10">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row ${
                    index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/*2020 or Achievements for 2022 */}
                  <div className={`flex-1 lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:text-right'
                  }`}>
                    {index % 2 === 0 ? (
                      // 2020: Content on left
                      <div className="relative group ml-8 lg:ml-0">
                        {/* Connector Dot - Mobile */}
                        <div className="absolute -left-8 lg:hidden w-4 h-4 bg-[#1cd9ff] rounded-full border-4 border-gray-900 z-10 top-6"></div>
                        
                        {/* Connector Dot - Desktop */}
                        <div className="hidden lg:flex absolute top-8 -right-4 w-4 h-4 bg-[#1cd9ff] rounded-full border-4 border-gray-900 z-10"></div>

                        {/* Year Badge */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${event.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            {event.icon}
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-white">{event.year}</div>
                            <div className="text-sm text-[#1cd9ff] font-semibold">{event.stats}</div>
                          </div>
                        </div>
                        
                        {/* Main Event Card */}
                        <div className="bg-gray-800 rounded-2xl p-6 border-l-4 border-[#1cd9ff] hover:border-[#1cd9ff] transition-all duration-300">
                          <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                          <p className="text-gray-300 leading-relaxed">
                            {index === 0 
                              ? "Our foundation year marked by innovation and strategic partnerships in mobile development."
                              : "A year of exponential growth, expanding our services and establishing global presence."
                            }
                          </p>
                        </div>
                      </div>
                    ) : (
                      // 2022: Achievements on left
                      <div className="ml-8 lg:ml-0">
                        <div className="grid grid-cols-1 gap-3">
                          {event.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                            <div
                              key={achievementIndex}
                              className="bg-gray-800/50 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300 group border-l-4 border-transparent hover:border-[#1cd9ff]"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-[#1cd9ff] group-hover:text-black transition-colors duration-300 flex-shrink-0">
                                  {achievement.icon}
                                </div>
                                <div className='text-left'>
                                  <h4 className="font-semibold text-white mb-1">{achievement.title}</h4>
                                  <p className="text-sm text-gray-400">{achievement.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Side Content - Achievements for 2020 or Content for 2022 */}
                  <div className={`flex-1 lg:w-1/2 mt-8 lg:mt-0 ${
                    index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'
                  }`}>
                    {index % 2 === 0 ? (
                      // 2020: Achievements on right
                      <div className="ml-8 lg:ml-0">
                        <div className="grid grid-cols-1 gap-3">
                          {event.achievements.map((achievement, achievementIndex) => (
                            <div
                              key={achievementIndex}
                              className="bg-gray-800/50 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300 group border-l-4 border-transparent hover:border-[#1cd9ff]"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-[#1cd9ff] group-hover:text-black transition-colors duration-300 flex-shrink-0">
                                  {achievement.icon}
                                </div>
                                <div className='text-left'>
                                  <h4 className="font-semibold text-white mb-1">{achievement.title}</h4>
                                  <p className="text-sm text-gray-400">{achievement.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      // 2022: Content on right
                      <div className="relative group ml-8 lg:ml-0 lg:text-left">
                        {/* Connector Dot - Mobile */}
                        <div className="absolute -left-8 lg:hidden w-4 h-4 bg-[#1cd9ff] rounded-full border-4 border-gray-900 z-10 top-6"></div>
                        
                        {/* Connector Dot - Desktop */}
                        <div className="hidden lg:flex absolute top-8 -right-4 w-4 h-4 bg-[#1cd9ff] rounded-full border-4 border-gray-900 z-10"></div>

                        {/* Year Badge */}
                        <div className="flex items-center gap-4 mb-6 lg:justify-start">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${event.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            {event.icon}
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-white">{event.year}</div>
                            <div className="text-sm text-[#1cd9ff] font-semibold">{event.stats}</div>
                          </div>
                        </div>
                        
                        {/* Main Event Card */}
                        <div className="bg-gray-800 rounded-2xl p-6 border-l-4 border-[#1cd9ff] hover:border-[#1cd9ff] transition-all duration-300">
                          <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                          <p className="text-gray-300 leading-relaxed">
                            {index === 0 
                              ? "Our foundation year marked by innovation and strategic partnerships in mobile development."
                              : "A year of exponential growth, expanding our services and establishing global presence."
                            }
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Status */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800 rounded-full border border-[#1cd9ff]">
              <div className="w-3 h-3 bg-[#1cd9ff] rounded-full animate-pulse"></div>
              <span className="text-[#1cd9ff] font-semibold">Continuing our journey of innovation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-[#1cd9ff] w-8 h-8" />
              <h2 className="text-3xl font-bold text-[#1cd9ff]">Our Mission</h2>
            </div>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Our aim is to change people&apos;s lives and enhance businesses with our progressive and innovative technology solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-[#1cd9ff]" />
                <span className="font-medium">Employee-Centric</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-[#1cd9ff]" />
                <span className="font-medium">Client-Centric</span>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Eye className="text-[#1cd9ff] w-8 h-8" />
              <h2 className="text-3xl font-bold text-[#1cd9ff]">Our Vision</h2>
            </div>
            <p className="text-2xl font-semibold text-[#1cd9ff] mb-6">
              Leading Web, Mobile & Software Development Company
            </p>
            
            <div className="flex items-center gap-3 mb-4">
              <Heart className="text-[#1cd9ff] w-6 h-6" />
              <h3 className="text-xl font-bold text-[#1cd9ff]">Our Values</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-full text-sm hover:bg-[#1cd9ff] hover:text-black transition-all duration-300 cursor-pointer group"
                >
                  {value.icon}
                  <span>{value.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section>
        <div className='text-center mt-12 flex flex-col gap-5 justify-center items-center px-6'>
          <div className='flex gap-3 text-[#1cd9ff]'>
            <Award className='max-sm:hidden' size={40}/>
            <h2 className="text-3xl mb-5 font-bold text-[#1cd9ff]">Awards and Recognitions</h2>
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff]">
        <div className="max-w-4xl mx-auto text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-6 text-black" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Turn Your App Idea into Brand Success!
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Let&apos;s Create. Connect. Communicate
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
            <Phone className="w-5 h-5" />
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;