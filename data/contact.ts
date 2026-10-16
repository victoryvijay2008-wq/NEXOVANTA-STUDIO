/**
 * NEXOVANTA STUDIO - Contact & Social Configuration
 */

export interface ContactConfig {
  whatsAppNumber: string; // Clean numeric string with country code (e.g., "918088995307")
  whatsAppDisplayNumber: string; // Formatted for human reading
  whatsAppDefaultMessage: string;

  // General Inquiries
  supportEmail: string;
  businessEmail: string;
  phoneDisplay: string;
  officeLocation: string;
  workingHours: string;

  // Social Links
  socialLinks: {
    name: string;
    href: string;
    icon: string;
  }[];
}

export const contactConfig: ContactConfig = {
  // Configured WhatsApp Number (India +91)
  whatsAppNumber: "918088995307",
  whatsAppDisplayNumber: "+91 80889 95307",
  whatsAppDefaultMessage:
    "Hello Nexovanta Studio! I'm interested in discussing a website / digital project for my business. Could we connect?",

  // Verified Business Emails
  supportEmail: "victoryvijay2008@gmail.com",
  businessEmail: "victoryvijay2008@gmail.com",
  phoneDisplay: "+91 80889 95307",
  officeLocation: "Bengaluru, India (Remote & Global Delivery)",
  workingHours: "Monday – Saturday: 10:00 AM – 7:00 PM IST",

  // Social Channels
  socialLinks: [
    { name: "GitHub", href: "https://github.com", icon: "Github" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
    { name: "Twitter/X", href: "https://x.com", icon: "Twitter" },
    { name: "Instagram", href: "https://instagram.com", icon: "Instagram" },
  ],
};

/**
 * Helper to generate prefilled WhatsApp click-to-chat URL.
 * Automatically ensures international format without '+' or spaces.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  // Strip non-numeric characters
  const digitsOnly = contactConfig.whatsAppNumber.replace(/\D/g, "");
  // Prepend 91 if omitted
  const cleanNumber = digitsOnly.startsWith("91") ? digitsOnly : `91${digitsOnly}`;
  const message = encodeURIComponent(
    customMessage || contactConfig.whatsAppDefaultMessage
  );
  return `https://wa.me/${cleanNumber}?text=${message}`;
}

/**
 * Helper to generate prefilled mailto URL for sending project details via email.
 */
export function getEmailUrl(details?: {
  name?: string;
  email?: string;
  businessName?: string;
  serviceRequired?: string;
  budgetRange?: string;
  projectDescription?: string;
}): string {
  const recipient = contactConfig.businessEmail;
  const subject = details?.businessName
    ? `Project Inquiry: ${details.businessName} - Nexovanta Studio`
    : `Website / Digital Project Inquiry - Nexovanta Studio`;

  const bodyLines = [
    `Hello Nexovanta Studio,`,
    ``,
    `I would like to discuss a project with your team:`,
    `- Client Name: ${details?.name || "Prospective Client"}`,
    `- Business / Brand: ${details?.businessName || "Not specified"}`,
    `- Contact Email: ${details?.email || "Not specified"}`,
    `- Service Required: ${details?.serviceRequired || "Website / Digital Services"}`,
    `- Estimated Budget: ${details?.budgetRange || "To be discussed"}`,
    ``,
    `Project Requirements / Website Details:`,
    details?.projectDescription || "Please contact me to discuss requirements.",
    ``,
    `Best regards,`,
    details?.name || "Client",
  ];

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
}

