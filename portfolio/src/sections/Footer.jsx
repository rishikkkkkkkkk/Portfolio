import React, { useState, useEffect } from 'react';
import { personal } from '../data/content';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-neutral-400 py-10 px-4 md:px-14 lg:px-20 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center">
            RK
          </div>
          <span className="text-white font-bold tracking-wide text-lg">
            {personal.logoText}
          </span>
        </div>

        <div className="text-xs md:text-sm font-normal text-neutral-500 text-center md:text-left">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </div>

      </div>

      {/* Floating Back To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
}
