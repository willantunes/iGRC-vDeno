import { JSX } from "preact";
import { BaseLayout } from "./base-layout.tsx";

interface DocPageProps {
  title: string;
  description?: string;
  children: JSX.Element;
}

export function DocPage({ title, description, children }: DocPageProps) {
  return (
    <BaseLayout>
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold mb-4">{title}</h1>
        {description && <p class="text-gray-600 mb-8">{description}</p>}
        {children}
      </div>
    </BaseLayout>
  );
} 