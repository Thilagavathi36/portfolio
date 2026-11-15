import { experience } from "@/data/experience";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Professional experience"
      title="Where I have worked with data."
      intro="The SQL, Python, validation and ETL work from each role, with the results as recorded."
    >
      <ol className="relative">
        {experience.map((job, i) => (
          <li key={job.org} className="relative">
            <Reveal>
              <div
                className={`grid gap-4 pb-12 md:grid-cols-[200px_1fr] md:gap-10 ${
                  i === experience.length - 1 ? "pb-0" : ""
                }`}
              >
                <div className="md:text-right">
                  <p className="font-mono text-xs text-accent-fg">{job.period}</p>
                  <p className="mt-1 text-xs text-muted">{job.location}</p>
                </div>

                <div className="relative border-l border-line pl-6 md:pl-8">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 border border-accent bg-bg"
                  />
                  <h3 className="text-lg font-semibold tracking-tight">
                    {job.role}
                    <span className="font-normal text-muted"> · {job.org}</span>
                  </h3>
                  <p className="mt-1 text-sm text-muted">{job.context}</p>
                  <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
