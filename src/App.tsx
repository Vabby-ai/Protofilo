import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Navbar }      from './components/layout/Navbar';
import { Footer }      from './components/layout/Footer';
import { Hero }        from './components/sections/Hero';
import { About }       from './components/sections/About';
import { Experience }  from './components/sections/Experience';
import { Projects }    from './components/sections/Projects';
import { AIExpertise } from './components/sections/AIExpertise';
import { Skills }      from './components/sections/Skills';
import { Education }   from './components/sections/Education';
import { Contact }     from './components/sections/Contact';

export default function App() {
  useSmoothScroll();

  return (
    <div className="noise-overlay">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <AIExpertise />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
