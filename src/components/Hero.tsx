'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

function NetworkVisualization() {
  const nodes = [
    { cx: 150, cy: 120, r: 4 },
    { cx: 300, cy: 80, r: 3 },
    { cx: 450, cy: 150, r: 5 },
    { cx: 200, cy: 250, r: 3 },
    { cx: 380, cy: 220, r: 4 },
    { cx: 520, cy: 100, r: 3 },
    { cx: 100, cy: 300, r: 3 },
    { cx: 480, cy: 280, r: 4 },
    { cx: 250, cy: 180, r: 3 },
    { cx: 560, cy: 200, r: 3 },
  ];

  const edges: [number, number][] = [
    [0, 1], [1, 2], [0, 3], [3, 4], [2, 5], [1, 4],
    [3, 6], [4, 7], [0, 8], [8, 4], [5, 9], [2, 9],
  ];

  return (
    <svg
      viewBox="0 0 660 380"
      className="w-full max-w-2xl mx-auto opacity-[0.12]"
      fill="none"
      aria-hidden="true"
    >
      {edges.map(([from, to], i) => (
        <motion.line
          key={`edge-${i}`}
          x1={nodes[from].cx}
          y1={nodes[from].cy}
          x2={nodes[to].cx}
          y2={nodes[to].cy}
          stroke="#1a1a1a"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.8 + i * 0.08, ease: 'easeOut' }}
        />
      ))}
      {nodes.map((node, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={node.cx}
          cy={node.cy}
          r={node.r}
          fill="#1a1a1a"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 + i * 0.06 }}
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid bg-grid-fade" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-medium text-stone-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb]" />
              Principal-Led AI Consulting &amp; Engineering Studio
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1a1a1a] leading-[1.05]"
          >
            Stop experimenting.
            <br />
            <span className="text-stone-400">Start shipping AI that works.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-6 text-lg md:text-xl text-stone-500 max-w-2xl leading-relaxed"
          >
            We design, engineer and deploy AI systems and custom software that solve operational problems, connect enterprise data and move beyond proof of concept.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-7 py-3.5 text-sm font-medium text-white hover:bg-[#2563eb] transition-all duration-200 shadow-lg shadow-black/10"
            >
              Start an Implementation
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#engagement"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-medium text-[#1a1a1a] hover:border-stone-400 hover:bg-stone-50 transition-all duration-200"
            >
              Book an Advisory Session
            </a>
          </motion.div>

          {/* Dual offerings strip */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-8 flex flex-wrap gap-2 text-xs text-stone-500 font-mono"
          >
            <span className="rounded-md border border-stone-200 bg-white/70 px-2.5 py-1">
              AI Advisory &amp; Architecture
            </span>
            <span className="rounded-md border border-stone-200 bg-white/70 px-2.5 py-1">
              Agentic Workflows
            </span>
            <span className="rounded-md border border-stone-200 bg-white/70 px-2.5 py-1">
              Enterprise RAG
            </span>
            <span className="rounded-md border border-stone-200 bg-white/70 px-2.5 py-1">
              Custom Software
            </span>
          </motion.div>
        </div>

        {/* Network Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 lg:mt-20"
        >
          <NetworkVisualization />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-5 w-5 text-stone-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
