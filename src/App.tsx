import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

// Lazy-load below-fold sections to reduce initial bundle size
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const FeatureCard = lazy(() => import("./sections/FeatureCard"));
const Experience = lazy(() => import("./sections/Experience"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <ShowcaseSection />
          <FeatureCard />
          <Experience />
          <TechStack />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default App;
