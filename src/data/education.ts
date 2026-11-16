import type { EducationItem } from "@/types";

/** ➜ SECTION « FORMATION » (du plus récent au plus ancien) */
export const education: EducationItem[] = [
  {
    id: "enseeiht",
    degree: "Double diplôme – Ingénieur en Sciences du Numérique, spécialité Big Data & HPC",
    school: "ENSEEIHT",
    period: "2026 - 2027",
    location: "Toulouse, France",
    status: "En cours",
    description:
      "Double diplôme d'ingénieur avec une spécialisation en Big Data et calcul haute performance (HPC).",
    tags: ["Big Data", "HPC", "Sciences du Numérique"],
  },
  {
    id: "enspy-gi",
    degree: "Génie Informatique",
    school: "École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)",
    period: "2024 - 2026",
    location: "Yaoundé, Cameroun",
    status: "Terminé",
    description: "Formation d'ingénieur en informatique (3e et 4e années). TODO : détaille les matières.",
    tags: ["Programmation", "Systèmes", "Réseaux", "Data"],
  },
  {
    id: "enspy-msp",
    degree: "Mathématiques – Sciences Physiques (MSP)",
    school: "École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)",
    period: "2022 - 2024",
    location: "Yaoundé, Cameroun",
    status: "Terminé",
    description: "Tronc commun (classe préparatoire) en mathématiques et sciences physiques.",
    tags: ["Mathématiques", "Physique"],
  },
  // TODO : ajoute ton baccalauréat / licence si tu veux (même format)
];
