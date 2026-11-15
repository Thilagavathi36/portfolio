import type { SkillGroup, SkillLevel } from "./types";

export const levelLabels: Record<SkillLevel, string> = {
  professional: "Used in my job",
  project: "Built in projects",
  learning: "Currently learning",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming & Querying",
    description: "Languages used to extract, transform and validate data.",
    skills: [
      { name: "Python", level: "professional" },
      { name: "SQL", level: "professional" },
      { name: "PySpark", level: "project" },
    ],
  },
  {
    title: "Cloud & Data Platforms",
    description: "Azure services used in the AtliQ capstone.",
    skills: [
      { name: "Microsoft Azure", level: "project" },
      { name: "Azure Data Lake Storage Gen2", level: "project" },
      { name: "Azure Data Factory", level: "project" },
      { name: "Azure SQL Database", level: "project" },
      { name: "Azure Databricks", level: "project" },
      { name: "Microsoft Fabric", level: "project" },
    ],
  },
  {
    title: "Data Engineering",
    description: "Patterns for moving, modeling and trusting data.",
    skills: [
      { name: "ETL / ELT", level: "professional" },
      { name: "Batch Processing", level: "professional" },
      { name: "Data Quality Validation", level: "professional" },
      { name: "Structured Streaming", level: "project" },
      { name: "Delta Lake", level: "project" },
      { name: "Medallion Architecture", level: "project" },
      { name: "Data Warehousing", level: "project" },
      { name: "Dimensional Modeling", level: "project" },
      { name: "Incremental Data Processing", level: "project" },
    ],
  },
  {
    title: "Transformation & Orchestration",
    description: "Tools that order, transform and stream pipeline work.",
    skills: [
      { name: "dbt Core", level: "project" },
      { name: "Databricks Workflows", level: "project" },
      { name: "Apache Kafka", level: "project" },
      { name: "Apache Airflow", level: "learning" },
    ],
  },
  {
    title: "Databases & Analytics",
    description: "Storage engines and the analytics layer on top.",
    skills: [
      { name: "PostgreSQL", level: "professional" },
      { name: "Power BI", level: "professional" },
      { name: "Pandas", level: "professional" },
      { name: "SQL Server", level: "project" },
    ],
  },
  {
    title: "Development Tools",
    description: "Everyday tooling for versioned, tested code.",
    skills: [
      { name: "Git", level: "professional" },
      { name: "GitHub", level: "project" },
      { name: "VS Code", level: "project" },
      { name: "pytest", level: "project" },
    ],
  },
];
