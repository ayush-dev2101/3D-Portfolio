import { useEffect, useRef } from "react";
import gsap from "gsap";

//Made the self-counter for the testinomial
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obj = { value: 0 };

    gsap.to(obj, {
      value: end,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = Math.floor(obj.value).toString() + suffix;
        }
      },
    });
  }, [end, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default Counter;
