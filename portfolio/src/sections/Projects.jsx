import React from 'react';
import { projects } from '../data/content';
import { ExternalLink, Terminal, Cpu, Cloud, Layers, Activity, BarChart2, HardDrive, Box, Code } from 'lucide-react';

const techIconsMap = {
  "AWS EKS": Cloud,
  "AWS": Cloud,
  "Terraform": Cpu,
  "Docker": Terminal,
  "Kubernetes": Box,
  "Helm": Layers,
  "GitHub Actions": Code,
  "Prometheus": Activity,
  "Grafana": BarChart2,
  "EFK": HardDrive,
  "Python": Code,
  "CloudWatch": Activity,
  "Linux": Terminal
};

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-16 px-4 md:px-14 lg:px-20 min-h-screen border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h1 className="text-center text-3xl md:text-5xl font-bold tracking-tight text-white mb-16">
          My <span className="font-extrabold">Projects</span>
        </h1>

        {/* Projects List */}
        <div className="space-y-24">
          {projects.map((proj, idx) => {
            const isEven = idx % 2 !== 0;

            return (
              <div
                key={proj.number}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center gap-10 lg:gap-16`}
              >
                {/* Project Image Mockup Frame */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 p-6 md:p-8 shadow-2xl group transition-transform duration-500 hover:border-neutral-700">
                    <div className="w-full h-64 md:h-80 rounded-xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800 p-6 flex flex-col justify-between relative overflow-hidden">
                      
                      {/* Window Header */}
                      <div className="flex items-center justify-between border-b border-neutral-800 pb-3 z-10">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/80" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                          <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-xs font-mono text-neutral-400">
                          {proj.number === "01" ? "aws-eks-pipeline.infra" : "aws-monitoring.dashboard"}
                        </span>
                      </div>

                      {/* Mock Terminal/Dashboard Content */}
                      <div className="my-auto space-y-3 font-mono text-xs md:text-sm text-neutral-300 z-10">
                        <div className="flex items-center gap-2 text-emerald-400 font-bold">
                          <span>✔</span> <span>{proj.title}</span>
                        </div>
                        <div className="text-neutral-400 text-xs">
                          {proj.number === "01"
                            ? "[Terraform] 28/28 AWS Resources Applied (EKS, VPC, IAM)"
                            : "[Boto3] Live CloudWatch Metrics Stream Connected"}
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {proj.techStacks.slice(0, 4).map((tech) => (
                            <span key={tech} className="px-2 py-0.5 bg-neutral-800 text-neutral-300 text-[11px] rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Subtle Ambient Light Glow */}
                      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all" />
                    </div>
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <span className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-2">
                    {proj.number}
                  </span>

                  <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                    {proj.title}
                  </h2>

                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  {/* Tech Stacks Icons Row */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                      Tech Stacks:
                    </h4>
                    <div className="flex flex-wrap items-center gap-3">
                      {proj.techStacks.map((tech) => {
                        const IconComponent = techIconsMap[tech] || Code;
                        return (
                          <div
                            key={tech}
                            className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white"
                            title={tech}
                          >
                            <IconComponent className="w-5 h-5" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div>
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button inline-flex items-center gap-2"
                    >
                      Visit <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
