import Image from "next/image";
import Header from "./components/Header";
import Body from "./components/Body";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-gradient-to-b from-slate-800 to-stone-600">
      <Header />
      <Body />
      <Projects />
      <Skills />
      <Contact />
    </main>

    // https://www.youtube.com/watch?v=hqqTHazT8KA min 1:06:51
  );
}
