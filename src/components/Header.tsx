'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks, siteConfig } from '@/lib/constants';

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
          ? 'bg-white/80 backdrop-blur-xl border-b border-stone-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#1a1a1a] flex items-center justify-center">
              <span className="text-white text-sm font-bold">R</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-[#1a1a1a]">
              {siteConfig.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-stone-600 hover:text-[#1a1a1a] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#1a1a1a] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#2563eb] transition-colors duration-200"
            >
              Initiate Project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-[#1a1a1a]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
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
                  className="block py-2.5 text-base text-stone-600 hover:text-[#1a1a1a] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#1a1a1a] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#2563eb] transition-colors"
              >
                Initiate Project
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
