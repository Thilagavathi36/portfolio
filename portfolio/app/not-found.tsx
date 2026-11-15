import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-content px-5 py-40 md:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-fg">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">Page not found</h1>
      <Link href="/" className="mt-6 inline-block text-sm text-accent-fg underline underline-offset-4">
        Back to the portfolio
      </Link>
    </div>
  );
}
