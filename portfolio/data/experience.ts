import type { ExperienceItem } from "./types";

// Titles, organisations, dates, locations and metrics come from the resume.
export const experience: ExperienceItem[] = [
  {
    org: "Technoidentity",
    role: "Associate Dev I",
    period: "Dec 2024 – Present",
    location: "Hyderabad, TS",
    context: "Energy analytics for a major utility client",
    points: [
      "Built PostgreSQL ETL workflows that process daily load data from multiple markets (ERCOT, PJM, NYISO), speeding up data refresh cycles by 45%.",
      "Validated 500K+ energy usage records with Python and SQL, reaching 99.4% accuracy and replacing a manual check that took 8 hours a week.",
      "Optimized multi-table joins and aggregations, cutting query processing time by 60% for the data warehouse and BI tools.",
      "Analyzed consumption across 1000+ points of delivery, finding billing discrepancies and data quality issues that improved forecast accuracy by 18%.",
      "Built Power BI dashboards on self-service ETL pipelines, reducing report generation from 3 hours to 12 minutes.",
      "Worked with the energy forecasting team to turn requirements into ETL workflows and KPI dashboards.",
    ],
  },
  {
    org: "Indian Oil Corporation Limited",
    role: "Trainee",
    period: "Dec 2023 – Dec 2024",
    location: "Chennai, TN",
    context: "Performance analytics and business intelligence",
    points: [
      "Cleaned and normalized data with Power Query to protect data integrity, reducing report response latency by 40%.",
      "Debugged SQL queries and ran variance checks to keep training program metrics 100% accurate.",
      "Built and maintained KPI dashboards in Excel, Power BI and SQL for 50+ interns and trainees, cutting manager review time by 65%.",
      "Analyzed system monitoring metrics (CPU, memory, network) with DAX and pivot tables, improving observability by 60%.",
      "Worked with infrastructure and operations teams to translate technical requirements into dashboards that teams adopted.",
    ],
  },
  {
    org: "Lifo Technologies",
    role: "Intern",
    period: "Oct 2023 – Nov 2023",
    location: "Chennai, TN",
    context: "Business intelligence and reporting",
    points: [
      "Built an employee performance tracking system with SQL and Excel, supporting HR decisions for 100+ employees.",
      "Fixed SQL query errors and added validation rules that decreased the error rate by 22%.",
      "Delivered ad-hoc reports and role-based Power BI dashboards, accelerating reporting cycles by 35%.",
    ],
  },
];
