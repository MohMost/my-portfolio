import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

function Corner({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      className={cn("absolute text-border", className)}
      aria-hidden="true"
    >
      <path d="M1 9V1H9" stroke="#3e3f3f" strokeWidth="1" fill="none" />
    </svg>
  );
}

export function Frame({
  children,
  className,
  grid = false,
}: PropsWithChildren<{ className?: string; grid?: boolean }>) {
  return (
    <div className={cn("relative border border-border/70 z-10", className)}>
      <Corner className="-top-px -left-px" />
      <Corner className="-top-px -right-px [transform:scaleX(-1)]" />
      <Corner className="-bottom-px -left-px [transform:scaleY(-1)]" />
      <Corner className="-bottom-px -right-px [transform:scale(-1,-1)]" />
      {grid ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:repeating-linear-gradient(90deg,transparent,transparent_calc(25%_-_1px),hsl(var(--border))_calc(25%_-_1px),hsl(var(--border))_25%),repeating-linear-gradient(0deg,transparent,transparent_calc(50%_-_1px),hsl(var(--border))_calc(50%_-_1px),hsl(var(--border))_50%)]"
        />
      ) : null}
      {children}
    </div>
  );
}

export default Frame;
