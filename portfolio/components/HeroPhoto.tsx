import Image from "next/image";
import { profile } from "@/data/profile";

/**
 * Portrait shown at its natural 300x393 proportions. No filters, cropping or
 * stretching are applied, so the photo is displayed exactly as supplied.
 */
export function HeroPhoto() {
  return (
    <figure className="relative mx-auto w-full max-w-[300px] lg:ml-auto lg:mr-0">
      <div
        aria-hidden="true"
        className="absolute -bottom-3 -right-3 h-full w-full border border-accent-fg/50"
      />
      <Image
        src="/images/thilagavathi.jpg"
        alt={`Portrait of ${profile.name}`}
        width={300}
        height={393}
        priority
        unoptimized
        className="relative h-auto w-full border border-line bg-surface"
      />
    </figure>
  );
}
