# Portfolio Personnel — Michèle Estelle Kenmeugne Tchoungа

Portfolio web conçu pour présenter mon parcours d'élève-ingénieure en double diplôme (**ENSPY** – **ENSEEIHT**, spécialité **Big Data & High Performance Computing**), mes projets techniques et mes aspirations dans le domaine de la Data Science appliquée à la santé.

## Stack Technique

* **Framework :** Next.js 14 (App Router)
* **Langage :** TypeScript
* **Stylisation :** Tailwind CSS
* **Déploiement :** Vercel

## Architecture du Projet

L'application repose sur une architecture modulaire séparant la logique d'affichage (composants React) des données statiques :

```text
├── public/
│   ├── images/          # Ressources graphiques classées par section
│   └── cv.pdf           # Curriculum Vitae téléchargeable
└── src/
    ├── app/             # Routage et assemblage principal (page.tsx)
    ├── components/      # Composants UI et sections (Hero, About, Skills, Projects...)
    └── data/            # Fichiers de configuration et contenu typé (.ts)
