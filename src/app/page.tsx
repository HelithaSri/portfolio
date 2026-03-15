import styles from './page.module.css';
import Navbar from '@/components/layout/Navbar';
import Divider from '@/components/layout/Divider';
import Footer from '@/components/layout/Footer';
import HeroTerminal from '@/components/sections/HeroTerminal';
import Stats from '@/components/sections/Stats';
import HeroButtons from '@/components/sections/HeroButtons';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.shell}>
        {/* Hero / About */}
        <section id="about" className={styles.hero}>
          <HeroTerminal />
          <Stats />
          <HeroButtons />
        </section>

        <Divider />
        <Skills />

        <Divider />
        <Experience />

        <Divider />
        <Education />

        <Divider />
        <Projects />

        <Divider />
        <Contact />

        <Footer />
      </main>
    </>
  );
}
