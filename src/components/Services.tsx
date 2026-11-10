'use client';

import { motion } from 'framer-motion';
import { Compass, Code2, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { offerings } from '@/lib/constants';
import { Badge } from '@astryxdesign/core/Badge';

export default function Services() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-[#FAFAF9]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#2563eb] shadow-2xs mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#2563eb]" />
            <span>Studio Offerings</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 leading-[1.12]">
            Two independent capabilities: <br className="hidden sm:inline" />
            <span className="text-stone-400 font-medium">Expert judgment &amp; engineering execution.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-stone-600 leading-relaxed">
            Whether you need clarity before committing capital or a hands-on engineering partner to deploy software,
            we structure engagements around your exact stage and technical readiness.
          </p>
        </motion.div>

        {/* Dual Pillar Architecture */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Pillar 1: AI Advisory & Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-stone-200/90 bg-white p-8 md:p-10 shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#2563eb]">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-950">
                      AI Advisory &amp; Architecture
                    </h3>
                    <p className="text-xs text-stone-500 font-mono">
                      Track A · Expert Guidance
                    </p>
                  </div>
                </div>
                <Badge variant="blue" label="Advisory" />
              </div>

              <p className="mt-6 text-sm text-stone-600 leading-relaxed">
                For founders and engineering leaders who need senior architecture guidance, feasibility reviews, or paid consultation before committing full development capital.
              </p>

              <div className="mt-8 space-y-5">
                {offerings.advisory.map((item) => (
                  <div key={item.title} className="p-4 rounded-2xl bg-stone-50/70 border border-stone-200/60">
                    <h4 className="text-sm font-semibold text-stone-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-[#2563eb]">
                      <CheckCircle2 className="h-3 w-3 shrink-0" />
                      <span>{item.deliverable}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100">
              <a
                href="#engagement"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-xs md:text-sm font-semibold text-stone-900 hover:bg-stone-50 transition-colors"
              >
                Review Advisory Options ($300+)
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Pillar 2: Production AI Engineering & Development */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-stone-200/90 bg-white p-8 md:p-10 shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-900 text-white">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-950">
                      Production AI Engineering
                    </h3>
                    <p className="text-xs text-stone-500 font-mono">
                      Track B · Systems Execution
                    </p>
                  </div>
                </div>
                <Badge variant="neutral" label="Engineering" />
              </div>

              <p className="mt-6 text-sm text-stone-600 leading-relaxed">
                Full-lifecycle engineering for systems that must run reliably in production: deterministic business logic, controlled LLM invocation, enterprise RAG, and custom software.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {offerings.engineering.map((item) => (
                  <div key={item.title} className="p-4 rounded-2xl bg-stone-50/70 border border-stone-200/60 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-stone-900">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-stone-200/40 flex items-center gap-1.5 text-[11px] font-mono text-stone-700">
                      <CheckCircle2 className="h-3 w-3 text-[#2563eb] shrink-0" />
                      <span>{item.deliverable}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100">
              <a
                href="#contact?type=development"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-950 px-6 py-3.5 text-xs md:text-sm font-semibold text-white hover:bg-[#2563eb] transition-colors shadow-sm"
              >
                Inquire for Implementation ($15,000+)
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
