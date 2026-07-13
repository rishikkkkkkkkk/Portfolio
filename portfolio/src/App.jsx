import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';

// --- 2. MAIN PORTFOLIO COMPONENT ---
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

  return (
    <div className="relative min-h-screen text-neutral-300 font-sans selection:bg-white selection:text-black">
      
      {/* GOOGLE ANTIGRAVITY PARTICLE BACKGROUND */}
      <ParticlesBackground />
      
      {/* TOP NAVIGATION */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-between items-start p-6 md:p-12 text-xs md:text-sm font-medium tracking-wide uppercase text-neutral-500"
      >
        <div className="flex flex-col">
          <span className="text-white">Rishit Kumar | Portfolio</span>
          <span>Cloud & DevOps Engineering</span>
        </div>
        <div className="flex flex-col items-end">
          <span>Scroll to Explore</span>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <main className="px-6 md:px-12 pt-12 pb-24 md:pt-24 md:pb-40">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-[12vw] leading-[0.85] font-bold tracking-tighter text-white mb-12 uppercase mix-blend-difference"
        >
          Rishit<br />
          <span className="text-neutral-500"></span> Kumar
        </motion.h1>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 md:mt-32 backdrop-blur-sm bg-black/10 p-6 -mx-6 rounded-lg"
        >
          <p className="text-xl md:text-3xl font-light leading-snug tracking-tight text-neutral-200">
            I don't just provision servers; I build resilient cloud architectures that drive enterprise scale. Specializing in high-performance infrastructure & custom CI/CD automation.
          </p>
          <div className="flex flex-col justify-end md:items-end text-sm md:text-base text-neutral-500 uppercase tracking-widest space-y-2">
            <p>AWS / Azure / Linux</p>
            <p>Kubernetes / Docker / Terraform</p>
            <p>Prometheus / ELK / Python</p>
          </div>
        </motion.div>
      </main>

      {/* SERVICES */}
      <section className="px-6 md:px-12 py-24 border-t border-neutral-800/50 backdrop-blur-md bg-[#050505]/60 overflow-hidden">
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
              <span className="text-xs text-neutral-600 uppercase tracking-widest">DevOps & Monitoring</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SELECTED WORKS */}
      <section className="px-6 md:px-12 py-24 border-t border-neutral-800/50 backdrop-blur-md bg-[#050505]/70">
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
      <footer id="contact" className="px-6 md:px-12 py-24 border-t border-neutral-800/50 backdrop-blur-md bg-[#050505]/80 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
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