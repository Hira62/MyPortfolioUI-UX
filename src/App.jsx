import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WorkGrid from './components/WorkGrid';
import ProjectCase from './components/ProjectCase';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [activeCase, setActiveCase] = useState(null);

  useEffect(() => {
    const sections = ['hero', 'about', 'work', 'contact'];
    const els = sections.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <Hero />
      <About />
      <WorkGrid onOpenCase={setActiveCase} />
      <Contact />

      <ProjectCase
        activeId={activeCase}
        onClose={() => setActiveCase(null)}
        onNavigate={(id) => setActiveCase(id)}
      />
    </>
  );
}
