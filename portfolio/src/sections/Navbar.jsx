import React from 'react';
import { motion } from 'framer-motion';
import { personal, navLinks } from '../data/content';

// ─────────────────────────────────────────
// Smooth scroll helper
// ─────────────────────────────────────────
function scrollTo(id) {
  const el = document.getElementById(id.replace('#', ''));
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0e0f]/80 border-b border-white/[0.05]"
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 md:px-12 h-16">
        {/* Logo */}
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); scrollTo('#hero'); }}
          className="font-mono text-accent font-bold tracking-wider text-sm select-none"
          id="nav-logo"
        >
          rk<span className="text-white/30">@devops</span>
          <span className="animate-blink text-accent">█</span>
        </a>

        {/* Nav links (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => { e.preventDefault(); scrollTo(link.href); }}
              id={`nav-${link.label.toLowerCase()}`}
              className="font-mono text-xs text-muted hover:text-accent transition-colors duration-200 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="nav-resume"
          className="btn-primary text-xs py-2 px-4"
        >
          Resume ↗
        </a>
      </nav>
    </motion.header>
  );
}
