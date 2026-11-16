import { profile } from "@/data/profile";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
        <SocialLinks />
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
