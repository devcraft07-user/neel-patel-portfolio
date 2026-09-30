"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type IconButtonVariant = "ghost" | "outline" | "filled";
type IconButtonSize = "sm" | "md" | "lg";

// Polymorphic props — can render as <button> or <a>
type IconButtonProps<C extends React.ElementType = "button"> = {
  as?: C;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  label: string;
  icon: React.ReactNode;
  className?: string;
} & Omit<React.ComponentPropsWithRef<C>, "as" | "variant" | "size" | "label" | "icon" | "className">;

const variantClasses: Record<IconButtonVariant, string> = {
  ghost: "text-text-secondary hover:text-text-primary hover:bg-container-hover",
  outline:
    "border border-border-default text-text-secondary hover:text-text-primary hover:border-border-subtle hover:bg-container-hover",
  filled:
    "bg-container-card border border-border-default text-text-secondary hover:text-text-primary hover:bg-container-hover",
};

const sizeClasses: Record<IconButtonSize, string> = {
  sm: "size-7 rounded-md",
  md: "size-9 rounded-lg",
  lg: "size-11 rounded-xl",
};

function IconButton<C extends React.ElementType = "button">({
  as,
  variant = "ghost",
  size = "md",
  label,
  icon,
  className,
  ...props
}: IconButtonProps<C>) {
  const Tag = (as ?? "button") as React.ElementType;

  return (
    <Tag
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        "disabled:pointer-events-none disabled:opacity-40",
        "active:scale-95 motion-reduce:active:scale-100",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {icon}
    </Tag>
  );
}

export { IconButton };
export type { IconButtonProps };
