import React from 'react';
import bgRoom from '../assets/bg-room.png';

export default function LiquidBackground() {
  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden select-none pointer-events-none">

      {/* ── CINEMATIC ROOM BACKGROUND ── */}
      {/* This is the real photo background, exactly like the Dribbble design */}
      <img
        src={bgRoom}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: 'brightness(0.45) saturate(0.7)' }}
      />

      {/* ── SUBTLE AMBIENT COLOR WASHES ── */}
      {/* These give the room a slight colour temperature shift without blocking the photo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 30%, rgba(80, 40, 140, 0.18) 0%, transparent 70%),' +
            'radial-gradient(ellipse 60% 50% at 80% 70%, rgba(10, 100, 130, 0.14) 0%, transparent 70%)',
        }}
      />

      {/* ── BOTTOM FLOOR DARKENER ── */}
      {/* Increases depth contrast like the original design */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)',
        }}
      />

      {/* ── TOP HEADER GRADIENT ── */}
      <div
        className="absolute top-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%)',
        }}
      />

      {/* ── FILM GRAIN ── */}
      {/* Very subtle noise for cinematic texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
    </div>
  );
}
