import type { EngagementGroup } from "@/types";

/**
 * ➜ SECTION « ENGAGEMENT »
 * Deux groupes, comme dans tes notes : engagement civique et vie associative.
 * TODO : vérifie les périodes et les intitulés.
 */
export const engagementGroups: EngagementGroup[] = [
  {
    title: "Engagement civique",
    items: [
      {
        id: "cours-complementaires",
        title: "Cours complémentaires",
        period: "TODO",
        description: "TODO : précise à qui et dans quelles matières.",
        images: [],
      },
      {
        id: "aide-mobilite",
        title: "Aide aux étudiants à mobilité réduite",
        period: "TODO",
        description: "Accompagnement des étudiants concernés pendant leur parcours.",
        images: [],
      },
    ],
  },
  {
    title: "Vie associative",
    items: [
      {
        id: "enseeiht-benevolat",
        title: "Bénévolat – ENSEEIHT",
        role: "Bénévole",
        period: "2026",
        description:
          "Bénévolat à la collecte d'aide alimentaire et à l'organisation de la journée internationale de l'ENSEEIHT.",
        images: [], // "/images/engagement/enseeiht.jpg"
      },
      {
        id: "club-gi-cellule-projet",
        title: "Cellule Projet – Club Génie Informatique (ENSPY)",
        role: "Membre",
        period: "2025 - 2026",
        description: "Membre de la cellule projet du Club Génie Informatique de l'ENSPY.",
        images: [],
      },
      {
        id: "club-gi-sg",
        title: "Club Génie Informatique (ENSPY)",
        role: "Secrétaire Général adjoint", // TODO : à confirmer
        period: "2024 - 2025", // TODO : à confirmer
        description: "TODO : décris tes missions.",
        images: [],
      },
      {
        id: "delegue",
        title: "Chef de classe",
        role: "Délégué de classe",
        period: "2022 - 2023", // TODO : à confirmer
        description: "Représentation des étudiants de la classe.",
        images: [],
      },
    ],
  },
];
