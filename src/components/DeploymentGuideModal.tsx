import React, { useState } from 'react';
import { X, Github, ExternalLink, Check, Copy, Terminal, Rocket, CheckCircle2 } from 'lucide-react';

interface DeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentGuideModal: React.FC<DeploymentGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyCode = (text: string, step: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(step);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const gitInitSnippet = `# 1. Git 저장소 초기화 및 커밋
git init
git add .
git commit -m "feat: 송금담 포트폴리오 웹사이트 초기 구축"`;

  const gitPushSnippet = `# 2. 본인의 GitHub 리포지토리에 연결 후 푸시
git branch -M main
git remote add origin https://github.com/ming618900/portfolio.git
git push -u origin main`;

  const vercelCliSnippet = `# 또는 Vercel CLI로 바로 배포할 경우
npx vercel`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl border border-neutral-200/90 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        id="deploy-modal"
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1.5 rounded-lg bg-neutral-900 text-white">
                <Rocket className="w-4 h-4" />
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                GitHub 저장 및 Vercel 배포 가이드
              </h3>
            </div>
            <p className="text-xs text-neutral-600">
              본 프로젝트는 Vite + React 정적 빌드로 구성되어 있어 GitHub과 Vercel에 단 몇 분 만에 배포할 수 있습니다.
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

        <div className="py-6 space-y-6 text-xs sm:text-sm">
          {/* Step 1: GitHub Push */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-neutral-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-mono">1</span>
                <span>GitHub 저장소 생성 및 푸시</span>
              </h4>
              <button
                onClick={() => copyCode(gitInitSnippet, 1)}
                className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-neutral-900 px-2.5 py-1 rounded-md bg-neutral-100 hover:bg-neutral-200 transition-colors"
              >
                {copiedStep === 1 ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedStep === 1 ? '복사완료' : '코드 복사'}</span>
              </button>
            </div>
            <pre className="p-3 rounded-xl bg-neutral-950 text-neutral-200 font-mono text-xs overflow-x-auto">
              {gitInitSnippet}
            </pre>
          </div>

          {/* Step 2: Connect remote */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-neutral-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-mono">2</span>
                <span>원격 저장소 연결</span>
              </h4>
              <button
                onClick={() => copyCode(gitPushSnippet, 2)}
                className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-neutral-900 px-2.5 py-1 rounded-md bg-neutral-100 hover:bg-neutral-200 transition-colors"
              >
                {copiedStep === 2 ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedStep === 2 ? '복사완료' : '코드 복사'}</span>
              </button>
            </div>
            <pre className="p-3 rounded-xl bg-neutral-950 text-neutral-200 font-mono text-xs overflow-x-auto">
              {gitPushSnippet}
            </pre>
          </div>

          {/* Step 3: Vercel Web Dashboard (1-Click) */}
          <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-neutral-200/90 space-y-3">
            <h4 className="font-bold text-neutral-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-mono">3</span>
              <span>Vercel 웹사이트에서 1분 만에 배포하기</span>
            </h4>
            <div className="space-y-2 text-xs text-neutral-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><a href="https://vercel.com" target="_blank" rel="noreferrer" className="font-bold text-neutral-950 underline">vercel.com</a>에 접속하여 GitHub 계정으로 로그인합니다.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Add New Project</strong>를 누르고 방금 올린 리포지토리를 선택합니다.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Framework Preset이 <strong>Vite</strong>로 자동 감지되며, <strong>Deploy</strong> 버튼을 누르면 끝납니다.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>이미 포함된 <code>vercel.json</code> 파일 덕분에 단일 페이지 라우팅도 자동으로 완벽 지원됩니다.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-neutral-100 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
