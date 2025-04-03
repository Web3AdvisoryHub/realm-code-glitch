
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Realms from '@/components/Realms';
import AvatarCustomization from '@/components/Avatars';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Onboarding from '@/components/Onboarding';

const Index = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  
  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisitedCodexSchool');
    if (!hasVisited) {
      setShowOnboarding(true);
      localStorage.setItem('hasVisitedCodexSchool', 'true');
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white">
      <Navbar />
      <Hero />
      <About />
      <Realms />
      <AvatarCustomization />
      <CTASection />
      <Footer />
      
      {showOnboarding && <Onboarding />}
    </div>
  );
};

export default Index;
