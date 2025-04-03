
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Realms from '@/components/Realms';
import AvatarCustomization from '@/components/Avatars';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white">
      <Navbar />
      <Hero />
      <About />
      <Realms />
      <AvatarCustomization />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
