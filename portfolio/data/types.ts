export type SkillLevel = "professional" | "project" | "learning";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: Skill[];
}

export type ProjectFilter =
  | "Data Engineering"
  | "Data Warehousing"
  | "Python"
  | "Analytics";

export interface EvidenceItem {
  /** File name without extension, expected inside public/projects/<assetDir>/ */
  stem: string;
  title: string;
  caption: string;
}

export interface Project {
  slug: string;
  /** Folder name inside public/projects/ */
  assetDir: string;
  name: string;
  subtitle: string;
  category: string;
  filters: ProjectFilter[];
  featured?: boolean;
  summary: string;
  metric?: { value: string; label: string };
  tech: string[];
  highlights: string[];
  problem: string;
  approach: { title: string; points: string[] }[];
  challenges: { challenge: string; solution: string }[];
  learnings: string[];
  evidence: EvidenceItem[];
  /** Add the GitHub repository URL here when ready */
  repoUrl?: string;
}

export interface ArchitectureStage {
  label: string;
  tool: string;
  layer?: "Bronze" | "Silver" | "Gold";
  description: string;
  details: string[];
}

export interface ArchitectureView {
  label: string;
  stages: ArchitectureStage[];
  notes: string[];
}

export interface ExperienceItem {
  org: string;
  role: string;
  period: string;
  location: string;
  context: string;
  points: string[];
}
