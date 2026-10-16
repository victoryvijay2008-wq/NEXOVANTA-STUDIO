export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string; // Lucide icon name
  badge?: string;
  keyFeatures: string[];
  idealFor: string[];
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    slug: "business-websites",
    shortDescription:
      "High-converting, responsive, and visually magnetic websites tailored for modern brands and local businesses.",
    fullDescription:
      "We design and build bespoke corporate and small business websites that establish market authority, communicate your value proposition effortlessly, and turn everyday visitors into loyal customers.",
    iconName: "Globe",
    badge: "Core Expertise",
    keyFeatures: [
      "Lightning-fast performance (<1s page loads)",
      "Adaptive design flawless on mobile, tablet & desktop",
      "Interactive inquiry forms & WhatsApp chat triggers",
      "SEO-ready structure with schema markup",
    ],
    idealFor: [
      "Small Businesses",
      "Restaurants & Cafes",
      "Consultancies",
      "Educational Institutions",
    ],
    deliverables: [
      "Responsive Frontend",
      "SEO & Meta Architecture",
      "Analytics Integration",
      "Content Management Guidance",
    ],
  },
  {
    id: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    slug: "ecommerce-solutions",
    shortDescription:
      "Frictionless online storefronts engineered with seamless checkout flows and inventory visibility.",
    fullDescription:
      "From boutique retail brands to expansive product catalogs, we craft digital storefronts that maximize conversion, reduce cart abandonment, and integrate Indian & global payment gateways safely.",
    iconName: "ShoppingBag",
    badge: "High Conversion",
    keyFeatures: [
      "Instant checkout workflows & coupon engines",
      "UPI, Card, Net Banking & Razorpay / Stripe support",
      "Product filtering, dynamic variants & stock tracking",
      "Automated order notification triggers",
    ],
    idealFor: [
      "D2C Brands",
      "Artisan Makers",
      "Retail Stores",
      "Digital Product Creators",
    ],
    deliverables: [
      "Store Catalog & Cart Flow",
      "Payment Gateway Integration",
      "Customer Order Dashboard",
      "Inventory Management Setup",
    ],
  },
  {
    id: "ai-applications",
    title: "AI Applications & Agents",
    slug: "ai-applications",
    shortDescription:
      "Custom conversational agents, document intelligence, and LLM-powered business automation.",
    fullDescription:
      "Supercharge your operations with purpose-built AI tools. We engineer intelligent customer support chatbots, smart document parsing workflows, automated data synthesis, and workflow copilots.",
    iconName: "Sparkles",
    badge: "Next-Gen Tech",
    keyFeatures: [
      "Custom domain-specific AI chatbots & assistants",
      "PDF, contract & catalog knowledge extraction",
      "Automated email & support response generation",
      "Safe API integrations with cost-controlled models",
    ],
    idealFor: [
      "Startups",
      "Legal & Financial Consultants",
      "Customer Support Teams",
      "Knowledge Workers",
    ],
    deliverables: [
      "AI Chat Widget / Interface",
      "Vector & Knowledge Base Setup",
      "API Middleware & Rate Limiting",
      "Analytics & Feedback Logs",
    ],
  },
  {
    id: "fullstack-applications",
    title: "Full-Stack Web Apps",
    slug: "fullstack-applications",
    shortDescription:
      "Scalable web applications engineered with modern reactive architectures, secure APIs, and robust databases.",
    fullDescription:
      "When off-the-shelf templates fail to meet unique business logic, we architect resilient full-stack platforms from database schema to intuitive user interfaces using Next.js, Node.js, and modern cloud databases.",
    iconName: "Layers",
    badge: "End-to-End",
    keyFeatures: [
      "Modular micro-architecture and REST / GraphQL APIs",
      "Secure user authentication (OAuth, Magic Link, RBAC)",
      "Real-time data synchronization & interactive dashboards",
      "Cloud-native deployment on AWS, Vercel, or VPS",
    ],
    idealFor: [
      "Tech Startups",
      "Enterprise Teams",
      "B2B Service Providers",
      "Educational Portals",
    ],
    deliverables: [
      "Full Web Application Codebase",
      "Database Schema & Migrations",
      "API Documentation",
      "CI/CD Deployment Pipelines",
    ],
  },
  {
    id: "saas-products",
    title: "SaaS Product Development",
    slug: "saas-products",
    shortDescription:
      "Turn your software concept into a market-ready multi-tenant SaaS with billing, auth, and onboarding.",
    fullDescription:
      "We partner with visionary founders and entrepreneurs to ideate, prototype, and build MVP-to-scale SaaS platforms complete with subscription billing, team management, usage metrics, and rock-solid reliability.",
    iconName: "Cpu",
    badge: "Scale Ready",
    keyFeatures: [
      "Subscription billing (recurring tiers, trials, usage)",
      "Multi-tenant data isolation & team workspaces",
      "Automated client onboarding tours & transactional emails",
      "Observability, telemetry, and error tracking",
    ],
    idealFor: [
      "SaaS Founders",
      "Bootstrapped Entrepreneurs",
      "Product Innovators",
      "Agency Spin-offs",
    ],
    deliverables: [
      "Production-ready SaaS MVP",
      "Billing & Subscription Webhooks",
      "Super-Admin Control Panel",
      "Developer Handover & Tech Docs",
    ],
  },
];
