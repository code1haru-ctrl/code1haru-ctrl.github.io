import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";
import AuroraBackground from "./components/ui/AuroraBackground";
import CursorGlow from "./components/ui/CursorGlow";
import ScrollProgress from "./components/ui/ScrollProgress";

export default function App() {
  return (
    <div className="grain relative">
      <ScrollProgress />
      <AuroraBackground />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
