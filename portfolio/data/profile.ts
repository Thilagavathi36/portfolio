export const profile = {
  name: "M Thilagavathi",
  title: "Data Engineer",
  eyebrow: "DATA ENGINEERING • CLOUD • ANALYTICS",
  heroTitle: "Turning Raw Data Into Reliable Data Systems.",
  heroSub:
    "Data Engineer with hands-on experience designing data pipelines, transforming complex datasets, and building analytics-ready platforms, data agents and ML operations using Python, SQL, Azure, Databricks, and modern data engineering tools.",
  headline:
    "Building Reliable Data Pipelines, Scalable Architectures & Analytics-Ready Data Platforms.",
  description:
    "Portfolio of M Thilagavathi, a Data Engineer building reliable data pipelines, lakehouse architectures, data agents and ML operations with Python, SQL, Azure, Databricks, dbt and Kafka.",
  // Contact details are taken from the resume.
  email: "thilagavathimani36@gmail.com",
  linkedin: "https://www.linkedin.com/in/thilagavathi-m",
  medium: "https://medium.com/@thilagavathimani36",
  github: "https://github.com/Thilagavathi36",
  // Replace this file with your latest Data Engineering resume.
  resume: "/resume/M_Thilagavathi_Resume.pdf",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Expertise", id: "expertise" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
] as const;

export const aboutFacts = [
  { label: "Current role", value: "Associate Dev I, Technoidentity" },
  {
    label: "Platform focus",
    value:
      "Python, SQL, PySpark, Azure, Databricks, Delta Lake, dbt, Kafka, Microsoft Fabric, PostgreSQL, SQL Server, Power BI",
  },
  { label: "Education", value: "BCA, Mother Teresa Women's University" },
];

export const education = {
  degree: "Bachelor of Computer Application",
  school: "Mother Teresa Women's University",
  place: "Tamil Nadu",
  period: "July 2020 – June 2023",
  gpa: "GPA 8.6",
};

export const achievements = [
  { title: "University First Rank", meta: "Mother Teresa Women's University · May 2023" },
  { title: "Data Analytics Hackathon, First Prize", meta: "Technoidentity · November 2025" },
  { title: "Data Analytics & Visualization Certification", meta: "Coursera · October 2024" },
];
