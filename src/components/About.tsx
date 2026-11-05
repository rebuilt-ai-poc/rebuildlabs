'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Cpu, Globe2 } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-stone-200/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: About the studio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <p className="text-xs font-semibold text-[#2563eb] tracking-widest uppercase">
                Principal-Led Studio
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-[1.1]">
                Senior architectural oversight.{' '}
                <span className="text-stone-400">Zero agency bloat.</span>
              </h2>
            </div>

            <div className="space-y-4 text-base text-stone-600 leading-relaxed">
              <p>
                Rebuild Labs is an independent, principal-led AI consulting and engineering studio founded by Aditya Kadam. We combine enterprise consulting discipline with direct, hands-on technical execution.
              </p>
              <p>
                We collaborate directly with founders, CTOs, and technical leaders to architect, validate, and deploy AI-powered systems — from initial feasibility and data pipelines through production deployment.
              </p>
              <blockquote className="border-l-2 border-[#2563eb] pl-4 italic text-sm font-medium text-stone-700 my-4">
                &ldquo;{siteConfig.tagline}&rdquo;
              </blockquote>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-stone-200 bg-white/60">
                <div className="flex items-center gap-2 text-[#2563eb]">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-900">Direct Engineering</span>
                </div>
                <p className="mt-1.5 text-xs text-stone-500">
                  Clients communicate directly with solutions architects, never account managers.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-stone-200 bg-white/60">
                <div className="flex items-center gap-2 text-[#2563eb]">
                  <Globe2 className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-900">Proven Delivery</span>
                </div>
                <p className="mt-1.5 text-xs text-stone-500">
                  Experience delivering solutions across Southeast Asia and global enterprise teams.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Founder Card with Cleaned Portrait */}
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
                <div className="sm:col-span-5 relative min-h-[300px] sm:min-h-full bg-stone-900">
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
                      <span className="text-xs font-mono uppercase tracking-wider text-[#2563eb] bg-[#2563eb]/10 px-2.5 py-1 rounded-full">
                        Founder &amp; AI Architect
                      </span>
                      <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Available for Q2
                      </div>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#1a1a1a]">
                      Aditya Kadam
                    </h3>
                    <p className="text-xs font-medium text-stone-500 mt-0.5">
                      Enterprise Solutions Architect &amp; AI Engineer
                    </p>

                    <div className="mt-4 space-y-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                      <p>
                        3+ years of specialized experience architecting production GenAI systems,
                        enterprise RAG pipelines, and high-concurrency cloud software.
                      </p>
                      <p>
                        Track record includes architecting and deploying systems for high-stakes
                        Southeast Asian enterprise client delivery.
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-stone-100 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                        <Cpu className="h-3 w-3 text-stone-500" /> GenAI / Agentic
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                        Multi-Cloud
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                        Production SOW
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <a
                      href={siteConfig.founderPortfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1a1a1a] hover:text-[#2563eb] transition-colors group"
                    >
                      <span>Founder Portfolio</span>
                      <span className="text-[10px] text-stone-400 font-mono">(about.rebuildlabs.in)</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <span className="text-stone-300">·</span>

                    <a
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-[#2563eb] transition-colors group"
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
