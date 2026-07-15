import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function LiquidGlassCard({ children, className = '', float = false, floatDelay = 0 }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 100, damping: 20 });

  // Mouse-following glare (the specular highlight that moves across the glass)
  const glareX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Float animation (gentle vertical bob, like the panels in the Dribbble video)
  const floatVariants = float ? {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: floatDelay,
      },
    },
  } : {};

  return (
    <motion.div
      {...floatVariants}
      animate={float ? 'animate' : undefined}
      style={{ perspective: '1000px' }}
      className="w-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`group relative rounded-2xl ${className}`}
      >
        {/* ── GLASS PANEL BODY ── */}
        {/* Matches the exact frosted glass look in the Dribbble design */}
        <div
          className="relative rounded-2xl overflow-hidden h-full w-full"
          style={{
            // Core glass: very dark semi-transparent, strong backdrop-blur
            background: 'rgba(20, 20, 28, 0.55)',
            backdropFilter: 'blur(28px) saturate(140%) brightness(1.08)',
            WebkitBackdropFilter: 'blur(28px) saturate(140%) brightness(1.08)',
            border: '1px solid rgba(255, 255, 255, 0.10)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.06) inset',
            transform: 'translateZ(0)',
          }}
        >
          {/* ── TOP EDGE HIGHLIGHT ── */}
          {/* The thin bright line at the top of each glass panel */}
          <div
            className="absolute top-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.20) 30%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.20) 70%, transparent 100%)',
            }}
          />

          {/* ── LEFT EDGE HIGHLIGHT ── */}
          <div
            className="absolute top-0 left-0 bottom-0 w-[1px]"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.04) 60%, transparent 100%)',
            }}
          />

          {/* ── MOUSE-FOLLOWING GLARE (specular highlight) ── */}
          {/* This is the reflective sheen that slides across the glass surface when you hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: isHovered
                ? `radial-gradient(ellipse 60% 40% at ${useTransform(glareX, v => v)} ${useTransform(glareY, v => v)}, rgba(255,255,255,0.07) 0%, transparent 70%)`
                : 'none',
            }}
          />

          {/* ── HOVER BORDER GLOW ── */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              border: '1px solid rgba(255,255,255,0.18)',
              boxShadow: '0 0 20px rgba(255,255,255,0.04)',
            }}
          />

          {/* ── CONTENT ── */}
          <div className="relative z-10 h-full w-full">
            {children}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
