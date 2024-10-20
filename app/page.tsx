import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Sidebar from "./_components/Sidebar";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
export default function Home() {
  return (
    <main className="w-full ">
      <Header />
      <Sidebar />
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}
