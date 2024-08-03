"use client"
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import { Element } from "react-scroll";


export default function Home() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="mx-auto pb-12">
        <Navbar />
        <div className="pt-20"></div>
        <div className="px-8">
          {/* <Element name="hero"> */}
            <Hero />
          {/* </Element> */}
          <Element name="about">
            <About />
          </Element>
          <Experiences />
          <Element name="technologies">
            <Technologies />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="contact">
            <ContactMe />
          </Element>
        </div>
      </div>
    </div>
  );
}
