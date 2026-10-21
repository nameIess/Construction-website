import React, { useState } from 'react';
import { Home, Building, Building2, Check, Sparkles, X } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';
import { PricingPlan } from '../types';

export const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [bookedSuccess, setBookedSuccess] = useState(false);

  const getPlanIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home className="w-5 h-5 text-[#B88E3E]" />;
      case 'building':
        return <Building className="w-5 h-5 text-[#B88E3E]" />;
      case 'city':
        return <Building2 className="w-5 h-5 text-[#B88E3E]" />;
      default:
        return <Home className="w-5 h-5 text-[#B88E3E]" />;
    }
  };

  return (
    <section id="pricing" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header & Billing Switch */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex items-center gap-3.5">
          <div className="w-2.5 h-10 rounded-full bg-[#C5A059] shadow-xs" />
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Transparent Pricing Plans
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Contractor Management & Structural Advisory Retainers
            </p>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center gap-2 self-start md:self-auto p-1.5 rounded-2xl bg-slate-200/60 border border-white shadow-inner">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              billingCycle === 'monthly'
                ? 'bg-white text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              billingCycle === 'yearly'
                ? 'bg-white text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Annual Retainer</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-800 font-bold">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {PRICING_PLANS.map((plan) => {
          const price = billingCycle === 'monthly' ? plan.monthlyPrice : Math.round(plan.yearlyPrice / 12);
          return (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? 'glass-crystal-elevated border-2 border-[#C5A059] shadow-xl scale-[1.02]'
                  : 'glass-crystal border border-white shadow-md hover:border-slate-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-950 text-white text-[11px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5 border border-[#C5A059]/50">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
                  <span>Most Recommended</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-[#FAF5EC] border border-[#C5A059]/30">
                    {getPlanIcon(plan.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-widest">
                    Tier #{plan.id}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 my-4 pb-4 border-b border-slate-200/70">
                  <span className="text-2xl font-bold text-[#B88E3E]">$</span>
                  <span className="text-5xl font-black text-slate-900 tracking-tight font-mono">
                    {price}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    /{billingCycle === 'monthly' ? 'month' : 'mo (billed yearly)'}
                  </span>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Included Capabilities
                  </div>
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <div className="p-1 rounded-full bg-[#FAF5EC] text-[#B88E3E] shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  setSelectedPlan(plan);
                  setBookedSuccess(false);
                }}
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 text-center shadow-xs ${
                  plan.popular
                    ? 'bg-slate-950 hover:bg-slate-800 text-white shadow-md'
                    : 'bg-white hover:bg-slate-50 text-slate-900 border border-slate-200'
                }`}
              >
                Choose Plan
              </button>
            </div>
          );
        })}
      </div>

      {/* Plan Checkout Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-lg rounded-3xl glass-crystal-modal p-6 sm:p-8 border border-white shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200/70">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#B88E3E] uppercase tracking-wider">
                  Plan Enrollment
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs font-semibold text-slate-700">
                  {selectedPlan.name}
                </span>
              </div>
              <button
                onClick={() => setSelectedPlan(null)}
                className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {bookedSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Enrollment Initiated</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed font-normal">
                  Your registration for {selectedPlan.name} is received. Our project accounts team will furnish an official invoice and schedule kickoff.
                </p>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="px-6 py-2.5 rounded-xl bg-slate-950 text-white font-bold text-xs uppercase"
                >
                  Return to Dashboard
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookedSuccess(true);
                }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    Subscribe to {selectedPlan.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Billed at ${billingCycle === 'monthly' ? selectedPlan.monthlyPrice : Math.round(selectedPlan.yearlyPrice / 12)}/month ({billingCycle} cycle)
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-slate-700 mb-1 font-semibold">Your Name / Organization</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 rounded-xl glass-crystal-input"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 mb-1 font-semibold">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. client@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl glass-crystal-input"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 mb-1 font-semibold">Contact Phone (WhatsApp)</label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl glass-crystal-input"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
                  >
                    Confirm Plan Selection
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
