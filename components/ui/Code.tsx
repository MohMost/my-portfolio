import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef } from "react";

function Code({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "text-foreground text-base bg-accent/30 border border-accent px-1.5 py-0.5 rounded fira-sans",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Code;
