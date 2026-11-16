import type { AboutData } from "@/types";

/** ➜ SECTION « À PROPOS » */
export const about: AboutData = {
  heading: "Mon parcours",
  paragraphs: [
    "Élève-ingénieure en double diplôme entre l'ENSPY (Cameroun) et l'ENSEEIHT (Toulouse), je me spécialise en Big Data et High Performance Computing (HPC) afin de maîtriser le traitement et l'analyse de la donnée sous toutes ses formes.",

"Depuis l'enfance, mon ambition première était de devenir médecin et de consacrer ma vie à soigner. Lorsque les portes des facultés de médecine ne se sont  pas ouvertes à moi, j'ai choisi de réorienter ma passion vers l'ingénierie informatique avec une conviction renouvelée : il n'est pas nécessaire de porter une blouse blanche pour sauver des vies.",

"Aujourd'hui, Mon objectif est d'orienter mes compétences en Data Science et IA vers la médecine de précision. Je souhaite concevoir des modèles prédictifs capables d'assister les praticiens dans le diagnostic, d'analyser l'évolution des pathologies à partir de biomarqueurs complexes et de contribuer au développement de thérapies personnalisées adaptées à chaque patient.",
    // TODO : ajoute ici 1 ou 2 phrases perso (valeurs, objectifs, loisirs…)
  ],
  image: "", // TODO : "/images/profile/about.jpg"
  highlights: [
    {
      title: "Data science & santé",
      text: "Modèles de prédiction pour aider au diagnostic.",
    },
    {
      title: "Électronique & IoT",
      text: "Dispositifs connectés : GPS, GSM, LoRa.",
    },
    {
      title: "Données en entreprise",
      text: "Flux de données, tableaux de bord et notifications automatiques.",
    },
    {
      title: "Engagement",
      text: "Clubs, bénévolat et entraide entre étudiants.",
    },
  ],
};
