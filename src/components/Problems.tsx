'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, AlertTriangle } from 'lucide-react';
import { problems } from '@/lib/constants';
import { StatusDot } from '@astryxdesign/core/StatusDot';

export default function Problems() {
  return (
    <section id="problems" className="py-24 lg:py-32 bg-stone-950 text-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-blue-400 mb-4">
            <AlertTriangle className="h-3.5 w-3.5 text-blue-400" />
            <span>Diagnostic Audit</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]">
            Where AI initiatives stall{' '}
            <span className="text-stone-500">before reaching production.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-stone-400 leading-relaxed">
            Most organizations don&apos;t lack ambition or model access. They struggle with data retrieval accuracy,
            fragile prototype scripts, and the engineering gap between a proof-of-concept and hardened enterprise software.
          </p>
        </motion.div>

        {/* Astryx Row-Structured Failure Mode Ledger */}
        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {problems.map((item, i) => (
            <motion.div
              key={item.tag}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group hover:bg-white/[0.02] transition-colors -mx-4 px-4 rounded-xl"
            >
              {/* Col 1: Status & Tag (3 cols) */}
              <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-sm font-mono text-stone-500">0{i + 1}</span>
                  <StatusDot variant="error" label="Operational Risk" />
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Col 2: The Bottleneck / Failure Mode (4 cols) */}
              <div className="lg:col-span-4">
                <p className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1.5">
                  Industry Failure Mode
                </p>
                <h3 className="text-lg font-semibold text-white leading-snug group-hover:text-blue-200 transition-colors">
                  {item.problem}
                </h3>
              </div>

              {/* Col 3: Rebuild Labs Engineering Solution (5 cols) */}
              <div className="lg:col-span-5 bg-white/[0.03] border border-white/5 p-5 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                    <ArrowRight className="h-2.5 w-2.5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
                    Rebuild Labs Production Standard
                  </span>
                </div>
                <p className="text-sm text-stone-300 leading-relaxed">
                  {item.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Diagnostic Action Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-base font-semibold text-white">
              Have an operational bottleneck holding back your AI roadmap?
            </h4>
            <p className="text-xs md:text-sm text-stone-400 mt-1">
              We diagnose technical feasibility, data access, and execution risks before committing code.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs md:text-sm font-semibold text-stone-950 hover:bg-blue-600 hover:text-white transition-all duration-200 shrink-0 shadow-sm"
          >
            Schedule a Diagnostic Review
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
