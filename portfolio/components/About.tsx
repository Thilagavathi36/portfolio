import { aboutFacts } from "@/data/profile";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Data systems that hold up in production.">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="max-w-2xl space-y-5 text-base leading-relaxed">
            <p>
              I am a data engineer who builds pipelines that move data reliably from source
              systems to analytics-ready models. My foundation is the whole data stack: Python,
              SQL, PySpark, Azure, Databricks, dbt, Kafka, PostgreSQL and Power BI, used the way
              I would write any production code: modular, tested and easy to debug.
            </p>
            <p>
              At Technoidentity I work on an energy analytics platform for a utility client. I
              build PostgreSQL ETL workflows that load daily market data from ERCOT, PJM and
              NYISO, and I validate more than 500K usage records with Python and SQL.
            </p>
            <p>
              Outside client work I build end-to-end projects on the modern cloud stack: a
              Bronze, Silver and Gold lakehouse on Azure and Databricks with dbt, and a Kafka
              and Structured Streaming extension that handles late events and restarts.
            </p>
            <p>
              I also create data agents and work on ML operations, so the data I engineer can
              feed models and agents as well as dashboards.
            </p>
            <p>
              I focus on reliability, data quality and automation, and I tie each design choice
              back to the business question the data has to answer.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="border-t border-line">
            {aboutFacts.map((f) => (
              <div
                key={f.label}
                className="grid grid-cols-[110px_1fr] gap-4 border-b border-line py-4 text-sm"
              >
                <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                  {f.label}
                </dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
