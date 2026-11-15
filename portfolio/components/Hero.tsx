import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink, Eyebrow } from "./ui";
import { HeroPhoto } from "./HeroPhoto";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="bg-grid scroll-mt-16 pb-20 pt-32 md:pb-28 md:pt-40"
    >
      <div className="mx-auto grid max-w-content items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <Eyebrow>{profile.eyebrow}</Eyebrow>
          <h1
            id="hero-title"
            className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
          >
            {profile.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {profile.heroSub}
          </p>
          <p className="mt-5 font-mono text-xs text-muted">
            {profile.name} — {profile.title}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/#projects" variant="primary">
              View Projects <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={profile.resume} download>
              <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
            </ButtonLink>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface text-muted transition-colors hover:border-accent-fg hover:text-accent-fg"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface text-muted transition-colors hover:border-accent-fg hover:text-accent-fg"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={profile.medium}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface text-muted transition-colors hover:border-accent-fg hover:text-accent-fg"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <circle cx="6" cy="12" r="5" />
                <ellipse cx="16" cy="12" rx="3" ry="5" />
                <ellipse cx="23" cy="12" rx="1" ry="5" />
              </svg>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <HeroPhoto />
        </Reveal>
      </div>
    </section>
  );
}
