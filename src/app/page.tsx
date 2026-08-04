import Header from "./components/sections/Header/Header";
import Hero from "./components/sections/Hero/Hero";
import PageSheet from "./components/sections/PageSheet/PageSheet";
import ProjectSection from "./components/sections/ProjectSection/ProjectSection";
import SkillsSection from "./components/sections/SkillsSection/SkillsSection";

export default function Home() {
  return (
    <PageSheet>
      <Header />
      <Hero />
      <ProjectSection />
      <SkillsSection />
    </PageSheet>

  );
}
