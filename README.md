<<<<<<< HEAD
# NEXOVANTA STUDIO — Official Website

> **Build. Innovate. Grow.**  
> Official web platform for NEXOVANTA STUDIO — specializing in high-performance websites, AI applications, full-stack development, and SaaS solutions for small businesses, restaurants, startups, and entrepreneurs.

---

## 🚀 Quick Start (Windows 11 Setup Guide)

Follow these step-by-step instructions in PowerShell or Terminal on Windows 11:

### 1. Prerequisites
Ensure you have **Node.js (v18 or newer)** installed:
```powershell
node -v
npm -v
```
*(If Node.js is not installed, download the LTS version from [nodejs.org](https://nodejs.org/)).*

### 2. Install Dependencies
Open PowerShell inside this project folder (`d:\Nexovanta Studio`):
```powershell
npm install
```

### 3. Launch the Local Development Server
```powershell
npm run dev
```

### 4. View in Your Browser
Open your browser and navigate to:
```
http://localhost:3000
```
To view the simulated CRM inquiry dashboard, visit:
```
http://localhost:3000/admin-demo
```

---

## 🛠️ Customization & Owner Settings Guide

### 1. How to Insert Your Existing Logo
You have two easy ways to insert your logo:

- **Method A (Using an Image or SVG file - Recommended):**
  1. Copy your logo image (e.g. `logo.png` or `logo.svg`) into the **`public/`** folder.
  2. Open **[`components/Logo.tsx`](components/Logo.tsx)**.
  3. Change line 21:
     ```typescript
     const USE_CUSTOM_IMAGE = true;
     const CUSTOM_LOGO_PATH = "/your-logo-file.png";
     ```

- **Method B (Using Raw Vector SVG):**
  - Open **[`components/Logo.tsx`](components/Logo.tsx)** and replace the SVG `<path>` elements inside the component with your logo's SVG code.

---

### 2. Where to Change the WhatsApp Number & Contact Details
Open **[`data/contact.ts`](data/contact.ts)**:
```typescript
export const contactConfig = {
  // Replace with your real business phone number with country code (e.g. 91 for India):
  whatsAppNumber: "919876543210", 
  whatsAppDisplayNumber: "+91 98765 43210",
  ...
}
```
*Note: Any changes here automatically update all WhatsApp click-to-chat buttons, the hero CTA, and footer contacts across the entire site.*

---

### 3. Where to Update Pricing & Services
- **Pricing Packages (Sample INR prices):**
  Edit **[`data/pricing.ts`](data/pricing.ts)** to adjust rates (e.g., ₹2,999 starter, ₹6,999 business, custom quote), turnaround times, and bullet points.
- **Services Offered:**
  Edit **[`data/services.ts`](data/services.ts)** to add, remove, or modify service descriptions and deliverables.
- **Portfolio Demos:**
  Edit **[`data/portfolio.ts`](data/portfolio.ts)** to customize the 3 showcase demo projects (Restaurant, Small Business, AI productivity app).
- **FAQs:**
  Edit **[`data/faqs.ts`](data/faqs.ts)** to customize the interactive questions and answers.
- **AI Chatbot Knowledge:**
  Edit **[`data/chatBotData.ts`](data/chatBotData.ts)** to expand canned responses and suggested prompt pills.

---

## 📁 Project Structure

```
nexovanta-studio/
├── app/
│   ├── admin-demo/
│   │   └── page.tsx        # Simulated CRM Admin Dashboard (/admin-demo)
│   ├── favicon.ico
│   ├── globals.css         # Tailwind CSS v4 & custom dark navy design system
│   ├── layout.tsx          # Root layout with comprehensive SEO metadata
│   └── page.tsx            # High-conversion single-page landing site
├── components/
│   ├── About.tsx           # Mission, pillars & target audience showcase
│   ├── ChatWidget.tsx      # Floating interactive AI Demo Assistant
│   ├── ContactForm.tsx     # Client inquiry form with real-time validation & WhatsApp
│   ├── FAQs.tsx            # Categorized collapsible accordion
│   ├── Footer.tsx          # Navigation, contacts & social links
│   ├── Hero.tsx            # High-impact headline, CTAs & credibility metrics
│   ├── Logo.tsx            # Dedicated brand logo component with easy image swap
│   ├── Navbar.tsx          # Sticky blur header with mobile drawer
│   ├── Portfolio.tsx       # 3 demo projects with category tabs & modal inspection
│   └── Services.tsx        # 5 core service cards with direct inquiry triggers
├── data/
│   ├── adminMockData.ts    # Demo inquiries and metrics for /admin-demo
│   ├── chatBotData.ts      # FAQ answers and quick prompt pills for chatbot
│   ├── contact.ts          # Central WhatsApp, phone, email & social links
│   ├── faqs.ts             # Accordion questions and answers
│   ├── navigation.ts       # Main menu items and footer links
│   ├── portfolio.ts        # Project showcase details, specs & mock stats
│   ├── pricing.ts          # Central pricing plans in INR
│   ├── services.ts         # Service definitions, features & deliverables
│   └── siteConfig.ts       # Meta title, keywords & studio bio
├── public/
│   └── logo.svg            # Default geometric vector logo
└── README.md
```

---

## ⚡ Functional State vs. Future Backend

| Feature | Current Frontend Phase | Future Backend Integration (Optional) |
| :--- | :--- | :--- |
| **Navbar & Smooth Scrolling** | Fully functional (Desktop & Mobile) | None needed |
| **Inquiry Form** | Validates required fields, email format & displays demo submission payload | Plug into Resend/SendGrid or Supabase/PostgreSQL |
| **WhatsApp Direct Chat** | Fully functional (Opens chat with prefilled custom message) | Connect to WhatsApp Cloud Business API |
| **Portfolio Architecture Modal**| Fully functional (Interactive inspection & filtering) | Connect to headless CMS (Sanity / Strapi) |
| **AI Assistant Chatbot** | Fully functional (Isolated matching for FAQs & suggested prompts) | Connect to OpenAI / Anthropic / Gemini via `/api/chat` without touching UI |
| **Admin Dashboard Demo** | Fully functional (Search, status filters, simulated transitions) | Attach NextAuth / Supabase Auth & live DB |

---

## 🧪 Production Build & Verification Commands

To check TypeScript types and build the production bundle:
```powershell
npm run build
```
To test production mode locally:
```powershell
npm run start
```
=======
# NEXOVANTA-STUDIO
Official website and portfolio of NEXOVANTA STUDIO, a digital studio building modern business websites and AI-powered web applications.
>>>>>>> 6e38a4bb5ce1b620f18c3b0a56ad4775c06eb311
