'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, AlertCircle } from 'lucide-react';
import { problems } from '@/lib/constants';

export default function Problems() {
  return (
    <section id="problems" className="py-24 lg:py-32 bg-[#121316] text-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#60a5fa] mb-4">
            <AlertCircle className="h-3.5 w-3.5 text-[#3b82f6]" />
            Business Bottlenecks
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Where AI initiatives stall{' '}
            <span className="text-stone-400">before reaching production.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-stone-400 leading-relaxed">
            Most organizations don&apos;t lack ambition or model access. They struggle with data retrieval accuracy,
            fragile prototype scripts, and the engineering gap between a demo and hardened software.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={item.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#60a5fa] bg-[#2563eb]/10 px-2.5 py-1 rounded">
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono text-stone-500">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {item.problem}
                </h3>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563eb]/20 text-[#60a5fa]">
                    <ArrowRight className="h-3 w-3" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-1">
                      Rebuild Labs Approach
                    </p>
                    <p className="text-sm text-stone-300 leading-relaxed">
                      {item.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs md:text-sm font-semibold text-[#121316] hover:bg-[#3b82f6] hover:text-white transition-all duration-200 shrink-0"
          >
            Discuss Your Bottleneck
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
