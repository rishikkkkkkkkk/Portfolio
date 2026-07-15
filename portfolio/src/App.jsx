import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';
import LiquidBackground from './components/LiquidBackground';
import LiquidGlassCard from './components/LiquidGlassCard';

// --- MAIN PORTFOLIO COMPONENT ---
export default function App() {
  const projects = [
    { num: "01", title: "Self-Healing Infrastructure", category: "Architecture", desc: "High availability system provisioning automated failure recovery via Prometheus, Alertmanager, and GitHub Actions targeting backup deployment strategies.", tags: "AWS / Prometheus / Docker" },
    { num: "02", title: "Cloud Receipt Organizer", category: "Serverless", desc: "Serverless event-driven OCR application executing document extraction pipeline securely stored within a NoSQL persistence layer.", tags: "AWS Lambda / Textract / DynamoDB" },
    { num: "03", title: "Real-Time AWS Dashboard", category: "Observability", desc: "Observability client calling Boto3 APIs to query CloudWatch metrics, rendering EC2 resource performance telemetry interfaces natively.", tags: "CloudWatch / Python / Streamlit" },
    { num: "04", title: "Centralized Logging Platform", category: "Systems", desc: "Distributed ELK log aggregation architecture standardizing processing pipelines and indexing system events across multi-container networks.", tags: "Elasticsearch / Logstash / Kibana" },
    { num: "05", title: "Two-Tier Flask Application", category: "Containers", desc: "Containerized application model isolating database persistence layers and backend runtime parameters using Docker virtual networks.", tags: "Python / MySQL / Docker" }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="relative min-h-screen text-neutral-300 font-sans selection:bg-white selection:text-black">
      
      {/* LIQUID GLASS BACKDROP (Morphing blobs) */}
      <LiquidBackground />
      
      {/* GOOGLE ANTIGRAVITY PARTICLE FIELD OVERLAY */}
      <ParticlesBackground />
      
      {/* FLOATING GLASS HEADER */}
      <header className="fixed top-6 left-0 right-0 z-50 px-6 md:px-12 flex justify-center">
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-6xl backdrop-blur-md bg-black/40 border border-white/[0.08] rounded-full px-6 py-4 flex justify-between items-center text-xs md:text-sm font-medium tracking-wide uppercase text-neutral-400 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="text-white font-bold font-mono tracking-tighter">RISHIT.KUMAR</span>
          </div>
          <div className="flex gap-6 items-center">
            <span className="hidden md:inline text-neutral-600 font-mono">Cloud & DevOps</span>
            <a href="#services" className="hover:text-white transition-colors duration-300">Services</a>
            <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors duration-300 bg-white/10 hover:bg-white text-white hover:text-black px-4 py-2 rounded-full transition-all duration-300">Contact</a>
          </div>
        </motion.nav>
      </header>

      {/* HERO SECTION */}
      <main className="px-6 md:px-12 pt-32 pb-24 md:pt-44 md:pb-40 max-w-6xl mx-auto">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-[12vw] md:text-[9vw] leading-[0.85] font-bold tracking-tighter text-white mb-12 uppercase mix-blend-difference"
        >
          Rishit<br />
          <span className="text-neutral-500">Kumar</span>
        </motion.h1>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-16 md:mt-32"
        >
          <LiquidGlassCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="text-xl md:text-2xl font-light leading-snug tracking-tight text-neutral-200">
                I don't just provision servers; I build resilient cloud architectures that drive enterprise scale. Specializing in high-performance infrastructure & custom CI/CD automation.
              </p>
              <div className="flex flex-col justify-end md:items-end text-sm md:text-base text-neutral-400 uppercase tracking-widest space-y-2 font-mono">
                <p className="text-white font-bold">CORE EXPERTISE</p>
                <p>AWS / Azure / Linux</p>
                <p>Kubernetes / Docker / Terraform</p>
                <p>Prometheus / ELK / Python</p>
              </div>
            </div>
          </LiquidGlassCard>
        </motion.div>
      </main>
      
      {/* SERVICES */}
      <section id="services" className="px-6 md:px-12 py-24 border-t border-neutral-800/30 bg-transparent max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          <div className="md:col-span-1">
            <h2 className="text-xs tracking-widest uppercase text-neutral-500 mb-2">Our Services</h2>
            <h3 className="text-4xl font-bold text-white tracking-tighter uppercase leading-none">
              How I<br />Operate.
            </h3>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            <LiquidGlassCard>
              <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-tight">01. Cloud Native</h4>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Custom AWS architectures built with modern Infrastructure as Code (Terraform) and best practices. Highly available, secure, and fully automated.
              </p>
              <span className="text-xs text-neutral-600 uppercase tracking-widest font-mono">Infrastructure Excellence</span>
            </LiquidGlassCard>
            <LiquidGlassCard>
              <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-tight">02. Automation</h4>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Intelligent CI/CD pipelines (GitHub Actions) and containerized deployment strategies to streamline your complex release processes.
              </p>
              <span className="text-xs text-neutral-600 uppercase tracking-widest font-mono">CI/CD Experts</span>
            </LiquidGlassCard>
            <LiquidGlassCard>
              <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-tight">03. Systems</h4>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Efficient cluster orchestration (Kubernetes) and robust observability (Prometheus, ELK) ensuring complete visibility for massive scale.
              </p>
              <span className="text-xs text-neutral-600 uppercase tracking-widest font-mono">DevOps & Monitoring</span>
            </LiquidGlassCard>
          </div>
        </motion.div>
      </section>

      {/* SELECTED WORKS */}
      <section id="projects" className="px-6 md:px-12 py-24 border-t border-neutral-800/30 bg-transparent max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-between items-baseline mb-16"
        >
          <h2 className="text-sm tracking-widest uppercase text-neutral-500">Archive</h2>
          <div className="mt-4 md:mt-0 max-w-md text-sm text-neutral-400">
            <h3 className="text-4xl font-bold text-white tracking-tighter uppercase mb-4">Selected<br />Works</h3>
            <p>A collection of robust systems, highly available cloud infrastructures, and automated pipelines. Crafted with precision.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="h-full"
            >
              <LiquidGlassCard className="h-full">
                <div className="flex flex-col h-full justify-between min-h-[220px]">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xl font-light text-neutral-600 font-mono">{proj.num}</span>
                      <span className="text-[10px] tracking-widest text-[#a855f7] border border-purple-500/20 px-2 py-0.5 rounded-full uppercase bg-purple-500/5 font-mono">{proj.category}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-purple-400 transition-colors duration-300">{proj.title}</h4>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">{proj.desc}</p>
                  </div>
                  <div className="text-[11px] font-mono text-[#06b6d4] uppercase tracking-wider pt-4 border-t border-white/[0.05] mt-auto">
                    {proj.tags}
                  </div>
                </div>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="px-6 md:px-12 py-24 border-t border-neutral-800/30 bg-transparent max-w-6xl mx-auto">
        <LiquidGlassCard className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 py-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-[8vw] md:text-7xl font-bold text-white tracking-tighter uppercase leading-none mb-6">
                Let's<br />Build
              </h2>
              <a href="mailto:workwithrishik@gmail.com" className="text-lg md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 hover:from-white hover:to-white transition-colors duration-500 font-bold font-mono">
                workwithrishik@gmail.com
              </a>
            </motion.div>
            
            <div className="flex flex-wrap gap-6 text-sm uppercase tracking-widest text-neutral-400 font-medium z-10">
              <a href="https://github.com/rishikkkkkk" className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white pb-1">GitHub</a>
              <a href="https://www.linkedin.com/in/rishitkumar1/" className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white pb-1">LinkedIn</a>
              <a href="https://drive.google.com/file/d/16Z-yR3tqlwp8g7jAb6OhfRfrhocUgRO9/view?usp=sharing" className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white pb-1">Resume</a>
            </div>
          </div>
        </LiquidGlassCard>
      </footer>

    </div>
  );
}