import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function LiquidGlassCard({ children, className = '' }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values to track cursor position relative to the card center (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Create smooth spring animations for rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 120,
    damping: 18,
  });

  // Calculate mouse-following glare spotlight background
  const glareBg = useTransform(() => {
    if (!isHovered) return 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0) 0%, transparent 100%)';
    const px = (x.get() + 0.5) * 100;
    const py = (y.get() + 0.5) * 100;
    return `radial-gradient(circle at ${px}% ${py}%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 40%, transparent 70%)`;
  });

  // Calculate border spotlight background (glowing border highlight on hover)
  const borderBg = useTransform(() => {
    const px = (x.get() + 0.5) * 100;
    const py = (y.get() + 0.5) * 100;
    return `radial-gradient(180px circle at ${px}% ${py}%, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.06) 60%, transparent 100%)`;
  });

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize coordinates from -0.5 to 0.5
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-1000 w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`group relative rounded-2xl transition-all duration-300 ${className}`}
      >
        {/* Glow border wrap */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{
            background: borderBg,
            padding: '1px',
          }}
        />

        {/* Outer border fallback (when not hovered) */}
        <div className="absolute inset-0 rounded-2xl border border-white/[0.06] z-0 pointer-events-none" />

        {/* The glass card itself */}
        <div 
          className="relative z-10 rounded-2xl glass-panel p-8 h-full w-full overflow-hidden transition-all duration-300"
          style={{
            transform: 'translateZ(10px)',
          }}
        >
          {/* Spotlight glare reflection */}
          <motion.div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: glareBg,
            }}
          />

          {/* Liquid glass light ring (subtle ring highlight around card edges) */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

          {/* Card Content */}
          <div className="relative z-20 h-full w-full">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
