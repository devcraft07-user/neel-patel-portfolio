import * as React from "react";
import { cn } from "@/lib/utils";

type GradientVariant = "blue-cyan" | "blue-purple" | "cyan-purple";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  gradient?: GradientVariant;
}

const gradientClasses: Record<GradientVariant, string> = {
  "blue-cyan": "bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-cyan-light",
  "blue-purple": "bg-gradient-to-r from-accent-blue to-accent-purple-light",
  "cyan-purple": "bg-gradient-to-r from-accent-cyan to-accent-purple-light",
};

export function GradientText({
  gradient = "blue-cyan",
  className,
  children,
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent",
        gradientClasses[gradient],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
