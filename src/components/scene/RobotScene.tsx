"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { InteractiveRobot } from "./InteractiveRobot";

export function RobotScene() {
  // Mouse coordinates mapped to range [-0.5, 0.5]
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out coordinate tracking for fluid movements
  const springX = useSpring(mouseX, { stiffness: 70, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 70, damping: 25 });

  // Parallax transform calculations
  const rotateY = useTransform(springX, [-0.5, 0.5], [12, -12]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [-12, 12]);
  const translateX = useTransform(springX, [-0.5, 0.5], [20, -20]);
  const translateY = useTransform(springY, [-0.5, 0.5], [20, -20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        x: translateX,
        y: translateY,
        transformStyle: "preserve-3d",
      }}
      className="w-full h-full max-w-[320px] max-h-[320px] sm:max-w-[450px] sm:max-h-[450px] md:max-w-[550px] md:max-h-[550px] lg:max-w-[650px] lg:max-h-[650px] flex items-center justify-center relative z-10 select-none pointer-events-auto"
    >
      {/* Neon glowing aura behind the robot */}
      <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-3xl -z-10 animate-pulse pointer-events-none" />

      <InteractiveRobot
        scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"
        className="w-full h-full"
      />
    </motion.div>
  );
}
