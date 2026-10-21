import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Layers, FileText, Wrench } from 'lucide-react';
import { SERVICES, PROJECTS, BLOGS } from '../../data/content';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  // Keyboard shortcut Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedServices = q
    ? SERVICES.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q)
      )
    : [];

  const matchedProjects = q
    ? PROJECTS.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q)
      )
    : [];

  const matchedBlogs = q
    ? BLOGS.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.snippet.toLowerCase().includes(q)
      )
    : [];

  const totalResults = matchedServices.length + matchedProjects.length + matchedBlogs.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/40 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl rounded-3xl glass-crystal-modal overflow-hidden border border-white shadow-2xl">
        {/* Search Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/70 bg-white/60">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#B88E3E] uppercase tracking-wider">
              Quick Search
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-500 font-medium">Shiva Shakthi Directory</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-500 border border-slate-200">
              ESC
            </kbd>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200/70 flex items-center gap-3 bg-white/80">
          <Search className="w-5 h-5 text-[#C5A059] shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search services, residential villas, renovation, blogs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results Body */}
        <div className="p-5 max-h-[60vh] overflow-y-auto space-y-4 bg-white/40">
          {!query && (
            <div className="py-8 text-center text-xs text-slate-500 font-medium">
              Type keywords such as <span className="text-[#B88E3E] font-bold">"interior"</span>,{' '}
              <span className="text-[#B88E3E] font-bold">"villa"</span>,{' '}
              <span className="text-[#B88E3E] font-bold">"consultant"</span>, or{' '}
              <span className="text-[#B88E3E] font-bold">"waterproofing"</span>.
            </div>
          )}

          {query && totalResults === 0 && (
            <div className="py-8 text-center text-xs text-slate-500 font-medium">
              No matching records found for "{query}". Try checking spelling or general civil terms.
            </div>
          )}

          {/* Matched Services */}
          {matchedServices.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-[#B88E3E] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5" />
                <span>Services ({matchedServices.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedServices.map((s) => (
                  <a
                    key={s.id}
                    href="#services"
                    onClick={onClose}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/90 hover:bg-white border border-slate-200/80 transition group text-xs shadow-2xs"
                  >
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-[#B88E3E]">
                        {s.title}
                      </div>
                      <div className="text-slate-500 line-clamp-1 text-[11px] mt-0.5">
                        {s.description}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#B88E3E] shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Matched Projects */}
          {matchedProjects.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-[#B88E3E] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Projects ({matchedProjects.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedProjects.map((p) => (
                  <a
                    key={p.id}
                    href="#projects"
                    onClick={onClose}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/90 hover:bg-white border border-slate-200/80 transition group text-xs shadow-2xs"
                  >
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-[#B88E3E]">
                        {p.title}
                      </div>
                      <div className="text-slate-500 text-[11px] mt-0.5">
                        {p.category} · {p.location}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#B88E3E] shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Matched Blogs */}
          {matchedBlogs.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-[#B88E3E] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Articles ({matchedBlogs.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedBlogs.map((b) => (
                  <a
                    key={b.id}
                    href="#blogs"
                    onClick={onClose}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/90 hover:bg-white border border-slate-200/80 transition group text-xs shadow-2xs"
                  >
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-[#B88E3E]">
                        {b.title}
                      </div>
                      <div className="text-slate-500 text-[11px] mt-0.5">
                        {b.date} · {b.readTime}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#B88E3E] shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
