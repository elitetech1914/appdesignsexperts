// app/portfolio/page.tsx
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Portfolio",
  description: "Case studies and portfolio.",
};

export default function PortfolioPage(){
  const projects = [
    { id: 1, title: "Uber Eats", tag: "On-Demand", img:"/images/portfolio/uber.png"},
    { id: 2, title: "Thousand Greens", tag: "Sports", img:"/images/portfolio/tg.png",caseStudy:'sports'},
    { id: 3, title: "MyShift", tag: "Business", img:"/images/portfolio/myshift.png",caseStudy:'business'},
    { id: 4, title: "Khatabook", tag: "Fintech", img:"/images/portfolio/khatabook.png"},
    { id: 5, title: "E-commerce Store", tag:"E-commerce", img: "/images/portfolio/caratlane-port.png"},
    { id: 6, title: "Zaggle", tag: "Fintech", img:"/images/portfolio/zaggle-port.png"},
    { id: 7, title: "Zebpay", tag: "Trading", img:"/images/portfolio/zebpay-port.png"},
    { id: 8, title: "Podeum", tag: "Cricket fantasy App", img:"/images/portfolio/zebpay-port.png"},
    { id: 9, title: "Sesh", tag: "Health & Fitness", img: "/images/portfolio/sesh.png"},
    { id: 10, title: "PharmAssess", tag: "Healthcare", img: "/images/portfolio/pharmasses.png",caseStudy:'pharmasses'},
    { id: 11, title: "Oberit", tag: "Health & Care", img: "/images/portfolio/oberit-port.png",caseStudy:'oberit'},
    { id: 12, title: "Beauty & Skin Care", tag: "Health & Care", img: "/images/portfolio/kult-port.png"},
    { id: 13, title: "Xebia", tag: "Client", img: "/images/portfolio/xebia.png"},
    { id: 14, title: "DSE", tag: "Business", img: "/images/portfolio/dse.png"},
    { id: 15, title: "ONTHEBALL", tag: "Business", img: "/images/portfolio/otb.png"},
    { id: 16, title: "HealthyLuxe", tag: "Food & Drinks", img: "/images/portfolio/healthyluxe.png",caseStudy:'healthyluxe'},
    { id: 17, title: "Data Big", tag: "Business", img: "/images/portfolio/datapig.png"},
    { id: 18, title: "Monogamish", tag: "Social Networking", img: "/images/portfolio/monogamish.png"},
    { id: 19, title: "Firehouse", tag: "Business", img: "/images/portfolio/firehouse.png"},
    { id: 20, title: "Vibe", tag: "Music", img: "/images/portfolio/vibe.png"}
  ];

  return (
    <main className="bg-black text-white mt-10">
      <div style={{ ["--accent-1" as string]: "#1cd9ff", ["--accent-2" as string]: "#1cd9ff" }}>
        {/* ---------------- HERO / SHOWCASE ---------------- */}
        <section className="relative bg-black">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* LEFT: Heading, subcopy, CTA */}
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--accent-1)] leading-tight">
                  RECOGNIZED BY TOP <br /> INDUSTRY MARKETERS!
                </h1>

                <p className="mt-6 text-lg text-slate-300">
                  Elite Technology specializes in transforming your idea into reality with its full-fledged web & app
                  development services that enable you to seamlessly integrate custom-worthy features and technologies that
                  look alike your business model.
                </p>

                <div className="mt-8 flex items-center gap-6">
                  <a
                    href="#contact"
                    className="inline-block rounded-full px-6 py-3 font-semibold text-black"
                    style={{ background: "linear-gradient(90deg,#1cd9ff,#fc00ff)" }}
                  >
                    TALK WITH CONSULTANT
                  </a>
                </div>

                {/* ISO badges (kept simple) */}
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 md:w-24 md:h-24">
                      <Image src="/images/iso-27001.png" alt="ISO 27001" width={96} height={96} className="object-contain" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 md:w-24 md:h-24">
                      <Image src="/images/iso-9001.png" alt="ISO 9001" width={96} height={96} className="object-contain" />
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: Single combined image (displayed as-is) */}
              <div className="flex items-center justify-center">
                {/* Use the combined image as-is — place it in /public/logos/port-banner-logo.svg */}
                <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
                  <Image
                    src="/images/port-banner-logo.svg"
                    alt="Brand logos"
                    width={900}      // these sizes help layout; Next will serve optimized asset
                    height={700}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Story Telling With Creative Courage ---------------- */}
        <section className="bg-zinc-900/60 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="flex items-start">
                <div className="w-1 bg-[var(--accent-1)] rounded-sm h-16 mr-6 hidden md:block" />
                <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--accent-1)] leading-tight">
                  Story Telling With Creative Courage
                </h2>
              </div>
              <div>
                <p className="text-lg text-slate-300">
                  From award-winning iOS and Android app development to elegant, seamless web development, we build products
                  that thrive at the intersection of business goals and user needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Featured Projects grid ---------------- */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-[var(--accent-1)]">Featured Projects</h2>
            <p className="mt-3 text-slate-300 max-w-3xl">
              A selection of our work across industries — mobile, web, and full-stack systems with exceptional UX.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((p) => (
              <article key={p.id} className="group rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/40">
                <div className="w-full h-44 md:h-36 lg:h-44 relative">
                  <Image src={p.img} alt={p.title} fill className="object-contain p-2 m-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-slate-300">{p.tag}</p>

                  {/* <div className="mt-4 flex items-center justify-between">
                    {p.caseStudy && <a
                      href={`/${p.caseStudy}`}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-[#1cd9ff] to-[#fc00ff] text-black font-semibold text-sm"
                    >
                      View Case
                    </a>}
                  </div> */}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
