import React from 'react';
import { Hero } from './components/Hero';
import { TrustedBrands } from './components/TrustedBrands';
import { TruthSection } from './components/TruthSection';
import { Story } from './components/Story';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { EmotionalCTA } from './components/EmotionalCTA';
import { Pricing } from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustedBrands />
      <TruthSection />
      <Story />
      <Features />
      <Testimonials />
      <EmotionalCTA />
      <Pricing />
    </div>
  );
}

export default App;