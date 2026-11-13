import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "919309851833";
  const defaultMessage = encodeURIComponent("Namaste Sayali! I visited your PIHU boutique website and would like to inquire about a custom handcrafted order.");

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-cream-200 p-4 text-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between border-b border-cream-100 pb-2 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-terracotta-100 text-terracotta-700 font-bold flex items-center justify-center text-xs">
                SS
              </div>
              <div>
                <p className="font-bold text-warmcharcoal-900">Sayali Shinde</p>
                <p className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> Online • Artisan Studio
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-warmcharcoal-400 hover:text-warmcharcoal-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-warmcharcoal-600 mb-3 text-[11px] leading-relaxed">
            Need design suggestions, urgent rush order delivery, or have a custom sketch you want painted on fabric? Chat directly with me on WhatsApp!
          </p>

          <a
            href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors text-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Open WhatsApp Chat</span>
          </a>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 border-2 border-white/80"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          Chat with Artisan
        </span>
      </button>
    </div>
  );
}
