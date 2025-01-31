import { JSX } from "preact";
import { cn } from "../../lib/utils.ts";
import { icons } from "./icons.tsx";

type AlertVariant = "info" | "success" | "warning" | "error";

interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: JSX.Element | string;
  class?: string;
  onClose?: () => void;
}

const variantClasses: Record<AlertVariant, string> = {
  info: "bg-blue-50 text-blue-800 border-blue-200",
  success: "bg-green-50 text-green-800 border-green-200",
  warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
  error: "bg-red-50 text-red-800 border-red-200",
};

const variantIcons: Record<AlertVariant, () => JSX.Element> = {
  info: icons.Info,
  success: icons.Success,
  warning: icons.Warning,
  error: icons.Error,
};

export function Alert({ variant = "info", title, children, class: className, onClose }: AlertProps) {
  const Icon = variantIcons[variant];

  return (
    <div
      class={cn(
        "flex gap-3 p-4 border rounded-lg",
        variantClasses[variant],
        className
      )}
      role="alert"
    >
      <Icon />
      <div class="flex-1">
        {title && <h3 class="font-medium mb-1">{title}</h3>}
        <div>{children}</div>
      </div>
      {onClose && (
        <button onClick={onClose} class="self-start">
          {icons.Close()}
        </button>
      )}
    </div>
  );
} 