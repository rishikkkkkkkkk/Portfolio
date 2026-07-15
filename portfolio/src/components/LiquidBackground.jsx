import React from 'react';

export default function LiquidBackground() {
  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden bg-[#03030a] select-none pointer-events-none">
      {/* SVG Displacement Filter for Liquid Refraction */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="liquid-refraction" x="-20%" y="-20%" width="140%" height="140%">
            {/* Generates fine-grained organic noise */}
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.006" 
              numOctaves="3" 
              result="noise" 
              seed="1"
            />
            {/* Displaces the graphics under it based on the red/green channels of the noise */}
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale="80" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </defs>
      </svg>

      {/* The Liquid Blobs Container (Displaced by SVG filter) */}
      <div className="absolute inset-0 w-full h-full liquid-displacement filter blur-[60px] opacity-40">
        
        {/* Blob 1: Deep Royal Purple */}
        <div 
          className="absolute w-[45vw] h-[45vw] min-w-[350px] min-h-[350px] rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 opacity-60 animate-blob-1"
          style={{
            top: '5%',
            left: '10%',
          }}
        />

        {/* Blob 2: Vibrant Cyan / Teal */}
        <div 
          className="absolute w-[50vw] h-[50vw] min-w-[400px] min-h-[400px] rounded-full bg-gradient-to-tr from-cyan-400 via-teal-500 to-indigo-500 opacity-50 animate-blob-2"
          style={{
            bottom: '10%',
            right: '5%',
          }}
        />

        {/* Blob 3: Accent Neon Magenta */}
        <div 
          className="absolute w-[35vw] h-[35vw] min-w-[300px] min-h-[300px] rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 opacity-40 animate-blob-3"
          style={{
            top: '40%',
            left: '50%',
          }}
        />
      </div>

      {/* Subtle overlay texture grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Radial vignette mask for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#03030a] via-transparent to-[#03030a] opacity-80" />
    </div>
  );
}
