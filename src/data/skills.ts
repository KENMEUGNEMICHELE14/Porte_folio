import type { SkillGroup } from "@/types";

/**
 * ➜ SECTION « COMPÉTENCES »
 * Icônes : nom du dossier devicon → https://devicon.dev  (ex: "python/python-original")
 * Pour ajouter une compétence sans icône, omets simplement `icon`.
 * TODO : complète les listes (langages, frameworks, outils…).
 */
export const skillGroups: SkillGroup[] = [
  {
    title: "Data & IA",
    items: [
      { name: "Python", icon: "python/python-original" },
      { name: "Data science" },
      { name: "Machine Learning" },
      { name: "MATLAB", icon: "matlab/matlab-original" },
    ],
  },
  {
    title: "Données & systèmes",
    items: [
      { name: "Apache Kafka", icon: "apachekafka/apachekafka-original" },
      { name: "Debezium" },
      { name: "PostgreSQL", icon: "postgresql/postgresql-original" },
      { name: "Oracle", icon: "oracle/oracle-original" },
      { name: "Grafana", icon: "grafana/grafana-original" },
      { name: "LDAP" },
      { name: "JSON & API" },
    ],
  },
  {
    title: "Électronique & IoT",
    items: [
      { name: "Arduino", icon: "arduino/arduino-original" },
      { name: "SIM808 (GPS/GSM)" },
      { name: "LoRa (SX1276)" },
      { name: "Maintenance informatique" },
    ],
  },
  {
    title: "Langages",
    items: [
      // TODO
    ],
  },
  {
    title: "Web & mobile",
    items: [
      // TODO
    ],
  },
  {
    title: "Soft skills",
    items: [
      { name: "Travail d'équipe" },
      { name: "Gestion de projet" },
      // TODO
    ],
  },
];

/** Langues parlées — TODO */
export const languages: { name: string; level: string }[] = [
  { name: "Français", level: "Natif" },
   { name: "Anglais", level: "…" },
];
