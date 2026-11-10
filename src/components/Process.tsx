'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/lib/constants';
import { CheckCircle2, GitBranch } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 border-t border-stone-200/80 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-stone-600 mb-3">
            <GitBranch className="h-3.5 w-3.5 text-[#2563eb]" />
            <span>Delivery Cadence</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950 leading-[1.12]">
            How we take projects from problem{' '}
            <span className="text-stone-400 font-medium">to production.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-stone-600 leading-relaxed">
            Collaborative, disciplined, and focused on verifiable outcomes and clear deliverables at every phase.
          </p>
        </motion.div>

        {/* Sequential Delivery Pipeline */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col justify-between p-7 rounded-2xl border border-stone-200/80 bg-stone-50/50 hover:bg-stone-50/90 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-stone-200/50">
                  <span className="text-2xl font-mono font-bold text-stone-300">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 bg-white border border-stone-200 px-2.5 py-0.5 rounded-full">
                    Phase 0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-stone-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center gap-2 text-[11px] font-mono text-stone-800">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#2563eb] shrink-0" />
                <span className="truncate">{step.deliverable}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
