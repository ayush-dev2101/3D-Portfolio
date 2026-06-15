import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
// import LogoSection from "./sections/LogoSection";
import FeatureCard from "./sections/FeatureCard";
import Experience from "./sections/Experience";

const App = () => {
  return (
    <>
      <div>
        {/* <h1 className="text-5xl text-center mt-5 text-zinc-100 font-extrabold">
          {" "}
          Portfolio
        </h1> */}
        <Navbar />
        <Hero />
        <ShowcaseSection />
        {/* For the LogoSection we'll change the images and the experience  */}

        {/* <LogoSection /> */}
        <FeatureCard />
        <Experience />
      </div>
    </>
  );
};

export default App;
