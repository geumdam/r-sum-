# 송금담 포트폴리오 웹사이트 (Song Geumdam Portfolio)

> **중국어·무역 전공**과 **데이터·AI 역량**을 융합하여 실무 가치를 창출하는 포트폴리오 웹사이트입니다.

## 🌟 프로젝트 개요
본 포트폴리오는 정교한 타이포그래피와 모던한 2컬럼 에디토리얼 레이아웃을 바탕으로, 송금담 님의 중국어·무역 역량과 데이터·AI 프로젝트 성과를 효과적으로 보여줍니다.

- **성명:** 송금담 (Song Geumdam)
- **전공:** 부산외국어대학교 중국어·무역 전공 (평점: 4.33 / 4.5, 성적 우수 장학금 2회)
- **자격:** HSK 6급 (2025.03)
- **이메일:** `ming618900@gmail.com`
- **연락처:** `010-3584-6189`
- **GitHub:** `https://github.com/ming618900`

---

## 🚀 GitHub 저장 및 Vercel 배포 방법

### 1. GitHub에 코드 푸시하기
터미널에서 아래 명령어를 순서대로 실행합니다:

```bash
# 1. git 초기화 및 전체 파일 추가
git init
git add .
git commit -m "feat: 송금담 포트폴리오 웹사이트 구축"

# 2. GitHub 저장소에 푸시 (본인 GitHub 주소로 변경)
git branch -M main
git remote add origin https://github.com/ming618900/portfolio.git
git push -u origin main
```

### 2. Vercel에서 1분 만에 배포하기
1. [Vercel](https://vercel.com)에 접속하여 GitHub 계정으로 로그인합니다.
2. **Add New...** -> **Project** 버튼을 클릭합니다.
3. 방금 올린 `portfolio` 저장소를 찾아 **Import**를 누릅니다.
4. Framework Preset이 `Vite`로 자동 인식됩니다. (별도 설정 변경 필요 없음)
5. **Deploy** 버튼을 누르면 약 30초 내에 배포가 완료되어 고유 URL(예: `https://portfolio-xxx.vercel.app`)이 생성됩니다!

> 💡 **참고:** 이미 루트 경로에 `vercel.json` 파일이 설정되어 있어 SPA 라우팅이 자동으로 지원됩니다.

---

## 🛠 기술 스택
- **프론트엔드:** React 19, TypeScript, Vite
- **스타일링:** Tailwind CSS
- **아이콘:** Lucide React
- **배포 지원:** Vercel, GitHub Pages
