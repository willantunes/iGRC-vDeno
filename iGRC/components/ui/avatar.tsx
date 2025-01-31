import { JSX } from "preact";
import { cn } from "../../lib/utils.ts";

interface AvatarProps extends JSX.HTMLAttributes<HTMLDivElement> {
  class?: string;
}

export function Avatar({ class: className, ...props }: AvatarProps) {
  return (
    <div class={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)} {...props} />
  );
}

Avatar.Image = function AvatarImage({ class: className, ...props }: JSX.HTMLAttributes<HTMLImageElement>) {
  return (
    <img
      class={cn("aspect-square h-full w-full", className)}
      {...props}
    />
  );
};

Avatar.Fallback = function AvatarFallback({ class: className, ...props }: AvatarProps) {
  return (
    <div
      class={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-brand-blue",
        className
      )}
      {...props}
    />
  );
}; 