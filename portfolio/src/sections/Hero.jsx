import React from 'react';
import { personal } from '../data/content';
import { Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/SocialIcons';

export default function Hero() {
  return (
    <section className="bg-[#f8f9fa] py-8 md:py-16 px-4 md:px-14 lg:px-20 min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-12">
        
        {/* Left Column Text Content */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-normal py-1.5 md:py-2 text-black leading-tight">
              Hello I'am <span className="text-3xl md:text-5xl font-extrabold text-black">{personal.heroName}</span>
            </h1>

            <h1 className="text-3xl md:text-5xl font-extrabold py-1.5 md:py-2 text-black leading-tight">
              {personal.heroLine2} <span className="outlined-text">{personal.heroLine2Outline}</span>
            </h1>

            <h1 className="text-3xl md:text-5xl font-extrabold py-1.5 md:py-2 text-black leading-tight">
              {personal.heroLine3} <span className="outlined-text">{personal.heroLine3Outline}</span>
            </h1>

            <h1 className="text-3xl md:text-5xl font-extrabold py-1.5 md:py-2 text-black leading-tight">
              <span className="font-normal text-neutral-600">Based in</span> {personal.location}
            </h1>

            <p className="secondary-color text-base md:text-lg font-normal py-4 md:py-6 max-w-2xl leading-relaxed">
              {personal.bio}
            </p>

            {/* Social Icons Row (LinkedIn, GitHub, Email) */}
            <div className="flex flex-wrap gap-3 md:gap-4 py-4">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <div className="social-box">
                  <LinkedinIcon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <div className="social-box">
                  <GithubIcon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
              </a>

              <a
                href={`mailto:${personal.email}`}
                title="Email"
              >
                <div className="social-box">
                  <Mail className="w-6 h-6 md:w-7 md:h-7" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Enlarged Hero Image SVG */}
        <div className="lg:w-1/2 flex items-center justify-center p-2">
          <img
            src="/hero.svg"
            alt="Hero Developer Illustration"
            className="w-full h-auto object-fill scale-110 md:scale-125 lg:scale-135 transition-transform duration-300 transform origin-center"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}
