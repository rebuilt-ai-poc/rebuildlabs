'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/lib/constants';
import { CheckCircle2 } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 border-t border-stone-200/80 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-[#2563eb]">
            Delivery Cadence
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a1a]">
            How we take projects from problem{' '}
            <span className="text-stone-400">to production.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-stone-600 leading-relaxed">
            Collaborative, disciplined, and focused on verifiable outcomes and clear deliverables at every phase.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col justify-between p-6 rounded-2xl border border-stone-200/70 bg-stone-50/50 hover:bg-stone-50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-bold text-stone-300 tabular-nums">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-stone-400">
                    Phase 0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#1a1a1a]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] font-mono text-[#2563eb]">
                <CheckCircle2 className="h-3 w-3 shrink-0" />
                <span>{step.deliverable}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
