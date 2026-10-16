"use client";

import React from "react";
import {
  Code,
  Sparkles,
  Target,
  Users,
  Compass,
  Rocket,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: "Pragmatic & Useful",
      description:
        "We reject bloated code and vanity features. We focus squarely on what drives revenue, bookings, and customer trust.",
    },
    {
      icon: Sparkles,
      title: "Visual Distinction",
      description:
        "Every layout is tailored with bespoke aesthetics, subtle micro-interactions, and accessible typography that elevates your brand.",
    },
    {
      icon: ShieldCheck,
      title: "Transparent & Accessible",
      description:
        "No opaque agency retainers or hidden fees. We offer upfront starting rates in INR and clear milestone deliveries.",
    },
    {
      icon: Rocket,
      title: "Modern Full-Stack & AI",
      description:
        "From Next.js App Router to custom LLM copilots, we build on cutting-edge stacks so your business stays ahead.",
    },
  ];

  const audienceGroups = [
    { label: "Restaurants & Cafes", note: "Interactive menus, table reservations, local SEO" },
    { label: "Small Businesses", note: "High-trust portals, lead funnels, WhatsApp booking" },
    { label: "Tech Startups", note: "MVPs, landing pages, custom SaaS architectures" },
    { label: "Educational Institutions", note: "Course catalogs, admission inquiry portals" },
    { label: "Entrepreneurs", note: "Rapid prototype validation and custom AI tools" },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#070b16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Studio Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built for Businesses that Demand{" "}
            <span className="gradient-text-cyan-violet">Real Momentum</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            At <strong>NEXOVANTA STUDIO</strong>, we believe every business—from
            a bustling neighborhood restaurant to an ambitious SaaS
            startup—deserves digital engineering that rivals venture-backed
            enterprises.
          </p>
        </div>

        {/* 2-Column Story & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 blur-[60px] pointer-events-none rounded-full" />
              <h3 className="text-xl font-bold text-white mb-4">
                Our Mission: Build. Innovate. Grow.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Too many businesses are trapped between sluggish agency quotes
                running into lakhs or generic, fragile DIY website builders that
                damage credibility.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                NEXOVANTA STUDIO bridges this gap. We provide handcrafted
                engineering, custom AI automation, and responsive design systems
                at affordable, transparent price points starting from ₹2,999.
              </p>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <div>HQ: India (Global Delivery)</div>
                <div className="text-cyan-400">Next.js • TypeScript • AI</div>
              </div>
            </div>

            {/* Who We Build For */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>Who We Partner With</span>
              </h4>
              <div className="space-y-3">
                {audienceGroups.map((group, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-white">
                        {group.label}:
                      </span>{" "}
                      <span className="text-xs text-slate-300">
                        {group.note}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Core Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
