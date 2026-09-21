import React from 'react';
import { Project } from '../types';
import { X, Calendar, Layers, CheckCircle2, Award, ArrowUpRight, Code } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl border border-neutral-200/90 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        id="project-modal"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-100">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
                {project.type}
              </span>
              <span className="text-xs text-neutral-600 flex items-center gap-1 font-mono">
                <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                {project.period}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 font-medium">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors shrink-0"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              프로젝트 개요 (Overview)
            </h4>
            <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-neutral-200/80 text-sm text-neutral-700 leading-relaxed">
              {project.overview}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2 flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5" />
              기술 스택 & 활용 도구
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold px-3 py-1 rounded-lg bg-neutral-900 text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Roles & Tasks */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              주요 역할 및 수행 내용
            </h4>
            <div className="space-y-2.5">
              {project.roles.map((role, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-neutral-50/70 border border-neutral-100 text-xs sm:text-sm text-neutral-700 leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              성과 및 기대 가치 (Outcomes)
            </h4>
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80 text-sm text-neutral-800 leading-relaxed font-medium">
              {project.outcomes}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-neutral-100 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-semibold transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
