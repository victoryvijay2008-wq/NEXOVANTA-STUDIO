"use client";

import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, Code2, Cpu, Zap, ShieldCheck } from "lucide-react";
import { getWhatsAppUrl } from "@/data/contact";

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden"
    >
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] md:w-[900px] md:h-[450px] bg-gradient-to-tr from-cyan-500/15 via-violet-600/15 to-transparent blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-violet-600/10 blur-[90px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-cyan-500/10 blur-[90px] pointer-events-none -z-10 rounded-full" />

      {/* Decorative Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Brand Orbital Emblem & Value Flow */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.45)] bg-[#050811] mb-5 transform hover:scale-105 transition-transform duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/nexovanta-symbol.png"
                alt="Nexovanta Studio Orbital 3D Emblem"
                className="w-full h-full object-cover scale-[1.15]"
              />
            </div>

            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs sm:text-sm font-mono text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <span className="tracking-wider">IDEAS</span>
              <span className="text-violet-400">→</span>
              <span className="tracking-wider">WEBSITES</span>
              <span className="text-cyan-400">→</span>
              <span className="tracking-wider">AI SOLUTIONS</span>
              <span className="text-violet-400">→</span>
              <span className="text-white font-bold tracking-wider">BEYOND</span>
            </div>
            <div className="text-[11px] text-slate-400 tracking-widest uppercase mt-2 font-medium">
              Built for a Smarter Tomorrow
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            Transform Your Vision into{" "}
            <span className="gradient-text-cyan-violet inline-block">
              High-Performance
            </span>{" "}
            Digital Reality.
          </h1>

          {/* Subtitle / Short Description */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            We engineer high-speed business websites, custom AI applications,
            and scalable digital solutions tailored for startups, restaurants,
            small businesses, and ambitious entrepreneurs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-cyan-400 to-violet-600 hover:from-cyan-400 hover:to-violet-500 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#portfolio"
              onClick={(e) => scrollToSection(e, "portfolio")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all text-base hover:text-white"
            >
              <span>Explore Our Work</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-emerald-400 bg-emerald-950/20 hover:bg-emerald-900/30 border border-emerald-500/30 hover:border-emerald-400/50 transition-all text-sm"
              title="Direct WhatsApp chat"
            >
              <span>WhatsApp Chat</span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                Direct
              </span>
            </a>
          </div>

          {/* Credibility / Highlights Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10">
            <div className="glass-panel rounded-xl p-3 sm:p-4 text-left">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Zap className="w-4 h-4 shrink-0" />
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                  Speed
                </span>
              </div>
              <div className="text-lg sm:text-xl font-bold text-white">
                &lt; 1s Loads
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Optimized Core Web Vitals
              </div>
            </div>

            <div className="glass-panel rounded-xl p-3 sm:p-4 text-left">
              <div className="flex items-center gap-2 text-violet-400 mb-1">
                <Code2 className="w-4 h-4 shrink-0" />
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                  Starting At
                </span>
              </div>
              <div className="text-lg sm:text-xl font-bold text-white">
                ₹2,999 onwards
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Transparent starter plans
              </div>
            </div>

            <div className="glass-panel rounded-xl p-3 sm:p-4 text-left">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Cpu className="w-4 h-4 shrink-0" />
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                  AI Ready
                </span>
              </div>
              <div className="text-lg sm:text-xl font-bold text-white">
                Intelligent
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                LLM agents & chatbots
              </div>
            </div>

            <div className="glass-panel rounded-xl p-3 sm:p-4 text-left">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                  Support
                </span>
              </div>
              <div className="text-lg sm:text-xl font-bold text-white">
                Dedicated SLA
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Direct engineer contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
