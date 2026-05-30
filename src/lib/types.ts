export type NavigationItem = {
  label: string;
  href: string;
};

export type SiteProfile = {
  name: string;
  role: string;
  location: string;
  summary: string;
  email: string;
};

export type ProjectSlug = "whatsapp" | "chargepoint" | "open-source";

export type Project = {
  slug: ProjectSlug;
  title: string;
  href: string;
  eyebrow: string;
  summary: string;
  themes: string[];
  sections: CaseStudySection[];
};

export type CaseStudySection = {
  title: string;
  body: string;
};

export type OpenSourceProject = {
  name: string;
  href: string;
  summary: string;
  themes: string[];
};

export type ResumeRole = {
  company: string;
  title: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type ResumeData = {
  summary: string;
  skills: string[];
  roles: ResumeRole[];
};
