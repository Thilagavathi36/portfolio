import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Data Engineer.
        </p>
        <p className="font-mono">Built with Next.js, TypeScript and Tailwind CSS</p>
      </div>
    </footer>
  );
}
