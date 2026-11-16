import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Competitions from "@/components/sections/Competitions";
import Engagement from "@/components/sections/Engagement";
import Contact from "@/components/sections/Contact";

/** Chaque section vit dans son propre fichier : src/components/sections/ */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Projects />
        <Experience />
        <Competitions />
        <Engagement />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
