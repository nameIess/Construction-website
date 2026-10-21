import React, { useState, useEffect } from 'react';
import { 
  Search, 
  User, 
  PhoneCall, 
  Menu, 
  X, 
  Calculator, 
  ArrowRight,
  ShieldCheck,
  Building
} from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenLogin: () => void;
  onOpenContactDrawer: () => void;
  user: { name: string; email: string } | null;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenLogin,
  onOpenContactDrawer,
  user,
  onLogout,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className="sticky top-0 z-50 px-4 pt-3 pb-2 transition-all duration-300">
      <div 
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled 
            ? 'glass-crystal-elevated py-2.5 px-4 md:px-6' 
            : 'glass-crystal py-3.5 px-4 md:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-gradient-to-br from-[#FAF5EC] to-[#EAE0CD] border border-[#C5A059]/30 flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo_h.png`} 
                alt="Shiva Shakthi Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center">
                <span>We</span>
                <span className="text-[#C5A059] font-black ml-0.5">Build</span>
              </div>
              <span className="text-[10px] text-slate-500 tracking-wider font-semibold uppercase hidden md:inline">
                Shiva Shakthi Constructions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/60 p-1 rounded-xl border border-white/60">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/90 hover:shadow-xs transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Tools */}
          <div className="flex items-center gap-2">
            {/* Spotlight Search */}
            <button
              onClick={onOpenSearch}
              className="p-2 md:px-3 md:py-1.5 rounded-xl bg-white/60 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200/60 shadow-xs transition-all flex items-center gap-2 text-xs"
              title="Search (Cmd+K)"
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="hidden xl:inline text-slate-500">Search</span>
              <kbd className="hidden xl:inline px-1.5 py-0.5 text-[10px] bg-slate-100 rounded text-slate-500 border border-slate-200">⌘K</kbd>
            </button>

            {/* Quick Estimator CTA */}
            <a
              href="#estimator"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/60 hover:bg-white text-slate-700 hover:text-slate-900 border border-slate-200/60 shadow-xs text-xs font-semibold transition-all"
            >
              <Calculator className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="hidden md:inline">Estimate Cost</span>
            </a>

            {/* Bangalore Contacts Drawer Trigger */}
            <button
              onClick={onOpenContactDrawer}
              className="p-2 rounded-xl bg-white/60 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200/60 shadow-xs transition-all"
              title="Bangalore Office Contacts & Hours"
              aria-label="Contact Information"
            >
              <PhoneCall className="w-4 h-4 text-[#C5A059]" />
            </button>

            {/* User Account / Profile */}
            <div className="relative">
              {user ? (
                <div>
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-2 p-1.5 pr-2.5 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-800 transition-all"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#FAF5EC] text-[#B88E3E] border border-[#C5A059]/30 flex items-center justify-center font-bold text-xs">
                      {user.name.charAt(0)}
                    </div>
                    <span className="hidden sm:inline max-w-[85px] truncate">{user.name.split(' ')[0]}</span>
                  </button>

                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-2xl glass-crystal-elevated p-2 shadow-xl border border-white text-xs">
                      <div className="px-3 py-2 border-b border-slate-200/60 mb-1">
                        <p className="font-semibold text-slate-900 truncate">{user.name}</p>
                        <p className="text-[10px] text-slate-500 truncate">{user.email}</p>
                      </div>
                      <a 
                        href="#projects" 
                        onClick={() => setUserDropdownOpen(false)}
                        className="block px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition"
                      >
                        Client Projects
                      </a>
                      <button
                        onClick={() => {
                          onLogout();
                          setUserDropdownOpen(false);
                        }}
                        className="w-full text-left px-3 py-1.5 rounded-lg text-rose-600 hover:bg-rose-50 transition mt-1"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={onOpenLogin}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs transition-all shadow-sm flex items-center gap-1.5"
                >
                  <User className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Sign In</span>
                </button>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/70 text-slate-700 hover:text-slate-900 border border-slate-200/60 shadow-xs"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200/60 flex flex-col gap-1 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-white transition"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between px-3 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-[#C5A059]" /> Bangalore, Karnataka
              </span>
              <span className="flex items-center gap-1 text-emerald-700 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> ISO Certified
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
