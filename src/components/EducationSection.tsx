import React from 'react';
import { EDUCATION_LIST } from '../data/portfolioData';
import { Calendar, GraduationCap, Award, BookCheck } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-12 border-t border-neutral-200/70">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Left column: Section Title */}
        <div className="md:col-span-3">
          <h2 className="text-xl font-bold text-neutral-900 tracking-tight sticky top-24">
            Education
          </h2>
          <span className="text-xs text-neutral-600 block mt-1">교육 및 학력</span>
        </div>

        {/* Right column: Education cards matching reference layout */}
        <div className="md:col-span-9 space-y-5">
          {EDUCATION_LIST.map((edu) => (
            <div
              key={edu.id}
              className="bg-white rounded-2xl border border-neutral-200/90 p-5 sm:p-6 shadow-2xs hover:border-neutral-300 transition-colors"
            >
              {/* Header row: Institution + Course, Date on right */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 pb-4 border-b border-neutral-100">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700">
                      {edu.status}
                    </span>
                    {edu.gradeOrScore && (
                      <span className="text-xs font-bold text-neutral-900 bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2 py-0.5 rounded-md">
                        {edu.gradeOrScore}
                      </span>
                    )}
                    {edu.scholarshipOrAward && (
                      <span className="text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Award className="w-3 h-3 text-amber-500" />
                        {edu.scholarshipOrAward}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-neutral-600" />
                    {edu.institution}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-medium mt-0.5">
                    {edu.degreeOrCourse}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200/80 text-xs font-mono text-neutral-700 self-start shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{edu.period}</span>
                </div>
              </div>

              {/* Curriculum points */}
              <div className="pt-4 space-y-2">
                <span className="text-xs font-semibold text-neutral-700 block mb-1">
                  이수 과목 및 핵심 학습 내용:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {edu.curriculum.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2.5 rounded-xl bg-neutral-50/70 border border-neutral-100 text-xs text-neutral-600"
                    >
                      <BookCheck className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
