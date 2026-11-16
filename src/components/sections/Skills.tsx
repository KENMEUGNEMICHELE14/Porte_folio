import { skillGroups, languages } from "@/data/skills";
import Section from "@/components/ui/Section";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

/** ➜ Section COMPÉTENCES — données : src/data/skills.ts */
export default function Skills() {
  const groups = skillGroups.filter((g) => g.items.length > 0);

  return (
    <Section
      id="skills"
      title="Mes compétences"
      subtitle="Technologies et outils que j'utilise pour mener mes projets."
      alt
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div key={group.title} className="card p-6">
            <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item.name} className="chip flex items-center gap-2">
                  {item.icon && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={`${ICON_BASE}/${item.icon}.svg`} alt="" className="h-4 w-4" loading="lazy" />
                  )}
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {languages.length > 0 && (
        <div className="mx-auto mt-8 max-w-md card p-6 text-center">
          <h3 className="font-display text-lg font-semibold text-white">Langues parlées</h3>
          <ul className="mt-3 space-y-1 text-slate-400">
            {languages.map((l) => (
              <li key={l.name}>
                <span className="text-slate-200">{l.name}</span> – {l.level}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
