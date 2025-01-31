import { JSX } from "preact";
import { cn } from "../../lib/utils.ts";

interface BadgeProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "error";
}

export function Badge({ variant = "default", class: className, ...props }: BadgeProps) {
  const variantClasses = {
    default: "bg-gray-200 text-gray-800",
    success: "bg-green-200 text-green-800",
    warning: "bg-yellow-200 text-yellow-800",
    error: "bg-red-200 text-red-800",
  };

  return (
    <span
      class={cn("inline-flex items-center rounded-full px-2 py-1 text-sm font-medium", variantClasses[variant], className)}
      {...props}
    />
  );
} 