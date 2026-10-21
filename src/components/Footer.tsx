import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Estimator', href: '#estimator' },
    { label: 'Contact', href: '#contact' },
    { label: 'Blogs', href: '#blogs' },
  ];

  return (
    <footer className="pt-16 pb-8 px-4 max-w-7xl mx-auto">
      {/* Main Glass Footer Container */}
      <div className="rounded-3xl glass-crystal-elevated border border-white shadow-xl p-8 md:p-12 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-[#FAF5EC] to-[#EAE0CD] border border-[#C5A059]/30 flex items-center justify-center p-1.5 shadow-sm">
                <img 
                  src="/images/logo_h.png" 
                  alt="Shiva Shakthi Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="text-2xl font-black tracking-tight text-slate-900 flex items-center">
                <span>We</span>
                <span className="text-[#C5A059] font-black ml-0.5">Build</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 font-normal leading-relaxed max-w-md">
              <strong className="text-slate-900 font-bold">Shiva Shakthi Constructions Private Limited</strong> is a benchmark for quality and engineering precision across Bangalore and Karnataka. Delivering turnkey villas, commercial landmarks, and structural renovations with zero compromise on safety.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#FAF5EC] border border-[#C5A059]/30 text-xs font-semibold text-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Govt. Approved Licensed Civil Contractors</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Navigation Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-600 hover:text-slate-950 hover:underline transition py-1 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bangalore Headquarters */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
              Bangalore Offices
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Gokula Extension, Mathikere, Bengaluru, KA 560054</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>B.H. Road, Nelamangala Town, Bengaluru Rural 562123</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="font-mono font-bold text-slate-900">+91 26546 44211 / +91 53165 61231</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="font-bold text-slate-900">shivashakthi@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div className="credit">
            By <span className="text-slate-900 font-bold">Shiva Shakthi Constructions</span> | all rights reserved!
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 transition flex items-center gap-1.5 border border-slate-200 shadow-2xs font-semibold"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
