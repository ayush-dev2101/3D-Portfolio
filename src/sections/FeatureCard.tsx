import { abilities } from "@/constants";
import { GlowCard } from "./GlowCard";

const FeatureCard = () => {
  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <GlowCard
            key={title}
            customSize
            hideBorder
            className="p-8 flex flex-col gap-4"
          >
            <div className="size-14 flex items-center justify-center rounded-2xl">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white-50 text-2xl font-semibold mt-2">
              {title}
            </h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </GlowCard>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
