import TitleHeader from "@/components/TitleHeader";
import { expCards } from "@/constants";
import { GlowCard } from "./GlowCard";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    if (window.innerWidth < 768) return;

    gsap.utils.toArray<HTMLElement>(".timeline-card").forEach((card) => {
      const logo = card.querySelector(".exp-logo");
      const desc = card.querySelector(".exp-desc");
      const review = card.querySelector(".exp-review");
      const image = card.querySelector(".exp-image");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true, // 🔥 IMPORTANT: ensures it runs only once
        },
      });

      tl.from(logo, {
        x: -150,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          desc,
          {
            x: -120,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          review,
          {
            x: -100,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          image,
          {
            x: 120,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        );
    });
  });

  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="🧑‍💻 My Career Overview"
        />
      </div>

      <div className="mt-32 relative">
        <div className="relative z-50 xl:space-y-32 space-y-10">
          {expCards.map((card) => (
            <div
              key={card.title}
              className="timeline-card exp-card-wrapper md:flex-row md:items-center"
            >
              {/* LEFT */}

              <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
                <div className="exp-logo flex items-center gap-4">
                  <img
                    src={card.logoPath}
                    alt={card.title}
                    className="w-12 h-12 object-contain"
                  />

                  <div>
                    <h3 className="text-white text-2xl font-semibold">
                      {card.title}
                    </h3>

                    <p className="text-white-50 text-sm">{card.date}</p>
                  </div>
                </div>

                <ul className="exp-desc flex flex-col gap-3">
                  {card.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-white-50"
                    >
                      <span className="mt-1 w-2 h-2 rounded-full bg-purple-400 shrink-0" />

                      {item}
                    </li>
                  ))}
                </ul>

                <blockquote className="exp-review border-l-2 border-purple-400 pl-4 text-white-50 italic text-sm">
                  "{card.review}"
                </blockquote>
              </div>

              {/* RIGHT */}

              <div className="exp-image w-full md:w-1/2">
                <GlowCard hideBorder customSize className="w-full p-4">
                  <img
                    src={card.imgPath}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </GlowCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
