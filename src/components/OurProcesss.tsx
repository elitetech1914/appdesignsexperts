import React from 'react';
import { Search, Target, PenTool, Compass, Wrench, CloudUpload, CheckSquare, Box } from 'lucide-react';
import { motion } from 'framer-motion';

const STEPS = [
  { id: 1, title: 'Discover', desc: 'Research & insight', Icon: Search },
  { id: 2, title: 'Define', desc: 'Scope & planning', Icon: Target },
  { id: 3, title: 'Design', desc: 'UX & UI', Icon: PenTool },
  { id: 4, title: 'App Architect', desc: 'System design', Icon: Compass },
  { id: 5, title: 'Support & Maintenance', desc: 'Ongoing care', Icon: Wrench },
  { id: 6, title: 'Final Deployment', desc: 'Go live', Icon: CloudUpload },
  { id: 7, title: 'Quality Assurance', desc: 'Testing', Icon: CheckSquare },
  { id: 8, title: 'Platform Development', desc: 'Build & scale', Icon: Box },
];

export default function OurProcess() {
  return (
    <section className="bg-[#020202] text-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#02f8b5] to-[#1cd9ff] bg-clip-text text-transparent mb-6">
            Our Process
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#02f8b5] to-[#1cd9ff] mx-auto rounded-full"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            We make your vision turn into a full-fledged reality while also providing personalized app services by adopting the latest technologies which are tailored according to your IT needs and expectations.
          </p>
        </div>


        {/* ---------------------- MOBILE LAYOUT ---------------------- */}
        <div className="sm:hidden relative">
          {/* left vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-[4px] rounded-full" style={{ background: 'linear-gradient(180deg,#02f8b5,#1cd9ff)' }} />

          <div className="space-y-6 pl-16 pr-4">
            {STEPS.map((step, idx) => {
              const fromLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  className="flex items-start gap-4"
                  initial={{ x: fromLeft ? -300 : 300, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: idx * 0.06 }}
                >
                  {/* icon placed close to the line */}
                  <div className="-ml-10 w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.28))', border: '1px solid rgba(255,255,255,0.03)' }}>
                    <step.Icon size={18} strokeWidth={1.7} className="text-[#02f8b5]" />
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-slate-100">{step.title}</h4>
                    <p className="mt-1 text-sm text-slate-300">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ---------------------- DESKTOP LAYOUT (sm+) ---------------------- */}
        <div className="hidden sm:block relative mt-6">
          {/* center vertical line (absolute so it spans the container) */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[4px] rounded-full" style={{ background: 'linear-gradient(180deg,#02f8b5,#1cd9ff)', boxShadow: '0 6px 30px rgba(28, 217, 255, 0.06)' }} />

          <div className="grid grid-cols-1 gap-y-8" style={{ gridTemplateColumns: '1fr 72px 1fr' }}>
            {STEPS.map((step, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <React.Fragment key={step.id}>
                  {/* LEFT CELL */}
                  <div className="sm:col-span-1 flex items-start justify-end sm:pr-2">
                    {isLeft ? (
                      <motion.div
                        className="max-w-xs text-right"
                        initial={{ x: -500, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.06 }}
                      >
                        <div className="inline-flex items-center gap-3">
                          <div>
                            <h4 className="text-lg font-semibold text-slate-100">{step.title}</h4>
                            <p className="mt-1 text-sm text-slate-300">{step.desc}</p>
                          </div>
                          <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.28))', border: '1px solid rgba(255,255,255,0.03)' }}>
                            <step.Icon size={18} strokeWidth={1.7} className="text-[#02f8b5]" />
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="hidden sm:block" />
                    )}
                  </div>

                  {/* CENTER CELL (narrow) - node sits here */}
                  <div className="sm:col-span-1 flex justify-center">
                    <div className="relative flex flex-col items-center">
                      <motion.div
                        className="w-3 h-3 rounded-full bg-[#020202] border-2"
                        style={{ borderColor: '#02f8b5', boxShadow: '0 8px 18px rgba(2,248,181,0.06)' }}
                        initial={{ scale: 0.6, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: idx * 0.04 }}
                      />
                      {/* mobile row: icon & content displayed inline (hidden on sm+) */}
                    </div>
                  </div>

                  {/* RIGHT CELL */}
                  <div className="sm:col-span-1 flex items-start justify-start sm:pl-2">
                    {!isLeft ? (
                      <motion.div
                        className="max-w-xs text-left inline-flex items-center gap-3"
                        initial={{ x: 500, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.06 }}
                      >
                        <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.28))', border: '1px solid rgba(255,255,255,0.03)'}}>
                          <step.Icon size={18} strokeWidth={1.7} className="text-[#02f8b5]" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-100">{step.title}</h4>
                          <p className="mt-1 text-sm text-slate-300">{step.desc}</p>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="hidden sm:block" />
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
