import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — Rebuild Labs',
  description: 'Privacy Policy and data governance standards at Rebuild Labs.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] text-[#1a1a1a]">
      {/* Top Bar */}
      <div className="border-b border-stone-200/80 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Rebuild Labs
          </Link>
          <span className="text-xs text-stone-400 font-mono">Last Updated: March 2025</span>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-6 py-16 lg:py-24 space-y-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2563eb]">
            Legal &amp; Compliance
          </span>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-[#1a1a1a]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Rebuild Labs (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is dedicated to protecting client confidentiality,
            intellectual property, and personal data. This document outlines our data practices across our website
            (<a href="https://rebuildlabs.in" className="text-[#2563eb] underline">rebuildlabs.in</a>) and consulting client engagements.
          </p>
        </div>

        <section className="space-y-4 border-t border-stone-200 pt-8">
          <h2 className="text-xl font-bold text-[#1a1a1a]">1. Information We Collect</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            When you submit an inquiry through our website, we collect your name, business email address, company name,
            and project scope details. We do not sell, rent, or trade your contact information to third-party data brokers under any circumstances.
          </p>
        </section>

        <section className="space-y-4 border-t border-stone-200 pt-8">
          <h2 className="text-xl font-bold text-[#1a1a1a]">2. Client Confidentiality &amp; Proprietary Data</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            In our consulting and engineering work, any codebase, proprietary weights, domain data, and strategic roadmaps
            provided by clients remain the exclusive property of the client. All engagements are safeguarded by mutual Non-Disclosure Agreements (NDAs).
          </p>
        </section>

        <section className="space-y-4 border-t border-stone-200 pt-8">
          <h2 className="text-xl font-bold text-[#1a1a1a]">3. Third-Party Infrastructure</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Our public website is hosted on secure cloud infrastructure (Vercel). Anonymous telemetry and performance
            metrics may be collected solely to optimize page loading and system reliability.
          </p>
        </section>

        <section className="space-y-4 border-t border-stone-200 pt-8">
          <h2 className="text-xl font-bold text-[#1a1a1a]">4. Contact</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            If you have questions regarding this privacy policy or your confidential project information, reach out directly to{' '}
            <a href="mailto:aditya@rebuildlabs.in" className="text-[#2563eb] font-medium hover:underline">
              aditya@rebuildlabs.in
            </a>{' '}
            or call{' '}
            <a href="tel:+917768084382" className="text-[#2563eb] font-medium hover:underline">
              +91 77680 84382
            </a>.
          </p>
        </section>
      </article>
    </main>
  );
}
