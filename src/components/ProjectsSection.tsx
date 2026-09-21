import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Calendar, Sparkles, BarChart3, Calculator, Home, Globe } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Render a sleek mockup visual for each project matching the dark laptop aesthetic in the reference
  const renderProjectMockup = (project: Project) => {
    switch (project.id) {
      case 'medical-trans':
        return (
          <div className="w-full h-full bg-neutral-900 text-white p-4 flex flex-col justify-between select-none">
            {/* Browser topbar */}
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
              </div>
              <span className="text-[10px] font-mono text-neutral-400">medical-clinic.cn / 中文官网</span>
              <Globe className="w-3 h-3 text-neutral-400" />
            </div>

            {/* Content Mockup */}
            <div className="py-2 space-y-2">
              <div className="inline-block bg-rose-500/20 text-rose-300 text-[9px] font-medium px-2 py-0.5 rounded">
                整形外科 官方中文服务
              </div>
              <p className="text-xs font-bold text-neutral-200 line-clamp-1">
                医疗·商务专业术语本地化与审校
              </p>
              <div className="grid grid-cols-2 gap-1.5 text-[9px] text-neutral-400">
                <div className="bg-neutral-800/80 p-1.5 rounded">
                  <span className="text-neutral-500 block">원문 (KR)</span>
                  <span className="text-neutral-300">맞춤형 안면 윤곽 가이드</span>
                </div>
                <div className="bg-neutral-800/80 p-1.5 rounded">
                  <span className="text-neutral-500 block">현지화 (CN)</span>
                  <span className="text-rose-300">定制化面部轮廓诊疗指南</span>
                </div>
              </div>
            </div>

            {/* Bottom tags */}
            <div className="flex items-center justify-between text-[9px] text-neutral-500 pt-1 border-t border-neutral-800/80">
              <span>HSK 6급 번역 품질 기준</span>
              <span className="text-emerald-400 font-mono">100% 현지화 완료</span>
            </div>
          </div>
        );

      case 'busan-tourism':
        return (
          <div className="w-full h-full bg-[#0F172A] text-white p-4 flex flex-col justify-between select-none">
            {/* Topbar */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
              </div>
              <span className="text-[10px] font-mono text-sky-400">Busan Social Intelligence</span>
              <BarChart3 className="w-3 h-3 text-sky-400" />
            </div>

            {/* Chart and stats visualization */}
            <div className="py-2 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-400">다국어 소셜 텍스트 빈도 분석</span>
                <span className="text-[9px] text-sky-400 font-mono">N=12,400+</span>
              </div>
              
              {/* Mini simulated bar graph */}
              <div className="space-y-1 text-[9px]">
                <div className="flex items-center gap-2">
                  <span className="w-10 text-slate-400 truncate">해운대·광안리</span>
                  <div className="h-2 flex-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-500 rounded-full w-[85%]"></div>
                  </div>
                  <span className="text-slate-300 font-mono">85%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-10 text-slate-400 truncate">부산 미식·카페</span>
                  <div className="h-2 flex-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full w-[72%]"></div>
                  </div>
                  <span className="text-slate-300 font-mono">72%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-10 text-slate-400 truncate">교통 편의성</span>
                  <div className="h-2 flex-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full w-[54%]"></div>
                  </div>
                  <span className="text-slate-300 font-mono">54%</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-slate-800">
              <span>Python · Pandas · NLP</span>
              <span className="text-sky-300">토픽 모델링 & EDA</span>
            </div>
          </div>
        );

      case 'wage-prediction':
        return (
          <div className="w-full h-full bg-[#111827] text-white p-4 flex flex-col justify-between select-none">
            {/* Topbar */}
            <div className="flex items-center justify-between pb-2 border-b border-gray-800">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">Streamlit · ML Model</span>
              <Calculator className="w-3 h-3 text-emerald-400" />
            </div>

            {/* Interactive Streamlit mock */}
            <div className="py-2 space-y-1.5">
              <div className="bg-gray-800/80 p-2 rounded-lg border border-gray-700/60">
                <div className="flex justify-between text-[10px] text-gray-300 mb-1">
                  <span>예측 적정 월 임금</span>
                  <span className="text-emerald-400 font-bold font-mono">₩ 2,750,000</span>
                </div>
                <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[68%]"></div>
                </div>
                <div className="flex justify-between text-[8px] text-gray-400 mt-1 font-mono">
                  <span>하위 25%: 2.45M</span>
                  <span>상위 25%: 3.05M</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[9px] text-gray-400 pt-1 border-t border-gray-800">
              <span>Scikit-learn Regression</span>
              <span className="text-emerald-400">UI/UX 즉시 산출</span>
            </div>
          </div>
        );

      case 'real-estate-ai':
        return (
          <div className="w-full h-full bg-[#18181B] text-white p-4 flex flex-col justify-between select-none">
            {/* Topbar */}
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
              </div>
              <span className="text-[10px] font-mono text-indigo-400">Real Estate AI Intelligence</span>
              <Home className="w-3 h-3 text-indigo-400" />
            </div>

            {/* AI Summary mock */}
            <div className="py-2 space-y-1.5">
              <div className="bg-zinc-800/80 p-2 rounded-lg border border-zinc-700/60 space-y-1">
                <div className="flex items-center gap-1 text-[9px] text-indigo-300 font-semibold">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>생성형 AI 자동 브리핑 요약</span>
                </div>
                <p className="text-[10px] text-zinc-300 leading-snug line-clamp-2">
                  "최근 분기 실거래가 지수 분석 결과, 역세권 500m 이내 매물의 변동성이 안정세를 유지하고 있으며..."
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[9px] text-zinc-400 pt-1 border-t border-zinc-800">
              <span>Python EDA & 시각화</span>
              <span className="text-indigo-400">LLM Prompt Engine</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-12 border-t border-neutral-200/70">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Left column: Section Title */}
        <div className="md:col-span-3">
          <h2 className="text-xl font-bold text-neutral-900 tracking-tight sticky top-24">
            Projects
          </h2>
          <span className="text-xs text-neutral-600 block mt-1">주요 프로젝트 ({PROJECTS.length})</span>
        </div>

        {/* Right column: 2-column Project Grid (matching Tornify and Studio+ in screenshot) */}
        <div className="md:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-2xs hover:shadow-md hover:border-neutral-300 transition-all duration-200 flex flex-col"
              >
                {/* Mockup Preview Box (styled like a device screen in the reference) */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-950 p-2 sm:p-2.5 border-b border-neutral-200/60">
                  <div className="w-full h-full rounded-xl overflow-hidden ring-1 ring-white/10 group-hover:scale-[1.02] transition-transform duration-300">
                    {renderProjectMockup(project)}
                  </div>
                </div>

                {/* Card Info Details */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[11px] font-semibold text-neutral-600">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-600 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-neutral-400" />
                        {project.period}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors line-clamp-1 mb-1">
                      {project.title}
                    </h3>

                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-3">
                      {project.overview}
                    </p>
                  </div>

                  <div>
                    {/* Tech stack chips */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100 mb-3">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-neutral-50 text-neutral-600">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View details prompt button */}
                    <div className="flex items-center justify-between text-xs font-semibold text-neutral-900 group-hover:translate-x-0.5 transition-transform">
                      <span>상세보기 & 역할</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
