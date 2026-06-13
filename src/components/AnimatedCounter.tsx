import Counter from "./ui/Counter";
import { counterItems } from "../constants";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid grid-cols-4 gap-4">
        {counterItems.map((item) => (
          // key={itemlabel} --> Should be at outermost element returned by a map
          <div
            key={item.label}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white text-4xl font-bold mb-2">
              {/* <CountUp suffix={item.suffix} end={item.value} /> */}
              <Counter end={item.value} suffix={item.suffix} />
            </div>
            <p className="text-zinc-400">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
