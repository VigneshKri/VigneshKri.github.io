"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useAnimation,
  type Variant,
} from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const directionOffset: Record<string, { x: number; y: number }> = {
  up: { x: 0, y: 18 },
  down: { x: 0, y: -18 },
  left: { x: 18, y: 0 },
  right: { x: -18, y: 0 },
  none: { x: 0, y: 0 },
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const controls = useAnimation();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const offset = directionOffset[direction];
  const motionScale = isSmallScreen ? 0.65 : 1;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsSmallScreen(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const hidden: Variant = {
    opacity: 0,
    x: offset.x * motionScale,
    y: offset.y * motionScale,
  };

  const visible: Variant = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: isSmallScreen ? 0.42 : 0.5,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={controls}
      variants={{ hidden, visible }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
