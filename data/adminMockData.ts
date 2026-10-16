export interface InquiryRecord {
  id: string;
  clientName: string;
  businessName: string;
  email: string;
  serviceRequested: string;
  budgetRange: string;
  status: "New" | "In Review" | "Quoted" | "In Progress" | "Completed";
  submittedAt: string;
  projectDescription: string;
  notes: string;
  priority: "High" | "Medium" | "Standard";
}

export interface DashboardMetric {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  subtext: string;
}

export const mockDashboardMetrics: DashboardMetric[] = [
  {
    label: "Total Inquiries (Demo)",
    value: "28",
    change: "+14% this month",
    positive: true,
    subtext: "Simulated client leads",
  },
  {
    label: "Under Review",
    value: "7",
    change: "Active evaluation",
    positive: true,
    subtext: "Waiting for scope breakdown",
  },
  {
    label: "Quotes Sent",
    value: "12",
    change: "85% accept rate",
    positive: true,
    subtext: "Detailed proposals dispatched",
  },
  {
    label: "Avg. Turnaround",
    value: "6.4 Days",
    change: "-1.2 days faster",
    positive: true,
    subtext: "From brief to delivery",
  },
];

export const mockInquiryRecords: InquiryRecord[] = [
  {
    id: "INQ-2026-081",
    clientName: "Rahul Sharma",
    businessName: "Spice Route Bistro & Bar",
    email: "rahul@spiceroute.sample",
    serviceRequested: "Business Websites (Restaurant)",
    budgetRange: "₹10,000 – ₹25,000",
    status: "New",
    submittedAt: "2026-10-14 18:42",
    projectDescription:
      "We need a modern website with a digital QR menu, table reservation request form, and WhatsApp integration for dinner reservations.",
    notes: "Follow up with sample restaurant layout and demo reservation flow.",
    priority: "High",
  },
  {
    id: "INQ-2026-080",
    clientName: "Priya Nair",
    businessName: "Vanguard Wealth Partners",
    email: "priya@vanguardwealth.sample",
    serviceRequested: "Business Websites",
    budgetRange: "₹25,000 – ₹50,000",
    status: "In Review",
    submittedAt: "2026-10-13 14:15",
    projectDescription:
      "Corporate site for financial consultancy with team profiles, case studies, and lead capture for high-net-worth clients.",
    notes: "Review compliance requirements and corporate color palette.",
    priority: "High",
  },
  {
    id: "INQ-2026-079",
    clientName: "Karthik Verma",
    businessName: "DocuQuery AI Systems",
    email: "karthik@docuquery.sample",
    serviceRequested: "AI Applications & Agents",
    budgetRange: "₹50,000 – ₹1,50,000",
    status: "Quoted",
    submittedAt: "2026-10-11 10:20",
    projectDescription:
      "Interactive web UI for users to upload legal PDFs and query them via local LLM model with citation highlights.",
    notes: "Sent proposal #NQ-104 with milestone-based delivery structure.",
    priority: "High",
  },
  {
    id: "INQ-2026-078",
    clientName: "Ananya Deshmukh",
    businessName: "Loom & Craft Apparel",
    email: "ananya@loomcraft.sample",
    serviceRequested: "E-Commerce Solutions",
    budgetRange: "₹25,000 – ₹50,000",
    status: "In Progress",
    submittedAt: "2026-10-09 16:35",
    projectDescription:
      "Handloom apparel e-commerce store with Razorpay UPI payment gateway, inventory management, and Instagram shop linking.",
    notes: "Sprint 1 complete. Catalog prototype shared for client sign-off.",
    priority: "Medium",
  },
  {
    id: "INQ-2026-077",
    clientName: "Vikram Malhotra",
    businessName: "EduVantage Learning Hub",
    email: "vikram@eduvantage.sample",
    serviceRequested: "Full-Stack Web Apps",
    budgetRange: "₹50,000 – ₹1,50,000",
    status: "Completed",
    submittedAt: "2026-10-02 09:12",
    projectDescription:
      "Student registration and test-series portal with score generation and analytics dashboard for teachers.",
    notes: "Deployed to production. Client awarded 5-star review.",
    priority: "Standard",
  },
  {
    id: "INQ-2026-076",
    clientName: "Sneha Reddy",
    businessName: "Nirvana Yoga & Wellness",
    email: "sneha@nirvanawellness.sample",
    serviceRequested: "Business Websites",
    budgetRange: "₹5,000 – ₹15,000",
    status: "Quoted",
    submittedAt: "2026-09-28 11:45",
    projectDescription:
      "Clean wellness studio landing page with class schedules, trainer bios, and WhatsApp booking button.",
    notes: "Awaiting final schedule photos from client.",
    priority: "Medium",
  },
];
