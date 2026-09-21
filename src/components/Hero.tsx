import React, { useState } from 'react';
import { Mail, Phone, Github, Check, MapPin, Sparkles, FileText, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomPhotoUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="profile" className="pt-8 pb-12 sm:pt-12 sm:pb-16">
      {/* Top Status Badges (Matching reference template) */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div
          id="status-badge-work"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-medium text-neutral-700 shadow-2xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for Work</span>
        </div>

        <div
          id="status-badge-location"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-medium text-neutral-600 shadow-2xs"
        >
          <MapPin className="w-3.5 h-3.5 text-neutral-400" />
          <span>Based in Busan, Korea</span>
        </div>
      </div>

      {/* Main Hero Card Container (Two-column layout matching the design reference) */}
      <div
        id="hero-card"
        className="bg-white rounded-3xl border border-neutral-200/90 p-5 sm:p-7 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center"
      >
        {/* Left Column: Portrait Photo with clean frame */}
        <div className="md:col-span-5 flex flex-col items-center">
          <div className="relative w-full aspect-4/5 max-w-[280px] md:max-w-none rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-100 to-neutral-200 border border-neutral-200/80 shadow-inner group">
            {customPhotoUrl ? (
              <img
                src={customPhotoUrl}
                alt={PERSONAL_INFO.nameKo}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              /* Stylized professional portrait visual representing Song Geumdam */
              <div className="w-full h-full relative flex flex-col items-center justify-center p-6 bg-[#F5F5F7]">
                {/* Background geometric accents */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Visual Avatar Graphic */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-neutral-900 via-neutral-800 to-neutral-700 text-white flex items-center justify-center shadow-lg mb-4 ring-4 ring-white">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-2xl sm:text-3xl font-bold tracking-tight">금담</span>
                      <span className="text-[10px] tracking-widest uppercase text-neutral-300 font-mono mt-0.5">Song</span>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-neutral-200/80 shadow-2xs">
                    <span className="text-xs font-semibold text-neutral-800 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      중국어·무역 & 데이터·AI
                    </span>
                  </div>

                  <p className="text-[11px] text-neutral-500 mt-3 max-w-[200px] leading-relaxed">
                    부산외대 수석급 학점 4.33 & HSK 6급 & AI 부트캠프
                  </p>
                </div>

                {/* Upload your own photo pill tooltip */}
                <label className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-neutral-700 hover:text-neutral-950 text-[10px] font-medium px-2.5 py-1 rounded-full border border-neutral-200 shadow-2xs cursor-pointer transition-colors flex items-center gap-1 z-20">
                  <FileText className="w-3 h-3 text-neutral-500" />
                  <span>사진 변경</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Name, Title, and Concise Bio */}
        <div className="md:col-span-7 flex flex-col justify-between h-full py-1">
          <div>
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Portfolio & Resume
              </span>
              <span className="text-xs font-mono text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded">
                2026
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-1">
              {PERSONAL_INFO.nameKo}
              <span className="text-xl sm:text-2xl font-normal text-neutral-500 ml-2 font-mono">
                {PERSONAL_INFO.nameEn}
              </span>
            </h1>

            <p className="text-sm sm:text-base font-medium text-neutral-700 mb-4 leading-relaxed">
              {PERSONAL_INFO.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
              {PERSONAL_INFO.bioParagraph1}
            </p>
          </div>

          {/* Quick Action Badges / Contact Icons */}
          <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-2.5">
            {/* Copy Email Button */}
            <button
              id="hero-copy-email-btn"
              type="button"
              onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
              className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-medium transition-colors"
              title="이메일 주소 복사"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">복사완료!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>

            {/* Copy Phone Button */}
            <button
              id="hero-copy-phone-btn"
              type="button"
              onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
              className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-medium transition-colors"
              title="연락처 복사"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">복사완료!</span>
                </>
              ) : (
                <>
                  <Phone className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{PERSONAL_INFO.phone}</span>
                </>
              )}
            </button>

            {/* GitHub Link */}
            <a
              id="hero-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-medium transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-neutral-600" />
              <span>GitHub</span>
            </a>

            {/* View Complete Profile / Resume button */}
            {onOpenResumeModal && (
              <button
                id="hero-view-resume-btn"
                type="button"
                onClick={onOpenResumeModal}
                className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-colors ml-auto shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5 text-neutral-300" />
                <span>이력 요약표 보기</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
