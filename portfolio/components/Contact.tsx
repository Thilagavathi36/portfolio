import { Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink, Eyebrow } from "./ui";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-grid scroll-mt-16 border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-content px-5 md:px-8">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2
            id="contact-title"
            className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl"
          >
            Let&apos;s Build Something With Data.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            I am open to data engineering roles. The fastest way to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${profile.email}`} variant="primary">
              <Mail className="h-4 w-4" aria-hidden="true" /> {profile.email}
            </ButtonLink>
            <ButtonLink href={profile.linkedin} external>
              <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
            </ButtonLink>
            <ButtonLink href={profile.github} external>
              <Github className="h-4 w-4" aria-hidden="true" /> GitHub
            </ButtonLink>
            <ButtonLink href={profile.resume} download>
              <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
