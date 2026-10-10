export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  github: string;
  linkedin: string;
  cvUrl: string;
  about: string[];
  stats: { certifications: number; technologies: number };
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  reportUrl: string,
  image: string | null;
  experience: boolean;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  issuerLogo: string;
  date: string;
  credentialUrl: string;
  previewImage: string;
  badge: string;
  color: string;
}

export interface TimelineItem {
  id: number;
  period: string;
  institution: string;
  degree: string;
  location: string;
  description: string;
  icon: string;
  type: 'current' | 'completed';
  side: 'left' | 'right';
}
