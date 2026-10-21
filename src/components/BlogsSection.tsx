import React, { useState } from 'react';
import { ArrowUpRight, Calendar, Clock, User, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { BLOGS } from '../data/content';
import { BlogPost } from '../types';

export const BlogsSection: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  const nextBlogs = () => {
    setStartIndex((prev) => (prev + 1) % BLOGS.length);
  };

  const prevBlogs = () => {
    setStartIndex((prev) => (prev - 1 + BLOGS.length) % BLOGS.length);
  };

  const visibleBlogs = [
    BLOGS[startIndex % BLOGS.length],
    BLOGS[(startIndex + 1) % BLOGS.length],
    BLOGS[(startIndex + 2) % BLOGS.length],
  ];

  return (
    <section id="blogs" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div className="flex items-center gap-3.5">
          <div className="w-2.5 h-10 rounded-full bg-[#C5A059] shadow-xs" />
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineering Insights & Blogs
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Architectural Trends, Structural Safety & Construction Tips
            </p>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={prevBlogs}
            className="p-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 transition-all border border-slate-200/80 shadow-xs"
            aria-label="Previous blog articles"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextBlogs}
            className="p-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 transition-all border border-slate-200/80 shadow-xs"
            aria-label="Next blog articles"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleBlogs.map((post, idx) => (
          <article
            key={`${post.id}-${idx}`}
            onClick={() => setSelectedBlog(post)}
            className="group cursor-pointer rounded-3xl overflow-hidden glass-crystal-card flex flex-col justify-between"
          >
            <div>
              {/* Blog Image */}
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-900 border border-white shadow-xs">
                  {post.readTime}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium mb-2">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.author}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#B88E3E] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed line-clamp-3">
                  {post.snippet}
                </p>
              </div>
            </div>

            {/* Read More Footer */}
            <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-[#B88E3E]">
              <span>Read Full Article</span>
              <div className="p-1.5 rounded-xl bg-white border border-slate-200 group-hover:bg-slate-950 group-hover:text-white transition-colors shadow-xs">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Blog Article Reader Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-2xl rounded-3xl glass-crystal-modal p-6 sm:p-8 border border-white shadow-2xl relative max-h-[85vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-200/70 sticky top-0 bg-white/80 -mx-6 -mt-6 px-6 pt-6 z-10 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B88E3E]">
                  Civil Engineering Insight
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs text-slate-500 font-medium">{selectedBlog.readTime}</span>
              </div>
              <button
                onClick={() => setSelectedBlog(null)}
                className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-video mb-6 border border-slate-200 shadow-xs">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-3 text-xs text-[#B88E3E] font-semibold mb-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {selectedBlog.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {selectedBlog.readTime}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" /> {selectedBlog.author}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {selectedBlog.title}
            </h3>

            <div className="space-y-4 text-sm text-slate-700 font-normal leading-relaxed">
              <p className="font-semibold text-slate-900 text-base">
                {selectedBlog.snippet}
              </p>
              <p>
                {selectedBlog.content}
              </p>
              <div className="p-4 rounded-2xl bg-[#FAF5EC] border border-[#C5A059]/30 my-4">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                  Key Technical Advisory
                </div>
                <p className="text-xs text-slate-700">
                  Always demand mill test certificates (MTC) and ultrasonic flaw detection reports before casting major structural cantilevers.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedBlog(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-950 text-white font-bold text-xs uppercase"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
