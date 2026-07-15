import { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "fade";
}

const animationClasses: Record<string, string> = {
  "fade-up": "translate-y-10 opacity-0",
  "fade-left": "-translate-x-10 opacity-0",
  "fade-right": "translate-x-10 opacity-0",
  scale: "scale-95 opacity-0",
  fade: "opacity-0",
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  animation = "fade-up",
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>({ delay });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        visible
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : animationClasses[animation]
      }`}
    >
      {children}
    </div>
  );
}
