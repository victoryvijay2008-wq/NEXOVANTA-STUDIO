export interface PortfolioProject {
  id: string;
  title: string;
  category: "restaurant" | "small-business" | "ai-app";
  categoryLabel: string;
  demoLabel: string; // "DEMO PROJECT CONCEPT"
  tagline: string;
  summary: string;
  fullOverview: string;
  liveDemoHighlight: string;
  features: string[];
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  mockUi: {
    themeColor: string;
    headerTitle: string;
    sections: string[];
    sampleStats: string;
  };
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "saffron-table-restaurant",
    title: "Saffron & Thyme Artisan Bistro",
    category: "restaurant",
    categoryLabel: "Restaurant Website",
    demoLabel: "DEMO CONCEPT • HOSPITALITY",
    tagline: "Fine-dining culinary showcase with interactive menu & table booking",
    summary:
      "A culinary web experience featuring real-time table reservations, digital seasonal menu with dietary filters, and direct WhatsApp table inquiry triggers.",
    fullOverview:
      "Engineered to solve the common hospitality challenge: turning website browsers into evening diners. The demo features an interactive sensory menu layout, one-tap reservation requests, directions map, and automated WhatsApp table availability queries.",
    liveDemoHighlight:
      "Includes dynamic food categories, allergen badges, table reservation request modal, and Chef's Specials showcase.",
    features: [
      "Interactive Digital Menu with filter pills (Starters, Mains, Vegan, Desserts)",
      "Instant Table Reservation Form with party size & date selection",
      "Direct WhatsApp Concierge reservation shortcut",
      "Responsive photo gallery and culinary story timeline",
      "Google Maps integration with parking and opening hours",
    ],
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Lucide Icons", "Schema.org Restaurant Data"],
    metrics: [
      { label: "Target Load Time", value: "< 850ms" },
      { label: "Mobile Reservation Clicks", value: "3x Baseline" },
      { label: "Menu Scannability", value: "100% Score" },
    ],
    mockUi: {
      themeColor: "from-amber-500/20 to-orange-600/10",
      headerTitle: "Saffron & Thyme",
      sections: ["Artisan Starters", "Signature Woodfired Mains", "Pairing Cellar", "Reserve Table"],
      sampleStats: "4.9 ★ Rating • 120+ Daily Reservations Mock",
    },
  },
  {
    id: "apex-legal-consultancy",
    title: "Apex Strategic Advisory & Legal",
    category: "small-business",
    categoryLabel: "Small Business Website",
    demoLabel: "DEMO CONCEPT • CORPORATE SERVICES",
    tagline: "Trust-centric corporate consultancy platform with lead qualification",
    summary:
      "A high-trust corporate portal for advisory firms, chartered accountants, and legal practices with fee calculators and appointment scheduling.",
    fullOverview:
      "Built for professional service firms where trust and clarity are paramount. Demonstrates how modern typography, subtle glassmorphic credibility badges, and structured inquiry funnels can convert high-ticket corporate clients.",
    liveDemoHighlight:
      "Features case-study highlights, interactive consultation fee estimator, practitioner bios, and multi-step inquiry flow.",
    features: [
      "Interactive Consultation Cost & Timeline Estimator",
      "Service area deep-dives (Tax, Compliance, Corporate Law, M&A)",
      "Direct Calendar Appointment Booker Mockup",
      "Client testimonial and credential validation cards",
      "Downloadable Practice Brochure & Resource Center",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons", "Micro-Interactions"],
    metrics: [
      { label: "Lead Funnel Steps", value: "3 Fast Steps" },
      { label: "Accessibility Score", value: "98/100" },
      { label: "SEO Architecture", value: "Full Meta & JSON-LD" },
    ],
    mockUi: {
      themeColor: "from-blue-600/20 to-cyan-500/10",
      headerTitle: "Apex Strategic Advisory",
      sections: ["Corporate Governance", "Tax Compliance", "M&A Strategy", "Book Consultation"],
      sampleStats: "₹180Cr+ Portfolio Advisory Simulated",
    },
  },
  {
    id: "promptcraft-ai-workspace",
    title: "PromptCraft AI Productivity Studio",
    category: "ai-app",
    categoryLabel: "AI Productivity Application",
    demoLabel: "DEMO CONCEPT • AI WEB APPLICATION",
    tagline: "Context-aware AI prompt engineering & business workflow assistant",
    summary:
      "A modern AI workspace concept showcasing prompt chaining, document synthesis, token cost tracking, and team template sharing.",
    fullOverview:
      "A prototype demonstrating how Nexovanta Studio designs and builds intelligent generative AI interfaces. Features responsive conversational canvas, reusable prompt templates, markdown code rendering, and simulated AI response streaming.",
    liveDemoHighlight:
      "Interactive UI with simulated AI document summarizer, tone-of-voice selector, and instant prompt execution playground.",
    features: [
      "Interactive Prompt Playground with variable inputs",
      "Tone adjustment sliders (Formal, Technical, Creative, Punchy)",
      "Real-time token cost estimation and usage meters",
      "One-click export to Markdown, PDF, and Clipboard",
      "Categorized prompt templates for Marketing, Coding, and Operations",
    ],
    techStack: ["Next.js", "React 19", "Tailwind CSS v4", "Lucide Icons", "Mock LLM Pipeline"],
    metrics: [
      { label: "Prompt Execution", value: "~1.2s Simulated" },
      { label: "Workflow Templates", value: "24 Pre-loaded" },
      { label: "Zero API Key Leak", value: "100% Isolated" },
    ],
    mockUi: {
      themeColor: "from-violet-600/20 to-fuchsia-600/10",
      headerTitle: "PromptCraft AI Studio",
      sections: ["Prompt Canvas", "Token Meter", "Tone Engine", "Export Hub"],
      sampleStats: "Tokens: 1,420 • Latency: 1.2s Simulated",
    },
  },
];
