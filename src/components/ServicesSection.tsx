import React, { useState } from 'react';
import { ArrowUpRight, Check, X, Shield, Clock } from 'lucide-react';
import { SERVICES } from '../data/content';
import { Service } from '../types';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  return (
    <section id="services" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-3.5">
          <div className="w-2.5 h-10 rounded-full bg-[#C5A059] shadow-xs" />
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Core Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              End-to-End Architectural, Engineering & Construction Solutions
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid (8 Services) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelectedService(service)}
            className="group cursor-pointer rounded-3xl glass-crystal-card p-6 flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FAF5EC] to-[#EFE4D2] border border-[#C5A059]/30 p-3 mb-5 flex items-center justify-center group-hover:scale-105 transition-all shadow-xs">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#B88E3E] transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 font-normal">
                {service.description}
              </p>
            </div>

            {/* Bottom link with arrow */}
            <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-[#B88E3E]">
              <span>View Specifications</span>
              <div className="p-1.5 rounded-xl bg-white border border-slate-200 group-hover:bg-slate-950 group-hover:text-white transition-colors shadow-xs">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-2xl rounded-3xl glass-crystal-modal p-6 sm:p-8 border border-white shadow-2xl relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200/70">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B88E3E]">
                  Technical Specifications
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs text-slate-500">Shiva Shakthi Standards</span>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-start gap-5 mb-6">
              <div className="w-20 h-20 rounded-2xl bg-[#FAF5EC] border border-[#C5A059]/30 p-3.5 shrink-0 shadow-xs flex items-center justify-center">
                <img
                  src={selectedService.icon}
                  alt={selectedService.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  {selectedService.title}
                </h3>
                <p className="text-xs text-[#B88E3E] font-semibold uppercase tracking-wider">
                  Civil Engineering & Construction Department
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
              {selectedService.longDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Key Deliverables & Standards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/80 border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                  >
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Consultation CTA */}
            {quoteSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center text-xs text-emerald-800 font-semibold">
                Consultation request logged! Our senior civil engineer will reach out within 2 hours.
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-200/70">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider text-center transition"
                >
                  Book Site Inspection
                </a>
                <button
                  onClick={() => setQuoteSubmitted(true)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs text-center transition border border-slate-200"
                >
                  Request Instant Quote
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
