import * as React from "react";
import { cn } from "@/lib/utils";

interface SpinningBorderProps {
  children: React.ReactNode;
  className?: string;
}

const SpinningBorder = React.forwardRef<HTMLDivElement, SpinningBorderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative inline-block", className)} {...props}>
        <div className="absolute inset-0 flex items-center justify-center animate-spin-slow pointer-events-none">
          <div className="w-full h-full border-x-2 border-x-golden-light rounded-full"></div>
        </div>
        <div className="relative  p-1 bg-transparent rounded-full">{children}</div>
      </div>
    );
  }
);
SpinningBorder.displayName = "SpinningBorder";

export { SpinningBorder };