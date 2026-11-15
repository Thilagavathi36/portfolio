"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!onHome) return;
    const ids = [...navLinks.map((l) => l.id), "education"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id === "education" ? "experience" : entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [onHome]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = (id: string) =>
    `rounded-md px-3 py-1.5 text-sm transition-colors ${
      onHome && active === id
        ? "text-accent-fg"
        : "text-muted hover:text-fg"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-content items-center justify-between px-5 md:px-8"
      >
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight"
          aria-label={`${profile.name}, home`}
        >
          thilagavathi<span className="text-accent-fg">.dev</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <Link
                href={l.id === "home" ? "/" : `/#${l.id}`}
                className={linkClass(l.id)}
                aria-current={onHome && active === l.id ? "location" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="border-t border-line bg-bg px-5 py-3 md:hidden"
        >
          {navLinks.map((l) => (
            <li key={l.id}>
              <Link
                href={l.id === "home" ? "/" : `/#${l.id}`}
                onClick={() => setOpen(false)}
                className={`block py-2.5 text-sm ${
                  onHome && active === l.id ? "text-accent-fg" : "text-muted"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
