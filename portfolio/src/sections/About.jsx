import React from 'react';
import { motion } from 'framer-motion';
import { personal, summary } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  return (
    <section id="about" className="border-t border-white/[0.05]">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="section-label"
        >
          About Me
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: summary text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={1}
          >
            <h2 className="section-heading">
              Shipping resilient infrastructure,<br />
              <span className="text-gradient-accent">one deploy at a time.</span>
            </h2>
            <div className="accent-line" />
            <p className="text-muted-light leading-relaxed">{summary}</p>
          </motion.div>

          {/* Right: quick facts */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={2}
            className="space-y-4"
          >
            {[
              { label: 'Location', value: personal.location },
              { label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
              { label: 'LinkedIn', value: 'linkedin.com/in/rishitkumar1', href: personal.linkedin },
              { label: 'Certification', value: 'AWS Certified Developer – Associate' },
              { label: 'Focus', value: 'EKS · Terraform · GitOps · Observability' },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex items-start gap-4 font-mono text-sm">
                <span className="text-accent w-28 shrink-0 text-xs uppercase tracking-wide pt-0.5">
                  {label}
                </span>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-lighter hover:text-accent transition-colors duration-200 break-all"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-muted-lighter">{value}</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
