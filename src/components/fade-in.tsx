"use client";

import { useEffect, useRef } from "react";
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
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
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

  const offset = directionOffset[direction];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const hidden: Variant = {
    opacity: 0,
    x: offset.x,
    y: offset.y,
  };

  const visible: Variant = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{ hidden, visible }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
