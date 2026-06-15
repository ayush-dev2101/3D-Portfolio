import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
// import LogoSection from "./sections/LogoSection";
import FeatureCard from "./sections/FeatureCard";
import Experience from "./sections/Experience";

import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <ShowcaseSection />
        <FeatureCard />
        <Experience />
        <TechStack />
      </div>
    </>
  );
};

export default App;
