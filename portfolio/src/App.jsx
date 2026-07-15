import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NeonRibbonBackground from './components/NeonRibbonBackground';

// --- MAIN PORTFOLIO COMPONENT ---
export default function App() {
  const [hoveredProject, setHoveredProject] = useState(null);

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

  const dropdownArrow = (
    <svg className="w-3.5 h-3.5 opacity-60 ml-1.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
    </svg>
  );

  return (
    <div className="relative min-h-screen text-neutral-300 font-sans selection:bg-purple-500 selection:text-white">
      
      {/* FLOWING NEON LASER BACKDROP (Wavespace Fin Header Design) */}
      <NeonRibbonBackground />
      
      {/* FLOATING GLASS HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#030108]/60 border-b border-white/[0.04]">
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-between items-center w-full max-w-7xl mx-auto py-5 px-6 md:px-12"
        >
          {/* Left Side: Logo + Divider + Menu Links */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain opacity-95" />
              <span className="text-white font-black tracking-wider text-xs font-mono">RK</span>
            </div>
            
            {/* Vertical Divider */}
            <div className="w-[1px] h-5 bg-white/20 mx-4 hidden md:block" />

            {/* Menu items */}
            <div className="hidden md:flex items-center gap-6 text-neutral-400 text-xs font-bold uppercase tracking-wider">
              <a href="#services" className="hover:text-white transition-colors duration-200">
                Services{dropdownArrow}
              </a>
              <a href="#projects" className="hover:text-white transition-colors duration-200">
                Projects{dropdownArrow}
              </a>
              <a href="#contact" className="hover:text-white transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Right Side: Social links + White CTA Pill Button */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-5 text-neutral-400 text-xs font-bold uppercase tracking-wider">
              <a href="https://github.com/rishikkkkkk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/rishitkumar1/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                LinkedIn
              </a>
              <a href="https://drive.google.com/file/d/16Z-yR3tqlwp8g7jAb6OhfRfrhocUgRO9/view" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                Resume{dropdownArrow}
              </a>
            </div>
            <a 
              href="#contact" 
              className="bg-white text-[#030108] hover:bg-neutral-200 font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 active:scale-95"
            >
              Hire Me
            </a>
          </div>
        </motion.nav>
      </header>

      {/* HERO SECTION */}
      <main className="px-6 md:px-12 pt-32 pb-24 md:pt-48 md:pb-36 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Subtitle / tag at top */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-xs font-bold uppercase tracking-[0.2em] font-mono mb-4 text-center"
        >
          Cloud &amp; DevOps Engineering
        </motion.div>

        {/* Large Bold Heading */}
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-4xl md:text-7xl font-extrabold tracking-tighter text-white text-center leading-[1.05] max-w-5xl mx-auto mb-8 uppercase"
        >
          The #1 Cloud Architect <br />
          for Resilient Infrastructure.
        </motion.h1>

        {/* Metric / Benchmark subtitle */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-neutral-500 font-mono text-center max-w-3xl mx-auto mb-10 flex flex-wrap justify-center gap-x-4 gap-y-2"
        >
          <span>#1 IN CI/CD AUTOMATION</span>
          <span className="hidden sm:inline">·</span>
          <span>#1 IN HIGH AVAILABILITY</span>
          <span className="hidden sm:inline">·</span>
          <span>#1 IN CLOUD NATIVE SYSTEMS</span>
        </motion.p>

        {/* Centered Dual CTA Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-white text-[#030108] hover:bg-neutral-200 font-bold px-7 py-3 rounded-full text-xs uppercase tracking-widest text-center transition-all duration-300"
          >
            Start Free Trial
          </a>
          <a 
            href="#projects" 
            className="w-full sm:w-auto border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white font-bold px-7 py-3 rounded-full text-xs uppercase tracking-widest text-center transition-all duration-300"
          >
            View Demo
          </a>
        </motion.div>

        {/* Tech Partner logos / text row */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="w-full border-t border-b border-white/[0.05] py-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-neutral-600 text-xs font-bold uppercase tracking-[0.2em] font-mono"
        >
          <span>AWS</span>
          <span>Kubernetes</span>
          <span>Terraform</span>
          <span>Docker</span>
          <span>Prometheus</span>
          <span>Anthropic</span>
          <span>Python</span>
        </motion.div>
      </main>

      {/* SERVICES */}
      <section id="services" className="px-6 md:px-12 py-24 border-t border-white/[0.03] bg-[#030108]/60 backdrop-blur-sm overflow-hidden max-w-7xl mx-auto rounded-3xl mb-12">
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
          
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-tight">01. Cloud Native</h4>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Custom AWS architectures built with modern Infrastructure as Code (Terraform) and best practices. Highly available, secure, and fully automated.
              </p>
              <span className="text-xs text-neutral-600 uppercase tracking-widest">Infrastructure Excellence</span>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-tight">02. Automation</h4>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Intelligent CI/CD pipelines (GitHub Actions) and containerized deployment strategies to streamline your complex release processes.
              </p>
              <span className="text-xs text-neutral-600 uppercase tracking-widest">CI/CD Experts</span>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-tight">03. Systems</h4>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Efficient cluster orchestration (Kubernetes) and robust observability (Prometheus, ELK) ensuring complete visibility for massive scale.
              </p>
              <span className="text-xs text-neutral-600 uppercase tracking-widest">DevOps &amp; Monitoring</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SELECTED WORKS */}
      <section id="projects" className="px-6 md:px-12 py-24 border-t border-white/[0.03] bg-transparent max-w-7xl mx-auto">
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

        <div className="flex flex-col border-t border-neutral-800">
          {projects.map((proj, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative flex flex-col md:flex-row md:items-center py-8 border-b border-neutral-800 transition-all duration-500 cursor-pointer hover:bg-white/5 ${
                hoveredProject !== null && hoveredProject !== i ? 'opacity-30' : 'opacity-100'
              }`}
            >
              <div className="flex items-center text-xl text-neutral-600 font-light w-32 shrink-0 mb-4 md:mb-0 group-hover:text-white transition-colors duration-300">
                {proj.num}
                <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">➔</span>
              </div>
              
              <div className="flex-1 md:pr-12">
                <h4 className="text-2xl font-bold text-white tracking-tight mb-2">{proj.title}</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">{proj.desc}</p>
              </div>

              <div className="w-full md:w-64 shrink-0 flex flex-col items-start md:items-end mt-4 md:mt-0">
                <span className="text-xs uppercase tracking-widest text-neutral-300 font-bold mb-1">{proj.category}</span>
                <span className="text-xs text-neutral-600 uppercase text-left md:text-right">{proj.tags}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="px-6 md:px-12 py-24 border-t border-white/[0.03] bg-transparent flex flex-col md:flex-row justify-between items-start md:items-end gap-12 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-[8vw] md:text-7xl font-bold text-white tracking-tighter uppercase leading-none mb-6">
            Let's<br />Build
          </h2>
          <a href="mailto:workwithrishik@gmail.com" className="text-lg md:text-xl text-neutral-400 hover:text-white transition-colors duration-300">
            workwithrishik@gmail.com
          </a>
        </motion.div>
        
        <div className="flex gap-6 text-sm uppercase tracking-widest text-neutral-500 font-medium z-10">
          <a href="https://github.com/rishikkkkkk" className="hover:text-white transition-colors duration-300">GitHub</a>
          <a href="https://www.linkedin.com/in/rishitkumar1/" className="hover:text-white transition-colors duration-300">LinkedIn</a>
          <a href="https://drive.google.com/file/d/16Z-yR3tqlwp8g7jAb6OhfRfrhocUgRO9/view?usp=sharing" className="hover:text-white transition-colors duration-300">Resume</a>
        </div>
      </footer>

    </div>
  );
}