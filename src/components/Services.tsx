'use client';

import { motion } from 'framer-motion';
import { Compass, Code2, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { offerings } from '@/lib/constants';

export default function Services() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-[#FAFAF9]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#2563eb] shadow-sm mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#2563eb]" />
            Solutions &amp; Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-[1.15]">
            Two core offerings: <br className="hidden sm:inline" />
            <span className="text-stone-400">Expert judgment &amp; engineering execution.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-stone-600 leading-relaxed">
            Whether you need clarity before committing capital or a hands-on engineering partner to deploy software,
            we structure engagements around your exact stage and velocity.
          </p>
        </motion.div>

        {/* Dual Track Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Pillar 1: AI Advisory & Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-3xl border border-stone-200/90 bg-white p-8 md:p-10 shadow-sm"
          >
            <div className="flex items-center justify-between pb-6 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#2563eb]">
                  <Compass className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">
                    AI Advisory &amp; Strategy
                  </h3>
                  <p className="text-xs text-stone-500 font-mono">
                    Track A · Expert Judgment
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full">
                Consulting
              </span>
            </div>

            <p className="mt-6 text-sm text-stone-600 leading-relaxed">
              For founders and technology leaders who need an experienced architecture review, feasibility audit, or paid consultation before committing full development budgets.
            </p>

            <div className="mt-8 space-y-6">
              {offerings.advisory.map((item) => (
                <div key={item.title} className="p-4 rounded-2xl bg-stone-50/70 border border-stone-200/60">
                  <h4 className="text-sm font-semibold text-[#1a1a1a]">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-[#2563eb]">
                    <CheckCircle2 className="h-3 w-3 shrink-0" />
                    <span>{item.deliverable}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100">
              <a
                href="#engagement"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-xs md:text-sm font-semibold text-[#1a1a1a] hover:bg-stone-50 transition-colors"
              >
                Explore Advisory Engagements
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Pillar 2: Engineering & Development */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 rounded-3xl border border-stone-200/90 bg-white p-8 md:p-10 shadow-sm"
          >
            <div className="flex items-center justify-between pb-6 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-900 text-white">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">
                    Engineering &amp; Development
                  </h3>
                  <p className="text-xs text-stone-500 font-mono">
                    Track B · Hands-On Execution
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full">
                Implementation
              </span>
            </div>

            <p className="mt-6 text-sm text-stone-600 leading-relaxed">
              For teams ready to move past brittle prototypes. We design, build, and deploy production-grade software with deterministic evaluations and contract-governed rights.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {offerings.engineering.map((item) => (
                <div key={item.title} className="p-4 rounded-2xl bg-stone-50/70 border border-stone-200/60 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-[#1a1a1a]">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-200/40 flex items-center gap-1.5 text-[11px] font-mono text-[#2563eb]">
                    <CheckCircle2 className="h-3 w-3 shrink-0" />
                    <span>{item.deliverable}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-6 py-3.5 text-xs md:text-sm font-semibold text-white hover:bg-[#2563eb] transition-colors shadow-sm"
              >
                Start an Engineering Implementation
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
