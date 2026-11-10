'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { engagementModels } from '@/lib/constants';
import { Badge } from '@astryxdesign/core/Badge';

export default function CTA() {
  return (
    <section id="engagement" className="py-24 lg:py-32 bg-stone-100/70 border-t border-stone-200/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#2563eb] shadow-2xs mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#2563eb]" />
            <span>Transparent Engagement</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950">
            Two distinct products: <br className="hidden sm:inline" />
            <span className="text-stone-400 font-medium">Expert judgment or engineering execution.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-stone-600 leading-relaxed">
            A paid technical consultation and a full-scale software build are different products.
            We offer transparent, distinct structures for each without conflicting commitments.
          </p>
        </motion.div>

        {/* The Two Main Tracks */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {engagementModels.map((item, i) => {
            const isAdvisory = item.type === 'consulting';
            const Icon = isAdvisory ? MessageSquare : Code2;

            return (
              <motion.div
                key={item.track}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-stone-200/90 bg-white p-8 md:p-10 shadow-sm hover:border-stone-300 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        isAdvisory
                          ? 'bg-blue-50 text-[#2563eb]'
                          : 'bg-stone-950 text-white'
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge
                      variant={isAdvisory ? 'blue' : 'neutral'}
                      label={item.badge}
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-stone-950">
                    {item.track}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#2563eb]">
                    {item.headline}
                  </p>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-stone-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
                        Scope &amp; Inclusions
                      </span>
                      <span className="text-xs font-mono font-medium text-stone-900 bg-stone-100 px-2.5 py-0.5 rounded">
                        {item.startingFrom}
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-xs md:text-sm text-stone-600">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#2563eb] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-100">
                  <a
                    href={`#contact?type=${item.type}`}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 shadow-sm ${
                      isAdvisory
                        ? 'border border-stone-300 bg-white text-stone-900 hover:bg-stone-50'
                        : 'bg-stone-950 text-white hover:bg-[#2563eb]'
                    }`}
                  >
                    <span>{isAdvisory ? 'Book Consultation ($300+)' : 'Initiate Implementation'}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
