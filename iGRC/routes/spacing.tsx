import { DocPage } from "../components/ui/layout/doc-page.tsx";

export default function SpacingPage() {
  const spacingSizes = [
    { name: "px", value: "1px", class: "p-px" },
    { name: "0.5", value: "0.125rem", class: "p-0.5" },
    { name: "1", value: "0.25rem", class: "p-1" },
    { name: "2", value: "0.5rem", class: "p-2" },
    { name: "4", value: "1rem", class: "p-4" },
    { name: "6", value: "1.5rem", class: "p-6" },
    { name: "8", value: "2rem", class: "p-8" },
    { name: "12", value: "3rem", class: "p-12" },
    { name: "16", value: "4rem", class: "p-16" },
  ];

  return (
    <DocPage
      title="Spacing"
      description="Spacing scales and utilities for consistent layouts and component spacing."
    >
      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Spacing Scale</h2>
          <div class="space-y-4">
            {spacingSizes.map((size) => (
              <div key={size.name} class="flex items-center gap-4">
                <div class="w-24">
                  <p class="font-medium">{size.name}</p>
                  <p class="text-sm text-gray-500">{size.value}</p>
                </div>
                <div class="flex-1">
                  <div class={`bg-blue-200 ${size.class}`}>
                    <div class="bg-blue-500 h-4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Margin Examples</h2>
          <div class="space-y-4 border p-4">
            <div class="bg-blue-100 p-4">
              <div class="bg-blue-500 h-8 mb-4"></div>
              <div class="bg-blue-500 h-8 mb-8"></div>
              <div class="bg-blue-500 h-8"></div>
            </div>
            <p class="text-sm text-gray-500">mb-4 and mb-8 examples</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Padding Examples</h2>
          <div class="space-y-4">
            <div class="flex gap-4">
              <div class="bg-blue-100 p-2">
                <div class="bg-blue-500 h-8 w-8"></div>
              </div>
              <div class="bg-blue-100 p-4">
                <div class="bg-blue-500 h-8 w-8"></div>
              </div>
              <div class="bg-blue-100 p-8">
                <div class="bg-blue-500 h-8 w-8"></div>
              </div>
            </div>
            <p class="text-sm text-gray-500">p-2, p-4, and p-8 examples</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Gap Examples</h2>
          <div class="space-y-4">
            <div class="flex gap-2 bg-blue-100 p-4">
              <div class="bg-blue-500 h-8 w-8"></div>
              <div class="bg-blue-500 h-8 w-8"></div>
              <div class="bg-blue-500 h-8 w-8"></div>
            </div>
            <div class="flex gap-4 bg-blue-100 p-4">
              <div class="bg-blue-500 h-8 w-8"></div>
              <div class="bg-blue-500 h-8 w-8"></div>
              <div class="bg-blue-500 h-8 w-8"></div>
            </div>
            <div class="flex gap-8 bg-blue-100 p-4">
              <div class="bg-blue-500 h-8 w-8"></div>
              <div class="bg-blue-500 h-8 w-8"></div>
              <div class="bg-blue-500 h-8 w-8"></div>
            </div>
            <p class="text-sm text-gray-500">gap-2, gap-4, and gap-8 examples</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Usage Guidelines</h2>
          <div class="prose max-w-none">
            <h3>Consistency</h3>
            <ul>
              <li>Use consistent spacing values throughout the application</li>
              <li>Follow the spacing scale for all measurements</li>
              <li>Use relative units (rem) instead of pixels</li>
            </ul>

            <h3>Layout Spacing</h3>
            <ul>
              <li>Use larger spacing values for major layout sections</li>
              <li>Use smaller spacing for related elements</li>
              <li>Consider responsive spacing adjustments</li>
            </ul>

            <h3>Component Spacing</h3>
            <ul>
              <li>Maintain consistent internal padding in components</li>
              <li>Use appropriate gaps between component elements</li>
              <li>Consider component hierarchy when spacing</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
} 