import TechIcon from "@/components/Models/TechLogos/TechIcon";
import TitleHeader from "@/components/TitleHeader";
import { techStackIcons, type TechStackIcon } from "@/constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        trigger: "#skills",
        start: "top-center",
      },
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝Skills I bring to the Table"
        />

        <div className="tech-grid">
          {techStackIcons.map((icon: TechStackIcon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group rounded-full 
             aspect-3/4 xl:aspect-2/3
             max-h-420px mx-auto"
            >
              <div className="tech-card-animated-bg"></div>

              <div className="tech-card-content flex flex-col items-center justify-center h-full">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
