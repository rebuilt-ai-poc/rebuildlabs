import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

const footerNavigation = {
  offerings: [
    { label: 'AI Advisory & Strategy', href: '#solutions' },
    { label: 'Paid Technical Consultations', href: '#solutions' },
    { label: 'GenAI & Agentic Systems', href: '#solutions' },
    { label: 'Enterprise Knowledge & RAG', href: '#solutions' },
    { label: 'Custom Software & Cloud', href: '#solutions' },
    { label: 'Workflow Automation', href: '#solutions' },
  ],
  company: [
    { label: 'Business Bottlenecks', href: '#problems' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Delivery Process', href: '#process' },
    { label: 'Founder & Studio', href: '#about' },
    { label: 'Engagement Models', href: '#engagement' },
    {
      label: "Founder's Portfolio",
      href: siteConfig.founderPortfolio,
      external: true,
    },
  ],
  socials: [
    {
      label: 'LinkedIn',
      href: siteConfig.linkedin,
      external: true,
    },
    {
      label: "Founder's Portfolio (about.rebuildlabs.in)",
      href: siteConfig.founderPortfolio,
      external: true,
    },
    {
      label: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      external: false,
    },
    {
      label: siteConfig.phoneDisplay,
      href: `tel:${siteConfig.phone}`,
      external: false,
    },
  ],
};

export default function Footer() {
  const currentYear = 2025;

  return (
    <footer className="border-t border-stone-200/80 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-xl bg-[#1a1a1a] flex items-center justify-center shadow-sm">
                <span className="text-white text-sm font-bold tracking-wider">R</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-[#1a1a1a]">
                {siteConfig.name}
              </span>
            </a>

            <p className="text-sm text-stone-500 max-w-sm leading-relaxed">
              {siteConfig.subheadline}
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Available for Q2 Engagements
              </span>
            </div>
          </div>

          {/* Offerings Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
              Offerings
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerNavigation.offerings.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs md:text-sm text-stone-500 hover:text-[#1a1a1a] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerNavigation.company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 text-xs md:text-sm text-stone-500 hover:text-[#1a1a1a] transition-colors"
                  >
                    {item.label}
                    {item.external && <ArrowUpRight className="h-3 w-3 text-stone-400" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerNavigation.socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 text-xs md:text-sm text-stone-500 hover:text-[#1a1a1a] transition-colors"
                  >
                    {item.label}
                    {item.external && <ArrowUpRight className="h-3 w-3 text-stone-400" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-stone-200/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="/privacy" className="hover:text-stone-800 transition-colors">
              Privacy Policy
            </a>
            <span className="text-stone-300">·</span>
            <a
              href={siteConfig.founderPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-800 transition-colors"
            >
              about.rebuildlabs.in
            </a>
            <span className="text-stone-300">·</span>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-stone-800 transition-colors">
              {siteConfig.email}
            </a>
            <span className="text-stone-300">·</span>
            <a href={`tel:${siteConfig.phone}`} className="hover:text-stone-800 transition-colors">
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
