import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "blue" | "cyan" | "purple" | "success" | "warning" | "error";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "bg-container-card text-text-secondary border border-border-default",
  blue: "bg-accent-blue/10 text-accent-blue border border-accent-blue/20",
  cyan: "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20",
  purple:
    "bg-accent-purple/10 text-accent-purple-light border border-accent-purple/20",
  success:
    "bg-status-success/10 text-status-success border border-status-success/20",
  warning:
    "bg-status-warning/10 text-status-warning border border-status-warning/20",
  error:
    "bg-status-error/10 text-status-error border border-status-error/20",
};

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide",
          "transition-colors duration-150",
          variantClasses[variant],
          className,
        )}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";

export { Badge };
export type { BadgeProps, BadgeVariant };
