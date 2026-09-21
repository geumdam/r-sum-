import React from 'react';
import { AWARDS_AND_HONORS, LANGUAGE_PROFICIENCY } from '../data/portfolioData';
import { Award, Globe, Check } from 'lucide-react';

export const AwardsAndLanguagesSection: React.FC = () => {
  return (
    <>
      {/* Awards & Certifications with exact leader-line design from reference */}
      <section id="awards" className="py-12 border-t border-neutral-200/70">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left column: Section Title */}
          <div className="md:col-span-3">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight sticky top-24">
              Certifications & Awards
            </h2>
            <span className="text-xs text-neutral-600 block mt-1">자격 및 수상 실적</span>
          </div>

          {/* Right column: Leader lines matching reference screenshot */}
          <div className="md:col-span-9 space-y-4">
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-5 sm:p-6 shadow-2xs space-y-4">
              {AWARDS_AND_HONORS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-baseline gap-3 text-xs sm:text-sm py-1.5 border-b border-dashed border-neutral-100 last:border-0"
                >
                  <span className="font-bold text-neutral-900 shrink-0">
                    {item.title}
                  </span>
                  <span className="text-neutral-600 hidden sm:inline shrink-0">
                    {item.organization}
                  </span>
                  
                  {/* Subtle dotted/solid leader line connecting title to date */}
                  <div className="grow border-b border-neutral-200/80 mb-1 border-dotted"></div>

                  <div className="flex items-center gap-2 shrink-0">
                    {item.note && (
                      <span className="text-[11px] text-neutral-600 font-mono hidden md:inline">
                        ({item.note})
                      </span>
                    )}
                    <span className="font-mono text-neutral-700 font-medium">
                      {item.dateOrValue}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section matching reference */}
      <section id="languages" className="py-12 border-t border-neutral-200/70">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left column: Section Title */}
          <div className="md:col-span-3">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight sticky top-24">
              Languages
            </h2>
            <span className="text-xs text-neutral-600 block mt-1">구사 언어 역량</span>
          </div>

          {/* Right column: Language levels */}
          <div className="md:col-span-9">
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-5 sm:p-6 shadow-2xs space-y-4">
              {LANGUAGE_PROFICIENCY.map((lang) => (
                <div
                  key={lang.code}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2 border-b border-neutral-100 last:border-0"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-800 text-xs font-mono font-bold flex items-center justify-center">
                      {lang.code}
                    </span>
                    <div>
                      <span className="font-bold text-sm text-neutral-900 block">
                        {lang.language}
                      </span>
                      <span className="text-xs text-neutral-600">
                        {lang.description}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-900 text-white self-start sm:self-auto">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
