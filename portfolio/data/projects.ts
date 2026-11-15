import type { Project } from "./types";

// Project facts come from the brief. InsightBoard metrics come from the resume.
// Add `repoUrl` to a project once its GitHub repository link is ready.
export const projects: Project[] = [
  {
    slug: "atliq-commerce",
    assetDir: "atliq",
    name: "AtliQ Commerce",
    subtitle: "End-to-End Data Engineering Platform",
    category: "Cloud Data Engineering / Data Lakehouse / Streaming",
    filters: ["Data Engineering", "Data Warehousing"],
    featured: true,
    summary:
      "An end-to-end data engineering capstone implementing data ingestion, transformation, data quality checks, dimensional modeling, and streaming workflows across modern cloud data platforms.",
    tech: [
      "Azure Data Factory",
      "ADLS Gen2",
      "Azure SQL",
      "Databricks",
      "PySpark",
      "Delta Lake",
      "dbt Core",
      "SQL",
      "Microsoft Fabric",
      "Apache Kafka",
    ],
    highlights: [
      "Bronze, Silver and Gold layers on ADLS Gen2 and Delta Lake.",
      "Deduplication, cleansing and validation before data reaches Silver.",
      "Incremental processing with Delta Lake merge operations.",
      "dbt staging models and Gold-layer dimensional models.",
      "Kafka and Structured Streaming extension with watermarks and checkpoints.",
    ],
    problem:
      "Commerce data arrives from several sources with duplicate records, inconsistent schemas and uneven quality. The capstone asks how to ingest it reliably, clean and validate it incrementally, model it for analytics, and then extend the same medallion design to event streams, including late data and restarts.",
    approach: [
      {
        title: "Phase 1: Batch lakehouse",
        points: [
          "Built Azure-based data ingestion workflows.",
          "Used ADLS Gen2 for cloud storage.",
          "Implemented Bronze and Silver layers.",
          "Applied data cleansing, standardization, deduplication, and validation.",
          "Used Delta Lake merge operations for incremental processing.",
          "Implemented dbt staging and Gold-layer transformations.",
          "Worked with dimensional modeling and analytics-ready datasets.",
          "Integrated Microsoft Fabric as part of the analytics architecture.",
        ],
      },
      {
        title: "Phase 2: Streaming extension",
        points: [
          "Implemented Kafka-based event streaming.",
          "Used Spark Structured Streaming for stream processing.",
          "Implemented event-time watermarking.",
          "Used dedicated streaming checkpoints.",
          "Processed available data using Databricks serverless-compatible triggers.",
          "Built streaming transformations across Bronze, Silver, and Gold.",
          "Used workflow dependencies for processing order.",
        ],
      },
    ],
    challenges: [
      {
        challenge: "Duplicate records",
        solution:
          "Deduplication on the way into Silver, with Delta merge so a repeated load does not insert the same rows again.",
      },
      {
        challenge: "Schema and data quality inconsistencies",
        solution:
          "Standardization and validation between Bronze and Silver, keeping Bronze untouched as the raw record.",
      },
      {
        challenge: "Incremental loads",
        solution:
          "Delta Lake merge operations apply only new and changed rows instead of reloading everything.",
      },
      {
        challenge: "Late-arriving streaming events",
        solution:
          "Event-time watermarking defines how long the stream waits for late data.",
      },
      {
        challenge: "Checkpoints and streaming recovery",
        solution:
          "A dedicated checkpoint for each stream, so a restart resumes instead of reprocessing or losing data.",
      },
      {
        challenge: "Databricks serverless limitations",
        solution:
          "Serverless-compatible triggers that process all available data per run.",
      },
      {
        challenge: "Dependencies between pipeline stages",
        solution:
          "Workflow dependencies that run each stage only after the one before it has finished.",
      },
    ],
    learnings: [
      "Medallion layers make quality rules explicit: raw data stays as received, and cleansing and validation happen on the way into Silver.",
      "Delta merge makes incremental loading repeatable, which also helps with duplicates.",
      "Streaming reliability depends on event-time watermarks and a separate checkpoint for each stream.",
      "Platform limits such as serverless triggers shape pipeline design, so it is cheaper to design for them early.",
      "Explicit workflow dependencies keep stage ordering predictable.",
    ],
    evidence: [
      {
        stem: "atliq-01-architecture-diagram",
        title: "Architecture diagram",
        caption: "End-to-end architecture from sources to analytics.",
      },
      {
        stem: "atliq-02-adf-pipeline",
        title: "Azure Data Factory pipeline",
        caption: "Ingestion pipeline in Azure Data Factory.",
      },
      {
        stem: "atliq-03-adls-bronze-silver-structure",
        title: "ADLS Bronze and Silver structure",
        caption: "Folder layout of the Bronze and Silver layers.",
      },
      {
        stem: "atliq-04-databricks-transformation-notebook",
        title: "Databricks transformation notebook",
        caption: "PySpark cleansing and deduplication logic.",
      },
      {
        stem: "atliq-05-dbt-models-lineage",
        title: "dbt models and lineage",
        caption: "Staging and Gold models with lineage graph.",
      },
      {
        stem: "atliq-06-fabric-lakehouse",
        title: "Microsoft Fabric Lakehouse",
        caption: "Gold data in the Fabric Lakehouse.",
      },
      {
        stem: "atliq-07-kafka-structured-streaming",
        title: "Kafka and Structured Streaming run",
        caption: "Streaming execution from Kafka into Bronze.",
      },
      {
        stem: "atliq-08-workflow-dag-checkpoints",
        title: "Workflow DAG and checkpoints",
        caption: "Databricks workflow dependencies and streaming checkpoints.",
      },
    ],
  },
  {
    slug: "vayuair-data-warehouse",
    assetDir: "vayuair",
    name: "VayuAir",
    subtitle: "Airline Data Warehouse",
    category: "SQL / Data Warehousing / Dimensional Modeling",
    filters: ["Data Warehousing", "Data Engineering"],
    summary:
      "An airline data warehouse in SQL Server, modeled with star and snowflake schemas and tuned for analytical SQL.",
    tech: ["SQL Server", "T-SQL", "Dimensional Modeling"],
    highlights: [
      "Star and snowflake schema design.",
      "Fact and dimension tables.",
      "SCD Type 2 passenger history.",
      "Monthly table partitioning.",
      "Window functions and analytical SQL.",
      "Indexing and query optimization.",
      "Data warehouse validation.",
    ],
    problem:
      "Analytical questions on airline data need a model built for reading, not for transactions. This project designs that model, keeps passenger history as it changes over time, keeps large tables manageable, and checks that the warehouse is correct.",
    approach: [
      {
        title: "Modeling",
        points: [
          "Designed star and snowflake schemas.",
          "Separated fact tables from dimension tables.",
        ],
      },
      {
        title: "History and scale",
        points: [
          "Kept passenger changes over time with an SCD Type 2 dimension.",
          "Partitioned tables by month.",
        ],
      },
      {
        title: "Query layer",
        points: [
          "Wrote analytical SQL with window functions.",
          "Applied indexing and query optimization.",
        ],
      },
      {
        title: "Quality",
        points: ["Validated the data warehouse after loading."],
      },
    ],
    challenges: [
      {
        challenge: "Passenger attributes change over time",
        solution:
          "An SCD Type 2 passenger dimension keeps earlier versions instead of overwriting them.",
      },
      {
        challenge: "Keeping queries fast as tables grow",
        solution: "Monthly partitioning, indexing and query optimization.",
      },
      {
        challenge: "Trusting the loaded data",
        solution: "Validation checks on the warehouse.",
      },
    ],
    learnings: [
      "A model designed for analytical questions makes queries simpler and faster.",
      "SCD Type 2 decisions have to be made when the dimension is designed, not later.",
      "Partitioning and indexing work best when chosen from the queries the warehouse must answer.",
    ],
    evidence: [
      {
        stem: "vayuair-01-schema-diagram",
        title: "Star and snowflake schema",
        caption: "Fact and dimension tables.",
      },
      {
        stem: "vayuair-02-scd2-passenger-history",
        title: "SCD Type 2 passenger history",
        caption: "Versioned passenger dimension rows.",
      },
      {
        stem: "vayuair-03-monthly-partitioning",
        title: "Monthly partitioning",
        caption: "Partition function and scheme in SQL Server.",
      },
      {
        stem: "vayuair-04-validation-results",
        title: "Warehouse validation",
        caption: "Validation queries and results.",
      },
    ],
  },
  {
    slug: "loafly-python-pipeline",
    assetDir: "loafly",
    name: "Loafly",
    subtitle: "Python Data Pipeline",
    category: "Python / ETL / Pipeline Reliability",
    filters: ["Python", "Data Engineering"],
    summary:
      "A modular Python ETL pipeline built with the practices that make pipelines dependable: retries, structured logging, configuration and tests.",
    tech: ["Python", "REST APIs", "pytest", "Logging"],
    highlights: [
      "Modular Python pipeline architecture.",
      "Extract, transform and load operations.",
      "API integration.",
      "Retry mechanisms.",
      "Structured logging.",
      "Configuration management.",
      "pytest unit tests.",
      "Error handling.",
    ],
    problem:
      "Pipelines that call external APIs fail in ordinary ways: timeouts, bad responses, changed settings. This project treats the pipeline as software, with separate stages, retries, logs and tests, so failures are handled and easy to diagnose.",
    approach: [
      {
        title: "Structure",
        points: [
          "Modular architecture with extract, transform and load as separate steps.",
          "Configuration kept apart from code.",
        ],
      },
      {
        title: "Reliability",
        points: [
          "Retry mechanisms for API calls.",
          "Error handling around each stage.",
          "Structured logging for diagnosis.",
        ],
      },
      {
        title: "Testing",
        points: ["pytest unit tests for the pipeline logic."],
      },
    ],
    challenges: [
      {
        challenge: "Unreliable API calls",
        solution: "Retry mechanisms and error handling around extraction.",
      },
      {
        challenge: "Diagnosing failures",
        solution: "Structured logging that records what each stage did.",
      },
      {
        challenge: "Changing the pipeline safely",
        solution: "Modular stages, configuration management and unit tests.",
      },
    ],
    learnings: [
      "Small, separable stages are easier to test and to change.",
      "Logs designed up front save time during debugging.",
      "Retry behavior belongs in configuration, not scattered through code.",
    ],
    evidence: [
      {
        stem: "loafly-01-project-structure",
        title: "Project structure",
        caption: "Module layout of the pipeline.",
      },
      {
        stem: "loafly-02-pytest-results",
        title: "pytest results",
        caption: "Unit test run.",
      },
      {
        stem: "loafly-03-structured-logs",
        title: "Structured logs",
        caption: "Log output from a pipeline run.",
      },
    ],
  },
  {
    slug: "open-library-incremental",
    assetDir: "open-library",
    name: "Open Library",
    subtitle: "Incremental Data Processing",
    category: "Python / API / Performance Optimization",
    filters: ["Python", "Data Engineering"],
    summary:
      "An API extraction pipeline that compares full loads with watermark-based incremental loads, and measures the performance and memory cost of each.",
    metric: { value: "54.02%", label: "memory reduction, measured" },
    tech: ["Python", "Asyncio", "Pandas", "REST APIs"],
    highlights: [
      "API extraction.",
      "Full and incremental loading.",
      "Watermark-based extraction.",
      "Asyncio concurrency.",
      "Pandas chunk processing.",
      "Memory optimization.",
      "Performance comparisons.",
    ],
    problem:
      "Pulling a whole catalogue from an API on every run is slow and memory hungry. This project builds both full and incremental loads, then compares them so the cost of each approach is measured.",
    approach: [
      {
        title: "Extraction",
        points: [
          "Extracted data from the Open Library API.",
          "Added a full load and a watermark-based incremental load.",
          "Used asyncio concurrency for API requests.",
        ],
      },
      {
        title: "Processing",
        points: [
          "Processed data in Pandas chunks to limit memory use.",
          "Applied memory optimization to the data frames.",
        ],
      },
      {
        title: "Measurement",
        points: ["Compared run time and memory across approaches."],
      },
    ],
    challenges: [
      {
        challenge: "Reloading everything on every run",
        solution:
          "A watermark records the last extraction point, so later runs fetch only new data.",
      },
      {
        challenge: "Slow, sequential API calls",
        solution: "Asyncio concurrency for requests.",
      },
      {
        challenge: "Memory use on large data",
        solution: "Pandas chunk processing and memory optimization.",
      },
    ],
    learnings: [
      "Measuring before and after shows which optimization actually helps.",
      "A watermark is a small piece of state with a large effect on run time.",
      "Chunked processing keeps memory use predictable as data grows.",
    ],
    evidence: [
      {
        stem: "open-library-01-full-vs-incremental",
        title: "Full vs incremental load",
        caption: "Run comparison of both load types.",
      },
      {
        stem: "open-library-02-memory-comparison",
        title: "Memory comparison",
        caption: "Memory use before and after optimization.",
      },
      {
        stem: "open-library-03-asyncio-performance",
        title: "Asyncio performance",
        caption: "Timing of concurrent extraction.",
      },
    ],
  },
  {
    slug: "insightboard",
    assetDir: "insightboard",
    name: "InsightBoard",
    subtitle: "Analytics Dashboard",
    category: "Analytics / Power BI / SQL",
    filters: ["Analytics"],
    summary:
      "A Power BI customer analytics dashboard over 10,000+ customer records, built on optimized ETL pipelines and a data model. It shows how engineering work feeds analytics.",
    metric: { value: "4 h → 8 min", label: "customer reporting time" },
    tech: ["Power BI", "SQL", "Python", "DAX", "Power Query"],
    highlights: [
      "Reduced customer analytics reporting time from 4 hours to 8 minutes.",
      "Handled 10,000+ customer records across multiple business domains.",
      "Optimized ETL pipelines and data modeling behind the dashboard.",
      "Deployed 10+ analytical views with DAX measures for trends, variance and KPIs.",
      "Scheduled refresh with Power Query, reaching 98.5% data accuracy.",
      "Analysis with SQL and Python projected 15% revenue growth.",
    ],
    problem: "",
    approach: [],
    challenges: [],
    learnings: [],
    evidence: [],
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
