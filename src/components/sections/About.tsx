import { about } from "@/data/about";
import Section from "@/components/ui/Section";
import ImageSlot from "@/components/ui/ImageSlot";

/** ➜ Section À PROPOS — données : src/data/about.ts */
export default function About() {
  return (
    <Section id="about" title="À propos" subtitle="Qui je suis, d'où je viens et ce qui me motive.">
      <div className="grid items-start gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <ImageSlot
          src={about.image}
          alt="Photo à propos"
          hint="public/images/profile/about.jpg"
          className="aspect-square w-full"
        />
        <div>
          <h3 className="font-display text-2xl font-semibold text-white">{about.heading}</h3>
          <div className="mt-4 space-y-4 leading-relaxed text-slate-400">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {about.highlights.map((h) => (
          <div key={h.title} className="card p-5">
            <h4 className="font-display font-semibold text-white">{h.title}</h4>
            <p className="mt-2 text-sm text-slate-400">{h.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
