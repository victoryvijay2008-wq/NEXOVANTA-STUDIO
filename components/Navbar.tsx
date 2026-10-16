"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navItems } from "@/data/navigation";
import { getWhatsAppUrl } from "@/data/contact";
import { Menu, X, ArrowRight, MessageCircle, ExternalLink } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050811]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {item.name}
              </a>
            ))}

            {/* Admin Demo Shortcut */}
            <Link
              href="/admin-demo"
              className="ml-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/25 hover:bg-violet-500/20 hover:text-white transition-all flex items-center gap-1"
              title="View simulated inquiries dashboard"
            >
              <span>Admin Demo</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Direct Chat */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Nexovanta Studio on WhatsApp"
              className="p-2 rounded-xl text-slate-300 hover:text-emerald-400 bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 transition-all"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Primary CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#070b16]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl px-6 py-6 transition-all animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-3 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-colors"
              >
                {item.name}
              </a>
            ))}

            <Link
              href="/admin-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-violet-300 hover:text-violet-200 hover:bg-violet-500/10 rounded-xl transition-colors flex items-center justify-between"
            >
              <span>Admin Demo Dashboard</span>
              <span className="text-xs px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                Demo
              </span>
            </Link>

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 shadow-lg shadow-cyan-500/20"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
