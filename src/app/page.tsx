import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Screen3 from "@/components/Screen3";
import Screen4 from "@/components/Screen4";
import Screen5 from "@/components/Screen5";
import Screen6 from "@/components/Screen6";
import Screen7 from "@/components/Screen7";

export default function Home() {
  return (
    <main className="h-dvh overflow-hidden relative">
      <Intro />
      <Experience />
      <Screen3 />
      <Screen4 />
      <Screen5 />
      <Screen6 />
      <Screen7 />
    </main>
  );
}
