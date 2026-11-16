import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  alt?: boolean;
}

/** Enveloppe commune à toutes les sections : titre + sous-titre + contenu. */
export default function Section({ id, title, subtitle, children, alt = false }: SectionProps) {
  return (
    <section id={id} className={alt ? "bg-slate-900/30 py-20" : "py-20"}>
      <div className="mx-auto max-w-6xl px-5">
        <header className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            <span className="gradient-text">{title}</span>
          </h2>
          {subtitle && <p className="mx-auto mt-3 max-w-2xl text-slate-400">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
