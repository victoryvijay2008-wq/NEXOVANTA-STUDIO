"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { FAQs } from "@/components/FAQs";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>("Business Websites");
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
  };

  return (
    <div className="relative min-h-screen bg-[#050811] text-[#f8fafc] overflow-hidden">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Regions */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 3. Portfolio Demo Projects Section */}
        <Portfolio />

        {/* 4. Pricing Section */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 5. About Studio Section */}
        <About />

        {/* 6. Contact & Inquiry Section */}
        <ContactForm
          initialService={selectedService}
          initialPlan={selectedPlan}
        />

        {/* 7. FAQs Section */}
        <FAQs />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* AI Assistant Chatbot Demo Widget */}
      <ChatWidget />
    </div>
  );
}
