import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Award, Hammer, CheckCircle2 } from 'lucide-react';
import { HERO_SLIDES } from '../data/content';

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section 
      id="home" 
      className="relative pt-2 pb-12 px-4 max-w-7xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Glass Stage Window */}
      <div className="relative h-[560px] md:h-[620px] rounded-3xl overflow-hidden glass-crystal-elevated border border-white shadow-xl">
        {/* Slides Images with Transition */}
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center scale-100 transform motion-safe:transition-transform motion-safe:duration-10000 motion-safe:scale-105"
            />
            {/* Luminous frosted white scrim */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30 backdrop-blur-[1px]" />
          </div>
        ))}

        {/* Floating White Liquid Glass Content Island */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-12 md:px-16 max-w-3xl">
          {/* Champagne Highlight Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#C5A059]/40 shadow-xs text-slate-800 text-xs font-bold uppercase tracking-wider mb-5 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
            <span>{HERO_SLIDES[currentSlide].highlight}</span>
            <span className="text-slate-300">·</span>
            <span className="text-[#B88E3E] font-semibold">Bangalore, India</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-5">
            {HERO_SLIDES[currentSlide].title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl font-normal">
            <strong className="text-slate-900 font-bold">Shiva Shakthi Constructions Private Limited</strong>{' '}
            is a hallmark of quality. Client satisfaction, timely handover, and uncompromised structural integrity are our first priorities.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-[1.01]"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/80 hover:bg-white text-slate-800 font-bold text-xs uppercase tracking-wider transition-all duration-200 border border-slate-200 shadow-xs hover:scale-[1.01]"
            >
              <span>View Projects</span>
            </a>
          </div>
        </div>

        {/* Slide Controls (Crisp White Glass) */}
        <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="p-3 rounded-2xl bg-white/85 hover:bg-white text-slate-700 hover:text-slate-950 transition-all border border-white shadow-sm hover:scale-105 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-2xl bg-white/85 hover:bg-white text-slate-700 hover:text-slate-950 transition-all border border-white shadow-sm hover:scale-105 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Indicator Progress Bars */}
        <div className="absolute bottom-6 left-6 sm:left-16 z-30 flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 transition-all duration-300 rounded-full ${
                idx === currentSlide
                  ? 'w-9 bg-[#C5A059]'
                  : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Trust Metrics Islands */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <div className="p-4.5 rounded-2xl glass-crystal-card flex items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-[#FAF5EC] text-[#B88E3E] border border-[#C5A059]/25 shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Quality Standard</div>
            <div className="text-sm font-bold text-slate-900">Govt Sanctioned</div>
          </div>
        </div>

        <div className="p-4.5 rounded-2xl glass-crystal-card flex items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-[#FAF5EC] text-[#B88E3E] border border-[#C5A059]/25 shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Track Record</div>
            <div className="text-sm font-bold text-slate-900">10+ Years Trust</div>
          </div>
        </div>

        <div className="p-4.5 rounded-2xl glass-crystal-card flex items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-[#FAF5EC] text-[#B88E3E] border border-[#C5A059]/25 shrink-0">
            <Hammer className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">On-Time Execution</div>
            <div className="text-sm font-bold text-slate-900">Milestone Audits</div>
          </div>
        </div>

        <div className="p-4.5 rounded-2xl glass-crystal-card flex items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-[#FAF5EC] text-[#B88E3E] border border-[#C5A059]/25 shrink-0">
            <div className="w-5 h-5 flex items-center justify-center font-bold text-sm">₹</div>
          </div>
          <div>
            <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Procurement</div>
            <div className="text-sm font-bold text-slate-900">Direct Mill Rates</div>
          </div>
        </div>
      </div>
    </section>
  );
};
