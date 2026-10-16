"use client";

import React from "react";
import { pricingPlans, pricingDisclaimer, PricingPlan } from "@/data/pricing";
import { Check, ArrowRight, Sparkles, Clock, HelpCircle } from "lucide-react";

interface PricingProps {
  onSelectPlan?: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const handleSelectPlan = (plan: PricingPlan) => {
    if (onSelectPlan) {
      onSelectPlan(plan.name);
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Predictable Plans,{" "}
            <span className="gradient-text-cyan-violet">Exponential Value</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Transparent sample starting rates in INR. Every package is engineered
            with modern best practices, high performance, and zero hidden costs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 glass-panel glass-panel-hover ${
                  plan.popular
                    ? "border-cyan-500/50 bg-gradient-to-b from-cyan-950/20 via-[#0a0f1d] to-[#050811] shadow-[0_0_40px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/30"
                    : "border-white/10"
                }`}
              >
                {/* Popular / Enterprise Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Title & Tagline */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-1.5">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white">
                        {plan.priceDisplay}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      {plan.priceSubtext}
                    </div>
                  </div>

                  {/* Turnaround Time */}
                  <div className="flex items-center gap-2 text-xs font-medium text-cyan-300/90 mb-6 px-3 py-1.5 rounded-lg bg-cyan-950/30 border border-cyan-500/20">
                    <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Est. Delivery: {plan.turnaroundTime}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Included Deliverables:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                      >
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    type="button"
                    onClick={() => handleSelectPlan(plan)}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 via-cyan-400 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-[0_0_25px_rgba(6,182,212,0.35)]"
                        : "bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-cyan-500/30"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    Pre-selects this plan in the inquiry form
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Disclaimer Notice */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed p-4 rounded-xl bg-white/[0.02] border border-white/5">
            {pricingDisclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
