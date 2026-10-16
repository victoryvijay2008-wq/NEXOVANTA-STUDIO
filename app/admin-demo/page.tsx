"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  mockDashboardMetrics,
  mockInquiryRecords,
  InquiryRecord,
} from "@/data/adminMockData";
import {
  Search,
  Filter,
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Clock,
  FileText,
  AlertTriangle,
  User,
  Building,
  Mail,
  DollarSign,
  X,
  RefreshCw,
  Eye,
  SlidersHorizontal,
} from "lucide-react";

export default function AdminDemoPage() {
  const [inquiries, setInquiries] = useState<InquiryRecord[]>(mockInquiryRecords);
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedRecord, setSelectedRecord] = useState<InquiryRecord | null>(null);

  const statuses = ["All", "New", "In Review", "Quoted", "In Progress", "Completed"];

  // Filter records based on selected status and search query
  const filteredRecords = inquiries.filter((record) => {
    const matchesStatus =
      selectedStatus === "All" || record.status === selectedStatus;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      record.clientName.toLowerCase().includes(query) ||
      record.businessName.toLowerCase().includes(query) ||
      record.serviceRequested.toLowerCase().includes(query) ||
      record.id.toLowerCase().includes(query);

    return matchesStatus && matchesSearch;
  });

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "New":
        return "bg-cyan-500/15 text-cyan-300 border-cyan-500/30";
      case "In Review":
        return "bg-amber-500/15 text-amber-300 border-amber-500/30";
      case "Quoted":
        return "bg-violet-500/15 text-violet-300 border-violet-500/30";
      case "In Progress":
        return "bg-blue-500/15 text-blue-300 border-blue-500/30";
      case "Completed":
        return "bg-emerald-500/15 text-emerald-300 border-emerald-500/30";
      default:
        return "bg-slate-500/15 text-slate-300 border-slate-500/30";
    }
  };

  const getPriorityBadgeClass = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-rose-400 bg-rose-500/10 border-rose-500/20";
      case "Medium":
        return "text-amber-400 bg-amber-500/10 border-amber-500/20";
      default:
        return "text-slate-400 bg-white/5 border-white/10";
    }
  };

  const handleUpdateStatus = (id: string, newStatus: InquiryRecord["status"]) => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
    if (selectedRecord && selectedRecord.id === id) {
      setSelectedRecord((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const handleResetFilters = () => {
    setSelectedStatus("All");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-200">
      {/* Top Demo Banner */}
      <div className="bg-amber-950/60 border-b border-amber-500/30 px-4 py-2.5 text-center text-xs text-amber-200 flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
        <span>
          <strong>DEMO DATA ENVIRONMENT:</strong> This route is an interactive UI
          prototype for studio inquiry management. No real authentication or
          database is connected.
        </span>
      </div>

      {/* Navigation Header */}
      <header className="border-b border-white/10 bg-[#070b16]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 hover:text-white border border-white/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Public Website</span>
            </Link>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />
            <div className="hidden sm:block">
              <Logo size="sm" clickable={false} />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-mono">
              Inquiry Desk v1.0
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Page Title & Quick Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Client Inquiries Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Simulated CRM pipeline for website requests, custom AI integrations, and SaaS scopes.
            </p>
          </div>

          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors self-start sm:self-auto"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Demo Filters</span>
          </button>
        </div>

        {/* 4 Summary Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockDashboardMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-5 border border-white/10 relative overflow-hidden"
            >
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                {metric.label}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">
                {metric.value}
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-cyan-400 font-medium">{metric.change}</span>
                <span className="text-slate-400">{metric.subtext}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Filters & Search Toolbar */}
        <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/10 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by client, business, ID or service..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Total Results Count */}
            <div className="text-xs text-slate-400">
              Showing <span className="font-bold text-white">{filteredRecords.length}</span> of{" "}
              {inquiries.length} records
            </div>
          </div>

          {/* Status Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/5">
            <span className="text-xs text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Status:</span>
            </span>
            {statuses.map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setSelectedStatus(status)}
                className={`text-xs px-3 py-1 rounded-lg font-medium transition-colors ${
                  selectedStatus === status
                    ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-sm"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Inquiries Table */}
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-xl">
          {filteredRecords.length === 0 ? (
            /* Empty State */
            <div className="p-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 mx-auto">
                <SlidersHorizontal className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">No inquiries match your filters</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Try searching for different keywords or reset your status filter to see all sample records.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            /* Records Table */
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-white/[0.03] border-b border-white/10 text-slate-400 uppercase text-[11px] tracking-wider font-semibold">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Inquiry ID</th>
                    <th className="py-3.5 px-4 sm:px-6">Client / Business</th>
                    <th className="py-3.5 px-4 sm:px-6">Service Requested</th>
                    <th className="py-3.5 px-4 sm:px-6">Budget Tier</th>
                    <th className="py-3.5 px-4 sm:px-6">Status</th>
                    <th className="py-3.5 px-4 sm:px-6">Submitted</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredRecords.map((record) => (
                    <tr
                      key={record.id}
                      className="hover:bg-white/[0.02] transition-colors group cursor-pointer"
                      onClick={() => setSelectedRecord(record)}
                    >
                      <td className="py-3.5 px-4 sm:px-6 font-mono text-cyan-400 font-semibold whitespace-nowrap">
                        {record.id}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="font-bold text-white">{record.businessName}</div>
                        <div className="text-slate-400 text-xs flex items-center gap-1.5">
                          <span>{record.clientName}</span>
                          <span>•</span>
                          <span className="font-mono">{record.email}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-200 whitespace-nowrap">
                        {record.serviceRequested}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-mono text-slate-300 whitespace-nowrap">
                        {record.budgetRange}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 whitespace-nowrap">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${getStatusBadgeClass(
                            record.status
                          )}`}
                        >
                          {record.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-400 text-xs whitespace-nowrap font-mono">
                        {record.submittedAt}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          onClick={() => setSelectedRecord(record)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-xs font-medium text-slate-300 hover:text-cyan-300 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Review</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Record Inspection Modal */}
      {selectedRecord && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedRecord(null)}
        >
          <div
            className="w-full max-w-xl bg-[#090e1c] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-cyan-400">
                    {selectedRecord.id}
                  </span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full border ${getStatusBadgeClass(
                      selectedRecord.status
                    )}`}
                  >
                    {selectedRecord.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mt-1">
                  {selectedRecord.businessName}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedRecord(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm">
              {/* Meta Grid */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white/5 border border-white/10 text-xs">
                <div>
                  <div className="text-slate-400 uppercase tracking-wider text-[10px] font-semibold">
                    Contact Person
                  </div>
                  <div className="text-white font-medium mt-0.5">{selectedRecord.clientName}</div>
                  <div className="text-cyan-400 font-mono mt-0.5">{selectedRecord.email}</div>
                </div>
                <div>
                  <div className="text-slate-400 uppercase tracking-wider text-[10px] font-semibold">
                    Service & Budget
                  </div>
                  <div className="text-white font-medium mt-0.5">{selectedRecord.serviceRequested}</div>
                  <div className="text-emerald-400 font-mono mt-0.5">{selectedRecord.budgetRange}</div>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Project Brief & Requirements:
                </h4>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-slate-200 leading-relaxed text-xs sm:text-sm">
                  {selectedRecord.projectDescription}
                </div>
              </div>

              {/* Internal Notes */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Studio Review Notes:
                </h4>
                <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-cyan-200/90 text-xs">
                  {selectedRecord.notes}
                </div>
              </div>

              {/* Status Update Simulator */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Simulate Status Transition (Interactive Demo):
                </h4>
                <div className="flex flex-wrap gap-2">
                  {statuses.filter((s) => s !== "All").map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => handleUpdateStatus(selectedRecord.id, st as any)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                        selectedRecord.status === st
                          ? "bg-cyan-500 text-black font-bold border-cyan-400"
                          : "bg-white/5 text-slate-300 hover:bg-white/10 border-white/10"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedRecord(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
