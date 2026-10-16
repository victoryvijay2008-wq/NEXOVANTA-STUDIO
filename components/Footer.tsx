import React from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { contactConfig, getWhatsAppUrl } from "@/data/contact";
import { footerQuickLinks } from "@/data/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

export const Footer: React.FC = () => {
  const renderSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case "twitter/x":
      case "twitter":
        return (
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        );
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#04060d] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="md" showTagline={true} />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed mt-3">
              Nexovanta Studio builds high-performance business websites, custom
              AI copilots, and full-stack digital applications for modern
              enterprises and creators.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              {contactConfig.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all"
                  aria-label={`Follow Nexovanta Studio on ${social.name}`}
                >
                  {renderSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Explore Studio
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerQuickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Settings & Location Placeholders */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-400 block text-[11px]">Email:</span>
                <a
                  href={`mailto:${contactConfig.businessEmail}`}
                  className="font-mono text-white hover:text-cyan-400 transition-colors"
                >
                  {contactConfig.businessEmail}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-400 block text-[11px]">WhatsApp / Phone:</span>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-white hover:text-emerald-400 transition-colors"
                >
                  {contactConfig.whatsAppDisplayNumber}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-400 block text-[11px]">Location:</span>
                <span>{contactConfig.officeLocation}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-400 block text-[11px]">Hours:</span>
                <span>{contactConfig.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 NEXOVANTA STUDIO. All rights reserved. Build. Innovate. Grow.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Configured via centralized data files</span>
            <span>•</span>
            <Link
              href="/admin-demo"
              className="text-violet-400 hover:text-violet-300 hover:underline flex items-center gap-1"
            >
              <span>Admin Dashboard Demo</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
