import { MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import Section from "@/components/ui/Section";
import ImageSlot from "@/components/ui/ImageSlot";

/** ➜ Section EXPÉRIENCE — données : src/data/experience.ts */
export default function Experience() {
  return (
    <Section
      id="experience"
      title="Mon expérience"
      subtitle="Les stages et missions qui ont façonné mes compétences."
      alt
    >
      <div className="mx-auto max-w-4xl space-y-6">
        {experience.map((e) => (
          <article key={e.id} className="card grid gap-6 p-6 md:grid-cols-[1fr_200px]">
            <div>
              <p className="text-sm text-sky-400">{e.period}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-white">{e.role}</h3>
              <p className="mt-1 text-slate-300">{e.company}</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                {e.location}
              </p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-400 marker:text-sky-500">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              {e.tags && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <ImageSlot
              src={e.image}
              alt={`${e.company}`}
              hint={`public/images/experience/${e.id}.jpg`}
              className="aspect-[4/3] w-full self-start"
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
