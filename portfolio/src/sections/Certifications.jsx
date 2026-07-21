import React from 'react';
import { motion } from 'framer-motion';
import { certifications, education } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-white/[0.05]">
      <div className="section-container">
        {/* ── Certifications ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="section-label"
        >
          Certifications
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={1}
          className="section-heading mb-8"
        >
          AWS Certified
        </motion.h2>

        <div className="flex flex-wrap gap-4 mb-20">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i}
              className="card flex items-center gap-4 min-w-[280px]"
            >
              {/* AWS Badge icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-lg font-bold"
                style={{ backgroundColor: `${cert.badgeColor}18`, border: `1px solid ${cert.badgeColor}30` }}
              >
                <span style={{ color: cert.badgeColor }}>AWS</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-snug">{cert.name}</p>
                <p className="text-muted font-mono text-xs mt-0.5">{cert.issuer} · {cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Education ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="section-label"
        >
          Education
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={1}
          className="section-heading mb-8"
        >
          Academic background
        </motion.h2>

        <div className="space-y-3">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i}
              className={`card flex flex-col md:flex-row md:items-center md:justify-between gap-2 ${
                edu.highlight ? 'border-accent/20' : ''
              }`}
            >
              <div>
                <h3 className={`font-semibold ${edu.highlight ? 'text-white text-base' : 'text-muted-lighter text-sm'}`}>
                  {edu.degree}
                </h3>
                <p className="text-muted font-mono text-xs mt-0.5">{edu.institution}</p>
              </div>
              <div className="text-right">
                <span className="font-mono text-xs text-muted bg-bg-elevated px-3 py-1 rounded-full border border-white/[0.06]">
                  {edu.period}
                </span>
                {edu.cgpa && (
                  <p className="text-accent font-mono text-xs mt-1.5">CGPA {edu.cgpa}</p>
                )}
                {edu.score && (
                  <p className="text-muted font-mono text-xs mt-1.5">{edu.score}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
