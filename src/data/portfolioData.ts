import { EducationItem, ExperienceItem, LanguageProficiency, LeaderLineItem, Project, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  nameKo: '송금담',
  nameEn: 'Song Geumdam',
  title: '중국어·무역 & 데이터·AI 융합 전문가',
  subtitle: '중국어·무역 전공과 데이터·AI 역량을 융합하여 실무 가치를 창출하는 포트폴리오입니다.',
  bioParagraph1:
    '부산외국어대학교에서 중국어와 무역을 전공하며 HSK 6급을 취득하고, 의료·비즈니스 분야의 정밀한 한중 번역 및 현지화 경험을 축적했습니다. 학업 성취도 4.33/4.5와 2회의 성적 우수 장학금을 통해 입증된 성실함과 언어적 직관을 지니고 있습니다.',
  bioParagraph2:
    '이후 AI 부트캠프를 거치며 Python, Pandas, Scikit-learn, 생성형 AI/LLM, Streamlit 역량을 결합하여 관광 소셜 데이터 인텔리전스, 임금 예측 머신러닝 시스템, 부동산 AI 분석 모델 등 실제 문제를 해결하는 데이터 솔루션을 개발했습니다. 언어의 장벽을 허물고 데이터로 통찰을 구체화하는 융합형 인재로서 실무적 가치를 창출합니다.',
  location: '부산광역시, 대한민국 (Busan, Korea)',
  status: '협업 및 채용 가능 (Available for Work)',
  email: 'ming618900@gmail.com',
  phone: '010-3584-6189',
  github: 'https://github.com/ming618900',
  university: '부산외국어대학교 (Busan University of Foreign Studies)',
  major: '중국어 · 무역 전공',
  gpa: '4.33 / 4.5',
};

export const CORE_COMPETENCIES = [
  {
    id: 'chinese',
    title: '중국어 실무 및 번역',
    englishTitle: 'Chinese Localization & Trade',
    badge: 'HSK 6급 최고급',
    description:
      'HSK 6급을 보유하고 있으며, 성형외과 및 의료·비즈니스, 무역 분야의 정교한 한중 번역과 문화적 맥락을 고려한 현지화(Localization) 역량을 갖추었습니다.',
    points: [
      '의료/비즈니스 전문 용어 사전 구축 및 스타일 가이드 표준화',
      '중국어권 사용자 맞춤형 웹 콘텐츠 번역 및 최종 감수',
      '한중 비즈니스 커뮤니케이션 및 무역 서신 대응 역량',
    ],
  },
  {
    id: 'academic',
    title: '우수한 학업 성취도',
    englishTitle: 'Academic Excellence',
    badge: '학점 4.33 / 4.5',
    description:
      '부산외국어대학교 중국어·무역 전공을 전공하며 4.33/4.5의 탁월한 학점과 2회의 성적 우수 장학금을 수혜하며 깊이 있는 통상 이론과 성실함을 검증받았습니다.',
    points: [
      '부산외국어대학교 중국어·무역 전공 평점 4.33 / 4.5',
      '성적 우수 장학금 2회 연속 수혜',
      '국제통상 규범, 무역 계약, 글로벌 마켓 리서치 이수',
    ],
  },
  {
    id: 'data-ai',
    title: '데이터 분석 & AI 활용',
    englishTitle: 'Data Analytics & Applied AI',
    badge: 'Python & LLM & ML',
    description:
      'Python, Pandas, 머신러닝 알고리즘과 최신 LLM(대형 언어 모델), Streamlit을 다루며 원시 데이터를 직관적인 인터랙티브 대시보드와 AI 서비스로 구축합니다.',
    points: [
      '다국어 소셜 텍스트 분석 및 EDA, 감성/키워드 클러스터링',
      'Scikit-learn 기반 머신러닝 예측 모델링 및 하이퍼파라미터 튜닝',
      'Streamlit을 활용한 실사용자 타깃 예측 MVP 웹 앱 설계 및 배포',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'medical-trans',
    title: '성형외과 웹사이트 중국어 번역 및 현지화',
    subtitle: '의료 비즈니스 전문 용어 표준화 및 중국어권 사용자 타깃 웹 콘텐츠 현지화',
    category: '의료·비즈니스 번역 / 웹 현지화',
    type: '팀 프로젝트',
    period: '2023.09 – 2023.11',
    techStack: ['한중 번역', '의료 용어 표준화', '콘텐츠 현지화', '스타일 가이드'],
    overview:
      '성형외과 공식 웹사이트의 한국어 의료 및 시술 안내 콘텐츠를 중국어권 사용자를 대상으로 번역하고, 문화적 수용성과 정보 명확성을 극대화하기 위해 현지화(Localization)를 진행한 프로젝트입니다.',
    roles: [
      '의료·성형 비즈니스 전문 용어 심층 조사 및 중국어권 사용자가 직관적으로 이해할 수 있는 자연스러운 표준 표현 번역',
      '팀원 간 번역 표현 및 전문 용어 통일을 위한 자체 스타일 가이드와 번역 기준서 작성 및 관리',
      '언어적 뉘앙스와 의료 정보의 법적·의학적 정확도를 고려한 다단계 최종 번역 검수 및 UI 텍스트 수정',
    ],
    outcomes:
      '중국어권 사용자의 의료 웹사이트 정보 접근성을 크게 향상시켰으며, 전문적이면서도 친근한 어조로 시술 정보를 전달하여 의료 서비스 신뢰도 증대에 기여했습니다.',
    accentColor: 'rose',
    highlights: ['HSK 6급 역량 투입', '용어집 스타일가이드 완성', '신뢰도 높은 현지화'],
  },
  {
    id: 'busan-tourism',
    title: '부산 관광객 대상 다국어 소셜 데이터 인텔리전스 분석',
    subtitle: '외국인 관광객 소셜 빅데이터 수집, 정제 및 다국어 텍스트 분석을 통한 트렌드 도출',
    category: '빅데이터 분석 & NLP',
    type: 'AI 부트캠프 팀 프로젝트',
    period: '2026.06 – 2026.07',
    techStack: ['Python', 'Pandas', '텍스트 분석', '데이터 시각화', 'NLP', 'Matplotlib'],
    overview:
      '부산을 방문하는 외국인 관광객들의 다국어 소셜 미디어 데이터를 수집·정제하고, 자연어 처리 기법을 적용하여 방문 트렌드, 선호 스팟, 주요 불편 요인을 도출한 인텔리전스 분석 프로젝트입니다.',
    roles: [
      '다국어(한국어, 중국어, 영어 등) 소셜 비정형 텍스트 데이터 수집, 불용어 제거 및 Python/Pandas 기반 전처리 파이프라인 구축',
      '다국어 텍스트 형태소 및 키워드 빈도 분석, 토픽 모델링을 적용해 국가별 관심 분야 및 핫플레이스 도출',
      '국가별·주제별(음식, 교통, 숙박, 해변 등) 방문객 세그먼트 분류 및 직관적인 시각화 차트 구현',
    ],
    outcomes:
      '국가별 관광객의 상이한 소비 패턴 및 여행 키워드를 명확히 시각화하여, 외국인 친화적 관광 인프라 구축을 위한 데이터 기반 인사이트 리포트를 도출했습니다.',
    accentColor: 'sky',
    highlights: ['다국어 비정형 텍스트 정제', '타깃 국가별 키워드 추출', '데이터 시각화 대시보드'],
  },
  {
    id: 'wage-prediction',
    title: '외국인 근로자를 위한 적정 임금 예측 서비스',
    subtitle: '근무 조건 머신러닝 예측 모델 및 Streamlit 기반 인터랙티브 임금 계산 MVP',
    category: '머신러닝 & 웹 서비스 MVP',
    type: 'AI 부트캠프 팀 프로젝트',
    period: '2026.07 – 2026.08',
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', '머신러닝', '회귀 모델'],
    overview:
      '외국인 근로자가 직면하는 정보 비대칭 문제를 해소하기 위해, 다양한 근무 조건 및 업종 데이터를 바탕으로 머신러닝 알고리즘을 통해 적정 임금을 추정해 주는 대화형 웹 서비스입니다.',
    roles: [
      '외국인 근로자 근로 조건, 비자 종류, 근무지, 업종별 임금 데이터셋 정제 및 이상치 처리, 피처 엔지니어링',
      'Scikit-learn 기반 회귀(Regression) 알고리즘 비교 실험을 통해 최적의 임금 예측 머신러닝 파이프라인 수립',
      'Streamlit을 활용하여 사용자가 근무 조건을 손쉽게 슬라이더와 선택창으로 입력하면 예상 임금 및 분포를 즉각 확인할 수 있는 UI/UX 개발',
    ],
    outcomes:
      '근로 조건 입력 시 1초 이내에 적정 임금 범위와 통계적 신뢰 구간을 시각적으로 제공하여, 외국인 근로자 권익 보호와 공정한 근로 환경 조성을 돕는 실효성 있는 프로토타입을 완성했습니다.',
    accentColor: 'emerald',
    highlights: ['Scikit-learn 예측 모델', 'Streamlit 실시간 UI/UX', '실제 사회적 가치 창출'],
  },
  {
    id: 'real-estate-ai',
    title: '부동산 AI 분석 시스템 구축',
    subtitle: '부동산 실거래가 및 시장 트렌드 EDA와 생성형 AI를 결합한 종합 분석 시스템',
    category: '데이터 분석 & 생성형 AI',
    type: 'AI 부트캠프 팀 프로젝트',
    period: '2026.07 – 2026.08',
    techStack: ['Python', 'Pandas', '데이터 분석', '데이터 시각화', '생성형 AI', 'LLM Prompting'],
    overview:
      '부동산 거래 및 지역 통계 데이터를 활용하여 시장 주요 지표를 심층 분석(EDA)하고, 생성형 AI를 접목하여 일반 사용자도 이해하기 쉬운 자동 종합 분석 브리핑을 제공하는 인텔리전스 시스템입니다.',
    roles: [
      'Python 및 Pandas를 활용한 대규모 부동산 거래 데이터 수집, 결측치 보정, 파생 변수 생성 및 탐색적 데이터 분석(EDA)',
      '지역별 가격 변동 추이, 거래량 패턴, 학군/교통 요인 상관관계를 한눈에 파악할 수 있는 인터랙티브 시각화 차트 개발',
      '복잡한 통계 지표를 일반인이 이해하기 쉬운 자연어 요약문으로 자동 변환해 주는 생성형 AI(LLM) 프롬프트 파이프라인 구성',
    ],
    outcomes:
      '정량적 차트 시각화와 정성적 AI 서술 브리핑을 동시에 제공함으로써, 데이터 해석 부담을 획기적으로 낮춘 종합 부동산 분석 리포트 시스템을 성공적으로 구현했습니다.',
    accentColor: 'indigo',
    highlights: ['대규모 실거래 데이터 EDA', '생성형 AI 자동 브리핑', '인터랙티브 시각화'],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'chinese-dict-project',
    title: '실무 중국어 학습을 위한 미니 한중 사전 사이트 제작 및 취업 연계 프로그램',
    role: '기획, 한중 실무 용어 조사 및 웹 콘텐츠 제작 리드',
    organization: '부산외국어대학교 프로젝트',
    period: '2026.09 – 2026.11',
    type: '팀 프로젝트',
    descriptions: [
      '취업 및 비즈니스 실무 상황에서 빈번히 활용되는 실무 중국어와 무역·통상 전문 용어를 엄선하여 미니 한중 사전 웹사이트 기획',
      '한국어·중국어 실무 용어 뉘앙스 차이 조사, 예문 작성 및 취업 준비생 맞춤형 인터랙티브 학습 콘텐츠 카테고리화',
      '팀원 간 역할 분담(자료 조사, 콘텐츠 기획, 웹 퍼블리싱 검수)을 주도하고 일정 관리를 통해 기간 내 사이트 완성 및 배포',
    ],
    skills: ['실무 중국어', '무역 전문 용어', '웹 기획', '콘텐츠 제작', '팀 협업'],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'ai-bootcamp',
    institution: '부산외국어대학교 AI 부트캠프',
    degreeOrCourse: '데이터 분석 및 AI/LLM 솔루션 개발 과정',
    period: '2026.06 – 2026.11',
    status: '과정 수료',
    scholarshipOrAward: '우수 프로젝트 선정 및 발표',
    curriculum: [
      'Python, Pandas, NumPy 기반 데이터 전처리 및 탐색적 데이터 분석(EDA)',
      '머신러닝 기반 예측 모델링(Classification, Regression) 및 자연어 처리(NLP)/텍스트 분석',
      '생성형 AI & 최신 LLM 프롬프트 엔지니어링 및 실무 활용 실습',
      'Streamlit 기반 데이터 인터랙티브 대시보드 구축 및 팀 프로젝트 실전 배포',
    ],
  },
  {
    id: 'university',
    institution: '부산외국어대학교 (BUFS)',
    degreeOrCourse: '중국어 / 무역 전공 (학사)',
    period: '2023.03 – 2027.02',
    status: '졸업 예정',
    gradeOrScore: '평점 4.33 / 4.5',
    scholarshipOrAward: '성적 우수 장학금 2회 수혜',
    curriculum: [
      '중국어 번역 및 통역 실무, 한중 비즈니스 회화, 고급 중국어 문법',
      '국제무역통상 규범, 무역 계약 및 결제, 글로벌 시장 리서치 실무 교과목 이수',
      '어문학적 감각과 무역 통상 실무 지식을 결합한 융합적 학업 수행',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    categoryName: '🇨🇳 중국어 · 중국 비즈니스',
    iconName: 'Languages',
    description: '고급 어학 역량과 현지화 감각을 바탕으로 한중 비즈니스를 원활하게 연결합니다.',
    skills: [
      { name: '중국어 능력', level: 'HSK 6급 (고급)', details: '비즈니스 협상, 전문 번역 및 통역 가능' },
      { name: '콘텐츠 현지화 (Localization)', level: '실무 프로젝트 수행', details: '중국어권 사용자의 문화적 특성과 UI/UX 고려' },
      { name: '중국어 문서 및 웹 콘텐츠 번역·검수', level: '전문 수준', details: '의료, 비즈니스, 무역 분야 정확한 어휘 선별' },
      { name: '한중 비즈니스 커뮤니케이션', level: '상급', details: '통상 전문 용어 이해 및 한중 비즈니스 서신' },
    ],
  },
  {
    categoryName: '🌐 무역 · 통상',
    iconName: 'Globe',
    description: '국제 통상 기초 지식과 중국 시장 실무 감각을 데이터와 접목합니다.',
    skills: [
      { name: '무역·통상 전공 지식', level: '전공 심화', details: '국제 비즈니스 거래, 인코텀즈 및 결제 프로세스 기본 이해' },
      { name: '중국 시장 및 무역 실무 데이터 분석', level: '분석 역량', details: '중국 시장 트렌드 데이터 리서치 및 분석 관심' },
      { name: '글로벌 비즈니스 커뮤니케이션', level: '실무 준비', details: '다국어 문서 작업 및 해외 바이어 대상 커뮤니케이션' },
    ],
  },
  {
    categoryName: '💻 데이터 · AI 기술',
    iconName: 'Terminal',
    description: 'Python 생태계와 최신 생성형 AI 기술을 활용해 실질적인 서비스를 구현합니다.',
    skills: [
      { name: 'Python, Pandas, NumPy', level: '활용 가능', details: '데이터 전처리, 결측치 정제, 피처 엔지니어링' },
      { name: 'EDA & 데이터 시각화', level: '실무 프로젝트', details: 'Matplotlib, Seaborn 활용한 통계 시각화 및 인사이트 도출' },
      { name: 'AI & Machine Learning (Scikit-learn)', level: '모델 구현', details: '회귀/분류 머신러닝 기초, 예측 모델 파이프라인' },
      { name: '자연어 처리 (NLP) & 텍스트 분석', level: '프로젝트 수행', details: '다국어 소셜 텍스트 분석, 키워드 및 토픽 도출' },
      { name: '생성형 AI & LLM 활용', level: '실무 적용', details: '프롬프트 엔지니어링, 데이터 기반 자동 요약 및 리포트' },
      { name: 'Streamlit 웹 서비스 배포', level: 'MVP 구축', details: '머신러닝 모델과 연동된 대화형 웹 애플리케이션 개발' },
    ],
  },
];

export const AWARDS_AND_HONORS: LeaderLineItem[] = [
  { title: 'HSK 6급 취득 (고급)', organization: '중국 한반 (Hanban)', dateOrValue: '2025.03', note: '비즈니스 및 번역 가능' },
  { title: '성적 우수 장학금 수혜 (2회차)', organization: '부산외국어대학교', dateOrValue: '2024.08', note: '학업 우수' },
  { title: '성적 우수 장학금 수혜 (1회차)', organization: '부산외국어대학교', dateOrValue: '2023.08', note: '학업 우수' },
  { title: '중국어·무역 전공 학업 평점 4.33 / 4.5', organization: '부산외국어대학교', dateOrValue: '2023 – 현재', note: '최상위권' },
];

export const LANGUAGE_PROFICIENCY: LanguageProficiency[] = [
  { code: 'KR', language: '한국어 (Korean)', level: 'Native', description: '모국어, 비즈니스 및 문서 작성' },
  { code: 'CN', language: '중국어 (Chinese)', level: 'HSK 6급 (Fluent)', description: '고급 어휘 구사, 비즈니스 통·번역 및 현지화 가능' },
];
