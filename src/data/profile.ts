import type { Profile } from "@/types";

/**
 * ➜ SECTION « ACCUEIL » (Hero) + coordonnées (Contact / Footer).
 * Les champs vides ("") sont simplement masqués sur le site.
 */
export const profile: Profile = {
  // TODO : ton prénom et ton nom
  firstName: "Michèle Estelle",
  lastName: "KENMEUGNE TCHOUNGA",
  title: "Élève-ingénieur en BIG DATA ET HPC",
  heroIntro:
    "Elève Ingénieur à l'ENSEEIHT de TOULOUSE dans le département de Science Numérique parcours BIG DATA & HPC avec une grande passion de de devenir data science dans le domaine de la santé.",
  location: "Toulouse, FRANCE", // TODO : à confirmer (ou Toulouse, France)
  email: "michelekenmeugne@gmail.com", // TODO
  phone: "0753593970", // TODO
  github: "https://github.com/KENMEUGNEMICHELE14", // TODO : https://github.com/ton-pseudo
  linkedin: "https://www.linkedin.com/in/michelekenmeugne/", // TODO : https://linkedin.com/in/ton-profil
  cvPath: "/images/experience/CV_Michele_Kenmeugne_oncologie.pdf", // TODO : dépose ton CV dans public/cv.pdf
  avatar: "/images/profile/pm.jpg", // TODO : "/images/profile/me.png"
};
