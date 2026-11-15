"use client";

import { useId, useState } from "react";
import { ChevronDown, Github } from "lucide-react";
import { projects } from "@/data/projects";
import type { Project, ProjectFilter } from "@/data/types";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Tag } from "./ui";

const FILTERS: ("All" | ProjectFilter)[] = [
  "All",
  "Data Engineering",
  "Data Warehousing",
  "Python",
  "Analytics",
];

const atliqFlow = [
  "Azure Data Factory",
  "ADLS Bronze",
  "Databricks · Silver",
  "dbt · Gold",
  "Fabric",
];

const buttonClass =
  "inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-2 text-sm text-muted transition-colors hover:border-accent-fg hover:text-accent-fg";

function DetailsToggle({
  open,
  onClick,
  controls,
}: {
  open: boolean;
  onClick: () => void;
  controls: string;
}) {
  return (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={controls}
      onClick={onClick}
      className={buttonClass}
    >
      Technical details
      <ChevronDown
        className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        aria-hidden="true"
      />
    </button>
  );
}

function RepoLink({ project }: { project: Project }) {
  if (!project.repoUrl) return null;
  return (
    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>
      <Github className="h-4 w-4" aria-hidden="true" /> Repository
    </a>
  );
}

function ProjectDetails({ project, id }: { project: Project; id: string }) {
  return (
    <div id={id} className="mt-6 grid gap-8 border-t border-line pt-6 md:grid-cols-2">
      <div>
        <h4 className="font-mono text-xs uppercase tracking-wider text-muted">
          What it covers
        </h4>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 bg-accent" />
              {h}
            </li>
          ))}
        </ul>
        <h4 className="mt-6 font-mono text-xs uppercase tracking-wider text-muted">
          Technology
        </h4>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>
      </div>

      {project.challenges.length > 0 && (
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider text-muted">
            Engineering challenges
          </h4>
          <dl className="mt-3 space-y-3 text-sm leading-relaxed">
            {project.challenges.map((c) => (
              <div key={c.challenge}>
                <dt className="font-medium">{c.challenge}</dt>
                <dd className="text-muted">{c.solution}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className="bg-grid bg-grid-sm relative border border-accent-fg/50 bg-surface">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-accent" aria-hidden="true" />
      <div className="p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-fg">
              Featured project
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              {project.name}
              <span className="block text-lg font-normal text-muted md:text-xl">
                {project.subtitle}
              </span>
            </h3>
            <p className="mt-2 font-mono text-xs text-muted">{project.category}</p>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed">{project.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technology">
              {project.tech.map((t) => (
                <li key={t}>
                  <Tag>{t}</Tag>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <DetailsToggle open={open} onClick={() => setOpen((v) => !v)} controls={panelId} />
              <RepoLink project={project} />
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
              Batch path
            </p>
            <ol className="mt-3 space-y-0">
              {atliqFlow.map((s, i) => (
                <li key={s}>
                  <div className="border border-line bg-bg px-3 py-2 font-mono text-xs">
                    {s}
                  </div>
                  {i < atliqFlow.length - 1 && (
                    <div aria-hidden="true" className="ml-4 h-3">
                      <div className="flow-line-v h-full" />
                    </div>
                  )}
                </li>
              ))}
            </ol>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-muted">
              Streaming path
            </p>
            <p className="mt-2 border border-line bg-bg px-3 py-2 font-mono text-xs leading-relaxed">
              Kafka → Structured Streaming → Bronze → Silver → Gold
            </p>
          </div>
        </div>

        {open && <ProjectDetails project={project} id={panelId} />}
      </div>
    </article>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className="border-b border-line py-8 first:border-t">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-muted">{project.category}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">
            {project.name}
            <span className="font-normal text-muted"> — {project.subtitle}</span>
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.summary}</p>
          {project.metric && (
            <p className="mt-4 inline-flex items-baseline gap-2 border-l-2 border-accent pl-3">
              <span className="text-lg font-semibold">{project.metric.value}</span>
              <span className="text-xs text-muted">{project.metric.label}</span>
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <DetailsToggle open={open} onClick={() => setOpen((v) => !v)} controls={panelId} />
          <RepoLink project={project} />
        </div>
      </div>

      {open && <ProjectDetails project={project} id={panelId} />}
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<"All" | ProjectFilter>("All");

  const visible = projects.filter((p) => filter === "All" || p.filters.includes(filter));
  const featured = visible.find((p) => p.featured);
  const rest = visible.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="Pipelines, warehouses and platforms I have built."
      intro="These are learning and portfolio projects, not enterprise deployments. Open a project's technical details to see what it covers and the engineering challenges involved."
    >
      <Reveal>
        <div
          role="group"
          aria-label="Filter projects"
          className="mb-8 flex flex-wrap items-center gap-2"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                filter === f
                  ? "border-accent bg-accent text-white"
                  : "border-line text-muted hover:border-accent-fg hover:text-accent-fg"
              }`}
            >
              {f}
            </button>
          ))}
          <p className="ml-auto font-mono text-xs text-muted" aria-live="polite">
            {visible.length} {visible.length === 1 ? "project" : "projects"}
          </p>
        </div>
      </Reveal>

      <div className="space-y-10">
        {featured && <FeaturedProject project={featured} />}
        {rest.length > 0 && (
          <div>
            {rest.map((p) => (
              <ProjectRow key={p.slug} project={p} />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
