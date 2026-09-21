import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Languages, Globe, Terminal, CheckCircle2, ChevronRight } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Languages className="w-4 h-4 text-rose-600" />;
      case 1:
        return <Globe className="w-4 h-4 text-blue-600" />;
      case 2:
        return <Terminal className="w-4 h-4 text-emerald-600" />;
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-12 border-t border-neutral-200/70">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Left column: Section Title */}
        <div className="md:col-span-3">
          <h2 className="text-xl font-bold text-neutral-900 tracking-tight sticky top-24">
            Skills
          </h2>
          <span className="text-xs text-neutral-600 block mt-1">전문 역량 체계</span>
        </div>

        {/* Right column: 3 Core Domains */}
        <div className="md:col-span-9 space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {SKILL_CATEGORIES.map((cat, catIdx) => (
              <div
                key={cat.categoryName}
                className="bg-white rounded-2xl border border-neutral-200/90 p-5 sm:p-6 shadow-2xs"
              >
                <div className="flex items-center gap-2.5 pb-3 border-b border-neutral-100 mb-4">
                  <div className="p-2 rounded-xl bg-neutral-100 flex items-center justify-center">
                    {getCategoryIcon(catIdx)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900">
                      {cat.categoryName}
                    </h3>
                    <p className="text-xs text-neutral-600 font-normal">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-[#F9F9FB] border border-neutral-200/70 flex flex-col justify-between hover:bg-neutral-50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div className="flex items-center gap-1.5 font-semibold text-xs sm:text-sm text-neutral-900">
                          <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                          <span>{skill.name}</span>
                        </div>
                        {skill.level && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white text-neutral-700 border border-neutral-200/80 shrink-0">
                            {skill.level}
                          </span>
                        )}
                      </div>
                      {skill.details && (
                        <p className="text-[11px] text-neutral-600 leading-relaxed pl-5 font-normal">
                          {skill.details}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
