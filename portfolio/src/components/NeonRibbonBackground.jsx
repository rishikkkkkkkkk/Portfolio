import React, { useEffect, useRef } from 'react';

// Replicates the Intercom "Fin Header Redesign" flowing neon ribbon animation
// Reference: https://cdn.dribbble.com/userupload/46657050/file/ec318e9a2964dddbe717e0f946ffd363.mp4
export default function NeonRibbonBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animFrame;
    let t = 0;

    // Ribbon definitions — colors, amplitude, frequency, speed, y-offset, width, opacity
    const ribbons = [
      // Cyan/teal ribbons (top cluster)
      { color: '#00e5ff', glow: '#00b8d4', amp: 90,  freq: 0.9,  speed: 0.38, yBase: 0.42, width: 1.5, glowSize: 18, opacity: 0.85 },
      { color: '#00fff0', glow: '#00bcd4', amp: 75,  freq: 1.1,  speed: 0.28, yBase: 0.44, width: 1.0, glowSize: 12, opacity: 0.6  },
      { color: '#18ffff', glow: '#00acc1', amp: 110, freq: 0.7,  speed: 0.45, yBase: 0.40, width: 2.0, glowSize: 22, opacity: 0.7  },

      // Purple/violet ribbons (middle)
      { color: '#b388ff', glow: '#7c4dff', amp: 80,  freq: 1.2,  speed: 0.32, yBase: 0.50, width: 1.5, glowSize: 20, opacity: 0.75 },
      { color: '#ea80fc', glow: '#aa00ff', amp: 95,  freq: 0.85, speed: 0.42, yBase: 0.52, width: 1.0, glowSize: 16, opacity: 0.65 },

      // Hot pink / magenta ribbons (main focal, thickest)
      { color: '#ff4081', glow: '#f50057', amp: 105, freq: 0.75, speed: 0.55, yBase: 0.53, width: 2.5, glowSize: 28, opacity: 0.9  },
      { color: '#ff80ab', glow: '#ff1744', amp: 85,  freq: 1.0,  speed: 0.48, yBase: 0.55, width: 1.5, glowSize: 20, opacity: 0.8  },
      { color: '#ff6ec7', glow: '#e040fb', amp: 120, freq: 0.6,  speed: 0.35, yBase: 0.57, width: 3.0, glowSize: 35, opacity: 0.85 },

      // White/bright accent
      { color: '#ffffff', glow: '#e0e0e0', amp: 60,  freq: 1.3,  speed: 0.60, yBase: 0.50, width: 1.0, glowSize: 10, opacity: 0.45 },

      // Deep magenta / red
      { color: '#ff1744', glow: '#b71c1c', amp: 90,  freq: 0.95, speed: 0.40, yBase: 0.58, width: 1.5, glowSize: 18, opacity: 0.65 },

      // Blue accent (subtle)
      { color: '#448aff', glow: '#2962ff', amp: 70,  freq: 1.1,  speed: 0.30, yBase: 0.46, width: 1.0, glowSize: 14, opacity: 0.50 },
    ];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function drawRibbon(ribbon) {
      const { color, glow, amp, freq, speed, yBase, width, glowSize, opacity } = ribbon;
      const W = canvas.width;
      const H = canvas.height;
      const yCenter = H * yBase;

      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.globalCompositeOperation = 'lighter';

      // --- GLOW PASS (thick, blurred) ---
      ctx.shadowBlur = glowSize * 3;
      ctx.shadowColor = glow;
      ctx.strokeStyle = color;
      ctx.lineWidth = width * 3;

      ctx.beginPath();
      for (let x = 0; x <= W; x += 2) {
        // Perspective: lines converge toward center — amplitude scales with distance from center
        const xNorm = (x / W - 0.5) * 2; // -1 to 1
        const perspectiveFactor = Math.abs(xNorm); // 0 at center, 1 at edges
        const y = yCenter + amp * perspectiveFactor * Math.sin(freq * xNorm * Math.PI + t * speed * 2 * Math.PI);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // --- CORE PASS (thin, sharp) ---
      ctx.shadowBlur = glowSize;
      ctx.shadowColor = color;
      ctx.lineWidth = width;
      ctx.globalAlpha = opacity * 1.2;

      ctx.beginPath();
      for (let x = 0; x <= W; x += 2) {
        const xNorm = (x / W - 0.5) * 2;
        const perspectiveFactor = Math.abs(xNorm);
        const y = yCenter + amp * perspectiveFactor * Math.sin(freq * xNorm * Math.PI + t * speed * 2 * Math.PI);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.restore();
    }

    function drawFrame() {
      const W = canvas.width;
      const H = canvas.height;

      // --- Clear to near-black ---
      ctx.fillStyle = '#030108';
      ctx.fillRect(0, 0, W, H);

      // --- Ambient center glow ---
      const grad = ctx.createRadialGradient(W / 2, H * 0.52, 0, W / 2, H * 0.52, W * 0.45);
      grad.addColorStop(0, 'rgba(80, 0, 120, 0.18)');
      grad.addColorStop(0.5, 'rgba(40, 0, 80, 0.08)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // --- Draw all ribbons ---
      for (const ribbon of ribbons) {
        drawRibbon(ribbon);
      }

      // --- Edge fade vignette ---
      // Top fade
      const topGrad = ctx.createLinearGradient(0, 0, 0, H * 0.32);
      topGrad.addColorStop(0, 'rgba(3,1,8,1)');
      topGrad.addColorStop(1, 'rgba(3,1,8,0)');
      ctx.fillStyle = topGrad;
      ctx.fillRect(0, 0, W, H * 0.32);

      // Bottom fade
      const bottomGrad = ctx.createLinearGradient(0, H * 0.68, 0, H);
      bottomGrad.addColorStop(0, 'rgba(3,1,8,0)');
      bottomGrad.addColorStop(1, 'rgba(3,1,8,1)');
      ctx.fillStyle = bottomGrad;
      ctx.fillRect(0, H * 0.68, W, H * 0.32);

      // Left fade
      const leftGrad = ctx.createLinearGradient(0, 0, W * 0.12, 0);
      leftGrad.addColorStop(0, 'rgba(3,1,8,1)');
      leftGrad.addColorStop(1, 'rgba(3,1,8,0)');
      ctx.fillStyle = leftGrad;
      ctx.fillRect(0, 0, W * 0.12, H);

      // Right fade
      const rightGrad = ctx.createLinearGradient(W * 0.88, 0, W, 0);
      rightGrad.addColorStop(0, 'rgba(3,1,8,0)');
      rightGrad.addColorStop(1, 'rgba(3,1,8,1)');
      ctx.fillStyle = rightGrad;
      ctx.fillRect(W * 0.88, 0, W * 0.12, H);

      t += 0.003; // Global time step — controls overall animation speed
      animFrame = requestAnimationFrame(drawFrame);
    }

    resize();
    window.addEventListener('resize', resize);
    drawFrame();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] w-full h-full pointer-events-none select-none"
      style={{ display: 'block' }}
    />
  );
}
