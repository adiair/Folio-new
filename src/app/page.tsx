import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <main className="flex flex-col border-dashed border-gray-800 border-l border-r min-h-[80 dvh] p-5 space-y-8 ">
      <section id="hero">
        <Hero/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </main>
  );
}
