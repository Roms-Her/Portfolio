import MoreInformations from "./src/components/main/home/moreInformations/MoreInformations";
import Projects from "./src/components/main/home/project/Project";
import Skills from "./src/components/main/home/skills/Skills";
// import TimeLine from "./src/components/main/home/timeline/TimeLine";
import Welcome from "./src/components/main/home/Welcome";
export default function Home() {
  return (
    <>
      <Welcome />
      <Projects />
      <Skills />
      {/* <TimeLine /> */}
      <MoreInformations />
    </>
  );
}
