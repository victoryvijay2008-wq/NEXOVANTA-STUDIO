import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  clickable?: boolean;
}

/**
 * =========================================================================
 * NEXOVANTA STUDIO - BRAND LOGO COMPONENT
 * =========================================================================
 * TO INSERT YOUR EXISTING LOGO:
 * 1. Place your logo file (e.g., "logo.png" or "logo.svg") inside the `/public` folder.
 * 2. In this file, change `USE_CUSTOM_IMAGE` to `true` and update `CUSTOM_LOGO_PATH`.
 * 3. Or simply replace the SVG markup inside `RenderLogoIcon` with your vector logo SVG!
 * =========================================================================
 */

const USE_CUSTOM_IMAGE = true; // Set to true to use an image from /public
const CUSTOM_LOGO_PATH = "/nexovanta-symbol.png"; // Cropped official 3D orbital symbol

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  showTagline = false,
  clickable = true,
}) => {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-14 h-14",
  };

  const textSizes = {
    sm: "text-base font-bold",
    md: "text-xl font-extrabold tracking-tight",
    lg: "text-2xl font-black tracking-tight",
  };

  const content = (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Logo Mark Container */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        {USE_CUSTOM_IMAGE ? (
          // Custom User Logo Symbol (3D Ribbon N with Orbital Ring)
          <div className="relative w-full h-full rounded-xl overflow-hidden border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.35)] bg-[#050811] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CUSTOM_LOGO_PATH}
              alt="NEXOVANTA STUDIO Logo Symbol"
              className="w-full h-full object-cover scale-[1.12]"
            />
          </div>
        ) : (
          // Default Precision Geometric Vector Monogram (N-Prism)
          <div className="relative w-full h-full flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 via-violet-600/20 to-transparent p-0.5 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full p-1.5"
              aria-label="Nexovanta Studio Monogram"
            >
              <defs>
                <linearGradient id="nexoCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient id="nexoVioletGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
              {/* Left Pillar */}
              <path
                d="M8 32V8L14 12V32L8 32Z"
                fill="url(#nexoCyanGrad)"
                opacity="0.95"
              />
              {/* Diagonal Dynamic Bridge */}
              <path
                d="M14 12L26 28V32L14 16V12Z"
                fill="url(#nexoCyanGrad)"
              />
              {/* Right Pillar with Violet Accent */}
              <path
                d="M26 8L32 12V32L26 28V8Z"
                fill="url(#nexoVioletGrad)"
              />
              {/* Central Glowing Spark Node */}
              <circle cx="20" cy="20" r="2" fill="#ffffff" />
            </svg>
          </div>
        )}
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className={`text-white tracking-wider ${textSizes[size]}`}>
            NEXOVANTA
          </span>
          <span className="text-xs uppercase font-semibold px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 tracking-widest">
            STUDIO
          </span>
        </div>
        {showTagline && (
          <span className="text-[11px] text-slate-400 font-medium tracking-wide mt-1">
            Build. Innovate. Grow.
          </span>
        )}
      </div>
    </div>
  );

  if (clickable) {
    return (
      <Link
        href="#hero"
        className="inline-block transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1 -m-1"
      >
        {content}
      </Link>
    );
  }

  return content;
};
