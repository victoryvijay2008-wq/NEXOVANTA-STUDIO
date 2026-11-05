"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioProjects, PortfolioProject } from "@/data/portfolio";
import {
  UtensilsCrossed,
  Briefcase,
  Bot,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  X,
  Layers,
  ArrowRight,
  Clock,
  ShieldCheck,
  Code2,
  Activity,
  Dumbbell,
} from "lucide-react";

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);

  const featuredProjects = filteredProjects.filter((p) => p.isFeatured);
  const standardProjects = filteredProjects.filter((p) => !p.isFeatured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "restaurant":
        return <UtensilsCrossed className="w-4 h-4 text-amber-400" />;
      case "small-business":
        return <Briefcase className="w-4 h-4 text-cyan-400" />;
      case "ai-app":
        return <Bot className="w-4 h-4 text-violet-400" />;
      case "healthcare-ai":
        return <Activity className="w-4 h-4 text-emerald-400" />;
      case "fitness":
        return <Dumbbell className="w-4 h-4 text-rose-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="portfolio" className="py-24 relative bg-[#070b16]">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-violet-600/5 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Portfolio & Prototypes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured Projects & <span className="gradient-text-cyan-violet">Interactive Demos</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Explore our featured full-stack client solutions and curated functional prototypes.
            Each project illustrates the visual craftsmanship, mobile precision, and architecture
            we bring to every client collaboration.
          </p>

          {/* Clarity Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span>
              <strong>Showcase:</strong> Real-world full-stack architectures alongside bespoke functional prototypes.
            </span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeFilter === "all"
                ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            All Projects ({portfolioProjects.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("healthcare-ai")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
              activeFilter === "healthcare-ai"
                ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>Healthcare AI</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("fitness")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
              activeFilter === "fitness"
                ? "bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.35)]"
                : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            <Dumbbell className="w-4 h-4 text-rose-400" />
            <span>Fitness & Gym</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("restaurant")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
              activeFilter === "restaurant"
                ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            <UtensilsCrossed className="w-4 h-4 text-amber-400" />
            <span>Restaurant Website</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("small-business")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
              activeFilter === "small-business"
                ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span>Small Business</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("ai-app")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
              activeFilter === "ai-app"
                ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            <Bot className="w-4 h-4 text-violet-400" />
            <span>AI Productivity App</span>
          </button>
        </div>

        {/* 1. FEATURED PROJECTS SHOWCASE (ZEVORA RESTAURANT & AI HEALTHVERSE) */}
        {featuredProjects.length > 0 && (
          <div className="space-y-14 mb-16">
            {featuredProjects.map((featuredProject) => {
              const isZevora = featuredProject.id === "zevora-restaurant";
              const isHealthVerse = featuredProject.id === "ai-healthverse";
              const isPulseFit = featuredProject.id === "pulsefit-fitness";

              return (
                <div key={featuredProject.id} className="relative">
                  {/* Ambient Lighting Accents */}
                  {isZevora ? (
                    <>
                      <div className="absolute -top-12 -left-12 w-80 h-80 bg-[#800020]/20 blur-[100px] rounded-full pointer-events-none -z-10" />
                      <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-[#D4AF37]/15 blur-[100px] rounded-full pointer-events-none -z-10" />
                    </>
                  ) : isPulseFit ? (
                    <>
                      <div className="absolute -top-12 -left-12 w-80 h-80 bg-red-600/20 blur-[100px] rounded-full pointer-events-none -z-10" />
                      <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-orange-500/15 blur-[100px] rounded-full pointer-events-none -z-10" />
                    </>
                  ) : (
                    <>
                      <div className="absolute -top-12 -left-12 w-80 h-80 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none -z-10" />
                      <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-violet-600/20 blur-[100px] rounded-full pointer-events-none -z-10" />
                    </>
                  )}

                  {/* Featured Card Wrapper */}
                  <div
                    className={`relative rounded-3xl overflow-hidden transition-all duration-500 group ${
                      isZevora
                        ? "border border-[#D4AF37]/35 bg-[#0c0d12] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85),0_0_35px_-5px_rgba(212,175,55,0.15),0_0_45px_-10px_rgba(114,28,36,0.3)] hover:border-[#D4AF37]/65 hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.95),0_0_50px_rgba(212,175,55,0.22),0_0_60px_rgba(128,0,32,0.4)]"
                        : isPulseFit
                        ? "border border-red-500/35 bg-[#0d090e] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85),0_0_35px_-5px_rgba(239,68,68,0.2),0_0_45px_-10px_rgba(249,115,22,0.25)] hover:border-red-400/65 hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.95),0_0_50px_rgba(239,68,68,0.3),0_0_60px_rgba(249,115,22,0.35)]"
                        : "border border-cyan-500/35 bg-[#090e1c] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85),0_0_35px_-5px_rgba(6,182,212,0.2),0_0_45px_-10px_rgba(139,92,246,0.25)] hover:border-cyan-400/65 hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.95),0_0_50px_rgba(6,182,212,0.3),0_0_60px_rgba(139,92,246,0.35)]"
                    }`}
                  >
                    {/* Subtle Texture & Gradient Background */}
                    <div
                      className={`absolute inset-0 pointer-events-none ${
                        isZevora
                          ? "bg-gradient-to-br from-[#131219]/95 via-[#1a0f16]/85 to-[#0b0c10]/98"
                          : isPulseFit
                          ? "bg-gradient-to-br from-[#160a0f]/95 via-[#1b0d14]/85 to-[#09070a]/98"
                          : "bg-gradient-to-br from-[#0a1122]/95 via-[#0d162d]/85 to-[#060a14]/98"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 opacity-10 pointer-events-none [background-size:24px_24px] ${
                        isZevora
                          ? "bg-[radial-gradient(#D4AF37_1px,transparent_1px)]"
                          : isPulseFit
                          ? "bg-[radial-gradient(#ef4444_1px,transparent_1px)]"
                          : "bg-[radial-gradient(#06b6d4_1px,transparent_1px)]"
                      }`}
                    />

                    <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                      {/* Top Badge & Category Header */}
                      <div
                        className={`flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b ${
                          isZevora
                            ? "border-[#D4AF37]/20"
                            : isPulseFit
                            ? "border-red-500/20"
                            : "border-cyan-500/20"
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${
                              isZevora
                                ? "bg-gradient-to-r from-[#D4AF37]/25 via-[#721C24]/30 to-[#D4AF37]/15 border border-[#D4AF37]/50 text-[#F3E5AB] shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                                : isPulseFit
                                ? "bg-gradient-to-r from-red-600/25 via-orange-600/30 to-red-600/15 border border-red-500/50 text-rose-200 shadow-[0_0_15px_rgba(239,68,68,0.25)]"
                                : "bg-gradient-to-r from-cyan-500/25 via-violet-600/30 to-cyan-500/15 border border-cyan-500/50 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                            }`}
                          >
                            <Sparkles
                              className={`w-3.5 h-3.5 ${
                                isZevora
                                  ? "text-[#D4AF37]"
                                  : isPulseFit
                                  ? "text-red-400"
                                  : "text-cyan-400"
                              }`}
                            />
                            <span>{featuredProject.featuredBadge || "Featured Project"}</span>
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium border ${
                              isZevora
                                ? "bg-[#721C24]/35 border-[#721C24]/60 text-rose-200"
                                : isPulseFit
                                ? "bg-red-950/50 border-red-500/40 text-rose-300"
                                : "bg-emerald-950/40 border-emerald-500/40 text-emerald-300"
                            }`}
                          >
                            {featuredProject.categoryLabel}
                          </span>
                        </div>

                        <div
                          className={`flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-lg border bg-black/60 ${
                            isZevora
                              ? "text-[#E5C378] border-[#D4AF37]/30"
                              : isPulseFit
                              ? "text-rose-300 border-red-500/30"
                              : "text-cyan-300 border-cyan-500/30"
                          }`}
                        >
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                          <span>
                            {isZevora
                              ? "Full-Stack Architecture"
                              : isPulseFit
                              ? "Full-Stack Web App"
                              : "Digital Twin Architecture"}
                          </span>
                        </div>
                      </div>

                      {/* 2-Column Responsive Layout */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Left Column: Details, Features & Buttons */}
                        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                          <div>
                            {/* Title & Tagline */}
                            {isZevora ? (
                              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-1.5 group-hover:text-[#F3E5AB] transition-colors">
                                ZEVORA{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#E5C378]">
                                  Restaurant
                                </span>
                              </h3>
                            ) : isHealthVerse ? (
                              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-1.5 group-hover:text-cyan-300 transition-colors">
                                AI{" "}
                                <span className="gradient-text-cyan-violet">
                                  HealthVerse
                                </span>
                              </h3>
                            ) : isPulseFit ? (
                              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-1.5 group-hover:text-red-400 transition-colors">
                                PULSEFIT{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-300">
                                  FITNESS
                                </span>
                              </h3>
                            ) : (
                              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-1.5 group-hover:text-cyan-300 transition-colors">
                                {featuredProject.title}
                              </h3>
                            )}

                            <p
                              className={`text-base sm:text-lg tracking-wide mb-4 ${
                                isZevora
                                  ? "font-serif italic text-[#E5C378]"
                                  : isPulseFit
                                  ? "font-sans italic text-rose-300"
                                  : "font-sans italic text-cyan-300"
                              }`}
                            >
                              &ldquo;{featuredProject.tagline}&rdquo;
                            </p>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                              {featuredProject.summary}
                            </p>

                            {/* Features Grid */}
                            <div className="mb-6">
                              <h4
                                className={`text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-1.5 ${
                                  isZevora
                                    ? "text-[#E5C378]"
                                    : isPulseFit
                                    ? "text-rose-300"
                                    : "text-cyan-300"
                                }`}
                              >
                                <span>Key Capabilities & Engineered Features</span>
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {featuredProject.features.map((feat, fIdx) => (
                                  <div
                                    key={fIdx}
                                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                                  >
                                    <CheckCircle2
                                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                                        isZevora
                                          ? "text-[#D4AF37]"
                                          : isPulseFit
                                          ? "text-red-400"
                                          : "text-cyan-400"
                                      }`}
                                    />
                                    <span className="line-clamp-1">{feat}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Technology Stack Pills */}
                            <div className="mb-6">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
                                  Technology:
                                </span>
                                {featuredProject.techStack.map((tech, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className={`text-xs px-2.5 py-1 rounded-md font-mono shadow-sm ${
                                      isZevora
                                        ? "bg-[#16141d] text-[#F3E5AB] border border-[#D4AF37]/35"
                                        : isPulseFit
                                        ? "bg-red-950/40 text-rose-200 border border-red-500/30"
                                        : "bg-cyan-950/40 text-cyan-200 border border-cyan-500/30"
                                    }`}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons Row */}
                          <div className="flex flex-wrap items-center gap-3 pt-2">
                            {isPulseFit ? (
                              <>
                                {/* Primary Button: View Live Website */}
                                <a
                                  href={featuredProject.liveDemoUrl || "https://pulsefitfitness.netlify.app/"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 hover:from-red-500 hover:to-orange-500 shadow-[0_4px_20px_rgba(239,68,68,0.35)] hover:shadow-[0_4px_25px_rgba(239,68,68,0.5)] transition-all duration-300 hover:-translate-y-0.5"
                                  title="Open PULSEFIT FITNESS live website"
                                >
                                  <span>View Live Website</span>
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>

                                {/* Secondary Button: View Source Code */}
                                {featuredProject.sourceCodeUrl && (
                                  <a
                                    href={featuredProject.sourceCodeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-rose-200 hover:text-white bg-[#1a0e13]/90 hover:bg-[#25121b] border border-red-500/35 hover:border-red-400/60 shadow-md transition-all duration-300 hover:-translate-y-0.5"
                                    title="View PULSEFIT FITNESS source code repository on GitHub"
                                  >
                                    <GithubIcon className="w-4 h-4" />
                                    <span>View Source Code</span>
                                    <ExternalLink className="w-3.5 h-3.5 text-rose-300/80" />
                                  </a>
                                )}
                              </>
                            ) : (
                              <>
                                {/* 1. View Source Code / View Project Button */}
                                {featuredProject.sourceCodeUrl && (
                                  <a
                                    href={featuredProject.sourceCodeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 ${
                                      isZevora
                                        ? "bg-gradient-to-r from-[#D4AF37] via-[#AA7C11] to-[#721C24] hover:brightness-110 shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
                                        : "bg-gradient-to-r from-slate-900 via-[#10182b] to-slate-900 border border-white/20 hover:border-cyan-400/80 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_20px_rgba(6,182,212,0.25)]"
                                    }`}
                                    title={`View ${featuredProject.title} on GitHub`}
                                  >
                                    <GithubIcon className="w-4 h-4" />
                                    <span>View Source Code</span>
                                    <ExternalLink className="w-3.5 h-3.5 text-white/80" />
                                  </a>
                                )}

                                {/* 2. Live Demo Button / Deployment Status */}
                                {featuredProject.liveDemoUrl ? (
                                  <a
                                    href={featuredProject.liveDemoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all hover:-translate-y-0.5"
                                    title={`Open ${featuredProject.title} live demo`}
                                  >
                                    <span>Live Demo</span>
                                    <ExternalLink className="w-3.5 h-3.5" />
                                  </a>
                                ) : (
                                  <div
                                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium shadow-inner cursor-default ${
                                      isZevora
                                        ? "bg-[#14141e]/90 text-[#E5C378] border border-[#D4AF37]/35"
                                        : "bg-[#0b1021]/90 text-cyan-300 border border-cyan-500/35"
                                    }`}
                                    title="Production deployment is underway. Live link will be activated once deployment completes."
                                  >
                                    <span className="relative flex h-2.5 w-2.5">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                                    </span>
                                    <span>Deployment in Progress</span>
                                  </div>
                                )}
                              </>
                            )}

                            {/* 3. Explore Architecture Trigger */}
                            <button
                              type="button"
                              onClick={() => setSelectedProject(featuredProject)}
                              className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:-translate-y-0.5 ${
                                isZevora
                                  ? "hover:border-[#D4AF37]/40"
                                  : isPulseFit
                                  ? "hover:border-red-500/40"
                                  : "hover:border-cyan-500/40"
                              }`}
                            >
                              <span>Explore Architecture</span>
                              <ArrowRight
                                className={`w-4 h-4 ${
                                  isZevora
                                    ? "text-[#D4AF37]"
                                    : isPulseFit
                                    ? "text-red-400"
                                    : "text-cyan-400"
                                }`}
                              />
                            </button>
                          </div>
                        </div>

                        {/* Right Column: Screenshot Showcase */}
                        <div className="lg:col-span-5">
                          <div
                            onClick={() => setSelectedProject(featuredProject)}
                            className={`cursor-pointer relative rounded-2xl overflow-hidden bg-[#0d0d12] transition-all duration-500 ${
                              isZevora
                                ? "border border-[#D4AF37]/40 shadow-[0_15px_40px_rgba(0,0,0,0.85),0_0_30px_rgba(114,28,36,0.3)] group-hover:border-[#D4AF37]/75 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_40px_rgba(212,175,55,0.25)]"
                                : isPulseFit
                                ? "border border-red-500/40 shadow-[0_15px_40px_rgba(0,0,0,0.85),0_0_30px_rgba(239,68,68,0.25)] group-hover:border-red-400/75 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_40px_rgba(239,68,68,0.35)]"
                                : "border border-cyan-500/40 shadow-[0_15px_40px_rgba(0,0,0,0.85),0_0_30px_rgba(6,182,212,0.25)] group-hover:border-cyan-400/75 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_40px_rgba(6,182,212,0.35)]"
                            }`}
                          >
                            {/* Browser Window Header */}
                            <div
                              className={`px-4 py-2.5 border-b flex items-center justify-between ${
                                isZevora
                                  ? "bg-[#14141c] border-[#D4AF37]/20"
                                  : isPulseFit
                                  ? "bg-[#140b10] border-red-500/20"
                                  : "bg-[#0b1021] border-cyan-500/20"
                              }`}
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                              </div>
                              <a
                                href={featuredProject.liveDemoUrl || featuredProject.sourceCodeUrl || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-[11px] font-mono px-3 py-0.5 rounded-md flex items-center gap-1.5 transition-colors ${
                                  isZevora
                                    ? "text-[#E5C378] hover:text-white bg-black/60 border border-[#D4AF37]/30"
                                    : isPulseFit
                                    ? "text-rose-300 hover:text-white bg-black/60 border border-red-500/30"
                                    : "text-cyan-300 hover:text-white bg-black/60 border border-cyan-500/30"
                                }`}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                <span>
                                  {featuredProject.liveDemoUrl
                                    ? featuredProject.liveDemoUrl
                                        .replace("https://", "")
                                        .replace(/\/$/, "")
                                    : featuredProject.sourceCodeUrl
                                    ? featuredProject.sourceCodeUrl.replace("https://", "")
                                    : "preview"}
                                </span>
                                <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                              </a>
                              <div className="w-8" />
                            </div>

                            {/* Screenshot Graphic */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-black/80">
                              {featuredProject.image ? (
                                <img
                                  src={featuredProject.image}
                                  alt={`${featuredProject.title} - ${featuredProject.tagline}`}
                                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-500">
                                  Showcase Preview
                                </div>
                              )}

                              {/* Subtle Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-transparent opacity-60" />

                              {/* Bottom Banner inside image */}
                              <div
                                className={`absolute bottom-3 inset-x-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border flex items-center justify-between ${
                                  isZevora
                                    ? "border-[#D4AF37]/30"
                                    : isPulseFit
                                    ? "border-red-500/30"
                                    : "border-cyan-500/30"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  {getCategoryIcon(featuredProject.category)}
                                  <span className="text-xs font-semibold text-white">
                                    {isZevora
                                      ? "ZEVORA Dining Platform"
                                      : isHealthVerse
                                      ? "AI HealthVerse Command Center"
                                      : isPulseFit
                                      ? "PULSEFIT Athletic Platform"
                                      : featuredProject.title}
                                  </span>
                                </div>
                                <span
                                  className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                                    isZevora
                                      ? "text-[#E5C378] bg-[#721C24]/60 border-[#721C24]"
                                      : isPulseFit
                                      ? "text-rose-300 bg-red-950/60 border-red-500/40"
                                      : "text-cyan-300 bg-cyan-950/60 border-cyan-500/40"
                                  }`}
                                >
                                  {isZevora
                                    ? "Multi-Cuisine"
                                    : isHealthVerse
                                    ? "Healthcare AI Digital Twin"
                                    : isPulseFit
                                    ? "Fitness & Gym Platform"
                                    : featuredProject.categoryLabel}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 2. STANDARD DEMO CARDS GRID */}
        {standardProjects.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Interactive Studio Prototypes</span>
              </h3>
              <span className="text-xs text-slate-400">
                {standardProjects.length} {standardProjects.length === 1 ? "Prototype" : "Prototypes"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {standardProjects.map((project) => (
                <div
                  key={project.id}
                  className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[0_10px_35px_-10px_rgba(6,182,212,0.2)]"
                >
                  {/* Visual Demo Card Banner */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${project.mockUi.themeColor} p-6 flex flex-col justify-between border-b border-white/10 overflow-hidden`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-black/60 text-cyan-300 border border-cyan-500/30">
                        {project.demoLabel}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center">
                        {getCategoryIcon(project.category)}
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="text-xs text-white/70 font-mono mb-1">
                        {project.mockUi.sampleStats}
                      </div>
                      <h4 className="text-lg font-bold text-white tracking-tight drop-shadow">
                        {project.mockUi.headerTitle}
                      </h4>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-cyan-400/90 font-medium mb-3">
                        {project.tagline}
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        {project.summary}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 mb-6">
                        {project.features.slice(0, 3).map((feat, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Details Action */}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all group-hover:text-cyan-400"
                    >
                      <span>Explore Demo Architecture</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`relative w-full max-w-2xl border rounded-2xl overflow-hidden max-h-[90vh] flex flex-col ${
              selectedProject.id === "zevora-restaurant"
                ? "border-[#D4AF37]/50 shadow-[0_0_60px_rgba(212,175,55,0.2),0_0_60px_rgba(114,28,36,0.3)] bg-[#0c0d13]"
                : selectedProject.id === "pulsefit-fitness"
                ? "border-red-500/50 shadow-[0_0_60px_rgba(239,68,68,0.25),0_0_60px_rgba(249,115,22,0.25)] bg-[#0d090e]"
                : selectedProject.id === "ai-healthverse"
                ? "border-cyan-500/50 shadow-[0_0_60px_rgba(6,182,212,0.25),0_0_60px_rgba(139,92,246,0.25)] bg-[#090e1c]"
                : "border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)] bg-[#090e1c]"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className={`p-6 border-b flex items-center justify-between ${
                selectedProject.id === "zevora-restaurant"
                  ? "border-[#D4AF37]/20 bg-gradient-to-r from-[#17121c] via-[#24121c] to-[#0c0d13]"
                  : selectedProject.id === "pulsefit-fitness"
                  ? "border-red-500/20 bg-gradient-to-r from-[#170a0f] via-[#240e16] to-[#0d090e]"
                  : selectedProject.id === "ai-healthverse"
                  ? "border-cyan-500/20 bg-gradient-to-r from-[#0d152a] via-[#101b38] to-[#090e1c]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <div>
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    selectedProject.id === "zevora-restaurant"
                      ? "text-[#E5C378]"
                      : selectedProject.id === "pulsefit-fitness"
                      ? "text-rose-400"
                      : "text-cyan-400"
                  }`}
                >
                  {selectedProject.demoLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {selectedProject.title}
                </h3>
                {selectedProject.tagline && (
                  <p
                    className={`text-xs mt-0.5 ${
                      selectedProject.id === "zevora-restaurant"
                        ? "text-[#E5C378] italic font-serif"
                        : selectedProject.id === "pulsefit-fitness"
                        ? "text-rose-300 italic"
                        : "text-cyan-300 italic"
                    }`}
                  >
                    &ldquo;{selectedProject.tagline}&rdquo;
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/5 hover:bg-white/10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Concept & Architectural Overview
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {selectedProject.fullOverview}
                </p>
              </div>

              {/* Metrics Grid */}
              <div
                className={`grid grid-cols-3 gap-3 p-4 rounded-xl border ${
                  selectedProject.id === "zevora-restaurant"
                    ? "bg-[#14121b] border-[#D4AF37]/30"
                    : selectedProject.id === "pulsefit-fitness"
                    ? "bg-[#180d14] border-red-500/30"
                    : selectedProject.id === "ai-healthverse"
                    ? "bg-[#0d162a] border-cyan-500/30"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {selectedProject.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="text-center">
                    <div
                      className={`text-base sm:text-lg font-bold ${
                        selectedProject.id === "zevora-restaurant"
                          ? "text-[#E5C378]"
                          : selectedProject.id === "pulsefit-fitness"
                          ? "text-rose-300"
                          : "text-cyan-300"
                      }`}
                    >
                      {m.value}
                    </div>
                    <div className="text-[11px] text-slate-400">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Core Features */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Engineered Feature Set
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {selectedProject.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          selectedProject.id === "zevora-restaurant"
                            ? "text-[#D4AF37]"
                            : selectedProject.id === "pulsefit-fitness"
                            ? "text-red-400"
                            : "text-cyan-400"
                        }`}
                      />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-xs px-2.5 py-1 rounded-md font-mono ${
                        selectedProject.id === "zevora-restaurant"
                          ? "bg-[#18141f] text-[#F3E5AB] border border-[#D4AF37]/30"
                          : selectedProject.id === "pulsefit-fitness"
                          ? "bg-red-950/40 text-rose-200 border border-red-500/30"
                          : selectedProject.id === "ai-healthverse"
                          ? "bg-cyan-950/40 text-cyan-200 border border-cyan-500/30"
                          : "bg-white/5 text-cyan-300 border border-white/10"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status or Demo Notice */}
              {selectedProject.isFeatured ? (
                <div
                  className={`p-3.5 rounded-xl border text-xs text-slate-300 flex items-center justify-between flex-wrap gap-2 ${
                    selectedProject.id === "zevora-restaurant"
                      ? "bg-gradient-to-r from-[#1b1016] to-[#12131c] border-[#D4AF37]/30"
                      : selectedProject.id === "pulsefit-fitness"
                      ? "bg-gradient-to-r from-[#190a10] to-[#11070c] border-red-500/30"
                      : "bg-gradient-to-r from-[#0c1428] to-[#0a1122] border-cyan-500/30"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {selectedProject.liveDemoUrl ? (
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>
                          Live Production:{" "}
                          <a
                            href={selectedProject.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-400 font-semibold underline underline-offset-2 hover:text-emerald-300"
                          >
                            {selectedProject.liveDemoUrl.replace("https://", "").replace(/\/$/, "")}
                          </a>
                        </span>
                      </div>
                    ) : (
                      <>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>
                          Repository & Source: <strong>Available on GitHub</strong>
                        </span>
                      </>
                    )}
                  </div>
                  {selectedProject.sourceCodeUrl && (
                    <a
                      href={selectedProject.sourceCodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs hover:underline ${
                        selectedProject.id === "zevora-restaurant"
                          ? "text-[#E5C378]"
                          : selectedProject.id === "pulsefit-fitness"
                          ? "text-rose-300"
                          : "text-cyan-300"
                      }`}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>{selectedProject.sourceCodeUrl.replace("https://", "")}</span>
                    </a>
                  )}
                </div>
              ) : (
                <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-xs text-slate-300">
                  Looking for a production system like this for your venture? We can customize
                  and deploy this blueprint within days.
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                {selectedProject.liveDemoUrl && (
                  <a
                    href={selectedProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:brightness-110 ${
                      selectedProject.id === "pulsefit-fitness"
                        ? "bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 hover:from-red-500 hover:to-orange-500 shadow-[0_4px_15px_rgba(239,68,68,0.35)]"
                        : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500"
                    }`}
                  >
                    <span>{selectedProject.id === "pulsefit-fitness" ? "View Live Website" : "Live Demo"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {selectedProject.sourceCodeUrl && (
                  <a
                    href={selectedProject.sourceCodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:brightness-110 ${
                      selectedProject.id === "zevora-restaurant"
                        ? "bg-gradient-to-r from-[#D4AF37] to-[#721C24]"
                        : selectedProject.id === "pulsefit-fitness"
                        ? "bg-[#1a0e13] text-rose-200 border border-red-500/40 hover:bg-[#25121b]"
                        : "bg-gradient-to-r from-slate-900 via-[#10182b] to-slate-900 border border-white/20 hover:border-cyan-400/80"
                    }`}
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Source Code</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className={`inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white ${
                    selectedProject.id === "zevora-restaurant"
                      ? "bg-gradient-to-r from-[#D4AF37] to-[#800020] hover:brightness-110"
                      : selectedProject.id === "pulsefit-fitness"
                      ? "bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 hover:brightness-110"
                      : "bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500"
                  }`}
                >
                  <span>Request Similar Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

