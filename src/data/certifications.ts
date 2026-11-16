import type { Certification } from "@/types";

/**
 * ➜ SECTION « CERTIFICATIONS »
 * TODO : détails à compléter. Ajoute l'image du certificat dans public/images/certifications/
 */
export const certifications: Certification[] = [
  {
    id: "cybersecurite",
    title: "Certification en Cybersécurité",
    source:  "Hucency (Avant de Cliquer) — Toulouse INP",
    description: "Cette formation m'a permis d'acquérir les réflexes essentiels pour sécuriser mon environnement numérique et protéger les données : détection des tentatives de phishing, gestion stricte des mots de passe, séparation des usages professionnels et personnels, et maîtrise des droits et obligations liés à la protection des données personnelles (RGPD).",
    image: "/images/certifications/securite/s.png",
    verifyUrl: "/images/certifications/securite/attestations-cybersecurite.pdf",
  },
  {
    id: "matlab",
    title: "Certification MATLAB",
    source: "TODO : organisme",
    description: "TODO : décris ce que la certification atteste.",
    image: "", // "/images/certifications/matlab.png"
    verifyUrl: "",
  },
];
