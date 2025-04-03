
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 relative digital-noise">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyberpunk-purple/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-cyberpunk-dark to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="glass-morphism rounded-lg p-8 md:p-12 max-w-5xl mx-auto border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyberpunk-neon/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyberpunk-purple/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Ready to Begin Your Coding Journey?</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Join Codex School today and transform the way you learn to code. Unlock realms, customize your avatar, and build your skills in our immersive Web3 environment.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-neon hover:from-cyberpunk-neon hover:to-cyberpunk-purple text-white px-8 py-6 rounded-md text-lg group">
                Start Your Adventure
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-md text-lg">
                Take a Tour
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="text-sm text-white/50">Join our community of over 10,000 learners</div>
              <div className="flex justify-center mt-4 space-x-6">
                {["Discord", "Twitter", "GitHub"].map((platform) => (
                  <a key={platform} href="#" className="text-white/70 hover:text-white transition-colors">
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
