
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 bg-black/40 border-t border-white/10 digital-noise">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-3">Codex School</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Realms</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Avatars</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Forums</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <div className="text-gradient text-xl font-bold mb-4 md:mb-0">CODEX SCHOOL</div>
          <div className="text-white/50 text-sm">© 2025 Codex School. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
