import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/[0.05]">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="section-label"
        >
          Projects
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={1}
          className="section-heading mb-12"
        >
          Things I've built
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i}
              className={`card flex flex-col gap-4 ${project.featured ? 'lg:col-span-2 border-accent/20' : ''}`}
            >
              {/* Card header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  {project.featured && (
                    <span className="font-mono text-2xs text-accent uppercase tracking-widest mb-2 block">
                      ★ Featured Project
                    </span>
                  )}
                  <h3 className="text-white font-bold text-lg leading-snug">{project.title}</h3>
                  <p className="text-muted font-mono text-xs mt-1">
                    {project.context} · {project.period}
                  </p>
                </div>
                <a
                  href={project.repoUrl}
                  id={`project-link-${project.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-muted hover:text-accent transition-colors duration-200 text-xs font-mono border border-white/[0.08] px-3 py-1.5 rounded-lg hover:border-accent/30"
                >
                  View ↗
                </a>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2.5 flex-1">
                {project.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex gap-3 text-sm text-muted-light leading-relaxed">
                    <span className="text-accent mt-1.5 shrink-0">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.05]">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
