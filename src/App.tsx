import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CostEstimator } from './components/CostEstimator';
import { ReviewsSection } from './components/ReviewsSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { BlogsSection } from './components/BlogsSection';
import { ClientLogos } from './components/ClientLogos';
import { Footer } from './components/Footer';
import { SearchModal } from './components/Modals/SearchModal';
import { LoginModal } from './components/Modals/LoginModal';
import { ContactDrawer } from './components/Modals/ContactDrawer';

export const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  // Restore user from localStorage if exists
  useEffect(() => {
    try {
      const stored = localStorage.getItem('shiva_shakthi_user');
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch (e) {
      // Ignore storage errors
    }
  }, []);

  const handleLoginSuccess = (newUser: { name: string; email: string }) => {
    setUser(newUser);
    try {
      localStorage.setItem('shiva_shakthi_user', JSON.stringify(newUser));
    } catch (e) {
      // Ignore storage errors
    }
  };

  const handleLogout = () => {
    setUser(null);
    try {
      localStorage.removeItem('shiva_shakthi_user');
    } catch (e) {
      // Ignore
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 relative selection:bg-[#F3E8C8] selection:text-slate-900">
      {/* Soft Ambient Pastel Liquid Gradient Refractions */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-[#FEF3C7]/45 blur-[120px]" />
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-[#E0E7FF]/40 blur-[140px]" />
        <div className="absolute top-2/3 -left-32 w-[650px] h-[650px] rounded-full bg-[#FCE7F3]/35 blur-[140px]" />
        <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] rounded-full bg-[#FEF3C7]/30 blur-[130px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Floating White Liquid Glass Header */}
        <Header
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenLogin={() => setIsLoginOpen(true)}
          onOpenContactDrawer={() => setIsContactDrawerOpen(true)}
          user={user}
          onLogout={handleLogout}
        />

        {/* Main Content Sections */}
        <main className="flex-1 space-y-6">
          <HeroSlider />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <CostEstimator />
          <ReviewsSection />
          <PricingSection />
          <ContactSection />
          <BlogsSection />
          <ClientLogos />
        </main>

        {/* White Liquid Glass Footer */}
        <Footer />

        {/* Quick Search Modal */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />

        {/* Client Portal Authentication Modal */}
        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />

        {/* Regional Offices Contact Slide-out Drawer */}
        <ContactDrawer
          isOpen={isContactDrawerOpen}
          onClose={() => setIsContactDrawerOpen(false)}
        />
      </div>
    </div>
  );
};

export default App;
