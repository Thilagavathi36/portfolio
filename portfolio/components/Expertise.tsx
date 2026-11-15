import { levelLabels, skillGroups } from "@/data/skills";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Technical expertise"
      title="Skills grouped by what they do."
      intro="Core technologies and tools I use to build reliable data solutions."
    >
      <Reveal>
        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <section
              key={g.title}
              aria-labelledby={`skills-${g.title}`}
            >
              <h3 id={`skills-${g.title}`} className="text-sm font-semibold">
                {g.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">{g.description}</p>
              <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-[13px] text-muted">
                {g.skills.map((s) => (
                  <li key={s.name}>
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
