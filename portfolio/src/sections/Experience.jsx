import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="border-t border-white/[0.05]">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="section-label"
        >
          Experience
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={1}
          className="section-heading mb-12"
        >
          Where I've worked
        </motion.h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i}
              className="relative pl-8 md:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-4px] md:left-[20px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent shadow-accent" />

              {/* Card */}
              <div className="card hover:border-accent/30">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-white font-bold text-lg">{job.role}</h3>
                    <p className="text-accent font-mono text-sm">{job.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono text-xs text-muted bg-bg-elevated px-3 py-1 rounded-full border border-white/[0.06]">
                      {job.period}
                    </span>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-3 mb-6">
                  {job.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex gap-3 text-sm text-muted-light leading-relaxed">
                      <span className="text-accent mt-1.5 shrink-0">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
