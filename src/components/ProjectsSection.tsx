import React, { useState } from 'react';
import { Maximize2, MapPin, Layers, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [activeLightboxProject, setActiveLightboxProject] = useState<Project | null>(null);

  const categories = ['All', 'Residential', 'Commercial', 'Renovation', 'Interior'];

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toLowerCase() === filter.toLowerCase());

  const handleNextLightbox = () => {
    if (!activeLightboxProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === activeLightboxProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setActiveLightboxProject(PROJECTS[nextIndex]);
  };

  const handlePrevLightbox = () => {
    if (!activeLightboxProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === activeLightboxProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setActiveLightboxProject(PROJECTS[prevIndex]);
  };

  return (
    <section id="projects" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header & Segmented Filter Control */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex items-center gap-3.5">
          <div className="w-2.5 h-10 rounded-full bg-[#C5A059] shadow-xs" />
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Architectural Grandeur Across Bangalore & Karnataka
            </p>
          </div>
        </div>

        {/* Segmented Filter Pills */}
        <div className="flex items-center p-1 rounded-2xl bg-slate-200/60 border border-white self-start md:self-auto overflow-x-auto max-w-full shadow-inner">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                filter === cat
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveLightboxProject(project)}
            className="group cursor-pointer rounded-3xl overflow-hidden glass-crystal-card relative flex flex-col"
          >
            {/* Project Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Lightbox Trigger Badge */}
              <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0 duration-300 shadow-sm">
                <Maximize2 className="w-4 h-4 text-[#B88E3E]" />
              </div>

              {/* Category Tag */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-900 uppercase tracking-wider border border-white shadow-xs">
                {project.category}
              </div>
            </div>

            {/* Content Bottom Card */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#B88E3E] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 font-normal leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Meta Details */}
              <div className="pt-3 border-t border-slate-200/70 grid grid-cols-2 gap-2 text-[11px] text-slate-500 font-medium">
                <div className="flex items-center gap-1.5 truncate">
                  <MapPin className="w-3.5 h-3.5 text-[#B88E3E] shrink-0" />
                  <span className="truncate">{project.location.split(',')[0]}</span>
                </div>
                <div className="flex items-center gap-1.5 justify-end">
                  <Layers className="w-3.5 h-3.5 text-[#B88E3E] shrink-0" />
                  <span>{project.area}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-4xl rounded-3xl glass-crystal-modal overflow-hidden border border-white shadow-2xl relative flex flex-col max-h-[90vh]">
            {/* Lightbox Header */}
            <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-200/70 shrink-0 bg-white/70">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B88E3E]">
                  {activeLightboxProject.category} Project
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs font-semibold text-slate-800">
                  {activeLightboxProject.title}
                </span>
              </div>
              <button
                onClick={() => setActiveLightboxProject(null)}
                className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                aria-label="Close lightbox"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Lightbox Body */}
            <div className="relative flex-1 bg-slate-900 flex items-center justify-center overflow-hidden min-h-[300px]">
              <img
                src={activeLightboxProject.image}
                alt={activeLightboxProject.title}
                className="max-h-[60vh] w-auto object-contain"
              />

              {/* Navigation Chevrons */}
              <button
                onClick={handlePrevLightbox}
                className="absolute left-4 p-3 rounded-2xl bg-white/80 hover:bg-white text-slate-800 transition-all border border-white shadow-md"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextLightbox}
                className="absolute right-4 p-3 rounded-2xl bg-white/80 hover:bg-white text-slate-800 transition-all border border-white shadow-md"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Footer Details */}
            <div className="p-6 bg-white border-t border-slate-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#B88E3E] uppercase tracking-wider">
                    {activeLightboxProject.category}
                  </span>
                  <span className="text-slate-400">·</span>
                  <span className="text-xs text-slate-500 font-medium">{activeLightboxProject.year}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  {activeLightboxProject.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1 max-w-xl font-normal">
                  {activeLightboxProject.description}
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="#contact"
                  onClick={() => setActiveLightboxProject(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider text-center transition"
                >
                  Inquire This Style
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
