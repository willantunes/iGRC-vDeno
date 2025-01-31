import { JSX } from "preact";
import { cn } from "../../lib/utils.ts";

interface DropdownMenuProps {
  children: JSX.Element | JSX.Element[];
  class?: string;
}

export function DropdownMenu({ children }: DropdownMenuProps) {
  return <div class="relative">{children}</div>;
}

DropdownMenu.Trigger = function Trigger({ asChild, ...props }: { asChild?: boolean } & JSX.HTMLAttributes<HTMLButtonElement>) {
  return <button type="button" {...props} />;
};

DropdownMenu.Content = function Content({ class: className, align = "center", ...props }: DropdownMenuProps & { align?: "center" | "start" | "end" }) {
  return (
    <div
      class={cn(
        "absolute z-50 mt-2 min-w-[8rem] rounded-md border bg-white p-1 shadow-md",
        align === "end" && "right-0",
        className
      )}
      {...props}
    />
  );
};

DropdownMenu.Label = function Label({ class: className, ...props }: DropdownMenuProps) {
  return <div class={cn("px-2 py-1.5 text-sm font-semibold", className)} {...props} />;
};

DropdownMenu.Item = function Item({ class: className, ...props }: DropdownMenuProps) {
  return (
    <button
      class={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100",
        className
      )}
      {...props}
    />
  );
};

DropdownMenu.Separator = function Separator({ class: className }: { class?: string }) {
  return <div class={cn("my-1 h-px bg-gray-200", className)} />;
}; 