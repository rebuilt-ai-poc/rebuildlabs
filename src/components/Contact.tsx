'use client';

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react';
import { siteConfig } from '@/lib/constants';
import { StatusDot } from '@astryxdesign/core/StatusDot';

type EngagementType = 'consulting' | 'development';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  description: string;
  budget: string;
  type: EngagementType;
  honeypot: string; // Anti-spam trap
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  service: '',
  description: '',
  budget: '',
  type: 'consulting',
  honeypot: '',
};

const serviceOptions = [
  'Paid Technical Consultation ($300/session)',
  'Architecture & Feasibility Audit',
  'GenAI & Agentic Systems Build',
  'Enterprise Knowledge & RAG Pipeline',
  'Custom Software & Cloud Engineering',
  'Intelligent Workflow Automation',
  'Fractional AI Architecture Leadership',
  'Other / Custom Scope',
];

const budgetRanges = [
  'Hourly / Advisory Consultation ($300 – $1,500)',
  'Architecture Audit Sprint ($2,500 – $7,500)',
  'Targeted Build Sprint ($10,000 – $25,000)',
  'Full Implementation ($25,000 – $60,000)',
  'Enterprise Scope ($60,000+)',
  'Flexible / To be determined during scoping',
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.includes('type=development')) {
        return { ...initialFormData, type: 'development' };
      }
    }
    return initialFormData;
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle URL hash changes when navigating between CTAs
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('type=development')) {
        setFormData((prev) => (prev.type === 'development' ? prev : { ...prev, type: 'development' }));
      } else if (hash.includes('type=consulting')) {
        setFormData((prev) => (prev.type === 'consulting' ? prev : { ...prev, type: 'consulting' }));
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Check honeypot for bot spam
    if (formData.honeypot) {
      // Silently pretend success to bots
      setStatus('success');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong while submitting. Please try again.');
      }

      setStatus('success');
      setFormData(initialFormData);
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Unable to send inquiry. Please try again or email directly.'
      );
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-stone-950 text-white relative overflow-hidden">
      {/* Background glow & subtle pattern */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-stone-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          {/* Left Column: Context & Direct Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-blue-400 mb-4">
                <StatusDot variant="accent" label="Direct" isPulsing />
                <span>Direct Studio Access</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                Start a project or <span className="text-stone-400 font-medium">request an advisory session.</span>
              </h2>
              <p className="mt-4 text-base text-stone-400 leading-relaxed">
                Whether you need a 1-on-1 technical architecture review or full-lifecycle production software engineering, share your requirements below. Every inquiry is reviewed directly by our founder within 24 business hours.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8 space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-blue-400 shrink-0 mt-0.5">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-stone-400">
                    Direct Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-blue-400 shrink-0 mt-0.5">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-stone-400">
                    Direct Phone / WhatsApp
                  </p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="mt-1 text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-blue-400 shrink-0 mt-0.5">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-stone-400">
                    Response SLA
                  </p>
                  <p className="mt-1 text-sm text-stone-300">
                    Within 24 business hours. Direct conversation with engineering.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-blue-400 shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-stone-400">
                    Global Delivery
                  </p>
                  <p className="mt-1 text-sm text-stone-300">
                    Based in India, operating across US, EMEA &amp; APAC time zones.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Booking Notice */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-blue-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Prefer to talk directly?</h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Select &ldquo;Consulting&rdquo; in the form or mention your availability to arrange an introductory discussion.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Controlled Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10 backdrop-blur-xl shadow-2xl">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                    <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. We have received your project details and will review your technical scope within 24 hours.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => setStatus('idle')}
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field (hidden from real users) */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        name="honeypot"
                        value={formData.honeypot}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Engagement Type Selector */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-stone-400 mb-2">
                        Engagement Track
                      </label>
                      <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-white/5 border border-white/10">
                        <button
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, type: 'consulting' }))}
                          className={`py-2.5 text-xs md:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                            formData.type === 'consulting'
                              ? 'bg-white text-stone-950 shadow-sm'
                              : 'text-stone-400 hover:text-white'
                          }`}
                        >
                          Consulting &amp; Advisory ($300+)
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, type: 'development' }))}
                          className={`py-2.5 text-xs md:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                            formData.type === 'development'
                              ? 'bg-white text-stone-950 shadow-sm'
                              : 'text-stone-400 hover:text-white'
                          }`}
                        >
                          Engineering &amp; Build ($15,000+)
                        </button>
                      </div>
                    </div>

                    {/* Two-Column: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-mono text-stone-300 mb-1.5">
                          Your Name <span className="text-blue-400">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Sarah Lin"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-stone-600 focus:border-blue-500 focus:bg-white/[0.07] focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-mono text-stone-300 mb-1.5">
                          Work Email <span className="text-blue-400">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="sarah@company.com"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-stone-600 focus:border-blue-500 focus:bg-white/[0.07] focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Two-Column: Company & Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-xs font-mono text-stone-300 mb-1.5">
                          Company / Organization
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Corp or Stealth Startup"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-stone-600 focus:border-blue-500 focus:bg-white/[0.07] focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-xs font-mono text-stone-300 mb-1.5">
                          Primary Service <span className="text-blue-400">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-stone-900 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none transition-all cursor-pointer"
                        >
                          <option value="" disabled>
                            Select primary requirement
                          </option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-stone-900 text-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Budget Range (Optional) */}
                    <div>
                      <label htmlFor="budget" className="block text-xs font-mono text-stone-300 mb-1.5">
                        Estimated Budget Range <span className="text-stone-500 font-normal">(optional)</span>
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-stone-900 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="">Select an approximate range</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b} className="bg-stone-900 text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Project Description */}
                    <div>
                      <label htmlFor="description" className="block text-xs font-mono text-stone-300 mb-1.5">
                        Project Overview &amp; Key Goals <span className="text-blue-400">*</span>
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        required
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Tell us what you're looking to achieve, existing constraints, data assets, or timeline..."
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-stone-600 focus:border-blue-500 focus:bg-white/[0.07] focus:outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Error Notice */}
                    {status === 'error' && (
                      <div className="flex items-center gap-2.5 rounded-xl border border-rose-500/20 bg-rose-500/10 p-3.5 text-xs text-rose-300">
                        <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-stone-950 hover:bg-blue-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 shadow-lg cursor-pointer"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Processing submission...
                        </>
                      ) : (
                        <>
                          Submit Inquiry
                          <ArrowUpRight className="h-4 w-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-stone-500">
                      Commercial confidentiality assured. We sign standard NDAs before technical discovery.
                    </p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
