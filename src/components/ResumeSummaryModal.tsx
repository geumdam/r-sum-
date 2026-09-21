import React, { useState } from 'react';
import { X, Printer, Download, Check, Copy, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, CORE_COMPETENCIES, EDUCATION_LIST, PROJECTS, SKILL_CATEGORIES, AWARDS_AND_HONORS } from '../data/portfolioData';

interface ResumeSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeSummaryModal: React.FC<ResumeSummaryModalProps> = ({ isOpen, onClose }) => {
  const [copiedAll, setCopiedAll] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const text = `# 송금담 (Song Geumdam) - 이력서 요약

- 이메일: ${PERSONAL_INFO.email}
- 연락처: ${PERSONAL_INFO.phone}
- 학력: 부산외국어대학교 중국어·무역 전공 (평점: 4.33 / 4.5, 성적 우수 장학금 2회 수혜)
- 자격증: HSK 6급 (2025.03)

## 핵심 역량
- 중국어 실무 및 번역 (의료/비즈니스 번역, 현지화)
- 데이터 분석 & AI 활용 (Python, Pandas, 머신러닝, LLM, Streamlit)

## 주요 프로젝트
1. 성형외과 웹사이트 중국어 번역 및 현지화
2. 부산 관광객 대상 다국어 소셜 데이터 인텔리전스 분석
3. 외국인 근로자를 위한 적정 임금 예측 서비스 (Streamlit MVP)
4. 부동산 AI 분석 시스템 구축
`;
    navigator.clipboard.writeText(text);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl border border-neutral-200/90 shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        id="resume-modal"
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-100">
          <div>
            <h3 className="text-xl font-bold text-neutral-900">
              송금담 이력 요약표 (Resume Summary)
            </h3>
            <p className="text-xs text-neutral-600 mt-0.5">
              중국어·무역 전공과 데이터·AI 역량을 융합한 핵심 역량 및 프로젝트 요약본
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-xs font-medium text-neutral-700 transition-colors"
            >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedAll ? '텍스트 복사됨' : '텍스트 복사'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-xs font-medium text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>인쇄 / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="py-6 space-y-6 text-xs sm:text-sm text-neutral-700">
          {/* Basic Profile */}
          <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-neutral-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <span className="text-neutral-600 block text-xs">성명</span>
              <span className="font-bold text-neutral-900 text-base">송금담 (Song Geumdam)</span>
            </div>
            <div>
              <span className="text-neutral-600 block text-xs">전공 및 학점</span>
              <span className="font-semibold text-neutral-900">부산외국어대 중국어·무역 (4.33 / 4.5)</span>
            </div>
            <div>
              <span className="text-neutral-600 block text-xs">이메일</span>
              <span className="font-mono text-neutral-900">{PERSONAL_INFO.email}</span>
            </div>
            <div>
              <span className="text-neutral-600 block text-xs">연락처</span>
              <span className="font-mono text-neutral-900">{PERSONAL_INFO.phone}</span>
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h4 className="font-bold text-neutral-900 text-sm mb-2">학력 및 자격</h4>
            <div className="space-y-2">
              <div className="p-3 rounded-xl border border-neutral-200/90 flex justify-between items-center">
                <div>
                  <span className="font-semibold text-neutral-900 block">부산외국어대학교 AI 부트캠프</span>
                  <span className="text-xs text-neutral-600">데이터 분석 및 AI/LLM 솔루션 개발 과정</span>
                </div>
                <span className="font-mono text-xs text-neutral-600">2026.06 – 2026.11</span>
              </div>
              <div className="p-3 rounded-xl border border-neutral-200/90 flex justify-between items-center">
                <div>
                  <span className="font-semibold text-neutral-900 block">부산외국어대학교 (중국어·무역 전공)</span>
                  <span className="text-xs text-neutral-600">평점 4.33 / 4.5 (성적 우수 장학금 2회)</span>
                </div>
                <span className="font-mono text-xs text-neutral-600">2023.03 – 2027.02 졸업 예정</span>
              </div>
              <div className="p-3 rounded-xl border border-neutral-200/90 flex justify-between items-center">
                <div>
                  <span className="font-semibold text-neutral-900 block">HSK 6급 (고급)</span>
                  <span className="text-xs text-neutral-600">비즈니스 통·번역 및 현지화 가능</span>
                </div>
                <span className="font-mono text-xs text-neutral-600">2025.03 취득</span>
              </div>
            </div>
          </div>

          {/* Projects Summary */}
          <div>
            <h4 className="font-bold text-neutral-900 text-sm mb-2">주요 프로젝트 요약</h4>
            <div className="space-y-2">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3 rounded-xl border border-neutral-200/90">
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <span className="font-bold text-neutral-900">{proj.title}</span>
                    <span className="font-mono text-xs text-neutral-600 shrink-0">{proj.period}</span>
                  </div>
                  <p className="text-xs text-neutral-600 mb-2">{proj.overview}</p>
                  <div className="flex flex-wrap gap-1">
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-neutral-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
