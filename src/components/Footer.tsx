
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-astro-brown text-astro-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & Tagline */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-astro-orange rounded-full flex items-center justify-center">
                <span className="text-2xl">🍔</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-playfair">AstroFood</h3>
              </div>
            </div>
            <p className="text-astro-cream/80 mb-4">
              Honest Burgers. Honest Folks.
            </p>
            <p className="text-sm text-astro-cream/60">
              Serving our community with locally-sourced, flame-grilled perfection since 2019.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in">
            <h4 className="text-lg font-semibold mb-4 font-playfair">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-astro-cream/80 hover:text-astro-orange transition-colors duration-300">
                Home
              </a>
              <a href="#menu" className="block text-astro-cream/80 hover:text-astro-orange transition-colors duration-300">
                Menu
              </a>
              <a href="#order" className="block text-astro-cream/80 hover:text-astro-orange transition-colors duration-300">
                Order Online
              </a>
              <a href="#visit" className="block text-astro-cream/80 hover:text-astro-orange transition-colors duration-300">
                Visit Us
              </a>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="animate-fade-in">
            <h4 className="text-lg font-semibold mb-4 font-playfair">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="bg-astro-orange p-3 rounded-full hover:bg-astro-orange/80 transition-colors duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-astro-orange p-3 rounded-full hover:bg-astro-orange/80 transition-colors duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-astro-cream/60 hover:text-astro-cream transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="block text-astro-cream/60 hover:text-astro-cream transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-astro-cream/20 mt-8 pt-8 text-center">
          <p className="text-astro-cream/60 text-sm">
            © 2025 AstroFood. All rights reserved. Made with ❤️ for burger lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
