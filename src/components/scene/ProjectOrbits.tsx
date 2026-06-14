"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    id: "hungrium",
    title: "Hungrium",
    category: "Web Application",
    description:
      "A genuine food delivery interface focused on high performance and animations.",
    tech: ["React", "Node", "MongoDB"],
  },
  {
    id: "schoolfinder",
    title: "School Finder",
    category: "Searching Portal",
    description:
      "An interactive school discovery platform with robust filters and analytics.",
    tech: ["React", "MongoDB", "Tailwind"],
  },
];

interface ProjectOrbitsProps {
  onProjectClick?: (id: string) => void;
}

// Positioning coordinates for desktop/tablet radial positioning around the center robot
// Using left/top percentages to map locations nicely.
const positions = [
  {
    // Left side position of the Project card
    containerClass:
      "md:left-[5%] lg:left-[5%] xl:left-[15%] md:top-[40%] -translate-y-1/2",
    direction: -1, // floating direction offset
  },
  {
    // Right side position of the Project card
    containerClass:
      "md:right-[5%] lg:right-[7%] xl:right-[15%] md:top-[40%] -translate-y-2.3",
    direction: 1, // floating direction offset
  },
];

export function ProjectOrbits({ onProjectClick }: ProjectOrbitsProps) {
  const handleNavigate = (id: string) => {
    if (onProjectClick) {
      onProjectClick(id);
    } else {
      window.location.href = `/project/${id}`;
    }
  };

  return (
    <div className="w-full h-full flex flex-col md:block pointer-events-none absolute inset-0 z-20">
      {/* Container to center nodes relative to screen */}
      <div className="relative w-full h-full flex flex-col items-center justify-end md:justify-start pt-32 pb-16 md:py-0">
        {projects.map((project, index) => {
          const pos = positions[index] || positions[0];
          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              containerClass={pos.containerClass}
              direction={pos.direction}
              onClick={() => handleNavigate(project.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  containerClass: string;
  direction: number;
  onClick: () => void;
}

function ProjectCard({
  project,
  index,
  containerClass,
  direction,
  onClick,
}: ProjectCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse move effect for local gradient glow inside each card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Desynchronized float variant
  const floatVariant: Variants = {
    animate: {
      y: [0, direction * -15, 0],
      rotate: [0, direction * 2, 0],
      transition: {
        duration: 6 + index * 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={floatVariant}
      animate="animate"
      className={`
        w-[90%] max-w-sm md:w-[280px] lg:w-[320px] 
        md:absolute pointer-events-auto cursor-pointer 
        mb-6 md:mb-0
        ${containerClass}
      `}
    >
      <div
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="
          relative overflow-hidden rounded-2xl p-6
          bg-zinc-950/40 backdrop-blur-md
          border border-zinc-800/80 hover:border-cyan-500/40
          shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]
          transition-all duration-300 ease-out group
        "
        style={{
          // Dynamic gradient tracking background
          background: isHovered
            ? `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, rgba(34, 211, 238, 0.08), transparent 80%), rgba(9, 9, 11, 0.4)`
            : "rgba(9, 9, 11, 0.4)",
        }}
      >
        {/* Glow accent bar at the top */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-purple-500 opacity-30 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-semibold bg-cyan-950/30 px-2 py-0.5 rounded-full border border-cyan-800/30">
              {project.category}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
          </div>

          <h3 className="text-xl font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-xs text-zinc-400 leading-relaxed min-h-[40px]">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] text-zinc-500 bg-zinc-900/50 px-2 py-1 rounded-md border border-zinc-800/50"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action indicator */}
          <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-medium mt-3 self-end group-hover:translate-x-1 transition-transform duration-300">
            <span>Explore Project</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* For the Arrow beside Explore Project */}

              {/* <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 5l7 7-7 7"
              /> */}
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
