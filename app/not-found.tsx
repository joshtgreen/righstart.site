import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--navy)] px-6">
      <div className="text-center max-w-md">
        <p className="text-[var(--teal-light)] text-sm font-semibold uppercase tracking-widest mb-4">
          404
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Page not found
        </h1>
        <p className="text-white/60 text-lg leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-base bg-[var(--teal)] text-white hover:bg-[#236b5e] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
