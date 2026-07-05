import { useRef, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt angle in degrees. */
  max?: number;
  /** Adds a glare sheen that follows the pointer. */
  glare?: boolean;
  /** Scale applied on hover. */
  scale?: number;
}

export function TiltCard({ children, className, max = 10, glare = true, scale = 1.015 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const springConfig = { stiffness: 220, damping: 22, mass: 0.6 };

  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const scaleSpring = useSpring(1, springConfig);
  const glareX = useSpring(50, springConfig);
  const glareY = useSpring(50, springConfig);
  const glareOpacity = useSpring(0, { stiffness: 200, damping: 30 });

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, oklch(1 0 0 / 0.35), transparent 55%)`;

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    rotateY.set((px - 0.5) * max * 2);
    rotateX.set(-(py - 0.5) * max * 2);
    glareX.set(px * 100);
    glareY.set(py * 100);
  };

  const handlePointerEnter = () => {
    scaleSpring.set(scale);
    glareOpacity.set(1);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scaleSpring.set(1);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{
        rotateX,
        rotateY,
        scale: scaleSpring,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      className={cn("relative will-change-transform", className)}
    >
      {children}
      {glare && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ background: glareBackground, opacity: glareOpacity }}
        />
      )}
    </motion.div>
  );
}
