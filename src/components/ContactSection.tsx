import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  Building,
  ExternalLink,
  Navigation
} from 'lucide-react';
import { CONTACT_OFFICES } from '../data/content';

export const ContactSection: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState<'gokula' | 'nelamangala'>('gokula');
  const [isMapLoading, setIsMapLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential Villa',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleBranchSwitch = (branchId: 'gokula' | 'nelamangala') => {
    if (branchId === activeBranch) return;
    setIsMapLoading(true);
    setActiveBranch(branchId);
    setTimeout(() => setIsMapLoading(false), 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const currentOffice = CONTACT_OFFICES.find((o) => o.id === activeBranch) || CONTACT_OFFICES[0];

  return (
    <section id="contact" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3.5 mb-12">
        <div className="w-2.5 h-10 rounded-full bg-[#C5A059] shadow-xs" />
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact & Consultation
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Visit Our Bangalore Design Studios or Request an On-Site Inspection
          </p>
        </div>
      </div>

      {/* Main Glass Split Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Map & Office Selector */}
        <div className="lg:col-span-6 space-y-5">
          {/* Branch Selector Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-200/60 border border-white shadow-inner">
            <button
              onClick={() => handleBranchSwitch('gokula')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeBranch === 'gokula'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Gokula Head Office</span>
            </button>
            <button
              onClick={() => handleBranchSwitch('nelamangala')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeBranch === 'nelamangala'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Nelamangala Branch</span>
            </button>
          </div>

          {/* Embedded Map Frame with Real-Time Switch */}
          <div className="rounded-3xl overflow-hidden glass-crystal-elevated border border-white shadow-xl relative">
            {/* Top Bar above map */}
            <div className="px-5 py-3 bg-white/90 border-b border-slate-200/70 flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="text-xs font-bold text-slate-900 truncate">
                  {currentOffice.branch}
                </span>
              </div>
              <a
                href={currentOffice.mapDirectUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 text-xs font-semibold transition shrink-0 border border-slate-200/70"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
              </a>
            </div>

            {/* Interactive Map Frame */}
            <div className="relative aspect-[16/10] bg-slate-100 w-full overflow-hidden">
              {isMapLoading && (
                <div className="absolute inset-0 z-10 bg-white/70 backdrop-blur-xs flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white shadow-md text-xs font-semibold text-slate-800">
                    <Navigation className="w-4 h-4 text-[#C5A059] animate-spin" />
                    <span>Switching to {currentOffice.branch}...</span>
                  </div>
                </div>
              )}
              <iframe
                key={currentOffice.id}
                title={`${currentOffice.branch} Location Map`}
                className="w-full h-full border-0"
                src={currentOffice.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Interactive Branch Switcher Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {CONTACT_OFFICES.map((office) => {
              const isSelected = office.id === activeBranch;
              return (
                <div
                  key={office.id}
                  onClick={() => handleBranchSwitch(office.id as 'gokula' | 'nelamangala')}
                  className={`p-5 rounded-3xl transition-all cursor-pointer border ${
                    isSelected
                      ? 'glass-crystal-elevated border-[#C5A059] ring-2 ring-[#C5A059]/20 shadow-md'
                      : 'glass-crystal border-white hover:border-slate-300 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{office.branch.split('-')[1]?.trim() || office.branch}</span>
                    </h4>
                    {isSelected && (
                      <span className="text-[10px] font-bold text-[#B88E3E] bg-[#FAF5EC] px-2 py-0.5 rounded-full border border-[#C5A059]/30">
                        Active Map
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5 text-[11px] text-slate-600 font-medium">
                    <div className="flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-1.5 pt-1">
                      <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <a 
                        href={`tel:${office.phone}`} 
                        onClick={(e) => e.stopPropagation()} 
                        className="hover:text-[#B88E3E] font-mono font-bold text-slate-800"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-6">
          <div className="p-8 sm:p-10 rounded-3xl glass-crystal-elevated border border-white shadow-xl relative">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Dispatched!</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto font-normal leading-relaxed">
                  Thank you, <strong className="text-slate-900 font-bold">{formData.name}</strong>. Our senior project architect at <span className="font-semibold text-slate-800">{currentOffice.branch}</span> will call you back within 2 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', projectType: 'Residential Villa', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-950 text-white font-bold text-xs uppercase tracking-wider"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Get in Touch</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Schedule a site visit or receive engineering consultation from our {currentOffice.branch}.
                  </p>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Your Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rajeshwar Rao"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-crystal-input"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="e.g. shivashakthi@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl glass-crystal-input"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="e.g. 265464421132"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl glass-crystal-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Project Category</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-crystal-input bg-white/90"
                    >
                      <option value="Residential Villa">New Residential Villa Construction</option>
                      <option value="Commercial Complex">Commercial Building / Tech Park</option>
                      <option value="House Renovation">House & Heritage Renovation</option>
                      <option value="Interior Design">Luxury Modular Interior Design</option>
                      <option value="Consultancy & Estimation">Engineering Consultancy & Audits</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Project Details & Location</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your plot dimensions, budget preferences, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-crystal-input resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-[#C5A059]" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
