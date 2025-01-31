import { DocPage } from "../components/ui/layout/doc-page.tsx";

export default function ShadowPage() {
  const shadows = [
    { name: "shadow-sm", class: "shadow-sm" },
    { name: "shadow", class: "shadow" },
    { name: "shadow-md", class: "shadow-md" },
    { name: "shadow-lg", class: "shadow-lg" },
    { name: "shadow-xl", class: "shadow-xl" },
    { name: "shadow-2xl", class: "shadow-2xl" },
    { name: "shadow-inner", class: "shadow-inner" },
  ];

  return (
    <DocPage
      title="Shadows"
      description="Shadow utilities for adding depth and elevation to components."
    >
      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Shadow Sizes</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
            {shadows.map((shadow) => (
              <div key={shadow.name} class="space-y-2">
                <div
                  class={`${shadow.class} h-24 w-full bg-white rounded-lg`}
                ></div>
                <p class="text-sm font-medium">{shadow.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Interactive Shadows</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-2">
              <div class="transition-shadow duration-300 shadow hover:shadow-lg h-24 w-full bg-white rounded-lg"></div>
              <p class="text-sm font-medium">shadow → shadow-lg on hover</p>
            </div>
            <div class="space-y-2">
              <div class="transition-shadow duration-300 shadow-md hover:shadow-xl h-24 w-full bg-white rounded-lg"></div>
              <p class="text-sm font-medium">shadow-md → shadow-xl on hover</p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Colored Shadows</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="space-y-2">
              <div class="shadow-lg shadow-blue-500/50 h-24 w-full bg-white rounded-lg"></div>
              <p class="text-sm font-medium">shadow-blue-500/50</p>
            </div>
            <div class="space-y-2">
              <div class="shadow-lg shadow-red-500/50 h-24 w-full bg-white rounded-lg"></div>
              <p class="text-sm font-medium">shadow-red-500/50</p>
            </div>
            <div class="space-y-2">
              <div class="shadow-lg shadow-green-500/50 h-24 w-full bg-white rounded-lg"></div>
              <p class="text-sm font-medium">shadow-green-500/50</p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Usage Guidelines</h2>
          <div class="prose max-w-none">
            <h3>Elevation Hierarchy</h3>
            <ul>
              <li>Use larger shadows for elements higher in the visual hierarchy</li>
              <li>Use smaller shadows for subtle depth</li>
              <li>Be consistent with shadow sizes across similar components</li>
            </ul>

            <h3>Interactive Elements</h3>
            <ul>
              <li>Use shadow transitions for hover states</li>
              <li>Consider active state shadows</li>
              <li>Maintain consistent interaction patterns</li>
            </ul>

            <h3>Performance</h3>
            <ul>
              <li>Use box-shadow over drop-shadow for better performance</li>
              <li>Limit the number of shadowed elements</li>
              <li>Consider reducing shadow complexity on mobile</li>
            </ul>

            <h3>Accessibility</h3>
            <ul>
              <li>Don't rely solely on shadows for conveying information</li>
              <li>Ensure sufficient contrast with backgrounds</li>
              <li>Consider reduced motion preferences</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
} 