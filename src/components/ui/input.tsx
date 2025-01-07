import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-md border dark:border-netu-600/50 dark:focus:border-accent-default bg-transparent px-3 py-1 text-sm-cap shadow-sm transition-colors file:border-0 file:bg-transparent file:text-p file:font-medium dark:file:text-slate-950 mb:placeholder:text-[15px] tb:placeholder:text-[15px] dark:placeholder:text-netu-600  focus-visible:outline-none focus-visible:ring-1 dark:focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 border-slate-800 file:text-slate-50 placeholder:text-slate-400 focus-visible:ring-slate-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
