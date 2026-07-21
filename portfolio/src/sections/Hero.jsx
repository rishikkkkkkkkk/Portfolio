import React from 'react';
import { motion } from 'framer-motion';
import { personal, summary } from '../data/content';

// ─────────────────────────────────────────
// HERO — Phase 1 skeleton
// Full terminal animation added in Phase 2.
// ─────────────────────────────────────────
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-grid bg-hero-glow overflow-hidden"
    >
      {/* Grid overlay fade at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0e0f] pointer-events-none" />

      <div className="section-container relative z-10 pt-24 pb-16">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-label mb-6"
        >
          AWS-Focused DevOps Engineer
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
        >
          {personal.name}
        </motion.h1>

        {/* Summary line */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-light max-w-xl text-base leading-relaxed mb-10"
        >
          {summary}
        </motion.p>

        {/* Terminal animation placeholder — will be replaced in Phase 2 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="terminal-window max-w-xl mb-10"
        >
          <div className="terminal-titlebar">
            <span className="terminal-dot bg-red-500/70" />
            <span className="terminal-dot bg-yellow-500/70" />
            <span className="terminal-dot bg-green-500/70" />
            <span className="font-mono text-xs text-muted ml-2">terminal</span>
          </div>
          <div className="px-5 py-4 font-mono text-sm text-terminal-green">
            <span className="text-accent">$ </span>
            <span className="text-white">kubectl get pods --namespace production</span>
            <span className="animate-blink text-accent ml-1">█</span>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#projects" id="cta-view-projects" className="btn-primary">
            View Projects →
          </a>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-download-resume"
            className="btn-ghost"
          >
            Download Resume ↗
          </a>
          <a href="#contact" id="cta-contact" className="btn-ghost">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
