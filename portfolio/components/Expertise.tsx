import { levelLabels, skillGroups } from "@/data/skills";
import type { SkillLevel } from "@/data/types";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

function LevelMarker({ level }: { level: SkillLevel }) {
  const style =
    level === "professional"
      ? "bg-accent border-accent"
      : level === "project"
        ? "border-accent-fg bg-transparent"
        : "border-dashed border-muted bg-transparent";
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-2 w-2 shrink-0 border ${style}`}
    />
  );
}

export function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Technical expertise"
      title="Skills grouped by what they do."
      intro="Each skill is marked by how I have used it, so the list does not imply production experience I do not have."
    >
      <Reveal>
        <ul
          className="mb-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted"
          aria-label="Legend"
        >
          {(Object.keys(levelLabels) as SkillLevel[]).map((l) => (
            <li key={l} className="flex items-center gap-2">
              <LevelMarker level={l} />
              {levelLabels[l]}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal>
        <div className="grid border-l border-t border-line md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <section
              key={g.title}
              aria-labelledby={`skills-${g.title}`}
              className="border-b border-r border-line p-6"
            >
              <h3 id={`skills-${g.title}`} className="text-sm font-semibold">
                {g.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">{g.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-center gap-2 border border-line bg-surface px-2.5 py-1.5 text-[13px] transition-colors hover:border-accent-fg"
                  >
                    <LevelMarker level={s.level} />
                    {s.name}
                    <span className="sr-only"> ({levelLabels[s.level]})</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
