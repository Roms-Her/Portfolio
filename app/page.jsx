import Welcome from "./src/components/main/home/Welcome";
import Projects from "./src/components/main/home/project/Project";
import Skills from "./src/components/main/home/skills/Skills";
import TimeLine from "./src/components/main/home/timeline/TimeLine";
export default function Home() {
  return (
    <>
      <Welcome />
      <Projects />
      <Skills />
      <TimeLine></TimeLine>
    </>
  );
}
