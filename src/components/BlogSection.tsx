// components/BlogSection.tsx
import React from "react";

type Post = {
  id: string | number;
  title: string;
  excerpt: string;
  href?: string;
};

const POSTS: Post[] = [
  {
    id: 1,
    title: "What makes Agile Methodology so essential for every project?",
    excerpt:
      "In today’s rapidly evolving business landscape, static methodologies like waterfall struggle to keep up. Meta App Coders understands the need for adaptability in project management.",
    href: "#",
  },
  {
    id: 2,
    title: "Difference between web application and mobile application",
    excerpt:
      "In a rapidly advancing technological landscape, businesses face a critical decision: mobile app or web app? Meta App Coders navigates this choice with precision so your digital strategy aligns with your goals.",
    href: "#",
  },
  {
    id: 3,
    title: "Streamlining Development: HTML, Bootstrap, and DevOps for Powerful Web Applications",
    excerpt:
      "User experience reigns supreme. Meta App Coders offers a comprehensive guide to leverage HTML, Bootstrap, and DevOps for creating online applications that excel in form and function.",
    href: "#",
  },
  {
    id: 4,
    title: "Hybrid Mobile Applications vs Native Mobile Applications",
    excerpt:
      "Having a mobile app for your business is essential. Meta App Coders offers expert guidance to help you navigate the mobile app market and harness the full potential of mobile technology.",
    href: "#",
  },
  {
    id:5,
    title:"Hybrid vs Native Mobile Applications - Pros and Cons",
    excerpt:"In the realm of mobile app development, the decision between native and hybrid approaches is crucial. Meta App Coders understands the intricacies involved and guides you through the process, considering factors like project requirements, budget constraints, and target audience. This article delves into the nuances of native and hybrid mobile applications, examining their advantages, drawbacks, and the potential benefits for your business.",
    href: "#"
  }
];

export default function BlogSection(){
  return (
    <section
      aria-labelledby="blog-heading"
      className="max-w-7xl mx-auto px-6 py-16"
      style={{ ["--accent-1" as string]: "#02f8b5", ["--accent-2" as string]: "#1cd9ff" }}
    >
      <h2 id="blog-heading" className="sr-only">
        Blog
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {POSTS.map((post) => (
          <article
            key={post.id}
            className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            aria-labelledby={`post-${post.id}-title`}
          >
            <h3 id={`post-${post.id}-title`} className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
              {post.title}
            </h3>

            <p className="mt-4 text-sm md:text-base text-slate-300 leading-relaxed max-w-none">
              {post.excerpt}
            </p>

            <div className="mt-6">
              <a
                href={post.href ?? "#"}
                className="inline-block rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-[var(--accent-1)] bg-transparent hover:bg-white/5 transition-colors"
                aria-label={`Read more about ${post.title}`}
                role="button"
              >
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
