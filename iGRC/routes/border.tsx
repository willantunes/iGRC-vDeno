import { DocPage } from "../components/ui/layout/doc-page.tsx";

export default function BorderPage() {
  const borderWidths = [
    { name: "border", class: "border" },
    { name: "border-2", class: "border-2" },
    { name: "border-4", class: "border-4" },
    { name: "border-8", class: "border-8" },
  ];

  const borderStyles = [
    { name: "solid", class: "border-solid" },
    { name: "dashed", class: "border-dashed" },
    { name: "dotted", class: "border-dotted" },
    { name: "double", class: "border-double" },
  ];

  const borderRadii = [
    { name: "rounded-none", class: "rounded-none" },
    { name: "rounded-sm", class: "rounded-sm" },
    { name: "rounded", class: "rounded" },
    { name: "rounded-md", class: "rounded-md" },
    { name: "rounded-lg", class: "rounded-lg" },
    { name: "rounded-xl", class: "rounded-xl" },
    { name: "rounded-2xl", class: "rounded-2xl" },
    { name: "rounded-full", class: "rounded-full" },
  ];

  return (
    <DocPage
      title="Borders"
      description="Border styles, widths, and radius utilities for component boundaries."
    >
      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Border Widths</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            {borderWidths.map((border) => (
              <div key={border.name} class="space-y-2">
                <div
                  class={`${border.class} h-16 w-full bg-white border-blue-500`}
                ></div>
                <p class="text-sm font-medium">{border.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Border Styles</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            {borderStyles.map((style) => (
              <div key={style.name} class="space-y-2">
                <div
                  class={`border-4 ${style.class} h-16 w-full bg-white border-blue-500`}
                ></div>
                <p class="text-sm font-medium">{style.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Border Radius</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            {borderRadii.map((radius) => (
              <div key={radius.name} class="space-y-2">
                <div
                  class={`border-2 ${radius.class} h-16 w-full bg-white border-blue-500`}
                ></div>
                <p class="text-sm font-medium">{radius.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Border Colors</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="space-y-2">
              <div class="border-2 border-blue-500 h-16 w-full bg-white"></div>
              <p class="text-sm font-medium">border-blue-500</p>
            </div>
            <div class="space-y-2">
              <div class="border-2 border-gray-300 h-16 w-full bg-white"></div>
              <p class="text-sm font-medium">border-gray-300</p>
            </div>
            <div class="space-y-2">
              <div class="border-2 border-red-500 h-16 w-full bg-white"></div>
              <p class="text-sm font-medium">border-red-500</p>
            </div>
            <div class="space-y-2">
              <div class="border-2 border-green-500 h-16 w-full bg-white"></div>
              <p class="text-sm font-medium">border-green-500</p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Usage Guidelines</h2>
          <div class="prose max-w-none">
            <h3>Border Width</h3>
            <ul>
              <li>Use thinner borders for subtle separation</li>
              <li>Use thicker borders for emphasis</li>
              <li>Be consistent with border widths in similar contexts</li>
            </ul>

            <h3>Border Radius</h3>
            <ul>
              <li>Use consistent radius values for similar components</li>
              <li>Consider larger radius for floating elements</li>
              <li>Use rounded-full for circular elements</li>
            </ul>

            <h3>Border Colors</h3>
            <ul>
              <li>Use subtle colors for default states</li>
              <li>Use brand colors for emphasis</li>
              <li>Consider semantic colors for status indicators</li>
            </ul>

            <h3>Accessibility</h3>
            <ul>
              <li>Ensure sufficient contrast for border colors</li>
              <li>Don't rely solely on borders for state indication</li>
              <li>Consider focus states for interactive elements</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
} 