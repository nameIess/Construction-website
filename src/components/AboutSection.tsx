import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, CheckCircle2, ArrowRight, Building2, Users, Trophy, Clock } from 'lucide-react';
import { COMPANY_STATS } from '../data/content';

export const AboutSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const statIcons = [
    <Clock key="clock" className="w-5 h-5 text-[#B88E3E]" />,
    <Building2 key="bld" className="w-5 h-5 text-[#B88E3E]" />,
    <Trophy key="tr" className="w-5 h-5 text-[#B88E3E]" />,
    <Users key="usr" className="w-5 h-5 text-[#B88E3E]" />,
  ];

  return (
    <section id="about" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3.5 mb-12">
        <div className="w-2.5 h-10 rounded-full bg-[#C5A059] shadow-xs" />
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Our Company
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Shiva Shakthi Constructions Private Limited · Bangalore, Karnataka
          </p>
        </div>
      </div>

      {/* Main Glass Split Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
        {/* Left Column: Glass Framed Video Player */}
        <div className="lg:col-span-6 relative">
          <div className="rounded-3xl overflow-hidden glass-crystal-elevated border border-white shadow-xl relative group">
            {/* Video Container */}
            <div className="relative aspect-video bg-slate-900 overflow-hidden">
              <video
                ref={videoRef}
                src={`${import.meta.env.BASE_URL}images/about-vid.mp4`}
                loop
                muted
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Floating White Liquid Glass Control Overlay */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-4 py-2.5 rounded-2xl bg-white/85 backdrop-blur-xl border border-white shadow-md">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-xl bg-slate-950 text-white hover:bg-slate-800 transition"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <span className="text-xs text-slate-800 font-bold">On-Site Execution</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-[11px] text-slate-500 font-medium">Bangalore Topography</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-xl bg-white/70 hover:bg-white text-slate-700 transition border border-slate-200/60"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative Card */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-8 sm:p-10 rounded-3xl glass-crystal border border-white space-y-5 shadow-lg">
            <div className="text-xs uppercase tracking-widest text-[#B88E3E] font-bold">
              Engineering Trust Since Inception
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
              We will provide you the best work which you dreamt for!
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <strong className="text-slate-900 font-bold">Shiva Shakthi Constructions Private Limited</strong>{' '}
              will not only provide you with exceptional structural quality but also bring your dream project to life. We possess the necessary geotechnical expertise, high-tier machinery, and seasoned engineering leadership to deliver residential villas, industrial warehouses, and commercial complexes.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              From preliminary soil testing, architectural drafting, and municipal approvals to reinforced concrete framework execution and interior handovers, our dedicated engineers remain by your side at every milestone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Strict BIS & IS Code Compliance</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Transparent Material Audits</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Pre-Approved Bank Loans</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Zero Hidden Cost Guarantee</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:scale-[1.01]"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Counter Stat Cards (Crystal Glass) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {COMPANY_STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="p-6 rounded-3xl glass-crystal-card text-center relative overflow-hidden group"
          >
            <div className="inline-flex p-3 rounded-2xl bg-[#FAF5EC] border border-[#C5A059]/25 mb-3.5 group-hover:scale-105 transition-transform">
              {statIcons[i]}
            </div>

            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-1">
              {stat.value}
            </div>

            <div className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider mb-1">
              {stat.label}
            </div>

            <div className="text-[11px] text-slate-500 font-medium">
              {stat.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
