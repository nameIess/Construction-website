import React, { useState } from 'react';
import { Calculator, ArrowRight, Layers, Sparkles } from 'lucide-react';

export const CostEstimator: React.FC = () => {
  const [builtUpArea, setBuiltUpArea] = useState<number>(1800);
  const [packageTier, setPackageTier] = useState<'standard' | 'premium' | 'luxury'>('premium');
  const [includeInterior, setIncludeInterior] = useState<boolean>(true);
  const [includeBIM, setIncludeBIM] = useState<boolean>(true);

  // Rate per sq.ft based on Karnataka benchmark 2026
  const ratePerSqFt = {
    standard: 1850,
    premium: 2450,
    luxury: 3400,
  };

  const baseCost = builtUpArea * ratePerSqFt[packageTier];
  const interiorCost = includeInterior ? builtUpArea * 550 : 0;
  const bimCost = includeBIM ? 45000 : 0;
  const totalEstimatedCost = baseCost + interiorCost + bimCost;

  const formattedCost = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(totalEstimatedCost);

  return (
    <section id="estimator" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Liquid Glass Container Frame */}
      <div className="rounded-3xl glass-crystal-elevated border border-white shadow-xl overflow-hidden p-6 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Controls Side */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#C5A059]/30 text-slate-800 text-xs font-bold uppercase tracking-wider mb-2.5">
                <Calculator className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Instant Construction Budgeting</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Calculate Your Dream Project Investment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1">
                Transparent estimation tailored to Bangalore municipal norms and Grade-A certified materials.
              </p>
            </div>

            {/* Built-up Area Slider */}
            <div className="p-5 rounded-2xl bg-white/70 border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Total Built-up Area (Sq.Ft)
                </label>
                <span className="text-lg font-black text-slate-900 font-mono">
                  {builtUpArea.toLocaleString('en-IN')} sq.ft
                </span>
              </div>
              <input
                type="range"
                min="600"
                max="8000"
                step="50"
                value={builtUpArea}
                onChange={(e) => setBuiltUpArea(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-medium font-mono">
                <span>600 sq.ft (Plot/Annex)</span>
                <span>4,000 sq.ft (Duplex)</span>
                <span>8,000 sq.ft (Mansion/Commercial)</span>
              </div>
            </div>

            {/* Quality Tier Segmented Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Construction Specification Tier
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(['standard', 'premium', 'luxury'] as const).map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setPackageTier(tier)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      packageTier === tier
                        ? 'bg-white border-[#C5A059] shadow-md ring-2 ring-[#C5A059]/20'
                        : 'bg-white/50 border-slate-200 text-slate-600 hover:bg-white/80'
                    }`}
                  >
                    <div className="text-xs font-bold capitalize text-slate-900 mb-0.5">
                      {tier}
                    </div>
                    <div className="text-[11px] text-[#B88E3E] font-bold font-mono">
                      ₹{ratePerSqFt[tier]}/sq.ft
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons Toggles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex items-center justify-between p-4 rounded-2xl bg-white/70 border border-slate-200/80 cursor-pointer hover:bg-white shadow-xs">
                <span className="text-xs text-slate-800 font-semibold">Modular Interior Woodwork</span>
                <input
                  type="checkbox"
                  checked={includeInterior}
                  onChange={(e) => setIncludeInterior(e.target.checked)}
                  className="w-4 h-4 rounded text-[#C5A059] accent-[#C5A059] cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between p-4 rounded-2xl bg-white/70 border border-slate-200/80 cursor-pointer hover:bg-white shadow-xs">
                <span className="text-xs text-slate-800 font-semibold">3D BIM & Vastu Approval</span>
                <input
                  type="checkbox"
                  checked={includeBIM}
                  onChange={(e) => setIncludeBIM(e.target.checked)}
                  className="w-4 h-4 rounded text-[#C5A059] accent-[#C5A059] cursor-pointer"
                />
              </label>
            </div>
          </div>

          {/* Results Side */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#FAF5EC] to-[#EFE3CF] border border-[#C5A059]/40 shadow-lg relative overflow-hidden space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-600 pb-3 border-b border-[#C5A059]/30">
                <span className="font-bold uppercase tracking-wider">ESTIMATED INVESTMENT</span>
                <span className="font-mono text-emerald-700 font-bold">± 5% Accuracy</span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-mono">
                  {formattedCost}
                </div>
                <div className="text-xs text-slate-600 mt-1 font-medium">
                  Inclusive of structural concrete, steel, labor & municipal compliance
                </div>
              </div>

              {/* Itemized Line Items */}
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-300/40 text-slate-700 font-medium">
                  <span>Civil & Structural Shell</span>
                  <span className="font-mono font-bold text-slate-900">₹{baseCost.toLocaleString('en-IN')}</span>
                </div>
                {includeInterior && (
                  <div className="flex justify-between py-1.5 border-b border-slate-300/40 text-slate-700 font-medium">
                    <span>Modular Interior Work</span>
                    <span className="font-mono font-bold text-slate-900">₹{interiorCost.toLocaleString('en-IN')}</span>
                  </div>
                )}
                {includeBIM && (
                  <div className="flex justify-between py-1.5 border-b border-slate-300/40 text-slate-700 font-medium">
                    <span>3D Architectural BIM Pack</span>
                    <span className="font-mono font-bold text-slate-900">₹{bimCost.toLocaleString('en-IN')}</span>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <span>Lock In This Estimate</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                </a>
                <p className="text-[11px] text-center text-slate-500 mt-2.5 font-medium">
                  Official signed BOQ provided after physical site topography inspection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
