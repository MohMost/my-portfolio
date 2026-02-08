import Image from "next/image";
import Header from "../_components/Header";
import Hero from "../_components/Hero";
import Sidebar from "../_components/Sidebar";
import Skills from "../_components/Skills";
import Projects from "../_components/Projects";
import GetInTouch from "../_components/GetInTouch";
import Footer from "../_components/Footer";
import { BackgroundGradient } from "@/components/ui/gradient";
export default function Home() {
  return (
    <>
      <BackgroundGradient />
      <Header />
      <Sidebar />
      <Hero />
      <Skills />
      <Projects />
      <GetInTouch />
    </>
  );
}
