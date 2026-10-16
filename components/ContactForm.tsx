"use client";

import React, { useState } from "react";
import { contactConfig, getWhatsAppUrl, getEmailUrl } from "@/data/contact";
import { servicesData } from "@/data/services";
import {
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Mail,
  Building,
  User,
  DollarSign,
  FileText,
  Clock,
  Sparkles,
} from "lucide-react";

interface ContactFormProps {
  initialService?: string;
  initialPlan?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService = "",
  initialPlan = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    serviceRequired: initialService || "Business Websites",
    budgetRange: initialPlan ? `Plan: ${initialPlan}` : "₹5,000 – ₹15,000",
    projectDescription: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<any | null>(null);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string>("");
  const [needsActivation, setNeedsActivation] = useState(false);

  const budgetOptions = [
    "₹2,999 – ₹5,000 (Starter)",
    "₹5,000 – ₹15,000 (Small Business / Menu)",
    "₹15,000 – ₹35,000 (Full Business Portal)",
    "₹35,000 – ₹75,000 (E-Commerce / Custom App)",
    "₹75,000+ (Custom AI / Enterprise SaaS)",
    "Quote on Requirement",
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errs.name = "Your full name is required.";
    }

    if (!formData.email.trim()) {
      errs.email = "Your email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address (e.g., name@domain.com).";
    }

    if (!formData.businessName.trim()) {
      errs.businessName = "Business or organization name is required.";
    }

    if (!formData.serviceRequired) {
      errs.serviceRequired = "Please select a service.";
    }

    if (!formData.projectDescription.trim()) {
      errs.projectDescription = "Please provide a brief project summary.";
    } else if (formData.projectDescription.trim().length < 15) {
      errs.projectDescription = "Please provide at least 15 characters describing your project.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setIsSubmitting(false);
      setSubmittedData({ ...formData });

      if (response.ok && result.success) {
        setSubmitStatus("success");
        if (result.needsActivation) {
          setNeedsActivation(true);
        }
      } else {
        setSubmitStatus("error");
        setServerMessage(
          result?.message ||
            "Unable to deliver automatically. Please use the WhatsApp or Email buttons below!"
        );
      }
    } catch (err: any) {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setSubmitStatus("error");
      setServerMessage(
        "Network connection issue. You can still send your details via WhatsApp or Email below."
      );
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setSubmitStatus("idle");
    setNeedsActivation(false);
    setFormData({
      name: "",
      email: "",
      businessName: "",
      serviceRequired: "Business Websites",
      budgetRange: "₹5,000 – ₹15,000",
      projectDescription: "",
    });
    setErrors({});
  };

  const handleEmailSubmit = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (!validate()) return;
    const mailUrl = getEmailUrl(formData);
    window.location.href = mailUrl;
  };

  // Generate WhatsApp customized message based on form state
  const whatsAppDirectMessage = `Hello Nexovanta Studio! My name is ${
    formData.name || "a visitor"
  } from ${formData.businessName || "my business"}. I'm interested in ${
    formData.serviceRequired
  } with an estimated budget of ${formData.budgetRange}. Could we discuss?`;

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Start Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s Build Your Next{" "}
            <span className="gradient-text-cyan-violet">Digital Advantage</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Send us your project outline or connect directly via WhatsApp. We
            typically review requirements and respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct WhatsApp & Studio Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Quick Action Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 via-[#0a0f1d] to-[#050811] shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Fast-Track on WhatsApp
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Prefer an immediate conversation? Message our team directly with
                your ideas, menu files, or reference links.
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 mb-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                    Studio WhatsApp:
                  </span>
                  <span className="font-bold text-emerald-400 font-mono text-sm">
                    {contactConfig.whatsAppDisplayNumber}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                    Direct Email:
                  </span>
                  <a
                    href={`mailto:${contactConfig.businessEmail}`}
                    className="font-mono text-cyan-300 hover:underline"
                  >
                    {contactConfig.businessEmail}
                  </a>
                </div>
              </div>

              <div className="space-y-2.5">
                <a
                  href={getWhatsAppUrl(whatsAppDirectMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Start WhatsApp Chat Now</span>
                </a>

                <a
                  href={getEmailUrl(formData)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Email Directly: {contactConfig.businessEmail}</span>
                </a>
              </div>
            </div>

            {/* Studio Availability Badge */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-sm font-semibold text-white">
                  Currently Accepting New Projects
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We take a limited number of clients each sprint to ensure
                impeccable code quality, rapid delivery, and direct engineer
                access.
              </p>
              <div className="pt-3 border-t border-white/5 text-xs text-slate-400 flex items-center justify-between">
                <span>Working Hours:</span>
                <span className="text-slate-300 font-medium">
                  Mon – Sat (10am – 7pm IST)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
              {submittedData ? (
                /* Success / Demo State Notice */
                <div className="py-8 text-center space-y-6 animate-in fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    {submitStatus === "success" ? (
                      <>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 mb-2 uppercase tracking-wider">
                          ✓ Sent Directly to Studio Inbox
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Project Details Dispatched!
                        </h3>
                        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                          Thank you, <strong>{submittedData.name}</strong>. Your project outline has been sent directly to <strong>{contactConfig.businessEmail}</strong>. We will review your requirements and reach out within 24 hours.
                        </p>

                        {needsActivation && (
                          <div className="mt-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs text-left max-w-md mx-auto">
                            <strong>⚡ 1-Time Activation Note:</strong> FormSubmit sent an activation link to <em>{contactConfig.businessEmail}</em>. Please open Gmail and click &ldquo;Activate Form&rdquo; once to start receiving all submissions automatically!
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 mb-2 uppercase tracking-wider">
                          Inquiry Prepared
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Project Details Ready
                        </h3>
                        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                          {serverMessage || `Thank you, ${submittedData.name}. Connect with our engineers instantly via WhatsApp or direct email below.`}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Summary of Local Entry */}
                  <div className="text-left max-w-md mx-auto p-4 rounded-xl bg-white/5 border border-white/10 text-xs space-y-2 text-slate-300">
                    <div className="font-semibold text-white pb-1 border-b border-white/10">
                      Validated Form Payload:
                    </div>
                    <div>
                      <span className="text-slate-400">Business:</span>{" "}
                      {submittedData.businessName}
                    </div>
                    <div>
                      <span className="text-slate-400">Email:</span>{" "}
                      {submittedData.email}
                    </div>
                    <div>
                      <span className="text-slate-400">Service:</span>{" "}
                      {submittedData.serviceRequired}
                    </div>
                    <div>
                      <span className="text-slate-400">Budget:</span>{" "}
                      {submittedData.budgetRange}
                    </div>
                    <div>
                      <span className="text-slate-400">Description:</span>{" "}
                      {submittedData.projectDescription}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <a
                      href={getWhatsAppUrl(
                        `Hi Nexovanta Studio! I just filled the inquiry form for ${submittedData.businessName} (${submittedData.serviceRequired}). Can we connect?`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <a
                      href={getEmailUrl(submittedData)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 shadow-md transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Actual Inquiry Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Live Form Banner */}
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300">
                    <Sparkles className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>
                      Direct Lead Delivery • Inquiries are sent directly to {contactConfig.businessEmail}
                    </span>
                  </div>

                  {/* 2-Column Inputs: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-name"
                        className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                      >
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="inquiry-name"
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g., Ankit Roy"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:bg-[#0d1424] transition-all ${
                            errors.name
                              ? "border-rose-500 focus:border-rose-400"
                              : "border-white/10 focus:border-cyan-400"
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-email"
                        className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                      >
                        Your Email Address <span className="text-cyan-400">*</span>{" "}
                        <span className="text-[10px] text-slate-400 font-normal lowercase">
                          (for our reply)
                        </span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="inquiry-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="client@gmail.com"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:bg-[#0d1424] transition-all ${
                            errors.email
                              ? "border-rose-500 focus:border-rose-400"
                              : "border-white/10 focus:border-cyan-400"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Business Name */}
                  <div>
                    <label
                      htmlFor="inquiry-business"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Business / Organization Name <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Building className="w-4 h-4" />
                      </div>
                      <input
                        id="inquiry-business"
                        type="text"
                        value={formData.businessName}
                        onChange={(e) =>
                          setFormData({ ...formData, businessName: e.target.value })
                        }
                        placeholder="e.g., Spice Garden Bistro or Horizon Tech"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:bg-[#0d1424] transition-all ${
                          errors.businessName
                            ? "border-rose-500 focus:border-rose-400"
                            : "border-white/10 focus:border-cyan-400"
                        }`}
                      />
                    </div>
                    {errors.businessName && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.businessName}</span>
                      </p>
                    )}
                  </div>

                  {/* 2-Column: Service Required & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-service"
                        className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                      >
                        Service Required <span className="text-cyan-400">*</span>
                      </label>
                      <select
                        id="inquiry-service"
                        value={formData.serviceRequired}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            serviceRequired: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090e1c] border border-white/10 text-sm text-white focus:border-cyan-400 transition-all cursor-pointer"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="General Consultation">
                          General Consultation
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-budget"
                        className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                      >
                        Estimated Budget Range
                      </label>
                      <select
                        id="inquiry-budget"
                        value={formData.budgetRange}
                        onChange={(e) =>
                          setFormData({ ...formData, budgetRange: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090e1c] border border-white/10 text-sm text-white focus:border-cyan-400 transition-all cursor-pointer"
                      >
                        {budgetOptions.map((b, idx) => (
                          <option key={idx} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label
                      htmlFor="inquiry-description"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Project Description & Needs <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="inquiry-description"
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectDescription: e.target.value,
                        })
                      }
                      placeholder="Tell us about your requirements, timeline, reference websites, or special features needed..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:bg-[#0d1424] transition-all resize-none ${
                        errors.projectDescription
                          ? "border-rose-500 focus:border-rose-400"
                          : "border-white/10 focus:border-cyan-400"
                      }`}
                    />
                    {errors.projectDescription && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.projectDescription}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit & Email Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-cyan-400 to-violet-600 hover:from-cyan-400 hover:to-violet-500 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all disabled:opacity-60 cursor-pointer text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Validating Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleEmailSubmit}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-cyan-300 hover:text-white bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all cursor-pointer text-sm"
                      title="Directly opens your mail app with form details pre-filled"
                    >
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span>Email Details to Us</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center">
                    💡 You can submit directly on this page or click <strong className="text-cyan-300">Email Details to Us</strong> to send straight from your email app.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
