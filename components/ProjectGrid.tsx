"use client";
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Link from 'next/link';

export default function ProjectGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.08 }
        }
      }}
    >
      {projects.map((p) => (
        <article key={p.id} className="group block rounded-lg border p-6 bg-white/40 dark:bg-slate-800/40">
          <motion.div
            className="h-full"
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
          >
            <h3 className="text-lg font-semibold group-hover:underline">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded bg-slate-100 px-2 py-0.5 text-xs dark:bg-slate-700">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3">
              {p.github ? (
                <a href={p.github} target="_blank" rel="noreferrer" className="text-sm underline">
                  GitHub
                </a>
              ) : null}
              {p.demo ? (
                <a href={p.demo} target="_blank" rel="noreferrer" className="rounded bg-primary px-3 py-1 text-sm text-white">
                  Live Demo
                </a>
              ) : null}
            </div>
          </motion.div>
        </article>
      ))}
    </motion.div>
  );
}
