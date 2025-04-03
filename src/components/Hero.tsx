
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 flex flex-col items-center justify-center relative overflow-hidden digital-noise">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[15%] w-40 h-40 rounded-full bg-cyberpunk-purple/20 blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[15%] w-60 h-60 rounded-full bg-cyberpunk-blue/20 blur-[100px]"></div>
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cyberpunk-neon/10 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 z-10 text-center">
        <div className="relative inline-block mb-4">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glitch-effect" 
            data-text="MASTER THE CODE"
          >
            MASTER THE CODE
          </h1>
          <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyberpunk-neon to-transparent"></div>
        </div>
        
        <h2 className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          Unlock digital realms, customize your avatar, and conquer coding challenges in our immersive Web3 learning environment
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button className="bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-neon hover:from-cyberpunk-neon hover:to-cyberpunk-purple text-white px-8 py-6 rounded-md text-lg animate-pulse-neon">
            Begin Your Journey
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-md text-lg">
            Explore Realms
          </Button>
        </div>
        
        <div className="relative w-full max-w-4xl mx-auto h-64 md:h-80 rounded-lg overflow-hidden neon-border">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyberpunk-dark/90 z-10"></div>
          <div className="absolute inset-0 glass-morphism z-0"></div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center">
              <div className="text-xl text-cyberpunk-neon font-semibold mb-2 animate-glow">Interface Demo</div>
              <p className="text-white/70 max-w-md mx-auto">Experience the immersive coding environment</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="text-white/50 text-sm">Scroll to explore</div>
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
