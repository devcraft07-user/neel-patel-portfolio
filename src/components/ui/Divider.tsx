import * as React from "react";
import { cn } from "@/lib/utils";

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
}

export function Divider({
  orientation = "horizontal",
  className,
  ...props
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <span
        role="separator"
        aria-orientation="vertical"
        className={cn("inline-block w-px h-4 bg-border-default self-center", className)}
      />
    );
  }
  return (
    <hr
      className={cn("border-0 border-t border-border-default my-0", className)}
      {...props}
    />
  );
}
