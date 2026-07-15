import React, { useEffect, useRef, useState } from 'react';

// Mouse-following radial glow cursor
export default function CursorGlow() {
  const glowRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const rendered = useRef({ x: -200, y: -200 });
  const rafId = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    const animate = () => {
      // Smooth lag follow
      rendered.current.x += (pos.current.x - rendered.current.x) * 0.08;
      rendered.current.y += (pos.current.y - rendered.current.y) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${rendered.current.x - 200}px, ${rendered.current.y - 200}px)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-[100] w-[400px] h-[400px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(6, 182, 212, 0.06) 40%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  );
}
