import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { Speaking } from "@/components/Speaking";
import { Community } from "@/components/Community";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Work />
        <Speaking />
        <Community />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
