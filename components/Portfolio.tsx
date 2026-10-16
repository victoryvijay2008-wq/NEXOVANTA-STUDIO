"use client";

import React, { useState } from "react";
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
} from "lucide-react";

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "restaurant":
        return <UtensilsCrossed className="w-4 h-4 text-amber-400" />;
      case "small-business":
        return <Briefcase className="w-4 h-4 text-cyan-400" />;
      case "ai-app":
        return <Bot className="w-4 h-4 text-violet-400" />;
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
            <span>Prototype Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Interactive <span className="gradient-text-cyan-violet">Demo Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Explore our curated functional prototypes. Each demo illustrates the
            visual craftsmanship, mobile precision, and architecture we bring to
            every client collaboration.
          </p>

          {/* Important Clarity Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>
              <strong>Note:</strong> These are custom interactive demo concepts
              demonstrating capabilities, not completed third-party client work.
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
            All Demos ({portfolioProjects.length})
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

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#090e1c] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  {selectedProject.demoLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {selectedProject.title}
                </h3>
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
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                {selectedProject.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="text-center">
                    <div className="text-base sm:text-lg font-bold text-cyan-300">
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
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
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
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-cyan-300 border border-white/10 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Demo Notice */}
              <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-xs text-slate-300">
                Looking for a production system like this for your venture? We can customize
                and deploy this blueprint within days.
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-end gap-3">
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
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500"
              >
                <span>Request Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
