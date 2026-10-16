export interface QuickPrompt {
  id: string;
  label: string;
  query: string;
}

export interface ChatBotAnswer {
  keywords: string[];
  response: string;
  followUpSuggestions?: string[];
}

export const quickPrompts: QuickPrompt[] = [
  {
    id: "services",
    label: "What services do you offer?",
    query: "What services does Nexovanta Studio provide?",
  },
  {
    id: "pricing",
    label: "Website pricing starting rates?",
    query: "How much does a website cost?",
  },
  {
    id: "turnaround",
    label: "Project turnaround times?",
    query: "How fast can you deliver my website?",
  },
  {
    id: "start-project",
    label: "How do I start a project?",
    query: "How do I get started with a project?",
  },
  {
    id: "ai-apps",
    label: "Can you build AI tools for my business?",
    query: "Do you build custom AI applications?",
  },
];

export const cannedResponses: ChatBotAnswer[] = [
  {
    keywords: ["service", "services", "offer", "what do you do", "capabilities"],
    response:
      "NEXOVANTA STUDIO specializes in 5 core domains:\n• **Business Websites** (Corporate, restaurants, local shops)\n• **E-Commerce Solutions** (Online storefronts with UPI/Stripe)\n• **AI Applications & Agents** (Custom chatbots, document intelligence)\n• **Full-Stack Web Apps** (Next.js & cloud architectures)\n• **SaaS Products** (MVP to scale development).",
    followUpSuggestions: ["Website pricing", "Turnaround times", "Start a project"],
  },
  {
    keywords: ["price", "pricing", "cost", "how much", "rate", "inr", "package", "fee"],
    response:
      "Our website packages start at:\n• **Starter Website**: ₹2,999 onwards (1–3 pages, mobile-first)\n• **Business Website**: ₹6,999 onwards (5–8 pages, dynamic features, SEO)\n• **Custom AI & Full-Stack**: Milestone-based custom quote.\n\nFinal prices depend on your exact requirements. Would you like to check the Pricing section or submit a quote request?",
    followUpSuggestions: ["Go to Pricing", "Request a quote", "Turnaround times"],
  },
  {
    keywords: ["time", "turnaround", "how fast", "how long", "delivery", "duration", "timeline"],
    response:
      "Typical delivery timelines:\n• **Starter Websites**: 3 to 5 business days\n• **Business Websites**: 7 to 12 business days\n• **Custom Web Apps & AI Tools**: 2 to 6 weeks depending on scope.",
    followUpSuggestions: ["Website pricing", "Start a project", "Services"],
  },
  {
    keywords: ["ai", "artificial intelligence", "chatbot", "llm", "agent", "gpt", "automation"],
    response:
      "Yes! We build intelligent domain-specific AI chatbots, document parsing tools, automated data synthesis workflows, and team copilots using modern AI APIs. We ensure API keys and data remain secure.",
    followUpSuggestions: ["Custom AI quote", "Services", "Portfolio demos"],
  },
  {
    keywords: ["start", "begin", "hire", "contact", "inquiry", "how to start", "form"],
    response:
      "Getting started is easy:\n1. Scroll down to our **Client Inquiry Form**.\n2. Choose your preferred service and budget.\n3. Or click our **WhatsApp** button for an immediate direct conversation with our team!",
    followUpSuggestions: ["Open WhatsApp", "Fill Inquiry Form"],
  },
  {
    keywords: ["restaurant", "cafe", "food", "menu", "booking", "dining"],
    response:
      "We build vibrant restaurant websites with digital menus, allergen filters, reservation forms, and WhatsApp table booking! Check out our 'Saffron & Thyme' demo project in the Portfolio section.",
    followUpSuggestions: ["View Portfolio", "Website pricing"],
  },
  {
    keywords: ["tech", "technology", "stack", "react", "next", "tailwind"],
    response:
      "We build with modern, high-performance technologies: **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Node.js**, and modern cloud platforms for ultra-fast, secure experiences.",
    followUpSuggestions: ["Services", "Portfolio demos"],
  },
];

export const fallbackResponse =
  "Thanks for asking! As this is an interactive **Demo Assistant**, I can assist with queries about our services, starting prices (₹2,999+), project timelines, AI capabilities, and how to get in touch. Try clicking one of the suggested prompts below, or connect directly with our studio via WhatsApp!";
