'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks, siteConfig } from '@/lib/constants';
import { StatusDot } from '@astryxdesign/core/StatusDot';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-stone-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Studio Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-9 w-9 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/brand/logo-icon-transparent.png"
                alt="Rebuild Labs Logo"
                width={36}
                height={36}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-stone-950">
                {siteConfig.name}
              </span>
              <div className="flex items-center gap-1.5 -mt-0.5">
                <StatusDot variant="success" label="Active" isPulsing />
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500">
                  Principal Studio
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-stone-950 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Action Pill */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-stone-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#2563eb] transition-colors duration-200 shadow-sm"
            >
              Initiate Project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-stone-950"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-stone-200"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 text-sm font-medium text-stone-700 hover:text-stone-950 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-stone-100">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-stone-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#2563eb] transition-colors"
                >
                  Initiate Project
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
