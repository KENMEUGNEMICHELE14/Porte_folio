import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Portfolio ${profile.firstName} ${profile.lastName} – Élève-ingénieur en Génie Informatique`,
  description: profile.heroIntro,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans">{children}</body>
    </html>
  );
}
