# Portfolio – Version 1

Next.js 14 (App Router) · TypeScript · Tailwind CSS.

## Lancer le projet
```bash
npm install
npm run dev      # http://localhost:3000
```

## Où modifier quoi
Chaque section a **son composant** (affichage) et **son fichier de données** (contenu).
Pour compléter le portfolio, tu n'as normalement qu'à toucher aux fichiers `src/data/`.

| Section        | Composant (affichage)                     | Données (contenu)            |
|----------------|-------------------------------------------|------------------------------|
| Accueil        | `src/components/sections/Hero.tsx`        | `src/data/profile.ts`        |
| À propos       | `src/components/sections/About.tsx`       | `src/data/about.ts`          |
| Compétences    | `src/components/sections/Skills.tsx`      | `src/data/skills.ts`         |
| Formation      | `src/components/sections/Education.tsx`   | `src/data/education.ts`      |
| Certifications | `src/components/sections/Certifications.tsx` | `src/data/certifications.ts` |
| Projets        | `src/components/sections/Projects.tsx`    | `src/data/projects.ts`       |
| Expérience     | `src/components/sections/Experience.tsx`  | `src/data/experience.ts`     |
| Compétitions   | `src/components/sections/Competitions.tsx`| `src/data/competitions.ts`   |
| Engagement     | `src/components/sections/Engagement.tsx`  | `src/data/engagement.ts`     |
| Contact        | `src/components/sections/Contact.tsx`     | `src/data/profile.ts`        |

Les sections sont assemblées dans `src/app/page.tsx`.

## Ajouter des images
1. Dépose l'image dans `public/images/<dossier>/` (profile, projects, certifications, experience, competitions, engagement).
2. Dans le fichier de données, renseigne le champ `image` : `"/images/projects/roadtrack.jpg"`.
Tant que le champ est vide, un cadre pointillé « Image à ajouter » indique le chemin conseillé.

## CV
Dépose ton CV dans `public/cv.pdf` (le bouton « Télécharger CV » pointe dessus).

## Repérer ce qui reste à compléter
Cherche `TODO` dans le projet :
```bash
grep -rn "TODO" src
```
