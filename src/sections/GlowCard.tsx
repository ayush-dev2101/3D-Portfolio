import React, { useEffect, useRef } from "react";
import type { ReactNode } from "react";
// import type { ExpCard } from "@/constants";

interface GlowCardProps {
  // card: ExpCard;
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "orange";
  size?: "sm" | "md" | "lg";
  width?: string | number;
  hideBorder?: boolean;
  height?: string | number;
  customSize?: boolean; // When true, ignores size prop and uses width/height or className
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
};

const sizeMap = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
};

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = "",
  glowColor = "blue",
  size = "md",
  width,
  height,
  customSize = false,
  hideBorder = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e: PointerEvent) => {
      const rect = card.getBoundingClientRect();

      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      card.style.setProperty("--x", `${x}%`);
      card.style.setProperty("--y", `${y}%`);
    };

    card.addEventListener("pointermove", handleMove, { passive: true });

    return () => {
      card.removeEventListener("pointermove", handleMove);
    };
  }, []);

  const { base, spread } = glowColorMap[glowColor];

  // Determine sizing
  const getSizeClasses = () => {
    if (customSize) {
      return ""; // Let className or inline styles handle sizing
    }
    return sizeMap[size];
  };

  const getInlineStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties & Record<string, string | number> = {
      "--base": base,
      "--spread": spread,
      "--radius": "14",
      "--border": "2.5",
      "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",

      position: "relative",
      touchAction: "none",
    };

    if (width !== undefined) {
      baseStyles.width = typeof width === "number" ? `${width}px` : width;
    }

    if (height !== undefined) {
      baseStyles.height = typeof height === "number" ? `${height}px` : height;
    }

    return baseStyles;
  };

  const beforeAfterStyles = `
  [data-glow] {
    position: relative;
    border-radius: calc(var(--radius) * 1px);
    background: rgba(255,255,255,0.02);
    overflow: hidden;
  }

  [data-glow]::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;

    background: radial-gradient(
      400px circle at var(--x, 50%) var(--y, 50%),
      rgba(0, 255, 255, 0.6),
      transparent 40%
    );

    -webkit-mask: 
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);

    -webkit-mask-composite: xor;
    mask-composite: exclude;

    pointer-events: none;
    transition: opacity 0.2s ease;
    opacity: 0;
  }

  [data-glow]:hover::before {
    opacity: 1;
  }
`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        style={getInlineStyles()}
        className={`
          ${getSizeClasses()}
          ${!customSize ? `aspect-3/4` : ""}
          rounded-2xl 
          overflow-hidden
          relative 
          grid 
          grid-rows-[1fr_auto] 
          shadow-[0_1rem_2rem_-1rem_black] 
          p-4 
          gap-4 
          ${className}
        `}
      >
        <div className="absolute inset-0 rounded-xl bg-[hsl(0_0%_60%/0.12)] -z-10" />
        <div className="absolute inset-0 rounded-xl overflow-hidden backdrop-blur-[5px] -z-10" />
        {/* <div ref={innerRef} data-glow></div> */}
        {children}
      </div>
    </>
  );
};

export { GlowCard };
