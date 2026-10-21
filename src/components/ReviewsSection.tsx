import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../data/content';

export const ReviewsSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextReviews = () => {
    setStartIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReviews = () => {
    setStartIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const visibleReviews = [
    REVIEWS[startIndex % REVIEWS.length],
    REVIEWS[(startIndex + 1) % REVIEWS.length],
    REVIEWS[(startIndex + 2) % REVIEWS.length],
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div className="flex items-center gap-3.5">
          <div className="w-2.5 h-10 rounded-full bg-[#C5A059] shadow-xs" />
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Client Testimonials
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Verified Reviews From Homeowners & Developers Across Karnataka
            </p>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={prevReviews}
            className="p-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 transition-all border border-slate-200/80 shadow-xs"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextReviews}
            className="p-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 transition-all border border-slate-200/80 shadow-xs"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleReviews.map((rev, idx) => (
          <div
            key={`${rev.id}-${idx}`}
            className="p-8 rounded-3xl glass-crystal-card flex flex-col justify-between relative overflow-hidden group"
          >
            <div>
              {/* Star Rating & Quote Mark */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#C5A059] text-[#C5A059]"
                    />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-slate-300" />
              </div>

              {/* Comment text */}
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal mb-6">
                "{rev.comment}"
              </p>
            </div>

            {/* Author Information */}
            <div className="pt-4 border-t border-slate-200/70 flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 p-0.5 border border-slate-200 overflow-hidden shrink-0 shadow-2xs">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-slate-900 truncate">
                    {rev.name}
                  </h4>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                </div>
                <div className="text-[11px] text-slate-500 font-medium truncate">
                  {rev.role}
                </div>
                <div className="text-[10px] text-[#B88E3E] font-bold">
                  {rev.project}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
