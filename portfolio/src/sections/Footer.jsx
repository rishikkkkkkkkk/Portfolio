import React from 'react';
import { personal, navLinks } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.05] bg-bg-surface mt-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="font-mono text-accent font-bold tracking-wider text-sm">
              rk<span className="text-white/30">@devops</span>
            </span>
            <p className="text-muted font-mono text-xs mt-1">
              © {year} Rishit Kumar · Jaipur, Rajasthan
            </p>
          </div>

          {/* Quick nav */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                id={`footer-nav-${link.label.toLowerCase()}`}
                className="font-mono text-xs text-muted hover:text-accent transition-colors duration-200 uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href={personal.linkedin}
              id="footer-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-200 font-mono text-xs font-bold"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href={personal.github}
              id="footer-github"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-200 font-mono text-xs"
              aria-label="GitHub"
            >
              ⎇
            </a>
            <a
              href={`mailto:${personal.email}`}
              id="footer-email"
              className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-200 text-sm"
              aria-label="Email"
            >
              ✉
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
