import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import ImageSlot from "@/components/ui/ImageSlot";
import SocialLinks from "@/components/ui/SocialLinks";

/** ➜ Section ACCUEIL — données : src/data/profile.ts */
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.2fr_0.8fr]">
        <div className="animate-rise">
          <p className="mb-3 text-slate-400">Salut, je suis</p>
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {profile.firstName} <span className="gradient-text">{profile.lastName}</span>
          </h1>
          <p className="mt-3 font-display text-xl text-slate-200">{profile.title}</p>
          <p className="mt-5 max-w-xl leading-relaxed text-slate-400">{profile.heroIntro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              Voir mes projets
            </a>
            <a href={profile.cvPath} download className="btn-ghost">
              <Download className="h-4 w-4" aria-hidden />
              Télécharger CV
            </a>
          </div>

          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        <div className="animate-rise mx-auto w-full max-w-sm [animation-delay:150ms]">
          <ImageSlot
            src={profile.avatar}
            alt="Photo de profil"
            hint="public/images/profile/me.png"
            className="aspect-[4/5] w-full"
          />
        </div>
      </div>
    </section>
  );
}
