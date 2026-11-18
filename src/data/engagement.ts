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
        period: "Depuis Novembre 2026",
        description: "J'accompagne les élèves dans les disciplines de la Mathématique et des Physiques Chimie.",
        images: ["/images/engagement/completude.png"],
      },
      {
        id: "aide-mobilite",
        title: "Aide aux étudiants à mobilité réduite",
        period: "DISPONIBLE",
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
          "Participation à la collecte d'aide alimentaire et à l'organisation de la journée internationale de l'ENSEEIHT.",
        images: ["/images/engagement/aide_alimentaire.jpeg"], // "/images/engagement/enseeiht.jpg"
      },
      {
        id: "club-gi-cellule-projet",
        title: "Cellule Projet – Club Génie Informatique (ENSPY)",
        role: "Membre",
        period: "2025 - 2026",
        description: "Contribution, au sein d'un trinôme, à l'analyse des besoins et aux spécifications fonctionnelles d'une application de gestion de mutuelle d'entreprise (cotisations, épargne et prêts entre collaborateurs).",
        images: [],
      },
      {
        id: "club-gi-sg",
        title: "Cellule Exécutive – Club Génie Informatique (ENSPY)",
        role: "Secrétaire Général adjoint", 
        period: "2024 - 2025", 
        description: "Tout au long du mandat, j'ai rédigé les comptes-rendus des réunions et écrit les lettres d'invitation destinées aux personnalités pour les différents événements organisés.",
        images: [],
      },
      {
        id: "delegue",
        title: "Chef de classe",
        role: "Délégué de classe",
        period: "2022 - 2024", // TODO : à confirmer
        description: "Représentation des étudiants de la classe au près de l'administration.",
        images: [],
      },
    ],
  },
];
