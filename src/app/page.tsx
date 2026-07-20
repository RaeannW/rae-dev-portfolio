import Header from "./components/sections/Header/Header";
import Hero from "./components/sections/Hero/Hero";
import PageSheet from "./components/sections/PageSheet/PageSheet";

export default function Home() {
  return (
    <PageSheet>
      <Header />
      <Hero />
    </PageSheet>

  );
}
