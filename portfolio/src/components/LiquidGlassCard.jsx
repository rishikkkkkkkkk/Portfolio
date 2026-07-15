import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function LiquidGlassCard({ children, className = '', float = false, floatDelay = 0 }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    x.set(nx - 0.5);
    y.set(ny - 0.5);
    // Track percentage for glare position (plain state — no hooks in render)
    setGlarePos({ x: nx * 100, y: ny * 100 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Float animation — gentle vertical bob like the panels in the Dribbble video
  const floatAnim = float
    ? {
        animate: {
          y: [0, -8, 0],
          transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: floatDelay },
        },
      }
    : {};

  return (
    <motion.div
      {...floatAnim}
      animate={float ? 'animate' : undefined}
      style={{ perspective: '1000px' }}
      className="w-full h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={`group relative rounded-2xl h-full w-full ${className}`}
      >
        {/* ── GLASS PANEL ── */}
        <div
          className="relative rounded-2xl overflow-hidden h-full w-full"
          style={{
            background: 'rgba(18, 18, 28, 0.52)',
            backdropFilter: 'blur(28px) saturate(140%) brightness(1.06)',
            WebkitBackdropFilter: 'blur(28px) saturate(140%) brightness(1.06)',
            border: '1px solid rgba(255, 255, 255, 0.10)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          {/* Top edge highlight — thin bright line at top */}
          <div
            className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.22) 30%, rgba(255,255,255,0.38) 50%, rgba(255,255,255,0.22) 70%, transparent 100%)',
            }}
          />

          {/* Left edge highlight */}
          <div
            className="absolute top-0 left-0 bottom-0 w-[1px] pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 60%, transparent 100%)',
            }}
          />

          {/* Mouse-following specular glare — only visible on hover */}
          {isHovered && (
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(ellipse 55% 38% at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.07) 0%, transparent 70%)`,
              }}
            />
          )}

          {/* Hover border brightening */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{ border: '1px solid rgba(255,255,255,0.16)' }}
          />

          {/* Content */}
          <div className="relative z-10 h-full w-full">
            {children}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
