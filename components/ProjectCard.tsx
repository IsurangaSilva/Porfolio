"use client";

export default function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="transform transition-all hover:-translate-y-1 rounded-lg border p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
    </article>
  );
}
