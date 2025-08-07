// src/app/page.js

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./about/page";
import Projects from "./components/Projects";
import Contact from "./contact/page";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer />
      <ScrollToTop/>
    </>
  );
}
