"use client";

import React, { useState } from "react";
import { faqsData, FAQItem } from "@/data/faqs";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

export const FAQs: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("turnaround-time");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Process", "Pricing", "Technology", "General"];

  const filteredFaqs =
    selectedCategory === "All"
      ? faqsData
      : faqsData.filter((item) => item.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-24 relative bg-[#070b16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Common Queries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked{" "}
            <span className="gradient-text-cyan-violet">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Clear, honest answers about our turnaround times, custom AI tools,
            pricing packages, and post-launch support.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-md shadow-cyan-500/20"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-cyan-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-cyan-500/10 border-cyan-500/30" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-2xl glass-panel border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white mb-1">
              Have a question not listed here?
            </h4>
            <p className="text-xs text-slate-300">
              Try our instant AI Chatbot Demo below or speak directly with our team.
            </p>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 hover:border-cyan-500/40 transition-all shrink-0"
          >
            Inquire Directly
          </a>
        </div>
      </div>
    </section>
  );
};
