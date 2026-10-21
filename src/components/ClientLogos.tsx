import React from 'react';
import { CLIENT_LOGOS } from '../data/content';

export const ClientLogos: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="rounded-3xl glass-crystal border border-white shadow-sm p-6 md:p-8">
        <div className="text-center mb-6">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            Trusted by Bangalore's Leading Developers & Infrastructure Partners
          </p>
        </div>

        {/* Logos Flex Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.id}
              className="p-4 rounded-2xl bg-white/60 border border-slate-200/60 hover:border-[#C5A059]/40 hover:bg-white transition-all duration-300 flex items-center justify-center h-20 shadow-2xs group"
            >
              <img
                src={client.image}
                alt={client.name}
                className="max-h-11 max-w-[120px] object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
