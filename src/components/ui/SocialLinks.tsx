import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

/** Affiche uniquement les liens renseignés dans src/data/profile.ts */
export default function SocialLinks() {
  const items = [
    { href: profile.github, label: "GitHub", Icon: Github },
    { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: profile.email ? `mailto:${profile.email}` : "", label: "E-mail", Icon: Mail },
  ].filter((i) => i.href);

  if (items.length === 0) return null;

  return (
    <ul className="flex items-center gap-3">
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-sky-500 hover:text-white"
          >
            <Icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
