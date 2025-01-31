import { JSX } from "preact";
import { cn } from "../../lib/utils.ts";

interface CardProps {
  class?: string;
  children: JSX.Element | JSX.Element[] | string;
}

export function Card({ class: className, ...props }: CardProps) {
  return (
    <div class={cn("bg-white rounded-lg border", className)} {...props} />
  );
}

Card.Header = function CardHeader(props: CardProps) {
  return <div class={cn("p-6", props.class)} {...props} />;
};

Card.Title = function CardTitle(props: CardProps) {
  return <h3 class={cn("text-lg font-semibold", props.class)} {...props} />;
};

Card.Description = function CardDescription(props: CardProps) {
  return <p class={cn("text-sm text-gray-500", props.class)} {...props} />;
};

Card.Content = function CardContent(props: CardProps) {
  return <div class={cn("p-6 pt-0", props.class)} {...props} />;
}; 