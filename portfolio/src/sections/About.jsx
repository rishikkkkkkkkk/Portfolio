import React from 'react';
import { aboutParagraphs } from '../data/content';

export default function About() {
  return (
    <section id="about" className="bg-[#f8f9fa] py-16 px-4 md:px-14 lg:px-20 border-t border-neutral-200 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Enlarged About Image SVG */}
          <div className="lg:w-1/2 flex items-center justify-center p-4">
            <img
              src="/about.svg"
              alt="About Me Illustration"
              className="w-full h-auto object-fill scale-125 md:scale-140 lg:scale-150 transition-transform duration-300 transform origin-center"
              loading="lazy"
            />
          </div>

          {/* Right Column: Text Story Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-6">
              About<span className="font-extrabold">Me</span>
            </h1>

            <div className="space-y-4 text-neutral-700 text-base md:text-lg leading-relaxed font-light">
              {aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
