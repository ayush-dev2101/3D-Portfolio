"use client";

import { RobotScene } from "../components/scene/RobotScene";
import { ProjectOrbits } from "../components/scene/ProjectOrbits";

const ShowcaseSection = () => {
  return (
    <section
      id="work"
      className="relative min-h-screen w-full flex flex-col items-center justify-start bg-black overflow-hidden py-24 md:py-32"
    >
      {/* Digital Grid overlay for futuristic vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Cyberpunk background glow spots */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      {/* Header section */}
      <div className="relative z-30 text-center mb-8 md:mb-16 select-none max-w-2xl px-6">
        {/* <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold bg-cyan-950/20 px-3 py-1 rounded-full border border-cyan-800/40 inline-block mb-4">
          Core Operations
        </span> */}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Showcase
          </span>
        </h2>
        {/* Glowing divider line */}
        <div className="relative w-32 h-[2px] mx-auto mb-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        </div>
        <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
          Projects are just a click away !
        </p>
      </div>

      {/* Main interactive area */}
      <div className="relative w-full max-w-7xl flex-1 flex flex-col md:flex-row items-center justify-center min-h-[400px] md:min-h-[550px] lg:min-h-[650px] px-6">
        {/* Centered Robot Canvas (Focal Point) */}
        <div className="relative z-10 w-full min-h-[500px] flex items-center justify-center flex-none">
          <RobotScene />
        </div>

        {/* Orbiting Project Nodes (Left/Right absolute on desktop, stack on mobile) */}
        <ProjectOrbits />
      </div>
    </section>
  );
};

export default ShowcaseSection;
