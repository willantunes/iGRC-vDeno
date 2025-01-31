import { JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { Button } from "./button.tsx";
import { icons } from "./icons.tsx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: JSX.Element;
  footer?: JSX.Element;
}

export function Modal({ isOpen, onClose, title, children, footer }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] flex flex-col">
        <div class="flex justify-between items-center p-4 border-b">
          <h2 class="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} class="text-gray-500 hover:text-gray-700">
            {icons.Close()}
          </button>
        </div>
        <div class="p-4 overflow-y-auto">{children}</div>
        {footer && <div class="p-4 border-t">{footer}</div>}
      </div>
    </div>
  );
} 