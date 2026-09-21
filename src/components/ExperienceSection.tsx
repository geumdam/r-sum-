import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Calendar, Users, CheckCircle2, BookOpen } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-12 border-t border-neutral-200/70">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Left column: Section Title */}
        <div className="md:col-span-3">
          <h2 className="text-xl font-bold text-neutral-900 tracking-tight sticky top-24">
            Experience
          </h2>
          <span className="text-xs text-neutral-600 block mt-1">교내 및 팀 활동</span>
        </div>

        {/* Right column: Experience Cards matching reference */}
        <div className="md:col-span-9 space-y-5">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl border border-neutral-200/90 p-5 sm:p-6 shadow-2xs hover:border-neutral-300 transition-colors"
            >
              {/* Header row: Title + Role on left, Date badge on right */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 pb-4 border-b border-neutral-100">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700">
                      {exp.type}
                    </span>
                    <span className="text-xs text-neutral-600 font-medium">
                      {exp.organization}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-medium mt-0.5">
                    {exp.role}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200/80 text-xs font-mono text-neutral-700 self-start shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Descriptions bullet points */}
              <div className="pt-4 space-y-2">
                {exp.descriptions.map((desc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{desc}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100 mt-4">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
