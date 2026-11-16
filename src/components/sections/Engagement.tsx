import { engagementGroups } from "@/data/engagement";
import Section from "@/components/ui/Section";
import ImageSlot from "@/components/ui/ImageSlot";

/** ➜ Section ENGAGEMENT — données : src/data/engagement.ts */
export default function Engagement() {
  return (
    <Section
      id="engagement"
      title="Mon engagement"
      subtitle="Les causes et associations que je soutiens."
      alt
    >
      <div className="space-y-12">
        {engagementGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-5 font-display text-xl font-semibold text-white">{group.title}</h3>
            <div className="grid gap-5 md:grid-cols-2">
              {group.items.map((item) => (
                <article key={item.id} className="card flex flex-col gap-4 p-6 sm:flex-row">
                  <ImageSlot
                    src={item.images[0]}
                    alt={item.title}
                    hint={`public/images/engagement/${item.id}.jpg`}
                    className="aspect-square w-full shrink-0 sm:w-28"
                  />
                  <div>
                    <p className="text-sm text-sky-400">{item.period}</p>
                    <h4 className="mt-0.5 font-display font-semibold text-white">{item.title}</h4>
                    {item.role && <p className="text-sm text-slate-300">{item.role}</p>}
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
