import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionLabel } from "./SectionLabel";

interface SectionHeadingProps {
  label?: string;
  labelIcon?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  labelIcon,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        className,
      )}
    >
      {label && <SectionLabel label={label} icon={labelIcon} />}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold text-text-heading leading-tight tracking-tight",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
