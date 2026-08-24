import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BackToTop } from '@/components/back-to-top';
import { LoadingScreen } from '@/components/loading-screen';
import { ScrollProgress } from '@/components/scroll-progress';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Expertise } from '@/components/sections/expertise';
import { Skills } from '@/components/sections/skills';
import { QAProcess } from '@/components/sections/qa-process';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Metrics } from '@/components/sections/metrics';
import { Certificates } from '@/components/sections/certificates';
import { Resume } from '@/components/sections/resume';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <QAProcess />
        <Experience />
        <Projects />
        <Metrics />
        <Certificates />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
