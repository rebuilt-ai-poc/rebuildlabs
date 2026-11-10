'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { StatusDot } from '@astryxdesign/core/StatusDot';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
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
      viewBox="0 0 660 360"
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
          transition={{ duration: 1.4, delay: 0.6 + i * 0.06, ease: 'easeOut' }}
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
          transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden border-b border-stone-200/80">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid bg-grid-fade" />

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Studio Category Lead */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-stone-200 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-stone-700 shadow-sm">
              <StatusDot variant="accent" label="Principal" isPulsing />
              <span>Principal-Led AI Consulting &amp; Engineering Studio</span>
            </div>
          </motion.div>

          {/* Primary Headline */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-stone-950 leading-[1.04]"
          >
            Stop experimenting.
            <br />
            <span className="text-stone-400 font-medium">Start shipping AI that works.</span>
          </motion.h1>

          {/* Value Proposition Body */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-6 text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed"
          >
            We design, engineer and deploy AI systems and custom software that solve operational problems, connect enterprise data and move beyond proof of concept.
          </motion.p>

          {/* Action Affordance */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#2563eb] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Start an Implementation
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#engagement"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-semibold text-stone-900 hover:border-stone-400 hover:bg-stone-50 transition-all duration-200"
            >
              Book an Advisory Session
            </a>
          </motion.div>

          {/* Core Capability Tokens */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-10 flex flex-wrap gap-2 text-xs font-mono text-stone-600"
          >
            <span className="rounded-lg border border-stone-200 bg-white/80 px-3 py-1.5 shadow-2xs">
              AI Advisory &amp; Architecture
            </span>
            <span className="rounded-lg border border-stone-200 bg-white/80 px-3 py-1.5 shadow-2xs">
              Agentic Workflows
            </span>
            <span className="rounded-lg border border-stone-200 bg-white/80 px-3 py-1.5 shadow-2xs">
              Enterprise RAG &amp; Data
            </span>
            <span className="rounded-lg border border-stone-200 bg-white/80 px-3 py-1.5 shadow-2xs">
              Custom Cloud Software
            </span>
          </motion.div>
        </div>

        {/* Dynamic Topology Graphic */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-14 lg:mt-18"
        >
          <NetworkVisualization />
        </motion.div>
      </div>

      {/* Frame Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-5 w-5 text-stone-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
