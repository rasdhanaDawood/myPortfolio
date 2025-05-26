import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import {Hero} from './components/Hero'
import { useEffect } from 'react';
import {Skills} from './components/Skills';
import {Experience} from './components/Experience';
import { Language } from './components/Language';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import ScrollToTopButton from './components/ScrollButton';

export default function App() {
  useEffect(() => {
    AOS.init(() => {
      duration: 1000
    })
  }, []);
  
  return (
    <>
      <main className='bg-[#0d182e]'>
        <Hero />
        <Skills />
        <Experience />
        <Language />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTopButton/>
      </main>
    </>
  )
}

