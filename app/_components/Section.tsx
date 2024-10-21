import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
export default function Section(
  props: PropsWithChildren<{ className?: string; id?: string }>
) {
  return (
    <section
      id={props.id}
      className={cn(
        "2xl:max-w-[1500px] xl:max-w-5xl lg:max-w-3xl px-4  mx-auto bg-[none]",
        props.className
      )}
    >
      {props.children}
    </section>
  );
}
