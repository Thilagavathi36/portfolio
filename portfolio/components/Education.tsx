import { achievements, education } from "@/data/profile";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <Section id="education" eyebrow="Education & achievements" title="Education and recognition.">
      <Reveal>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
              Education
            </h3>
            <div className="mt-4 border-t border-line pt-4">
              <p className="font-medium">{education.degree}</p>
              <p className="mt-1 text-sm text-muted">
                {education.school}, {education.place}
              </p>
              <p className="mt-1 font-mono text-xs text-muted">
                {education.period} · {education.gpa}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
              Awards & certifications
            </h3>
            <ul className="mt-4 border-t border-line">
              {achievements.map((a) => (
                <li key={a.title} className="border-b border-line py-4">
                  <p className="font-medium">{a.title}</p>
                  <p className="mt-1 text-sm text-muted">{a.meta}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
