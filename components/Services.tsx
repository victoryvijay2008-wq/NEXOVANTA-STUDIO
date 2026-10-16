"use client";

import React from "react";
import { servicesData, ServiceItem } from "@/data/services";
import {
  Globe,
  ShoppingBag,
  Sparkles,
  Layers,
  Cpu,
  ArrowRight,
  Check,
  Zap,
} from "lucide-react";

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6 text-cyan-300" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-violet-400" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-violet-300" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      default:
        return <Zap className="w-6 h-6 text-cyan-400" />;
    }
  };

  const handleInquire = (service: ServiceItem) => {
    if (onSelectService) {
      onSelectService(service.title);
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Tailored Engineering for{" "}
            <span className="gradient-text-cyan-violet">Every Scale</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            From rapid brand launchpads to complex generative AI workflows, we
            build solutions that accelerate customer growth and streamline
            digital operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => {
            const isFeatured = index === 2; // AI applications as featured center card
            return (
              <div
                key={service.id}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 glass-panel glass-panel-hover group ${
                  isFeatured
                    ? "border-violet-500/40 bg-gradient-to-b from-violet-950/20 to-[#0a0f1d]"
                    : "border-white/10"
                }`}
              >
                <div>
                  {/* Top Header & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300">
                      {getIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="mb-6 space-y-2.5">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    {service.keyFeatures.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-200"
                      >
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For Badges */}
                  <div className="mb-8 pt-4 border-t border-white/5">
                    <div className="text-xs font-medium text-slate-400 mb-2">
                      Ideal For:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.idealFor.map((target, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                        >
                          {target}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <button
                  type="button"
                  onClick={() => handleInquire(service)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-violet-600 border border-white/10 hover:border-transparent transition-all group-hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
