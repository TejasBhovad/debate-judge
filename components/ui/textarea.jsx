import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "placeholder:text-muted-foreground flex min-h-[80px] w-full rounded-sm border border-utility bg-base px-3 py-2 text-sm ring-offset-utility focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-utility focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
