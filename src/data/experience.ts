import type { ExperienceItem } from "@/types";

/**
 * ➜ SECTION « EXPÉRIENCE » (du plus récent au plus ancien)
 * TODO : vérifie les intitulés et les dates, certains passages de tes notes étaient difficiles à lire.
 */
export const experience: ExperienceItem[] = [
  {
    id: "credit-foncier",
    role: "Stagiaire – Analyse et développement logiciel",
    company: "Crédit Foncier du Cameroun",
    period: "Juillet 2026 - Septembre 2026",
    location: "Sur site, Cameroun",
    bullets: [
      "Mise en place d'un système de notification automatique du courrier physique entre les différents services.",
      "Capture des changements de la base de données de l'entreprise avec Debezium et acheminement via Kafka.",
      "Création d'un tableau de bord de visualisation des courriers envoyés et reçus.",
      "Suivi du traitement du courrier par service utilisateur et par période définie.",
    ],
    tags: ["Kafka", "Debezium","Oracle","LogMiner", "PostgreSQL", "Grafana", "LDAP","SMTP"],
    image: "/images/experience/cfc.jpeg", // "/images/experience/credit-foncier.jpg" TODO A mettre la photo de l'architecture du systeme
  },

  {
    id: "afrogeek-2024",
    role: "Stagiaire en maintenance informatique",
    company: "AFROGEEK SARL",
    period: "Juillet 2024 - Septembre 2024",
    location: "Yaoundé, Cameroun",
    bullets: [
      "Diagnostic des cartes mères.",
      "Remplacement des composants défectueux.",
      "Réalisation de mini-alimentations.",
    ],
    tags: ["Maintenance", "Électronique"],
    image: "/images/experience/photo_carte.jpeg", // "/images/experience/afrogeek-2024.jpg" A mettre une photo prise en cette année chez junior ou joseph
  },

    {
    id: "afrogeek-2023",
    role: "Stagiaire en maintenance informatique",
    company: "AFROGEEK SARL",
    period: "Juillet 2023 - Septembre 2023",
    location: "Marché Central, Yaoundé, Cameroun",
    bullets: [
      "Démontage des ordinateurs.",
      "Remplacement des écrans d'affichage.",
      "Étude du fonctionnement de la charge d'un ordinateur.",
    ],
    tags: ["Maintenance", "Matériel"],
    image: "/images/experience/demontage.jpeg", 
  },
];
