import React from 'react';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="bg-black text-white py-16 px-4 md:px-14 lg:px-20 min-h-screen border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h1 className="text-center text-3xl md:text-5xl font-bold tracking-tight text-white mb-12">
          My <span className="font-extrabold">Experience</span>
        </h1>

        {/* Experience List */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="border border-neutral-800 rounded-xl p-6 md:p-8 bg-neutral-950/60 hover:border-neutral-700 transition-all duration-300 shadow-xl"
            >
              {/* Card Top Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-neutral-800">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                    {exp.role}
                  </h2>
                  <h3 className="text-base md:text-lg font-medium text-neutral-400">
                    {exp.company}
                  </h3>
                </div>

                <div className="text-left md:text-right font-medium text-sm text-neutral-400">
                  <p>{exp.period}</p>
                  <p className="text-xs text-neutral-500">{exp.location}</p>
                </div>
              </div>

              {/* Bulleted Content */}
              <ul className="mt-6 space-y-3 list-disc list-inside text-neutral-300 text-sm md:text-base leading-relaxed">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="pl-1">
                    <span className="text-neutral-200">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-neutral-900">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
