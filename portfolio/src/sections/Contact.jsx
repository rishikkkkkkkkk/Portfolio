import React, { useState } from 'react';
import { personal } from '../data/content';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/SocialIcons';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="bg-black text-white py-16 px-4 md:px-14 lg:px-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
        <h1 className="text-center text-3xl md:text-5xl font-bold tracking-tight text-white mb-16">
          Contact <span className="font-extrabold">Me</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Social Boxes */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
                Let's talk about your next project or infrastructure build.
              </h2>
              <p className="text-neutral-400 text-base leading-relaxed">
                I'm currently open for full-time DevOps & Cloud Engineering roles, Kubernetes infrastructure projects, and CI/CD automation consulting. Drop a message or reach out on social platforms!
              </p>
            </div>

            {/* Direct Details */}
            <div className="space-y-4 pt-4 border-t border-neutral-800">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-white transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase font-bold tracking-wider">Email</p>
                  <p className="text-base font-semibold">{personal.email}</p>
                </div>
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-white transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase font-bold tracking-wider">Phone</p>
                  <p className="text-base font-semibold">{personal.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-neutral-300">
                <div className="w-11 h-11 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase font-bold tracking-wider">Location</p>
                  <p className="text-base font-semibold">{personal.location}</p>
                </div>
              </div>
            </div>

            {/* Social Boxes Row (LinkedIn, GitHub, Email) */}
            <div className="pt-4 flex flex-wrap gap-3">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-box !bg-neutral-900 !border-neutral-800 !text-white hover:!bg-white hover:!text-black" title="LinkedIn">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="social-box !bg-neutral-900 !border-neutral-800 !text-white hover:!bg-white hover:!text-black" title="GitHub">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href={`mailto:${personal.email}`} className="social-box !bg-neutral-900 !border-neutral-800 !text-white hover:!bg-white hover:!text-black" title="Email">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-neutral-400 text-sm">
                  Thank you for reaching out. Rishit will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full button !bg-white !text-black hover:!bg-neutral-200 py-3.5 text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2 rounded-lg"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
