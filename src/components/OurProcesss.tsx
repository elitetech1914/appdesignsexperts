// OurProcess.tsx
import React, { useRef, useEffect } from 'react';
import {
  Search,
  Target,
  PenTool,
  Compass,
  Wrench,
  CloudUpload,
  CheckSquare,
  Box,
} from 'lucide-react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

type IconProps = { size?: number; strokeWidth?: number; className?: string };
type Step = { id: number; title: string; desc: string; Icon: React.ComponentType<IconProps> };

const STEPS: Step[] = [
  { id: 1, title: 'Discover', desc: 'Research & insight', Icon: Search },
  { id: 2, title: 'Define', desc: 'Scope & planning', Icon: Target },
  { id: 3, title: 'Design', desc: 'UX & UI', Icon: PenTool },
  { id: 4, title: 'App Architect', desc: 'System design', Icon: Compass },
  { id: 5, title: 'Support & Maintenance', desc: 'Ongoing care', Icon: Wrench },
  { id: 6, title: 'Final Deployment', desc: 'Go live', Icon: CloudUpload },
  { id: 7, title: 'Quality Assurance', desc: 'Testing', Icon: CheckSquare },
  { id: 8, title: 'Platform Development', desc: 'Build & scale', Icon: Box },
];

/**
 * Use a typed Variants but avoid 'ease' as string to satisfy framer-motion types.
 * The functions accept `custom` so we can pass per-item fromLeft/delay.
 */
const mobileVariants: Variants = {
  hidden: (custom: { fromLeft: boolean }) => ({
    x: custom.fromLeft ? -260 : 260,
    opacity: 0,
  }),
  visible: (custom: { fromLeft: boolean; delay: number }) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.62,
      // note: we only pass numeric duration + delay to avoid TypeScript 'ease' mismatch
      delay: custom.delay,
    },
  }),
};

function StepItemMobile({ step, idx }: { step: Step; idx: number }) {
  // attach ref to a plain div (more stable for useInView)
  const ref = useRef<HTMLDivElement | null>(null);

  // tweak intersection options: amount small so partially-visible items animate,
  // and a negative rootMargin so items near bottom trigger too
  const inView = useInView(ref, { once: true, amount: 0.15, margin: '-20% 0px' });

  const controls = useAnimation();
  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const fromLeft = idx % 2 === 0;
  const custom = { fromLeft, delay: idx * 0.06 };

  const Icon = step.Icon; // ensure capitalized component reference for JSX

  return (
    <div ref={ref}>
      <motion.div
        className="flex items-start gap-4"
        initial="hidden"
        animate={controls}
        variants={mobileVariants}
        custom={custom}
      >
        <div
          className="-ml-10 w-12 h-12 rounded-lg flex items-center justify-center"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.28))',
            border: '1px solid rgba(255,255,255,0.03)',
          }}
        >
          <Icon size={18} strokeWidth={1.7} className="text-[#1cd9ff]" />
        </div>

        <div>
          <h4 className="text-base font-semibold text-slate-100">{step.title}</h4>
          <p className="mt-1 text-sm text-slate-300">{step.desc}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function OurProcess() {
  return (
    <section className="bg-[#020202] text-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1cd9ff] mb-6">
            Our Process
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1cd9ff] to-[#1cd9ff] mx-auto rounded-full" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            We make your vision turn into a full-fledged reality while also providing personalized app services by
            adopting the latest technologies which are tailored according to your IT needs and expectations.
          </p>
        </div>

        {/* MOBILE */}
        <div className="sm:hidden relative">
          <div
            className="absolute left-6 top-0 bottom-0 w-[4px] rounded-full"
            style={{ background: 'linear-gradient(180deg,#1cd9ff,#1cd9ff)' }}
          />
          <div className="space-y-6 pl-16 pr-4">
            {STEPS.map((step, idx) => (
              <StepItemMobile key={step.id} step={step} idx={idx} />
            ))}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden sm:block relative mt-6">
          <div
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[4px] rounded-full"
            style={{ background: 'linear-gradient(180deg,#1cd9ff,#1cd9ff)', boxShadow: '0 6px 30px #1cd9ff' }}
          />

          <div className="grid grid-cols-1 gap-y-8" style={{ gridTemplateColumns: '1fr 72px 1fr' }}>
            {STEPS.map((step, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <React.Fragment key={step.id}>
                  {/* LEFT */}
                  <div className="sm:col-span-1 flex items-start justify-end sm:pr-2">
                    {isLeft ? (
                      <motion.div
                        className="max-w-xs text-right"
                        initial={{ x: -500, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: idx * 0.06 }}
                      >
                        <div className="inline-flex items-center gap-3">
                          <div>
                            <h4 className="text-lg font-semibold text-slate-100">{step.title}</h4>
                            <p className="mt-1 text-sm text-slate-300">{step.desc}</p>
                          </div>
                          <div
                            className="w-11 h-11 rounded-lg flex items-center justify-center"
                            style={{
                              background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.02))',
                              border: '1px solid rgba(255,255,255,0.03)',
                            }}
                          >
                            <step.Icon size={18} strokeWidth={1.7} className="text-[#fc00ff]" />
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="hidden sm:block" />
                    )}
                  </div>

                  {/* CENTER */}
                  <div className="sm:col-span-1 flex justify-center">
                    <div className="relative flex flex-col items-center">
                      <motion.div
                        className="w-3 h-3 rounded-full bg-[#020202] border-2"
                        style={{ borderColor: '#1cd9ff', boxShadow: '0 0px 18px #1cd9ff' }}
                        initial={{ scale: 0.6, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: idx * 0.04 }}
                      />
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="sm:col-span-1 flex items-start justify-start sm:pl-2">
                    {!isLeft ? (
                      <motion.div
                        className="max-w-xs text-left inline-flex items-center gap-3"
                        initial={{ x: 500, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: idx * 0.06 }}
                      >
                        <div
                          className="w-11 h-11 rounded-lg flex items-center justify-center"
                          style={{
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.28))',
                            border: '1px solid rgba(255,255,255,0.03)',
                          }}
                        >
                          <step.Icon size={18} strokeWidth={1.7} className="text-[#fc00ff]" />
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
