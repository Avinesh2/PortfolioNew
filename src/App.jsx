import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import Hero from "./components/Hero/Hero";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";
import Navbar from "./components/navbar/Navbar";
import Spline from '@splinetool/react-spline';
import {useRef} from 'react';


    
 

export default function App() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (

  <div className="bg-[#0c0c1d] text-zinc-200 ">
  
    <section id="Homepage" className="h-screen snap-always snap-center max-lg:h-[100vh]">
      <Navbar />
      <Hero scrollToProjects={() => scrollToSection(projectsRef)} scrollToContact={() => scrollToSection(contactRef)} />
    </section>
    <section id="About Me" className="h-screen snap-always snap-center" ><Parallax type="about"/></section>
    <section className="h-screen snap-always snap-center "><About /></section>
    <section id="Projects" className="h-screen snap-always snap-center" ref={projectsRef}><Parallax type="portfolio" /></section>
    <Portfolio/>
    <section id="Contact" className="h-screen snap-always snap-center" ref={contactRef}><Contact /></section>
    
  </div>
  )
}