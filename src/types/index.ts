export type Status = "En cours" | "Terminé";

export interface Profile {
  firstName: string;
  lastName: string;
  title: string;
  heroIntro: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  cvPath: string;
  avatar: string;
}

export interface AboutData {
  heading: string;
  paragraphs: string[];
  image: string;
  highlights: { title: string; text: string }[];
}

export interface SkillItem {
  name: string;
  /** Nom de l'icône devicon (ex: "python/python-original"). Optionnel. */
  icon?: string;
}

export interface SkillGroup {
  title: string;
  items: SkillItem[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  period: string;
  location: string;
  status: Status;
  note?: string;
  description: string;
  tags: string[];
}

export interface Certification {
  id: string;
  title: string;
  source: string;
  description: string;
  image: string;
  verifyUrl?: string;
}

export type ProjectCategory = "IoT & Électronique" | "Data & IA" | "Full-Stack"|"Front-end";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  status: Status;
  context?: string;
  description: string;
  details?: { label: string; text: string }[];
  tags: string[];
  image: string [];
  github?: string;
  demo?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  tags?: string[];
  image: string;
}

export interface Competition {
  id: string;
  title: string;
  result: string;
  period: string;
  team?: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface EngagementItem {
  id: string;
  title: string;
  role?: string;
  period: string;
  description: string;
  images: string[];
}

export interface EngagementGroup {
  title: string;
  items: EngagementItem[];
}
