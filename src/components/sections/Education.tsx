import { MapPin } from "lucide-react";
import { education } from "@/data/education";
import Section from "@/components/ui/Section";

/** ➜ Section FORMATION — données : src/data/education.ts */
export default function Education() {
  return (
    <Section id="education" title="Formation" subtitle="Mon parcours académique.">
      <ol className="relative mx-auto max-w-3xl border-l border-slate-800 pl-8">
        {education.map((item) => (
          <li key={item.id} className="relative mb-10 last:mb-0">
            <span
              className={`absolute -left-[39px] top-2 h-3 w-3 rounded-full border-2 border-ink ${
                item.status === "En cours" ? "bg-sky-400" : "bg-slate-600"
              }`}
              aria-hidden
            />
            <div className="card p-6">
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="text-sky-400">{item.period}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    item.status === "En cours" ? "bg-sky-500/15 text-sky-300" : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">{item.degree}</h3>
              <p className="mt-1 text-slate-300">{item.school}</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                {item.location}
              </p>
              {item.note && <p className="mt-2 text-sm text-slate-300">{item.note}</p>}
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
