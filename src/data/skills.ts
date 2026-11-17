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
      { name: "Pandas", icon: "pandas/pandas-original" },
      { name: "Numpy", icon: "numpy/numpy-original" },
      { name: "Scikit-Learn", icon: "scikitlearn/scikitlearn-original" },
      { name: "Matplotlib", icon: "matplotlib/matplotlib-original" },
      { name: "Seaborn", icon: "panda/panda-original" },
      ],
  },


  {
  title: "Développement & Frameworks",
  items: [
    { name: "Python (Flask)", icon: "flask/flask-original" },
    { name: "Java (Spring Boot)", icon: "spring/spring-original" },
    { name: "Next.js", icon: "nextjs/nextjs-original" },
    { name: "HTML", icon: "html5/html5-original" },
  
  ],
},



{
  title: "DevOps & Infrastructure",
  items: [
    { name: "Docker", icon: "docker/docker-original" },
    { name: "Linux", icon: "linux/linux-original" },
    { name: "Git / GitHub", icon: "git/git-original" },
    { name: "Apache Kafka", icon: "apachekafka/apachekafka-original" },
    { name: "Debezium" },
    { name: "Grafana", icon: "grafana/grafana-original" },
  ],
},


 {
  title: "Électronique & IoT",
  items: [
    { name: "Arduino", icon: "arduino/arduino-original" },
    { name: "Proteus" },
  ],
},

{
  title: "Soft Skills",
  items: [
    { name: "Autonomie" },
    { name: "Rigueur" },
    { name: "Esprit d'équipe" },
    { name: "Communication" },
  ],
},


 {
  title: "Environnements & Outils",
  items: [
    { name: "VS Code", icon: "vscode/vscode-original" },
    { name: "IntelliJ IDEA", icon: "intellij/intellij-original" },
    { name: "Eclipse", icon: "eclipse/eclipse-original" },
    { name: "Jupyter Notebook", icon: "jupyter/jupyter-original" },
    { name: "Swagger", icon: "swagger/swagger-original" },
  ],
},

  
];

/** Langues parlées — TODO */
export const languages: { name: string; level: string }[] = [
  { name: "Français", level: "Natif" },
   { name: "Anglais", level: "Intermédiaire" },
   {name : "Allemand", level: "A1"}
];
