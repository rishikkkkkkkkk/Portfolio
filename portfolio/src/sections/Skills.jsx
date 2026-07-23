import React from 'react';
import { skillsList } from '../data/content';
import {
  Cloud,
  Box,
  Terminal,
  Cpu,
  GitBranch,
  Activity,
  BarChart2,
  Server,
  Layers,
  FileCode,
  HardDrive,
  Globe,
  Settings,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  aws: Cloud,
  kubernetes: Box,
  docker: Terminal,
  terraform: Cpu,
  github: GitBranch,
  prometheus: Activity,
  grafana: BarChart2,
  linux: Server,
  python: FileCode,
  bash: Terminal,
  helm: Layers,
  elasticsearch: HardDrive,
  git: GitBranch,
  azure: Globe
};

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-16 px-4 md:px-14 lg:px-20 bg-[#f8f9fa] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h1 className="text-center text-3xl md:text-5xl font-bold tracking-tight text-black mb-12">
          <span className="font-normal text-neutral-600">My</span> Skills
        </h1>

        {/* Responsive Grid Layout (5 columns on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 py-4">
          {skillsList.map((skill) => {
            const IconComponent = iconMap[skill.icon] || CheckCircle2;

            return (
              <div
                key={skill.name}
                className="social-box flex flex-col items-center justify-center gap-3 h-36 rounded-xl shadow-sm"
              >
                <IconComponent className="w-10 h-10 md:w-12 md:h-12 stroke-[1.5]" />
                <h3 className="font-bold text-sm md:text-base tracking-wide text-center">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
