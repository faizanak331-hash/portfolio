import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Muhammad Faizan Alam | Full Stack Developer Portfolio',
  description: 'Professional portfolio of Muhammad Faizan Alam, a Full Stack Developer specializing in Next.js, React, and Node.js.',
};

export default function Home() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
