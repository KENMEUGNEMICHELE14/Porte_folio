"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import Section from "@/components/ui/Section";
import SocialLinks from "@/components/ui/SocialLinks";

/**
 * ➜ Section CONTACT — coordonnées : src/data/profile.ts
 * Version 1 : le formulaire ouvre l'application e-mail du visiteur (mailto).
 * Plus tard, on pourra le brancher sur une vraie API (Resend, Formspree…).
 */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile.email) return;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const field =
    "w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500";

  return (
    <Section
      id="contact"
      title="Contactez-moi"
      subtitle="Un projet, une opportunité ou une question ? Écris-moi."
    >
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <div className="card p-6">
          <h3 className="font-display text-lg font-semibold text-white">Informations de contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            {profile.email && (
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-sky-400" aria-hidden />
                <a href={`mailto:${profile.email}`} className="hover:text-white">
                  {profile.email}
                </a>
              </li>
            )}
            {profile.phone && (
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-sky-400" aria-hidden />
                <a href={`tel:${profile.phone}`} className="hover:text-white">
                  {profile.phone}
                </a>
              </li>
            )}
            {profile.location && (
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-sky-400" aria-hidden />
                {profile.location}
              </li>
            )}
          </ul>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        <form onSubmit={submit} className="card space-y-4 p-6">
          <h3 className="font-display text-lg font-semibold text-white">Envoie-moi un message</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block text-slate-300">Nom</span>
              <input className={field} value={form.name} onChange={update("name")} required />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-slate-300">E-mail</span>
              <input type="email" className={field} value={form.email} onChange={update("email")} required />
            </label>
          </div>
          <label className="block text-sm">
            <span className="mb-1.5 block text-slate-300">Sujet</span>
            <input className={field} value={form.subject} onChange={update("subject")} required />
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block text-slate-300">Message</span>
            <textarea rows={5} className={field} value={form.message} onChange={update("message")} required />
          </label>
          <button type="submit" className="btn-primary" disabled={!profile.email}>
            Envoyer le message
          </button>
          {!profile.email && (
            <p className="text-xs text-amber-400">
              Renseigne ton e-mail dans src/data/profile.ts pour activer l&apos;envoi.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
