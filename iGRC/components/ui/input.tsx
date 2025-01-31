import { JSX } from "preact";
import { cn } from "../../lib/utils.ts";

export type InputProps = JSX.HTMLAttributes<HTMLInputElement> & {
  type?: string;
  placeholder?: string;
};

export function Input({ class: className, ...props }: InputProps) {
  return (
    <input
      class={cn("w-full h-12 px-4 border border-gray-200 rounded-lg focus:border-brand-blue focus:ring-brand-blue/20", className)}
      {...props}
    />
  );
} 