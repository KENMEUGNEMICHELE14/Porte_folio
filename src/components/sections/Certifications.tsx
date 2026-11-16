import { ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";
import Section from "@/components/ui/Section";
import ImageSlot from "@/components/ui/ImageSlot";

/** ➜ Section CERTIFICATIONS — données : src/data/certifications.ts */
export default function Certifications() {
  return (
    <Section
      id="certifications"
      title="Mes certifications"
      subtitle="Les acquis qui attestent de mes compétences."
      alt
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <article key={c.id} className="card overflow-hidden">
            <ImageSlot
              src={c.image}
              alt={c.title}
              hint={`public/images/certifications/${c.id}.png`}
              className="aspect-[4/3] w-full rounded-none border-0 border-b border-slate-800"
              fit="contain"
            />
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-1 text-sm text-sky-400">{c.source}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{c.description}</p>
              {c.verifyUrl && (
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white"
                >
                  Vérifier cette certification
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
