import React from 'react';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { WhySection } from './components/WhySection';
import { BenefitsAccordion } from './components/BenefitsAccordion';
import { SecurityIntro } from './components/SecurityIntro';
import { SecurityIndustries } from './components/SecurityIndustries';
import { SecurityServices } from './components/SecurityServices';
import { SecurityQuoteCalculator } from './components/SecurityQuoteCalculator';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center">
      {/* Full-Width Website Canvas */}
      <main className="w-full bg-white flex flex-col">
        {/* 1. Hero Section with Floating Navbar */}
        <Hero />

        {/* 2. Trust / Logo Strip */}
        <TrustStrip />

        {/* 3. Why 50,000+ Homeowners And Company Choose Solar Energy & 3-Image Grid */}
        <WhySection />

        {/* 4. Five-Row Interactive Benefits Accordion */}
        <BenefitsAccordion />

        {/* 5. Security & CCTV Camera Installation Overview */}
        <SecurityIntro />

        {/* 6. Industry Sectors Selector (Protect What Matters Most) */}
        <SecurityIndustries />

        {/* 7. Smart Security Systems That Fits Your Business */}
        <SecurityServices />

        {/* 8. Interactive Request A Quote & Security Promotion Calculator */}
        <SecurityQuoteCalculator />

        {/* 9. Modern Cohesive Footer */}
        <Footer />
      </main>
    </div>
  );
}
