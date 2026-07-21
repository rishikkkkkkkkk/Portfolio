import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const contactLinks = [
  {
    id: 'contact-email',
    icon: '✉',
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    id: 'contact-phone',
    icon: '📞',
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone}`,
  },
  {
    id: 'contact-linkedin',
    icon: 'in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/rishitkumar1',
    href: personal.linkedin,
  },
  {
    id: 'contact-github',
    icon: '⎇',
    label: 'GitHub',
    value: 'github.com/rishikkkkkk',
    href: personal.github,
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="border-t border-white/[0.05]">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="section-label"
        >
          Contact
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: CTA text + links */}
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4"
            >
              Let's work<br />
              <span className="text-gradient-accent">together.</span>
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="text-muted-light text-sm leading-relaxed mb-8"
            >
              Open to DevOps / Cloud Engineering roles and interesting infrastructure projects.
              Drop a message or reach me directly via any channel below.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
              className="space-y-3"
            >
              {contactLinks.map((link) => (
                <a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg border border-white/[0.06] bg-bg-card hover:border-accent/30 hover:bg-bg-elevated transition-all duration-200 group"
                >
                  <span className="w-8 h-8 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center font-mono text-accent text-xs shrink-0 group-hover:bg-accent/20 transition-colors duration-200">
                    {link.icon}
                  </span>
                  <div>
                    <p className="text-xs text-muted font-mono uppercase tracking-wider">{link.label}</p>
                    <p className="text-sm text-muted-lighter group-hover:text-accent transition-colors duration-200">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Simple contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="card flex flex-col gap-4"
            >
              <div>
                <label htmlFor="contact-name" className="font-mono text-xs text-muted uppercase tracking-wider block mb-1.5">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-bg-surface border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder-muted font-mono focus:outline-none focus:border-accent/40 transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="contact-email-field" className="font-mono text-xs text-muted uppercase tracking-wider block mb-1.5">
                  Email
                </label>
                <input
                  id="contact-email-field"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-bg-surface border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder-muted font-mono focus:outline-none focus:border-accent/40 transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="font-mono text-xs text-muted uppercase tracking-wider block mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="What are you looking to build?"
                  className="w-full bg-bg-surface border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder-muted font-mono focus:outline-none focus:border-accent/40 transition-colors duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                id="contact-submit"
                className="btn-primary w-full justify-center"
              >
                {submitted ? '✓ Opening mail client...' : 'Send Message →'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
