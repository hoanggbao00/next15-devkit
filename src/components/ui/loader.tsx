import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {}

function Loader({ className, ...props }: LoaderProps) {
  return (
    <div
      className={cn("flex items-center justify-center gap-1", className)}
      {...props}
    >
      <div className="size-1.5 rounded-full bg-current animate-bounce" />
      <div className="size-1.5 rounded-full bg-current animate-bounce delay-100" />
      <div className="size-1.5 rounded-full bg-current animate-bounce delay-200" />
    </div>
  );
}

export default Loader;
