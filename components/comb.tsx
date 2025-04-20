import {ComponentPropsWithoutRef} from "react";
import {cn} from "@/lib/utils";

export type TestProps = ComponentPropsWithoutRef<"div"> & {}

export function Test({children, className, ...props}: TestProps) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  )
}

