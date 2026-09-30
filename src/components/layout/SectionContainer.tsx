import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Standard Section Container matching Figma 1280px Artboard Specifications:
 * - Max Width: 1280px
 * - Responsive side padding:
 *   - Mobile: 24px (px-6)
 *   - Tablet: 40px (sm:px-10)
 *   - Desktop (Figma canonical): 64px (lg:px-16) -> gives exact 1152px card width!
 */
export function SectionContainer({
  className,
  children,
  ...props
}: SectionContainerProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[1400px] xl:max-w-[1480px] 2xl:max-w-[1560px] px-4 sm:px-6 md:px-8 lg:px-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
