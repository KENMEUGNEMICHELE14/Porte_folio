import type { Project } from "@/types";



/**
 * ➜ SECTION « PROJETS »
 * Catégories possibles : "IoT & Électronique" | "Data & IA" | "Full-Stack"
 * Images : dépose-les dans public/images/projects/ puis renseigne `image`.
 */
export const projects: Project[] = [
  {
    id: "roadtrack",
    title: "Safetrack",
    category: "IoT & Électronique",
    status: "Terminé",
    context: "Projet de groupe (6 personnes)",
    description:
      "Dispositif électronique de suivi de véhicule : il permet de détecter qu'un véhicule sort de la zone définie par son propriétaire et d'être alerté immédiatement.",
    details: [
      {
        label: "Logiciel",
        text: "Application mobile pour visualiser la position du véhicule, avec un bouton Stop qui envoie une commande au dispositif via la gateway.",
      },
      {
        label: "Matériel",
        text: "Boîtier embarquant les composants nécessaires, et envoi des données à la gateway à l'aide de la technologie Lora.",
      },
      {
        label: "Retour d'expérience",
        text: "Projet marquant : le matériel a posé beaucoup de problèmes techniques tel que la difficulté d'avoir les composants, mais l'équipe est finalement parvenue au résultat.",
      },
    ],
    tags: ["Arduino Nano", "SIM808", "Relais", "LoRa SX1276", "Gateway", "Application mobile"],
    image:[ "/images/projects/safetrack/rendu.jpeg",
      "/images/projects/safetrack/carte.jpeg",
      "/images/projects/safetrack/association.jpeg",
         ] , 
    github: "https://github.com/FrancoisCharlesATANGA/Electronique",
    demo: "",
  },



  {
    id: "diagnostic-tumeur",
    title: "Diagnostic de tumeurs",
    category: "Data & IA",
    status: "En cours",
    context : "Projet personnel",
    description:
      "Projet de diagnostic permettant de prédire si une tumeur du sein est maligne ou bénigne, afin d'aider à prendre rapidement les dispositions adaptées. Né de ma passion pour la data science appliquée à la médecine.",
    tags: ["Nettoyage des données","Python", "Entrainement des modèles", "Classification", "Santé"],
    
    details: [
     {
    label: "Modélisation",
    text: "Préparation de 569 échantillons cliniques et comparaison de 4 modèles (Baseline, Régression Logistique, Arbre de Décision, Forêt Aléatoire) selon 5 critères (Accuracy, Précision, Recall, F1-Score, ROC-AUC).",
  },
  {
    label: "Résultat & Choix",
    text: "Sélection de la Régression Logistique (97,4 % de Recall, 0,993 ROC-AUC) avec ajustement du seuil de décision pour maximiser la détection des tumeurs malignes et éliminer les faux négatifs.",
  },
    ],
    
    
    image :[""], // "/images/projects/diagnostic.jpg"
    github: "https://github.com/KENMEUGNEMICHELE14/Breast_M",
    demo: "",
  },
  {
    id: "fultang",
    title: "Fultang",
    category: "Full-Stack",
    status: "En cours", // TODO : à confirmer
    description:
      "Plateforme de suivi des patients dans un hôpital : le parcours du patient est digitalisé en un seul dossier, en tenant compte de ses antécédents médicaux et de son parcours de soins.",
    details: [
        {
        label: "Digitalisation des données",
        text: "Toutes les informations du patients sont enregistrées dans les différents services de l'hopital par lesquelles il est passé et son dossier est transmis automatiquement de service en service en fonction du besoin",
      },
      {
        label: "Export de données",
        text: "Extraction de données anonymisées dans un fichier JSON, exploitable par des API externes comme l'application MedTutor pour la simulation de patients virtuels.",
      },
    ],
    tags: ["Santé", "Plateforme web", "Scalabilité","JSON", "API"],
    image: [""], // "/images/projects/fultang.jpg"
    github: "",
    demo: "",
  },
  {
    id: "getcad",
    title: "Site web GETCAD BTP",
    category: "Front-end",
    status: "Terminé",
    description: "Site vitrine responsive pour GETCAD BTP, une entreprise de construction et de génie civil à Yaoundé : présentation des services, galerie de 13 réalisations avec photos, formulaire de contact et lien WhatsApp.",
    tags: ["HTML", "CSS", "JavaScript", "Vercel", "Responsive"],
    image: ["/images/projects/Getcad/image_collee.png"],
    github: "https://github.com/KENMEUGNEMICHELE14/GetCadVitrine",
    demo: "https://getcadvitrinebtp-iota.vercel.app",
  },
];

