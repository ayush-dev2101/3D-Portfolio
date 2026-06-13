import { SparklesCore } from "../components/ui/sparkles";
import { words } from "../constants";
import Button from "../components/Button.tsx";
import HeroExperience from "../components/HeroModels/HeroExperience.tsx";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-black">
      {/* Animated Background  */}
      <div className="absolute inset-0">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="hero-layout gap-10 relative z-20">
        {/* LEFT: HERO CONTENT */}
        <header className="relative z-30 flex flex-col justify-center md:w-1/2 w-full md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col items-start gap-4">
              <h1 className="flex items-center gap-1">
                <span className="">Shaping</span>
                <span className="slide h-12 md:h-14 xl:h-16 ">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 h-15 md:h-14 xl:h-17"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
              <div className="text-center">
                <h1 className="text-white text-2xl font-semibold">
                  Hi, I'm Ayush
                </h1>
                {/* BlueLine under Name */}
                <div className="relative mt-1 w-60 mx-auto h-[2px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
                </div>
              </div>
              {/* Expression */}
              <p className="text-shadow-white-50 md:text-xl relative z-10 pointer-events-none">
                A developer based in India with a passion of code.
              </p>
              <Button
                className="self-start md:h-12 h-10"
                id="button"
                text="See my Work"
              />
            </div>
          </div>
        </header>

        {/* RIGHT: 3D MODEL */}
        <figure className="md:w-1/2 w-full h-100 md:h-full">
          <div className="hero-3d-layout w-full h-full overflow-hidden">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
