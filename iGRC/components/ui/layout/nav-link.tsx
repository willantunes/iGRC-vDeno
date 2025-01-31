import { JSX, VNode } from "preact";
import { cn } from "../../../lib/utils.ts";

interface NavLinkProps {
  href: string;
  icon: string;
  children: string;
  class?: string;
}

export function NavLink({ href, icon, children, class: className, ...props }: NavLinkProps) {
  return (
    <a
      href={href}
      class={cn(
        "flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-100",
        className
      )}
      {...props}
    >
      <span class="material-icons">{icon}</span>
      <span>{children}</span>
    </a>
  );
} 