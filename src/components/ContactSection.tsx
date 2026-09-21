import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, Github, Check, Copy, Send, Sparkles, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const copyText = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      inquirySubject || '[채용/협업 문의] 송금담 포트폴리오를 보고 연락드립니다'
    )}&body=${encodeURIComponent(inquiryMessage || '안녕하세요, 송금담 님.\n\n포트폴리오를 확인하고 연락드립니다.')}`;
    window.location.href = mailtoUrl;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <section id="contact" className="py-12 border-t border-neutral-200/70">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Left column: Section Title */}
        <div className="md:col-span-3">
          <h2 className="text-xl font-bold text-neutral-900 tracking-tight sticky top-24">
            Contact
          </h2>
          <span className="text-xs text-neutral-600 block mt-1">연락처 및 협업 제안</span>
        </div>

        {/* Right column: Contact Details + Quick Inquiry */}
        <div className="md:col-span-9 space-y-6">
          <div className="bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-8 shadow-xs">
            {/* List matching reference */}
            <div className="space-y-4 pb-6 border-b border-neutral-100">
              {/* Email */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-600 w-20">
                    Email
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyText(PERSONAL_INFO.email, 'email')}
                  className="cursor-pointer self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-xs font-medium text-neutral-700 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">복사완료</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      <span>이메일 복사</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-600 w-20">
                    Phone
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm sm:text-base font-semibold text-neutral-900 hover:text-neutral-600 transition-colors font-mono"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyText(PERSONAL_INFO.phone, 'phone')}
                  className="cursor-pointer self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-xs font-medium text-neutral-700 transition-colors"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">복사완료</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      <span>전화번호 복사</span>
                    </>
                  )}
                </button>
              </div>

              {/* GitHub */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-600 w-20">
                    GitHub
                  </span>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-neutral-900 hover:text-neutral-600 transition-colors flex items-center gap-1.5"
                  >
                    <span>github.com/ming618900</span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                  </a>
                </div>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-xs font-medium text-neutral-700 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-neutral-600" />
                  <span>방문하기</span>
                </a>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="pt-6">
              <h3 className="text-sm font-bold text-neutral-900 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>메시지 남기기 (이메일 자동 연결)</span>
              </h3>
              <p className="text-xs text-neutral-600 mb-4">
                중국어 번역, 무역 비즈니스, 데이터 분석 및 채용 제안을 주시면 확인 후 신속하게 회신드리겠습니다.
              </p>

              <form onSubmit={handleSendEmail} className="space-y-3">
                <div>
                  <input
                    type="text"
                    value={inquirySubject}
                    onChange={(e) => setInquirySubject(e.target.value)}
                    placeholder="제목 (예: [채용 문의] 송금담 님께 면접/협업을 제안합니다)"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all bg-[#FBFBFC]"
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="내용 (회사명, 담당자 연락처, 제안 내용 등을 작성해 주시면 이메일 클라이언트로 전달됩니다)"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all resize-none bg-[#FBFBFC]"
                  />
                </div>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <span className="text-[11px] text-neutral-600">
                    전송 버튼 클릭 시 본인의 이메일 프로그램이 열립니다.
                  </span>
                  <button
                    type="submit"
                    className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold shadow-xs transition-colors shrink-0"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>메일 작성하기</span>
                  </button>
                </div>

                {sentSuccess && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>이메일 작성 프로그램이 호출되었습니다. 전송을 완료해 주세요!</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
