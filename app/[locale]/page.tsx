import Header from "../_components/Header";
import Hero from "../_components/Hero";
import Sidebar from "../_components/Sidebar";
import Skills from "../_components/Skills";
import Projects from "../_components/Projects";
import Team from "../_components/Team";
import GetInTouch from "../_components/GetInTouch";
export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <Hero />
      <Skills />
      <Projects />
      <Team />
      <GetInTouch />
    </>
  );
}
