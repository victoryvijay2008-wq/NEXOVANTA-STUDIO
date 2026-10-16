export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Pricing" | "Process" | "Technology";
}

export const faqsData: FAQItem[] = [
  {
    id: "turnaround-time",
    question: "What is the typical turnaround time for a project?",
    answer:
      "Starter single-page or 3-page websites are typically delivered within 3 to 5 business days. Business websites take 7 to 12 days, and custom full-stack web applications or AI tools range between 2 to 6 weeks depending on feature complexity and scope.",
    category: "Process",
  },
  {
    id: "pricing-structure",
    question: "How does your pricing structure work?",
    answer:
      "Our website packages start at transparent baseline rates (Starter from ₹2,999, Business from ₹6,999). For custom web apps and AI integrations, we provide milestone-based quotes. The final price depends on custom features, design revisions, and third-party APIs.",
    category: "Pricing",
  },
  {
    id: "after-launch-support",
    question: "Do you offer post-launch maintenance and support?",
    answer:
      "Yes! Every website package includes complimentary post-launch support (1 month for Starter, 3 months for Business). We also offer affordable monthly retainer packages for regular updates, security monitoring, and content additions.",
    category: "General",
  },
  {
    id: "custom-ai-integration",
    question: "Can you integrate custom AI chatbots or internal tools into our existing site?",
    answer:
      "Absolutely. We build custom AI assistants tailored to your company's documents, catalogs, or knowledge bases, and integrate them smoothly into your current web presence or new portal.",
    category: "Technology",
  },
  {
    id: "domain-hosting",
    question: "Do I need to buy domain and hosting before contacting you?",
    answer:
      "No, you do not need to have hosting or a domain ready. We guide you through selecting the most cost-effective and reliable domain registrars and cloud hosting providers (e.g., Vercel, Hostinger, AWS).",
    category: "Process",
  },
  {
    id: "payment-terms",
    question: "What are your payment terms?",
    answer:
      "Standard projects operate on a milestone schedule: typically a 50% initial deposit upon agreement, and the remaining 50% upon demo review and final deployment approval.",
    category: "Pricing",
  },
  {
    id: "mobile-responsive",
    question: "Will my website look good on mobile phones and tablets?",
    answer:
      "Every single project built by NEXOVANTA STUDIO follows a strict mobile-first architecture. It will adapt seamlessly across smartphones, iPads, laptops, and ultra-wide desktop monitors.",
    category: "Technology",
  },
];
