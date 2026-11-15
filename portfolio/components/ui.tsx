import Link from "next/link";
import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-line px-2 py-0.5 font-mono text-[11px] leading-5 text-muted">
      {children}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-fg">
      {children}
    </p>
  );
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  download?: boolean;
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  external,
  download,
  className = "",
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent/90"
      : "border border-line bg-surface text-fg hover:border-accent-fg hover:text-accent-fg";
  const cls = `${base} ${styles} ${className}`;

  if (external || download || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: true } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
