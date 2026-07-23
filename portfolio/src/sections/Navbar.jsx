import React, { useState } from 'react';
import { personal, navLinks } from '../data/content';
import { Menu, X, Download } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-neutral-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-14 lg:px-20 h-16 md:h-24 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-md transition-transform duration-300 group-hover:scale-105">
            RK
          </div>
          <span className="tracking-wide md:text-xl text-lg font-bold text-black">
            {personal.logoText}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-8 font-medium text-black text-base">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-neutral-500 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Resume Button */}
        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button hidden lg:flex items-center gap-2 text-sm font-semibold tracking-wide"
        >
          Resume <Download className="w-4 h-4" />
        </a>

        {/* Mobile Hamburger Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-black p-2 focus:outline-none"
          title="Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200 px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-semibold text-black hover:text-neutral-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="button w-full flex items-center justify-center gap-2 mt-4"
          >
            Resume <Download className="w-4 h-4" />
          </a>
        </div>
      )}
    </nav>
  );
}
