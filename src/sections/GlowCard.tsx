import React, { useEffect, useMemo, useRef } from "react";
import type { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "orange";
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
  hideBorder?: boolean;
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

  const { base, spread } = glowColorMap[glowColor];

  // Size classes (memoized)
  const sizeClass = useMemo(() => {
    if (customSize) return "";
    return sizeMap[size];
  }, [customSize, size]);

  // Inline CSS variables (memoized)
  const inlineStyles = useMemo(() => {
    const styles: React.CSSProperties & Record<string, string | number> = {
      "--base": base,
      "--spread": spread,
      "--radius": "14",
      "--border": "2.5",
      "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
      position: "relative",
      touchAction: "none",
    };

    if (width !== undefined) {
      styles.width = typeof width === "number" ? `${width}px` : width;
    }

    if (height !== undefined) {
      styles.height = typeof height === "number" ? `${height}px` : height;
    }

    return styles;
  }, [base, spread, width, height]);

  // Pointer glow effect (optimized with RAF)
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let frame: number | null = null;

    const handleMove = (e: PointerEvent) => {
      if (frame) return;

      frame = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty("--x", `${x}%`);
        card.style.setProperty("--y", `${y}%`);

        frame = null;
      });
    };

    card.addEventListener("pointermove", handleMove, { passive: true });

    return () => {
      card.removeEventListener("pointermove", handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      data-glow
      data-hide-border={hideBorder}
      style={inlineStyles}
      className={`
        ${sizeClass}
        ${!customSize ? "aspect-3/4" : ""}
        rounded-2xl
        overflow-visible
        relative
        grid
        grid-rows-[1fr_auto]
        shadow-[0_1rem_2rem_-1rem_black]
        p-4
        gap-4
        ${className}
      `}
    >
      {/* background layers (unchanged UI) */}
      <div className="absolute inset-0 rounded-xl bg-[hsl(0_0%_60%/0.12)] -z-10" />
      <div className="absolute inset-0 rounded-xl overflow-hidden backdrop-blur-[5px] -z-10" />

      {children}
    </div>
  );
};

export { GlowCard };
