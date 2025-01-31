import { DocPage } from "../components/ui/layout/doc-page.tsx";
import { Button } from "../components/ui/button.tsx";

export default function LayoutsPage() {
  return (
    <DocPage
      title="Layout Patterns"
      description="Common layout patterns and structures for building consistent interfaces."
    >
      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">App Shell Layout</h2>
          <div class="border rounded-lg overflow-hidden">
            <div class="bg-gray-100 p-4 border-b">Header</div>
            <div class="flex">
              <div class="w-64 p-4 border-r">Sidebar</div>
              <div class="flex-1 p-4">Main Content Area</div>
            </div>
            <div class="bg-gray-100 p-4 border-t">Footer</div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Card Grid Layout</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div class="p-4 border rounded-lg">
                <h3 class="font-medium mb-2">Card {i}</h3>
                <p class="text-gray-600">Sample content for card {i}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Split Screen Layout</h2>
          <div class="flex border rounded-lg overflow-hidden">
            <div class="w-1/2 p-8 bg-gray-100">
              <h3 class="text-xl font-medium mb-4">Left Panel</h3>
              <p class="text-gray-600">Content for the left panel</p>
            </div>
            <div class="w-1/2 p-8">
              <h3 class="text-xl font-medium mb-4">Right Panel</h3>
              <p class="text-gray-600">Content for the right panel</p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Stack Layout</h2>
          <div class="space-y-4">
            <div class="p-4 border rounded-lg">Section 1</div>
            <div class="p-4 border rounded-lg">Section 2</div>
            <div class="p-4 border rounded-lg">Section 3</div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Holy Grail Layout</h2>
          <div class="border rounded-lg overflow-hidden">
            <header class="bg-gray-100 p-4">Header</header>
            <div class="flex">
              <nav class="w-64 p-4 border-r">Navigation</nav>
              <main class="flex-1 p-4">Main Content</main>
              <aside class="w-64 p-4 border-l">Sidebar</aside>
            </div>
            <footer class="bg-gray-100 p-4">Footer</footer>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Usage Guidelines</h2>
          <div class="prose max-w-none">
            <h3>When to use</h3>
            <ul>
              <li>App Shell: For complex applications with navigation</li>
              <li>Card Grid: For collections of similar content</li>
              <li>Split Screen: For comparison or side-by-side content</li>
              <li>Stack: For sequential or hierarchical content</li>
              <li>Holy Grail: For content-heavy applications</li>
            </ul>

            <h3>Best practices</h3>
            <ul>
              <li>Consider responsive behavior</li>
              <li>Maintain consistent spacing</li>
              <li>Use appropriate layout for content type</li>
              <li>Ensure accessibility</li>
              <li>Keep layouts simple and intuitive</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
} 