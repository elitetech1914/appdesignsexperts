const AppDemoSection = () => {
  return (
    <div className="flex flex-col">
      {/* First section with its own gradient background */}
      <div className="relative">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black to-[#007483]" />
        {/* Content with phone mockup */}
        <div className="relative max-w-7xl mx-auto w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-screen">
            {/* Left content - hidden on mobile */}
            <div className="hidden lg:block text-white space-y-6">
              <h2 className="text-3xl font-bold text-[#1cd9ff]">
                Key Features
              </h2>
              <p className="text-gray-300">
                Discover the powerful features that make our apps stand out from the competition.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="text-[#1cd9ff]">→</span>
                  Scalability
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#1cd9ff]">→</span>
                  Performance
                </li>
              </ul>
            </div>

            {/* Center - Phone mockup (keeps bg-fixed + inline minHeight; bigger on mobile) */}
            <div
              className="bg-fixed w-full h-screen bg-no-repeat bg-center bg-[length:350%] lg:bg-[length:75%] col-span-1"
              style={{
                backgroundImage: "url('/images/PhoneMockup1.png')",
                /* preserve the illusion */
                minHeight: '800px',
                /* keep the art anchored toward bottom to match phone border */
                backgroundPosition: 'center 100%'
              }}
            />

            {/* Right content - hidden on mobile */}
            <div className="hidden lg:block text-white space-y-6">
              <h2 className="text-3xl font-bold text-[#1cd9ff] ">
                Performance Metrics
              </h2>
              <p className="text-gray-300">
                Our apps are optimized for speed and efficiency, ensuring a smooth user experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/5 backdrop-blur">
                  <div className="text-2xl font-bold text-[#1cd9ff]">100+</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 backdrop-blur">
                  <div className="text-2xl font-bold text-[#1cd9ff]">50+</div>
                  <div className="text-sm text-gray-400">Features</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second section with its own gradient background */}
      <div className="relative">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-blue-950" />
        {/* Content with phone mockup */}
        <div className="relative max-w-7xl mx-auto w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-screen">
            {/* Left content - hidden on mobile */}
            <div className="hidden lg:block text-white space-y-6">
              <h2 className="text-3xl font-bold text-[#1cd9ff]">
                Key Features
              </h2>
              <p className="text-gray-300">
                Discover the powerful features that make our app stand out from the competition.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white/5 backdrop-blur">
                  <h3 className="text-[#1cd9ff] font-semibold mb-2">Smart Analytics</h3>
                  <p className="text-sm text-gray-400">Advanced insights and data visualization</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 backdrop-blur">
                  <h3 className="text-[#1cd9ff] font-semibold mb-2">Real-time Updates</h3>
                  <p className="text-sm text-gray-400">Stay synchronized with instant notifications</p>
                </div>
              </div>
            </div>

            {/* Center - Phone mockup (same size/border as first mockup; bigger on mobile) */}
            <div
              className="bg-fixed w-full h-screen bg-no-repeat bg-center bg-[length:350%] md:bg-[length:150%] lg:bg-[length:75%] col-span-1"
              style={{
                backgroundImage: "url('/images/PhoneMockup2.png')",
                minHeight: '800px',
                backgroundPosition: 'center 100%'
              }}
            />

            {/* Right content - hidden on mobile */}
            <div className="hidden lg:block text-white space-y-6">
              <h2 className="text-3xl font-bold text-[#1cd9ff]">
                Why Choose Us
              </h2>
              <p className="text-gray-300">
                Experience the difference with our cutting-edge technology and user-centric design.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg backdrop-blur">
                  <span className="text-[#1cd9ff] text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold">Easy Integration</h3>
                    <p className="text-sm text-gray-400">Seamless setup process</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg backdrop-blur">
                  <span className="text-[#1cd9ff] text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold">24/7 Support</h3>
                    <p className="text-sm text-gray-400">Always here to help</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppDemoSection;
