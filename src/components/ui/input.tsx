import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "peer bg-gray w-full  border border-[#060808]/[0.28] h-[4.8rem] text-montserrat_regular_14 rounded-lg px-[1.6rem] pt-[1rem] text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary ",
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
