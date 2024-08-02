// import * as React from "react";
import { icons } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/utils";

import { Icon } from "./icon";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSuffixClick?: () => void;
  onPrefixClick?: () => void;
  suffixClass?: string;
  prefixClass?: string;
  prefix?: keyof typeof icons;
  suffix?: keyof typeof icons;
  error?: any;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      suffix,
      onSuffixClick,
      suffixClass,
      prefix,
      onPrefixClick,
      prefixClass,
      type,
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex cursor-pointer items-center pl-2">
          {prefix && (
            <Icon
              name={prefix}
              onClick={onPrefixClick}
              className={cn("h-6 w-6", prefixClass)}
            />
          )}
        </div>
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-zinc-900 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-300 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-zinc-900 disabled:cursor-not-allowed disabled:opacity-50",
            prefix && "pl-8",
            suffix && "pr-8",
            // !password && "uppercase",
            className
          )}
          ref={ref}
          {...props}
        />
        <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3">
          {suffix && (
            <Icon
              name={suffix}
              onClick={onSuffixClick}
              className={cn("h-5 w-5", suffixClass)}
            />
          )}
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
