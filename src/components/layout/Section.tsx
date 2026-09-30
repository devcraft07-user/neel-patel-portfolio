import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  containerSize?: ContainerSize;
  noPadding?: boolean;
}

export function Section({
  id,
  containerSize = "xl",
  noPadding = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        !noPadding && "py-20 sm:py-24 lg:py-32",
        className,
      )}
      {...props}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
}
