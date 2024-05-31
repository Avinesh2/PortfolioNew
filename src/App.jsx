import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import Hero from "./components/Hero/Hero";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";
import Navbar from "./components/navbar/Navbar";
import Spline from '@splinetool/react-spline';


    
 

export default function App() {
  return (
  <div className="bg-[#0c0c1d] text-zinc-200 ">
  
    <section id="homepage" className="h-screen snap-always snap-center max-lg:h-[100vh]">
      <Navbar />
      <Hero />
    </section>
    <section id="Services" className="h-screen snap-always snap-center "><Parallax type="about"/></section>
    <section className="h-screen snap-always snap-center "><About /></section>
    <section id="Portfolio" className="h-screen snap-always snap-center"><Parallax type="portfolio" /></section>
    <Portfolio/>
    <section id="Contact" className="h-screen snap-always snap-center"><Contact /></section>
    
  </div>
  )
}