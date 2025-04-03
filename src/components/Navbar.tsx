
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 glass-morphism">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-gradient text-xl font-bold">CODEX SCHOOL</div>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="text-white/80 hover:text-white transition duration-200">About</a>
          <a href="#realms" className="text-white/80 hover:text-white transition duration-200">Realms</a>
          <a href="#avatars" className="text-white/80 hover:text-white transition duration-200">Avatars</a>
          <Button className="bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-neon hover:from-cyberpunk-neon hover:to-cyberpunk-purple text-white rounded-md px-6">
            Join Now
          </Button>
        </div>
        
        <div className="md:hidden">
          <Button 
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-morphism p-4">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-white/80 hover:text-white transition duration-200 p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#realms" 
              className="text-white/80 hover:text-white transition duration-200 p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Realms
            </a>
            <a 
              href="#avatars" 
              className="text-white/80 hover:text-white transition duration-200 p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Avatars
            </a>
            <Button 
              className="bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-neon hover:from-cyberpunk-neon hover:to-cyberpunk-purple text-white rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
