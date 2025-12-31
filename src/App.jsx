import { useRef } from "react";
import StarryBackground from "./components/Background";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-zinc-950 text-white selection:bg-white selection:text-black">
      <StarryBackground />
      <Navbar />

      <main className="space-y-32 pb-32">
        <section id="home">
          <Hero />
        </section>

        <section id="work">
          <Work />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
