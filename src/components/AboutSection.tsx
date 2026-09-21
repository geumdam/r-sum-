import React from 'react';
import { CORE_COMPETENCIES, PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles, Award, Code2, Globe2, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 border-t border-neutral-200/70">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Left column: Section Title */}
        <div className="md:col-span-3">
          <h2 className="text-xl font-bold text-neutral-900 tracking-tight sticky top-24">
            About
          </h2>
          <span className="text-xs text-neutral-600 block mt-1">소개 & 핵심 역량</span>
        </div>

        {/* Right column: Narrative and Core Competencies Cards */}
        <div className="md:col-span-9 space-y-8">
          {/* Narrative text block */}
          <div className="space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            <p>
              저의 여정은 <strong>중국어와 글로벌 무역</strong>이라는 전공 지식에서 시작되었습니다.
              어학적 정밀함과 문화적 맥락을 깊이 있게 이해하며 <strong>HSK 6급</strong>을 취득했고,
              성형외과 웹사이트 한중 번역 및 현지화 프로젝트를 통해 언어가 실제 비즈니스 가치로
              연결되는 과정을 실증했습니다. 전공 평점 <strong>4.33 / 4.5</strong>와 2회의 성적 우수
              장학금은 이러한 탐구와 성실함의 결실입니다.
            </p>
            <p>
              이에 머무르지 않고 <strong>AI 및 데이터 분석</strong>이라는 강력한 실무 무기를 더했습니다.
              AI 부트캠프에서 Python, Pandas, 머신러닝, 생성형 AI(LLM), Streamlit을 집중적으로 체득하며
              외국인 관광객 다국어 소셜 데이터 분석부터 근로자 적정 임금 예측 머신러닝 서비스,
              부동산 AI 자동 브리핑 시스템까지 직접 기획하고 구현했습니다.
            </p>
            <p className="text-neutral-800 font-medium">
              국경과 언어의 장벽을 허무는 글로벌 감각과, 복잡한 비즈니스 문제를 데이터로 분석하고
              AI 솔루션으로 풀어내는 실행력을 갖춘 인재로서 기여하겠습니다.
            </p>
          </div>

          {/* 💡 핵심 역량 (Core Competencies) Cards */}
          <div className="pt-2">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800">
                핵심 역량 (Core Competencies)
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {CORE_COMPETENCIES.map((comp) => {
                const getIcon = () => {
                  switch (comp.id) {
                    case 'chinese':
                      return <Globe2 className="w-4 h-4 text-rose-600" />;
                    case 'academic':
                      return <Award className="w-4 h-4 text-amber-600" />;
                    case 'data-ai':
                      return <Code2 className="w-4 h-4 text-sky-600" />;
                    default:
                      return <Sparkles className="w-4 h-4 text-neutral-600" />;
                  }
                };

                return (
                  <div
                    key={comp.id}
                    className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs hover:border-neutral-300 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-neutral-100 flex items-center justify-center">
                          {getIcon()}
                        </div>
                        <h4 className="text-sm font-bold text-neutral-900">{comp.title}</h4>
                        <span className="text-xs text-neutral-600 font-normal hidden sm:inline-block">
                          · {comp.englishTitle}
                        </span>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
                        {comp.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 mb-3 leading-relaxed">
                      {comp.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-neutral-100">
                      {comp.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-neutral-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Signature SVG Calligraphy (Matching reference image's Thomas Scott signature) */}
          <div className="pt-4 flex flex-col items-start">
            <div className="relative py-2 pl-2">
              <svg
                width="220"
                height="64"
                viewBox="0 0 220 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-900 select-none"
              >
                {/* Flowing handwritten cursive strokes representing "Song Geumdam" */}
                <path
                  d="M12 44C16 38 24 22 36 18C44 15 48 24 38 35C28 46 22 52 18 53C14 54 26 48 42 42C58 36 68 34 76 36C84 38 78 46 72 48C66 50 64 45 74 38C84 31 102 24 116 28C126 31 118 42 108 46C98 50 94 48 106 38C118 28 140 22 154 24C164 25 158 35 148 40C138 45 132 46 142 40C152 34 174 26 190 28C202 29 208 34 204 40C198 48 184 52 176 50C168 48 182 42 206 36"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M48 30L92 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M130 36C145 32 165 30 185 32"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-xs text-neutral-600 font-mono tracking-wider pl-3">
              {PERSONAL_INFO.nameEn} · {PERSONAL_INFO.nameKo}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
