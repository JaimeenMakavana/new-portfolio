import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Screen5 from "@/components/Screen5";
import Screen6 from "@/components/Screen6";
import Screen7 from "@/components/Screen7";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="h-dvh overflow-hidden relative">
      <Intro />
      <Experience />
      <Education />
      <Skills />
      <Screen5 />
      <Screen6 />
      <Screen7 />
    </main>
  );
}
