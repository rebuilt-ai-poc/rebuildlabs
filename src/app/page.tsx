import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import Services from '@/components/Services';
import Process from '@/components/Process';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-[#1a1a1a] selection:bg-[#2563eb]/20 selection:text-[#1a1a1a]">
      {/* 1. Navigation */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Business Problems (Where AI projects stall) */}
        <Problems />

        {/* 4. Solutions (Expert Judgment & Engineering Execution) */}
        <Services />

        {/* 5. Delivery Process (Execution Cadence) */}
        <Process />

        {/* 6. Founder Credibility (Principal-led Studio) */}
        <About />

        {/* 7. Engagement Models (Advisory vs Implementation) */}
        <CTA />

        {/* 8. Contact & Scoping Inquiries */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
