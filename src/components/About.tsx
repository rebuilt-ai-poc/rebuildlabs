'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Globe2, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/constants';
import { StatusDot } from '@astryxdesign/core/StatusDot';
import { Badge } from '@astryxdesign/core/Badge';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-stone-200/60 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: About Studio Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-stone-700 mb-3">
                <StatusDot variant="success" label="Active" isPulsing />
                <span>Founder Credibility &amp; Oversight</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 leading-[1.12]">
                Senior architectural oversight.{' '}
                <span className="text-stone-400 font-medium">Zero agency bloat.</span>
              </h2>
            </div>

            <div className="space-y-4 text-base text-stone-600 leading-relaxed">
              <p>
                {siteConfig.name} is an independent, principal-led AI consulting and engineering studio founded by Aditya Kadam. We combine enterprise consulting discipline with direct, hands-on technical execution.
              </p>
              <p>
                We collaborate directly with founders, CTOs, and technical leaders to architect, validate, and deploy AI-powered systems — from initial feasibility and data pipelines through production deployment.
              </p>
              <blockquote className="border-l-2 border-[#2563eb] pl-4 italic text-sm font-medium text-stone-800 my-4">
                &ldquo;{siteConfig.tagline}&rdquo;
              </blockquote>
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50">
                <div className="flex items-center gap-2 text-[#2563eb]">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-900">Direct Engineering</span>
                </div>
                <p className="mt-1.5 text-xs text-stone-600">
                  Clients communicate directly with solutions architects, never account managers.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50">
                <div className="flex items-center gap-2 text-[#2563eb]">
                  <Globe2 className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-900">Proven Delivery</span>
                </div>
                <p className="mt-1.5 text-xs text-stone-600">
                  Experience delivering solutions across enterprise systems and production AI pipelines.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Founder Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="overflow-hidden rounded-3xl border border-stone-200/90 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-12">
                {/* Photo Column */}
                <div className="sm:col-span-5 relative min-h-[320px] sm:min-h-full bg-stone-900">
                  <Image
                    src="/aditya-kadam.jpg"
                    alt="Aditya Kadam — Founder & AI Engineer, Rebuild Labs"
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-cover object-top grayscale contrast-[1.05]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:hidden" />
                  <div className="absolute bottom-3 left-3 sm:hidden">
                    <span className="text-xs font-mono uppercase tracking-wider text-white bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      Aditya Kadam
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <Badge variant="blue" label="Founder & Principal" />
                      <div className="flex items-center gap-1.5">
                        <StatusDot variant="success" label="Active" />
                        <span className="text-[10px] font-mono uppercase text-stone-500">Available</span>
                      </div>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-stone-950">
                      Aditya Kadam
                    </h3>
                    <p className="text-xs font-mono text-[#2563eb] mt-0.5">
                      Principal AI Architect &amp; Software Engineer
                    </p>

                    <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                      Specializing in production LLM systems, agentic automation, and enterprise cloud architecture. Personally scopes, designs, and builds client engagements.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-stone-100">
                    <a
                      href="https://about.rebuildlabs.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-between p-3 rounded-xl border border-stone-200 bg-stone-50/70 hover:bg-stone-100 hover:border-stone-300 transition-colors text-xs font-mono text-stone-800"
                    >
                      <span className="flex items-center gap-2">
                        <ExternalLink className="h-3.5 w-3.5 text-[#2563eb]" />
                        <span>Portfolio: about.rebuildlabs.in</span>
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-stone-400" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/adityakadamm/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-between p-3 rounded-xl border border-stone-200 bg-stone-50/70 hover:bg-stone-100 hover:border-stone-300 transition-colors text-xs font-mono text-stone-800"
                    >
                      <span className="flex items-center gap-2">
                        <LinkedInIcon className="h-3.5 w-3.5 text-[#2563eb]" />
                        <span>LinkedIn: /in/adityakadamm</span>
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-stone-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
