import { DocPage } from "../components/ui/layout/doc-page.tsx";
import { Button } from "../components/ui/button.tsx";

export default function TooltipsPage() {
  return (
    <DocPage
      title="Tooltips"
      description="Tooltip patterns for providing additional context and information."
    >
      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Basic Tooltips</h2>
          <div class="space-y-8">
            <div class="flex gap-4 p-8">
              <div class="relative group inline-flex">
                <Button>Hover me</Button>
                <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm bg-gray-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Simple tooltip
                </div>
              </div>

              <div class="relative group inline-flex">
                <Button variant="outline">With arrow</Button>
                <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm bg-gray-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Tooltip with arrow
                  <div class="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Tooltip Positions</h2>
          <div class="grid grid-cols-2 gap-8 p-16">
            <div class="relative group inline-flex justify-center">
              <Button>Top tooltip</Button>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm bg-gray-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Top position
              </div>
            </div>

            <div class="relative group inline-flex justify-center">
              <Button>Bottom tooltip</Button>
              <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 text-sm bg-gray-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Bottom position
              </div>
            </div>

            <div class="relative group inline-flex justify-center">
              <Button>Left tooltip</Button>
              <div class="absolute top-1/2 -left-2 transform -translate-y-1/2 -translate-x-full px-3 py-1 text-sm bg-gray-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Left position
              </div>
            </div>

            <div class="relative group inline-flex justify-center">
              <Button>Right tooltip</Button>
              <div class="absolute top-1/2 -right-2 transform -translate-y-1/2 translate-x-full px-3 py-1 text-sm bg-gray-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Right position
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Rich Tooltips</h2>
          <div class="space-y-4 p-8">
            <div class="relative group inline-flex">
              <Button>With title and description</Button>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 w-64 bg-gray-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 class="font-medium mb-1">Tooltip Title</h3>
                <p class="text-sm text-gray-300">
                  This is a more detailed description that can span multiple lines if needed.
                </p>
              </div>
            </div>

            <div class="relative group inline-flex">
              <Button variant="outline">With icon</Button>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 bg-gray-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 whitespace-nowrap">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Tooltip with icon</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Usage Guidelines</h2>
          <div class="prose max-w-none">
            <h3>When to Use Tooltips</h3>
            <ul>
              <li>To provide additional context</li>
              <li>For icon-only buttons</li>
              <li>To explain functionality</li>
              <li>For keyboard shortcuts</li>
            </ul>

            <h3>Best Practices</h3>
            <ul>
              <li>Keep content brief and focused</li>
              <li>Position tooltips consistently</li>
              <li>Consider touch interactions</li>
              <li>Avoid hiding essential information</li>
            </ul>

            <h3>Accessibility</h3>
            <ul>
              <li>Use aria-label or aria-describedby</li>
              <li>Support keyboard focus</li>
              <li>Ensure sufficient contrast</li>
              <li>Consider hover and focus states</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
} 