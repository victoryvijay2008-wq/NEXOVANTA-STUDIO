"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  quickPrompts,
  cannedResponses,
  fallbackResponse,
  QuickPrompt,
} from "@/data/chatBotData";
import { getWhatsAppUrl } from "@/data/contact";
import {
  Bot,
  X,
  Send,
  Sparkles,
  MessageSquare,
  CornerDownLeft,
  ChevronDown,
  RotateCcw,
} from "lucide-react";

interface Message {
  id: string;
  sender: "assistant" | "user";
  text: string;
  timestamp: string;
  suggestions?: string[];
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial-1",
      sender: "assistant",
      text: "👋 Welcome to **NEXOVANTA STUDIO**! I'm your interactive **Demo Assistant**.\n\nAsk me about our starting prices (from ₹2,999), services, delivery timelines, or click one of the quick prompts below!",
      timestamp: "Just now",
      suggestions: [
        "What services do you offer?",
        "How much does a website cost?",
        "Turnaround times?",
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  /**
   * ISOLATED RESPONSE LOGIC
   * In future production, replace this function with a fetch('/api/chat', ...) call
   * without having to touch any UI layout or exposing keys in client code!
   */
  const resolveBotResponse = (query: string): { response: string; suggestions?: string[] } => {
    const lower = query.toLowerCase().trim();

    for (const item of cannedResponses) {
      if (item.keywords.some((k) => lower.includes(k))) {
        return {
          response: item.response,
          suggestions: item.followUpSuggestions,
        };
      }
    }

    return {
      response: fallbackResponse,
      suggestions: [
        "What services do you offer?",
        "How much does a website cost?",
        "How do I start a project?",
      ],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate natural AI thinking latency (600ms)
    setTimeout(() => {
      const { response, suggestions } = resolveBotResponse(text);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "assistant",
        text: response,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        suggestions,
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `init-${Date.now()}`,
        sender: "assistant",
        text: "Chat cleared! How can I assist you with Nexovanta Studio's web & AI solutions today?",
        timestamp: "Just now",
        suggestions: [
          "What services do you offer?",
          "How much does a website cost?",
          "How do I start a project?",
        ],
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative group p-4 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-violet-600 text-white shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2.5"
          aria-label="Open AI Assistant Demo"
        >
          <Bot className="w-6 h-6 animate-pulse" />
          <span className="hidden sm:inline-block font-semibold text-sm pr-1">
            Demo Assistant
          </span>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
          </span>
        </button>
      )}

      {/* Expanded Chat Drawer / Window */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[420px] h-[550px] max-h-[85vh] rounded-3xl bg-[#090e1c] border border-cyan-500/30 shadow-[0_15px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(6,182,212,0.2)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-cyan-950/60 via-[#0a0f1d] to-violet-950/60 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-white">Nexovanta Assistant</h3>
                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Demo
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Instant FAQ Responses</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetChat}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                title="Reset conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                title="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Demo Notice Banner */}
          <div className="px-4 py-2 bg-cyan-950/40 border-b border-cyan-500/10 text-[11px] text-cyan-300/90 flex items-center justify-between">
            <span>💡 Demo Widget: Uses predefined FAQ answers.</span>
            <span className="text-[10px] text-slate-400">Ready for API</span>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white rounded-br-none shadow-md shadow-cyan-500/10"
                      : "bg-white/5 border border-white/10 text-slate-200 rounded-bl-none"
                  }`}
                >
                  <div className="whitespace-pre-line">{msg.text}</div>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {msg.timestamp}
                </span>

                {/* Optional Follow-up Suggestion Chips */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {msg.suggestions.map((sug, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSendMessage(sug)}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-cyan-950/40 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-500/30 transition-all text-left"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Pills Bar */}
          <div className="px-3 py-2 bg-white/[0.02] border-t border-white/5 overflow-x-auto flex gap-1.5 no-scrollbar">
            {quickPrompts.slice(0, 3).map((prompt) => (
              <button
                key={prompt.id}
                type="button"
                onClick={() => handleSendMessage(prompt.query)}
                className="whitespace-nowrap text-[11px] px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors shrink-0"
              >
                {prompt.label}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-[#070b16] border-t border-white/10">
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about pricing, services, delivery..."
                className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
              />
              <button
                type="button"
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="absolute right-1.5 p-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 disabled:hover:bg-cyan-500 text-white transition-all cursor-pointer"
                aria-label="Send query"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 px-1">
              <span>Isolated Demo AI Logic</span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                Switch to WhatsApp →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
