'use client';

import { motion } from 'framer-motion';
import { techStack } from '@/lib/constants';

const categories = [
  { key: 'ai' as const, label: 'AI & Machine Learning' },
  { key: 'cloud' as const, label: 'Cloud Platforms' },
  { key: 'engineering' as const, label: 'Engineering' },
  { key: 'data' as const, label: 'Data & Integration' },
];

export default function TechStack() {
  return (
    <section className="py-24 lg:py-32 border-t border-stone-200/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium text-[#2563eb] tracking-wide uppercase">
            Technology
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a]">
            Built with the right tools,{' '}
            <span className="text-stone-400">every time.</span>
          </h2>
        </motion.div>

        {/* Tech categories */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
                {cat.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {techStack[cat.key].map((tech: string) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-600 hover:border-stone-300 hover:text-[#1a1a1a] transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
