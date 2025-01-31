import { JSX } from "preact";
import { useState } from "preact/hooks";
import { cn } from "../../lib/utils.ts";

interface Tab {
  id: string;
  label: string;
  content: JSX.Element;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  class?: string;
}

export function Tabs({ tabs, defaultTab, class: className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);

  return (
    <div class={className}>
      <div class="border-b">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              class={cn(
                "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm",
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              )}
              aria-current={activeTab === tab.id ? "page" : undefined}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div class="mt-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
} 