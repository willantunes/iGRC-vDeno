import { JSX } from "preact";
import { cn } from "../../lib/utils.ts";

interface ButtonProps {
  variant?: "primary" | "secondary" | "danger" | "destructive" | "outline" | "ghost" | "link";
  class?: string;
  children?: JSX.Element | string;
  onClick?: JSX.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  tabIndex?: number;
}

export function Button({ variant = "primary", size = "md", class: className, children, loading, ...props }: ButtonProps) {
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
    destructive: "bg-red-700 text-white hover:bg-red-800",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    ghost: "bg-transparent text-blue-500 hover:bg-blue-100",
    link: "bg-transparent text-blue-500 hover:underline p-0",
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      class={cn(sizeClasses[size], variantClasses[variant], className)}
      disabled={loading}
      {...props}
    >
      {loading ? <span class="material-icons animate-spin">refresh</span> : children}
    </button>
  );
} 