import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 md:py-48">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-accent mb-4">
          404
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent/90 transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </section>
  );
}
