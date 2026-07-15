import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LiquidBackground from './components/LiquidBackground';
import LiquidGlassCard from './components/LiquidGlassCard';
import CursorGlow from './components/CursorGlow';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// Skill/tech badges
const skills = [
  { label: 'AWS', color: '#f59e0b' },
  { label: 'Kubernetes', color: '#3b82f6' },
  { label: 'Terraform', color: '#8b5cf6' },
  { label: 'Docker', color: '#06b6d4' },
  { label: 'Python', color: '#10b981' },
  { label: 'Prometheus', color: '#f97316' },
  { label: 'Elasticsearch', color: '#f59e0b' },
  { label: 'GitHub Actions', color: '#ec4899' },
];

const projects = [
  {
    num: '01',
    title: 'Self-Healing Infrastructure',
    category: 'Architecture',
    desc: 'High availability system with automated failure recovery via Prometheus, Alertmanager, and GitHub Actions.',
    tags: 'AWS · Prometheus · Docker',
    accent: '#a855f7',
  },
  {
    num: '02',
    title: 'Cloud Receipt Organizer',
    category: 'Serverless',
    desc: 'Event-driven OCR pipeline executing document extraction stored in a NoSQL persistence layer.',
    tags: 'Lambda · Textract · DynamoDB',
    accent: '#06b6d4',
  },
  {
    num: '03',
    title: 'Real-Time AWS Dashboard',
    category: 'Observability',
    desc: 'Live Boto3 dashboard querying CloudWatch metrics, rendering EC2 performance telemetry.',
    tags: 'CloudWatch · Python · Streamlit',
    accent: '#10b981',
  },
  {
    num: '04',
    title: 'Centralized Logging Platform',
    category: 'Systems',
    desc: 'ELK log aggregation architecture with standardised processing pipelines across multi-container networks.',
    tags: 'Elasticsearch · Logstash · Kibana',
    accent: '#f59e0b',
  },
  {
    num: '05',
    title: 'Two-Tier Flask Application',
    category: 'Containers',
    desc: 'Containerised app isolating database persistence layers and backend runtime using Docker virtual networks.',
    tags: 'Python · MySQL · Docker',
    accent: '#3b82f6',
  },
];

const navLinks = ['Dashboard', 'Projects', 'Services', 'Contact'];

export default function App() {
  const [activeNav, setActiveNav] = useState('Dashboard');

  return (
    <div
      className="relative min-h-screen font-sans overflow-x-hidden"
      style={{ fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif" }}
    >
      {/* ── FONT IMPORT ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        * { cursor: url('/src/assets/cursor.svg') 10 2, auto; }
        a, button { cursor: url('/src/assets/cursor.svg') 10 2, pointer !important; }
      `}</style>

      {/* ── CINEMATIC ROOM BACKGROUND ── */}
      <LiquidBackground />

      {/* ── MOUSE GLOW CURSOR EFFECT ── */}
      <CursorGlow />

      {/* ════════════════════════════════════════════════════
          FLOATING GLASS HEADER / NAVBAR
      ════════════════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-5">
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <LiquidGlassCard float floatDelay={0}>
            <div className="flex justify-between items-center px-6 py-3">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)' }}
                >
                  <span className="text-white text-xs font-black">RK</span>
                </div>
                <div>
                  <span className="text-white font-bold text-sm tracking-tight">RISHIT.KUMAR</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">Available</span>
                  </div>
                </div>
              </div>

              {/* Nav links */}
              <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => setActiveNav(link)}
                    className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                      activeNav === link
                        ? 'bg-white/10 text-white border border-white/15'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {link}
                  </button>
                ))}
              </nav>

              {/* CTA */}
              <a
                href="mailto:workwithrishik@gmail.com"
                className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-black px-5 py-2 rounded-full transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)' }}
              >
                Hire Me
              </a>
            </div>
          </LiquidGlassCard>
        </motion.div>
      </header>

      {/* ════════════════════════════════════════════════════
          MAIN LAYOUT — Sidebar + Content (matches Dribbble)
      ════════════════════════════════════════════════════ */}
      <div className="flex min-h-screen pt-28 pb-8 px-4 md:px-6 gap-4 max-w-[1400px] mx-auto">

        {/* ── LEFT SIDEBAR ── */}
        <motion.aside
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="hidden lg:flex flex-col gap-3 w-64 shrink-0"
        >
          {/* Profile card */}
          <LiquidGlassCard float floatDelay={0.2}>
            <div className="p-5">
              <div
                className="w-14 h-14 rounded-2xl mb-3 flex items-center justify-center text-2xl font-black text-white"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #0891b2)' }}
              >
                R
              </div>
              <h2 className="text-white font-bold text-base leading-tight">Rishit Kumar</h2>
              <p className="text-neutral-400 text-xs mt-0.5 font-mono">Cloud & DevOps Engineer</p>
              <div className="flex flex-wrap gap-1 mt-3">
                {['AWS', 'K8s', 'Terraform'].map(t => (
                  <span key={t} className="text-[9px] px-2 py-0.5 rounded-full border border-white/10 text-neutral-400 font-mono uppercase tracking-wider bg-white/[0.03]">{t}</span>
                ))}
              </div>
            </div>
          </LiquidGlassCard>

          {/* Quick Stats */}
          <LiquidGlassCard float floatDelay={0.35}>
            <div className="p-5">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-3 font-mono">Quick Stats</p>
              {[
                { label: 'Projects Built', value: '5+', color: '#a855f7' },
                { label: 'Cloud Platforms', value: 'AWS · Azure', color: '#06b6d4' },
                { label: 'CI/CD Pipelines', value: '10+', color: '#10b981' },
                { label: 'Years Exp.', value: '2+', color: '#f59e0b' },
              ].map(({ label, value, color }) => (
                <div key={label} className="flex justify-between items-center py-2 border-b border-white/[0.05] last:border-0">
                  <span className="text-[11px] text-neutral-400">{label}</span>
                  <span className="text-xs font-bold font-mono" style={{ color }}>{value}</span>
                </div>
              ))}
            </div>
          </LiquidGlassCard>

          {/* Skills */}
          <LiquidGlassCard float floatDelay={0.5}>
            <div className="p-5">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-3 font-mono">Core Skills</p>
              <div className="flex flex-wrap gap-1.5">
                {skills.map(({ label, color }) => (
                  <span
                    key={label}
                    className="text-[10px] px-2.5 py-1 rounded-full font-mono font-medium border"
                    style={{
                      color,
                      borderColor: color + '33',
                      background: color + '12',
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </LiquidGlassCard>

          {/* Contact */}
          <LiquidGlassCard float floatDelay={0.6}>
            <div className="p-5">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-3 font-mono">Links</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: 'GitHub', href: 'https://github.com/rishikkkkkk', color: '#e2e8f0' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rishitkumar1/', color: '#3b82f6' },
                  { label: 'Resume', href: 'https://drive.google.com/file/d/16Z-yR3tqlwp8g7jAb6OhfRfrhocUgRO9/view', color: '#10b981' },
                ].map(({ label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors duration-300 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                    {label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-500">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </LiquidGlassCard>
        </motion.aside>

        {/* ── MAIN CONTENT AREA ── */}
        <motion.main
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex-1 flex flex-col gap-4 min-w-0"
        >
          {/* ── HERO ROW: Name + About ── */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Hero name — large */}
            <motion.div variants={fadeInUp} custom={0} className="md:col-span-3">
              <LiquidGlassCard float floatDelay={0.1}>
                <div className="p-8">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-mono mb-4">
                    Cloud & DevOps Engineer
                  </p>
                  <h1
                    className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-[0.9] mb-6"
                  >
                    Rishit<br />
                    <span
                      className="text-transparent bg-clip-text"
                      style={{ backgroundImage: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)' }}
                    >
                      Kumar
                    </span>
                  </h1>
                  <p className="text-neutral-300 text-sm leading-relaxed max-w-sm">
                    I build resilient cloud architectures at enterprise scale — specialising in high-performance infrastructure & custom CI/CD automation.
                  </p>
                </div>
              </LiquidGlassCard>
            </motion.div>

            {/* Expertise card */}
            <motion.div variants={fadeInUp} custom={1} className="md:col-span-2">
              <LiquidGlassCard float floatDelay={0.25} className="h-full">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono mb-4">Core Expertise</p>
                    {[
                      { label: 'AWS / Azure / Linux', pct: 90, color: '#a855f7' },
                      { label: 'Kubernetes / Docker', pct: 85, color: '#06b6d4' },
                      { label: 'Terraform / IaC', pct: 80, color: '#10b981' },
                      { label: 'Prometheus / ELK', pct: 75, color: '#f59e0b' },
                    ].map(({ label, pct, color }) => (
                      <div key={label} className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[11px] text-neutral-400 font-mono">{label}</span>
                          <span className="text-[10px] text-neutral-500 font-mono">{pct}%</span>
                        </div>
                        <div className="h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full rounded-full"
                            style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="mt-4 h-[1px]"
                    style={{ background: 'linear-gradient(90deg, #a855f7, #06b6d4)' }}
                  />
                </div>
              </LiquidGlassCard>
            </motion.div>
          </div>

          {/* ── SERVICES ROW ── */}
          <motion.div variants={fadeInUp} custom={2}>
            <LiquidGlassCard float floatDelay={0.3}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-5">
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">How I Operate</p>
                  <span className="text-[10px] text-neutral-600 font-mono">Services</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      num: '01',
                      title: 'Cloud Native',
                      desc: 'Custom AWS architectures with IaC (Terraform). Highly available, secure, fully automated.',
                      icon: '☁️',
                      color: '#a855f7',
                    },
                    {
                      num: '02',
                      title: 'CI/CD Automation',
                      desc: 'Intelligent GitHub Actions pipelines and containerised deployment strategies.',
                      icon: '⚙️',
                      color: '#06b6d4',
                    },
                    {
                      num: '03',
                      title: 'Observability',
                      desc: 'Kubernetes orchestration with Prometheus & ELK for complete visibility at scale.',
                      icon: '📊',
                      color: '#10b981',
                    },
                  ].map(({ num, title, desc, icon, color }) => (
                    <div
                      key={num}
                      className="p-4 rounded-xl border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group"
                      style={{ background: 'rgba(255,255,255,0.02)' }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">{icon}</span>
                        <span className="text-[10px] font-mono text-neutral-600">{num}</span>
                      </div>
                      <h3 className="text-white font-bold text-sm mb-2 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300" style={{ backgroundImage: `linear-gradient(135deg, ${color}, #ffffff)` }}>
                        {title}
                      </h3>
                      <p className="text-neutral-500 text-[11px] leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </LiquidGlassCard>
          </motion.div>

          {/* ── PROJECTS GRID ── */}
          <motion.div variants={fadeInUp} custom={3}>
            <div className="mb-3 flex justify-between items-center">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">Selected Works</p>
              <span className="text-[10px] text-neutral-600 font-mono">{projects.length} Projects</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {projects.map((proj, i) => (
                <motion.div
                  key={proj.num}
                  variants={fadeInUp}
                  custom={i * 0.5}
                  whileInView="visible"
                  initial="hidden"
                  viewport={{ once: true, margin: '-40px' }}
                >
                  <LiquidGlassCard float floatDelay={i * 0.15} className="h-full">
                    <div className="p-5 flex flex-col min-h-[200px] justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-2xl font-black text-white/10 font-mono leading-none">{proj.num}</span>
                          <span
                            className="text-[9px] px-2 py-0.5 rounded-full uppercase tracking-widest font-mono border"
                            style={{ color: proj.accent, borderColor: proj.accent + '40', background: proj.accent + '15' }}
                          >
                            {proj.category}
                          </span>
                        </div>
                        <h4 className="text-white font-bold text-sm leading-snug mb-2">{proj.title}</h4>
                        <p className="text-neutral-500 text-[11px] leading-relaxed">{proj.desc}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/[0.05]">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: proj.accent }} />
                        <span className="text-[10px] font-mono" style={{ color: proj.accent + 'cc' }}>{proj.tags}</span>
                      </div>
                    </div>
                  </LiquidGlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── CONTACT / FOOTER CARD ── */}
          <motion.div
            variants={fadeInUp}
            custom={5}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            id="contact"
          >
            <LiquidGlassCard float floatDelay={0.4}>
              <div className="p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono mb-2">Let's Build</p>
                  <h2
                    className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-none mb-3"
                  >
                    Ready to
                    <br />
                    <span
                      className="text-transparent bg-clip-text"
                      style={{ backgroundImage: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)' }}
                    >
                      Collaborate?
                    </span>
                  </h2>
                  <a
                    href="mailto:workwithrishik@gmail.com"
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 font-mono"
                  >
                    workwithrishik@gmail.com
                  </a>
                </div>
                <div className="flex flex-col gap-3 shrink-0">
                  <a
                    href="mailto:workwithrishik@gmail.com"
                    className="px-8 py-3 rounded-full text-sm font-bold text-white text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                      boxShadow: '0 0 30px rgba(168,85,247,0.3)',
                    }}
                  >
                    Get in Touch ↗
                  </a>
                  <div className="flex gap-4 justify-center">
                    {[
                      { label: 'GitHub', href: 'https://github.com/rishikkkkkk' },
                      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rishitkumar1/' },
                      { label: 'Resume', href: 'https://drive.google.com/file/d/16Z-yR3tqlwp8g7jAb6OhfRfrhocUgRO9/view' },
                    ].map(({ label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-neutral-500 hover:text-white transition-colors duration-300 uppercase tracking-widest font-mono"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </LiquidGlassCard>
          </motion.div>

          {/* Footer */}
          <div className="text-center py-2">
            <p className="text-[10px] text-neutral-700 font-mono uppercase tracking-widest">
              © 2025 Rishit Kumar · Cloud & DevOps Engineering
            </p>
          </div>
        </motion.main>
      </div>
    </div>
  );
}