import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[150px] w-full rounded-md border dark:border-netu-600/50 border-netu-900 bg-transparent px-3 py-2 text-p shadow-sm mb:placeholder:text-[15px] tb:placeholder:text-[15px] dark:placeholder:text-netu-600 dark:focus-visible:outline-none focus-visible:outline-none dark:focus-visible:ring-1 dark:focus-visible:border-accent-default focus-visible:ring-1 focus-visible:border-accent-default disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-netu-600 resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
