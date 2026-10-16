/**
 * NEXOVANTA STUDIO - Pricing Packages & Plans Configuration
 * 
 * NOTE FOR OWNER:
 * - Update the sample INR prices and plan details here.
 * - Final project cost varies according to scope, custom integrations, and SLA.
 */

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  priceDisplay: string;
  priceSubtext: string;
  startingPriceInr: number | null; // null if quote based
  turnaroundTime: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  ctaActionId: string;
}

export const pricingDisclaimer =
  "* Sample estimates in INR. Final pricing is tailored to your exact feature set, design requirements, and third-party integrations.";

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter-website",
    name: "Starter Website",
    tagline: "Perfect for local shops, cafes & personal portfolios",
    priceDisplay: "₹2,999",
    priceSubtext: "onwards (Single-page / 3-page foundation)",
    startingPriceInr: 2999,
    turnaroundTime: "3 – 5 Days",
    popular: false,
    description:
      "A fast, responsive, modern digital presence to launch your brand online with zero friction.",
    features: [
      "1 to 3 Custom Responsive Pages",
      "Mobile-First, Ultra-Fast Loading",
      "WhatsApp & Direct Call Integration",
      "Contact & Lead Inquiry Form",
      "Basic On-Page SEO Setup",
      "Google Maps & Location Embed",
      "1 Month Free Bug-Fix Support",
    ],
    notIncluded: ["Custom CMS dashboard", "Payment gateway integration"],
    ctaText: "Start Starter Plan",
    ctaActionId: "starter-website",
  },
  {
    id: "business-website",
    name: "Business Website",
    tagline: "For growing businesses, restaurants & established ventures",
    badge: "Most Popular",
    priceDisplay: "₹6,999",
    priceSubtext: "onwards (Multi-page / Dynamic content)",
    startingPriceInr: 6999,
    turnaroundTime: "7 – 12 Days",
    popular: true,
    description:
      "A full-featured brand platform built to convert visitors into paying clients with rich aesthetics.",
    features: [
      "5 to 8 Custom Designed Pages",
      "Interactive Menus or Service Catalogs",
      "Online Booking / Reservation System",
      "WhatsApp Chat Widget & Automation Link",
      "Full On-Page SEO & Meta Tags",
      "Social Media Feeds & Testimonials",
      "Performance & Speed Optimization (<1s load)",
      "3 Months Dedicated Support & Maintenance",
    ],
    ctaText: "Build Business Site",
    ctaActionId: "business-website",
  },
  {
    id: "custom-ai-fullstack",
    name: "Custom AI & Full-Stack",
    tagline: "For startups, SaaS platforms & enterprise digital workflows",
    badge: "Enterprise Grade",
    priceDisplay: "Custom Quote",
    priceSubtext: "Milestone-based or sprint pricing",
    startingPriceInr: null,
    turnaroundTime: "2 – 6 Weeks",
    popular: false,
    description:
      "Tailor-made web applications, intelligent AI integrations, internal dashboards, and scalable SaaS.",
    features: [
      "Custom Full-Stack Architecture (Next.js / Node / Python)",
      "AI Chatbot / Document Analysis / LLM Agents",
      "Authentication & Role-Based Access Control",
      "Stripe / Razorpay Payment Integration",
      "Database Modeling & Cloud Deployment (AWS / Vercel)",
      "Admin Panel & Real-time Analytics",
      "REST / GraphQL API Development",
      "Dedicated Project Manager & SLA Support",
    ],
    ctaText: "Request a Custom Quote",
    ctaActionId: "custom-ai-fullstack",
  },
];
