import { JSX } from "preact";
import { useState } from "preact/hooks";
import { cn } from "../../lib/utils.ts";

interface TooltipProps {
  content: string;
  children: JSX.Element;
  position?: "top" | "right" | "bottom" | "left";
  class?: string;
}

const positionClasses = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
};

export function Tooltip({ content, children, position = "top", class: className }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      class="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          class={cn(
            "absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded pointer-events-none whitespace-nowrap",
            positionClasses[position],
            className
          )}
          role="tooltip"
        >
          {content}
          <div
            class={cn(
              "absolute w-2 h-2 bg-gray-900 transform rotate-45",
              position === "top" && "bottom-[-4px] left-1/2 -translate-x-1/2",
              position === "right" && "left-[-4px] top-1/2 -translate-y-1/2",
              position === "bottom" && "top-[-4px] left-1/2 -translate-x-1/2",
              position === "left" && "right-[-4px] top-1/2 -translate-y-1/2"
            )}
          />
        </div>
      )}
    </div>
  );
} 