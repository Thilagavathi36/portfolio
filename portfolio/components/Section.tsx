import type { ReactNode } from "react";
import { Eyebrow } from "./ui";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-16 border-t border-line py-20 md:py-28"
    >
      <div className="mx-auto max-w-content px-5 md:px-8">
        <Reveal>
          <header className="mb-12 max-w-2xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2
              id={`${id}-title`}
              className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
            >
              {title}
            </h2>
            {intro && <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p>}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
