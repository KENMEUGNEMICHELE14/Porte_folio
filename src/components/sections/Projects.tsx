"use client";

import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";
import Section from "@/components/ui/Section";
import ImageSlot from "@/components/ui/ImageSlot";
import ImageGallery from "@/components/ui/ImageGallery";

type Filter = "Tous" | ProjectCategory;

const filters: Filter[] = ["Tous", "IoT & Électronique", "Data & IA", "Full-Stack"];

/** ➜ Section PROJETS — données : src/data/projects.ts */
export default function Projects() {
  const [filter, setFilter] = useState<Filter>("Tous");
  const visible = filter === "Tous" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section
      id="projects"
      title="Mes projets"
      subtitle="Une sélection de projets qui illustrent ce que je construis."
    >
      <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filtrer les projets">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              filter === f
                ? "border-sky-500 bg-sky-500/15 text-white"
                : "border-slate-700 text-slate-400 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((p) => (
          <article key={p.id} className="card flex flex-col overflow-hidden">
            <div className="relative">
           
              <ImageGallery
                images={p.image ?? (p.image ? [p.image] : [])}
                alt={p.title}
                hint={`public/images/projects/${p.id}.jpg`}
                className="aspect-video w-full rounded-none border-0 border-b border-slate-800"
              />

              <span
                className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-medium ${
                  p.status === "En cours" ? "bg-sky-500 text-white" : "bg-emerald-500 text-white"
                }`}
              >
                {p.status}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm text-sky-400">{p.category}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-white">{p.title}</h3>
              {p.context && <p className="mt-1 text-sm text-slate-500">{p.context}</p>}
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.description}</p>

              {p.details && (
                <dl className="mt-4 space-y-3 text-sm">
                  {p.details.map((d) => (
                    <div key={d.label}>
                      <dt className="font-medium text-slate-200">{d.label}</dt>
                      <dd className="mt-0.5 text-slate-400">{d.text}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>

              {(p.github || p.demo) && (
                <div className="mt-5 flex gap-4 pt-1 text-sm">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white"
                    >
                      <Github className="h-4 w-4" aria-hidden /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden /> Voir en ligne
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
