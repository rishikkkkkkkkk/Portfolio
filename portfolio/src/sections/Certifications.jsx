import React from 'react';
import { certifications, education } from '../data/content';
import { Award, GraduationCap, CheckCircle } from 'lucide-react';

export default function Certifications() {
  return (
    <section className="py-[76px] bg-paper-warm border-t-2 border-ink">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
        {/* Section Header */}
        <div className="mb-[30px]">
          <div className="flex flex-wrap items-baseline justify-between gap-5 pb-2.5">
            <div>
              <span className="font-gothic text-xs font-bold uppercase tracking-[0.18em] text-ink">
                Verified Credentials &amp; Studies
              </span>
              <h2 className="mt-1.5 font-display text-[clamp(30px,4vw,46px)] font-normal leading-[1.02] tracking-[-0.015em] text-ink">
                Certifications &amp; Academic Record
              </h2>
            </div>
            <span className="whitespace-nowrap font-gothic text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
              Official Records
            </span>
          </div>
          <div className="h-1 w-full bg-ink" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Certifications */}
          <div className="border-2 border-ink bg-paper p-6 shadow-paper-card">
            <div className="flex items-center gap-2 border-b-2 border-ink pb-3 mb-5">
              <Award className="h-6 w-6 text-stamp" />
              <h3 className="font-gothic text-base font-bold uppercase tracking-[0.14em] text-ink">
                AWS Industry Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="border border-ink/30 bg-paper-bright p-4 relative overflow-hidden"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-gothic text-[10px] font-bold uppercase tracking-[0.15em] text-stamp">
                        Official Badge
                      </span>
                      <h4 className="font-display text-xl text-ink font-normal mt-0.5">
                        {cert.name}
                      </h4>
                      <p className="font-mono text-xs text-ink-soft mt-1">
                        Issuer: {cert.issuer}
                      </p>
                    </div>
                    <span className="border border-ink bg-paper px-2.5 py-1 font-mono text-xs font-bold text-ink shrink-0">
                      {cert.date}
                    </span>
                  </div>

                  {/* Stamp Seal Simulation */}
                  <div className="mt-3 flex items-center gap-1.5 font-gothic text-[11px] font-bold uppercase tracking-[0.1em] text-ink">
                    <CheckCircle className="h-3.5 w-3.5 text-stamp" />
                    <span>AUTHENTICATED BY AWS</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Academic Record */}
          <div className="border-2 border-ink bg-paper p-6 shadow-paper-card">
            <div className="flex items-center gap-2 border-b-2 border-ink pb-3 mb-5">
              <GraduationCap className="h-6 w-6 text-stamp" />
              <h3 className="font-gothic text-base font-bold uppercase tracking-[0.14em] text-ink">
                Academic Background
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="border border-ink/30 bg-paper-bright p-4"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-display text-xl text-ink font-normal">
                        {edu.degree}
                      </h4>
                      <p className="font-text text-sm text-ink-soft mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ink-soft font-semibold shrink-0">
                      {edu.period}
                    </span>
                  </div>

                  {edu.cgpa && (
                    <div className="mt-2 font-mono text-xs font-bold text-stamp">
                      Cumulative Score: {edu.cgpa} CGPA
                    </div>
                  )}
                  {edu.score && (
                    <div className="mt-2 font-mono text-xs font-bold text-stamp">
                      Final Score: {edu.score}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
