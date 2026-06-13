import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Test from "./Test";

const App = () => {
  return (
    <>
      <div>
        <h1 className="text-5xl text-center mt-15 text-zinc-100 font-extrabold">
          {" "}
          Portfolio
        </h1>
        <Hero />
        <ShowcaseSection />
      </div>
    </>
  );
};

export default App;
