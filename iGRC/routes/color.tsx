import { DocPage } from "../components/ui/layout/doc-page.tsx";

export default function ColorPage() {
  const colors = {
    primary: [
      { name: "blue-50", hex: "#eff6ff" },
      { name: "blue-100", hex: "#dbeafe" },
      { name: "blue-500", hex: "#3b82f6" },
      { name: "blue-600", hex: "#2563eb" },
      { name: "blue-700", hex: "#1d4ed8" },
    ],
    gray: [
      { name: "gray-50", hex: "#f9fafb" },
      { name: "gray-100", hex: "#f3f4f6" },
      { name: "gray-500", hex: "#6b7280" },
      { name: "gray-600", hex: "#4b5563" },
      { name: "gray-900", hex: "#111827" },
    ],
    success: [
      { name: "green-50", hex: "#f0fdf4" },
      { name: "green-100", hex: "#dcfce7" },
      { name: "green-500", hex: "#22c55e" },
      { name: "green-600", hex: "#16a34a" },
      { name: "green-700", hex: "#15803d" },
    ],
    warning: [
      { name: "yellow-50", hex: "#fefce8" },
      { name: "yellow-100", hex: "#fef9c3" },
      { name: "yellow-500", hex: "#eab308" },
      { name: "yellow-600", hex: "#ca8a04" },
      { name: "yellow-700", hex: "#a16207" },
    ],
    error: [
      { name: "red-50", hex: "#fef2f2" },
      { name: "red-100", hex: "#fee2e2" },
      { name: "red-500", hex: "#ef4444" },
      { name: "red-600", hex: "#dc2626" },
      { name: "red-700", hex: "#b91c1c" },
    ],
  };

  return (
    <DocPage
      title="Colors"
      description="Color palette and usage guidelines for maintaining consistent visual design."
    >
      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Primary Colors</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {colors.primary.map((color) => (
              <div key={color.name} class="space-y-2">
                <div
                  class="h-24 rounded-lg"
                  style={{ backgroundColor: color.hex }}
                />
                <div>
                  <p class="font-medium">{color.name}</p>
                  <p class="text-sm text-gray-500">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Neutral Colors</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {colors.gray.map((color) => (
              <div key={color.name} class="space-y-2">
                <div
                  class="h-24 rounded-lg"
                  style={{ backgroundColor: color.hex }}
                />
                <div>
                  <p class="font-medium">{color.name}</p>
                  <p class="text-sm text-gray-500">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Semantic Colors</h2>
          <div class="space-y-8">
            <div>
              <h3 class="text-lg font-medium mb-4">Success</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {colors.success.map((color) => (
                  <div key={color.name} class="space-y-2">
                    <div
                      class="h-24 rounded-lg"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p class="font-medium">{color.name}</p>
                      <p class="text-sm text-gray-500">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 class="text-lg font-medium mb-4">Warning</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {colors.warning.map((color) => (
                  <div key={color.name} class="space-y-2">
                    <div
                      class="h-24 rounded-lg"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p class="font-medium">{color.name}</p>
                      <p class="text-sm text-gray-500">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 class="text-lg font-medium mb-4">Error</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {colors.error.map((color) => (
                  <div key={color.name} class="space-y-2">
                    <div
                      class="h-24 rounded-lg"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p class="font-medium">{color.name}</p>
                      <p class="text-sm text-gray-500">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Usage Guidelines</h2>
          <div class="prose max-w-none">
            <h3>Primary Colors</h3>
            <ul>
              <li>Use blue-500 as the main brand color</li>
              <li>Use lighter shades for backgrounds and hover states</li>
              <li>Use darker shades for text and interactive elements</li>
            </ul>

            <h3>Neutral Colors</h3>
            <ul>
              <li>Use for text, borders, and subtle backgrounds</li>
              <li>Maintain sufficient contrast for accessibility</li>
              <li>Use darker shades for important text</li>
            </ul>

            <h3>Semantic Colors</h3>
            <ul>
              <li>Use success colors for positive actions and feedback</li>
              <li>Use warning colors for cautionary messages</li>
              <li>Use error colors for critical actions and errors</li>
            </ul>

            <h3>Accessibility</h3>
            <ul>
              <li>Ensure text meets WCAG 2.1 contrast requirements</li>
              <li>Don't rely solely on color to convey meaning</li>
              <li>Test color combinations for color blindness</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
} 