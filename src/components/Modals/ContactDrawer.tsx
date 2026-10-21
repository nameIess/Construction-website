import React from 'react';
import { X, Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { CONTACT_OFFICES } from '../../data/content';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactDrawer: React.FC<ContactDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/35 backdrop-blur-sm animate-fadeIn">
      {/* Click outside to close */}
      <div className="flex-1" onClick={onClose} />

      {/* Drawer Body */}
      <div className="w-full max-w-md h-full glass-crystal-modal border-l border-white p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200/70">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#B88E3E] uppercase tracking-wider">
                Direct Dispatch
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-500 font-medium">Regional Contacts</span>
            </div>
            <button
              id="close-contact-info"
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
              aria-label="Close contact drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 text-slate-800 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Bangalore Regional Offices</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Shiva Shakthi Constructions
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-1">
              Direct technical dispatch & civil engineering consultation.
            </p>
          </div>

          {/* Cards for Info */}
          <div className="space-y-4 text-xs">
            {/* Phone Numbers */}
            <div className="p-4 rounded-2xl bg-white/80 border border-slate-200 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-[#B88E3E] font-bold uppercase tracking-wider text-[11px]">
                <Phone className="w-4 h-4" />
                <span>Phone Numbers</span>
              </div>
              <div className="space-y-1">
                <a
                  href="tel:265464421132"
                  className="block text-slate-900 hover:text-[#B88E3E] font-mono text-sm font-bold transition"
                >
                  +91 26546 4421132
                </a>
                <a
                  href="tel:53165612316"
                  className="block text-slate-900 hover:text-[#B88E3E] font-mono text-sm font-bold transition"
                >
                  +91 53165 612316
                </a>
              </div>
            </div>

            {/* Email Address */}
            <div className="p-4 rounded-2xl bg-white/80 border border-slate-200 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-[#B88E3E] font-bold uppercase tracking-wider text-[11px]">
                <Mail className="w-4 h-4" />
                <span>Email Address</span>
              </div>
              <div>
                <a
                  href="mailto:shivashakthi@gmail.com"
                  className="text-slate-900 hover:text-[#B88E3E] text-sm font-bold transition break-all"
                >
                  shivashakthi@gmail.com
                </a>
              </div>
            </div>

            {/* Office Addresses */}
            <div className="p-4 rounded-2xl bg-white/80 border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-[#B88E3E] font-bold uppercase tracking-wider text-[11px]">
                <MapPin className="w-4 h-4" />
                <span>Office Addresses</span>
              </div>
              <div className="space-y-2 text-slate-700">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-slate-900">Gokula Head Office</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">Gokula Extension, Mathikere, Bengaluru 560054</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-slate-900">Nelamangala Branch</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">B.H. Road, Nelamangala Town, Bengaluru Rural 562123</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Share Icons */}
        <div className="pt-6 border-t border-slate-200/70">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">
            Connect With Us
          </div>
          <div className="flex items-center gap-2">
            {[
              { name: 'Facebook', href: 'https://facebook.com', label: 'FB' },
              { name: 'Twitter', href: 'https://twitter.com', label: 'X' },
              { name: 'Instagram', href: 'https://instagram.com', label: 'IG' },
              { name: 'LinkedIn', href: 'https://linkedin.com', label: 'IN' },
            ].map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-bold text-xs text-slate-700 hover:text-[#B88E3E] hover:border-[#C5A059]/40 transition-all hover:scale-105 shadow-2xs"
                aria-label={soc.name}
              >
                {soc.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
