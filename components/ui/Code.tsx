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
        "text-foreground text-base bg-muted border border-border px-1.5 py-0.5 rounded-[3px] font-mono",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Code;
