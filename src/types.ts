export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  type: string; // '팀 프로젝트' | 'AI 부트캠프 팀 프로젝트'
  period: string;
  techStack: string[];
  overview: string;
  roles: string[];
  outcomes: string;
  imageUrl?: string;
  accentColor?: string;
  highlights?: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  type: string;
  descriptions: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degreeOrCourse: string;
  period: string;
  status: string;
  gradeOrScore?: string;
  scholarshipOrAward?: string;
  curriculum: string[];
}

export interface SkillCategory {
  categoryName: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    details?: string;
  }[];
}

export interface LeaderLineItem {
  title: string;
  organization: string;
  dateOrValue: string;
  note?: string;
}

export interface LanguageProficiency {
  code: string;
  language: string;
  level: string;
  description: string;
}
