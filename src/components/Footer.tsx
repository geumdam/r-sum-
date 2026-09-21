import React, { useState } from 'react';
import { ArrowUp, Github, ExternalLink, Terminal, Check, Copy } from 'lucide-react';

interface FooterProps {
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeployGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white py-8 px-4 sm:px-8 text-xs text-neutral-600">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Author Attribution */}
        <div className="flex items-center gap-2">
          <span>Designed & Built for</span>
          <span className="font-bold text-neutral-900">송금담 (Song Geumdam)</span>
        </div>

        {/* Center: Deployment badge */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenDeployGuide}
            className="cursor-pointer text-neutral-700 hover:text-neutral-900 font-medium transition-colors flex items-center gap-1 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub & Vercel 배포 가이드</span>
          </button>
        </div>

        {/* Right: Scroll to top */}
        <div className="flex items-center gap-3">
          <span className="text-neutral-600">© 2026. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            aria-label="맨 위로 이동"
            className="cursor-pointer p-2 rounded-full border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
