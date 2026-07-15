import React from 'react';

export default function NeonRibbonBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden select-none pointer-events-none bg-[#030108]">
      
      {/* ── LIGHT GRID BACKDROP ── */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* ── AMBIENT BACKGROUND GLOWS ── */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          background: 
            'radial-gradient(circle 50vw at 50% 50%, rgba(98, 0, 234, 0.15) 0%, transparent 80%),' +
            'radial-gradient(circle 40vw at 20% 60%, rgba(6, 182, 212, 0.08) 0%, transparent 80%),' +
            'radial-gradient(circle 35vw at 80% 40%, rgba(236, 72, 153, 0.08) 0%, transparent 80%)'
        }}
      />

      {/* ── SVG NEON RIBBONS ── */}
      <svg 
        className="absolute w-full h-full opacity-60" 
        viewBox="0 0 1440 900" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Laser Gradients */}
          <linearGradient id="cyan-laser" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="25%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="75%" stopColor="#0891b2" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="purple-laser" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
            <stop offset="30%" stopColor="#a855f7" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#c084fc" stopOpacity="0.95" />
            <stop offset="85%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="pink-laser" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#db2777" stopOpacity="0" />
            <stop offset="20%" stopColor="#f43f5e" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#ec4899" stopOpacity="1" />
            <stop offset="80%" stopColor="#f43f5e" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#db2777" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="yellow-laser" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#eab308" stopOpacity="0" />
            <stop offset="35%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="65%" stopColor="#eab308" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
          </linearGradient>

          {/* Intense Neon Glow Filters */}
          <filter id="neon-glow-strong" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Curved Laser Paths crossing the horizontal center */}
        {/* Path 1: Cyan Wavy Ribbon */}
        <path 
          d="M-200 480 Q 200 320, 720 460 T 1640 420" 
          fill="none" 
          stroke="url(#cyan-laser)" 
          strokeWidth="4.5" 
          filter="url(#neon-glow-strong)"
          className="laser-trail-1"
        />

        {/* Path 2: Purple Wavy Ribbon */}
        <path 
          d="M-200 440 Q 350 560, 720 420 T 1640 480" 
          fill="none" 
          stroke="url(#purple-laser)" 
          strokeWidth="6" 
          filter="url(#neon-glow-strong)"
          className="laser-trail-2"
        />

        {/* Path 3: Pink Wavy Ribbon */}
        <path 
          d="M-200 490 Q 500 360, 720 500 T 1640 450" 
          fill="none" 
          stroke="url(#pink-laser)" 
          strokeWidth="3.5" 
          filter="url(#neon-glow-strong)"
          className="laser-trail-3"
        />

        {/* Path 4: Accent Orange/Yellow Wavy Ribbon */}
        <path 
          d="M-200 420 Q 150 510, 720 440 T 1640 490" 
          fill="none" 
          stroke="url(#yellow-laser)" 
          strokeWidth="2.5" 
          filter="url(#neon-glow-strong)"
          className="laser-trail-4"
        />
      </svg>

      {/* ── BOTTOM FLOOR VIGNETTE / DEPTH ── */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(3,1,8,0.92) 0%, rgba(3,1,8,0) 60%)'
        }}
      />

    </div>
  );
}
