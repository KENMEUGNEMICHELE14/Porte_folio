import { Trophy } from "lucide-react";
import { competitions } from "@/data/competitions";
import Section from "@/components/ui/Section";
import ImageSlot from "@/components/ui/ImageSlot";

/** ➜ Section COMPÉTITIONS — données : src/data/competitions.ts */
export default function Competitions() {
  return (
    <Section
      id="competitions"
      title="Mes compétitions"
      subtitle="Hackathons et compétitions techniques auxquels j'ai participé."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {competitions.map((c) => (
          <article key={c.id} className="card overflow-hidden">
            <ImageSlot
              src={c.image}
              alt={c.title}
              hint={`public/images/competitions/${c.id}.jpg`}
              className="aspect-video w-full rounded-none border-0 border-b border-slate-800"
            />
            <div className="p-5">
              <p className="flex items-center gap-1.5 text-sm text-sky-400">
                <Trophy className="h-4 w-4" aria-hidden />
                {c.result}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-1 text-sm text-slate-500">
                {c.period}
                {c.team ? ` · ${c.team}` : ""}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{c.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-slate-300 hover:text-white"
                >
                  Voir les détails
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
