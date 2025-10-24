'use client';

import { useState } from 'react';

const LetsTalkSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#02f8b5] to-[#1cd9ff] bg-clip-text text-transparent mb-6 mt-12">
            Let&apos;s Talk About Your Project
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with us and let&apos;s create something amazing together.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Grid for name and email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-800 text-white focus:border-[#02f8b5] focus:ring-1 focus:ring-[#02f8b5] transition-colors placeholder:text-gray-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-800 text-white focus:border-[#02f8b5] focus:ring-1 focus:ring-[#02f8b5] transition-colors placeholder:text-gray-500"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            {/* Subject/Service Selection */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                What Service Are You Looking For?
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-800 text-white focus:border-[#02f8b5] focus:ring-1 focus:ring-[#02f8b5] transition-colors"
                required
              >
                <option value="" className="bg-gray-900">Select a service</option>
                <option value="web-development" className="bg-gray-900">Web Development</option>
                <option value="mobile-app" className="bg-gray-900">Mobile App Development</option>
                <option value="ui-ux" className="bg-gray-900">UI/UX Design</option>
                <option value="consulting" className="bg-gray-900">IT Consulting</option>
                <option value="other" className="bg-gray-900">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-800 text-white focus:border-[#02f8b5] focus:ring-1 focus:ring-[#02f8b5] transition-colors placeholder:text-gray-500"
                placeholder="Tell us about your project..."
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-[#02f8b5] to-[#1cd9ff] text-black font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LetsTalkSection;