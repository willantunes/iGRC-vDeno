import { DocPage } from "../components/ui/layout/doc-page.tsx";
import { Alert } from "../components/ui/alert.tsx";
import { Button } from "../components/ui/button.tsx";

export default function AccessibilityPage() {
  return (
    <DocPage
      title="Accessibility Guidelines"
      description="Guidelines and best practices for creating accessible interfaces."
    >
      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Keyboard Navigation</h2>
          <div class="space-y-4">
            <p class="text-gray-600">
              All interactive elements should be accessible via keyboard navigation.
            </p>
            <div class="flex gap-4">
              <Button>Focusable Button</Button>
              <Button variant="outline" tabIndex={0}>Tab Index Example</Button>
              <a href="#" class="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                Focusable Link
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Color Contrast</h2>
          <div class="space-y-4">
            <Alert variant="info">
              Text should maintain a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text.
            </Alert>
            <div class="space-y-2">
              <div class="p-4 bg-gray-900 text-white">High contrast example</div>
              <div class="p-4 bg-gray-100 text-gray-900">Sufficient contrast example</div>
              <div class="p-4 bg-gray-100 text-gray-400">
                <span class="text-red-500">❌</span> Poor contrast example (avoid)
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">ARIA Labels</h2>
          <div class="space-y-4">
            <div class="flex gap-4">
              <button
                aria-label="Close dialog"
                class="p-2 hover:bg-gray-100 rounded-full"
              >
                {/* Icon would go here */}
                <span class="sr-only">Close</span>
              </button>
              <button
                aria-label="Save changes"
                class="p-2 hover:bg-gray-100 rounded-full"
              >
                {/* Icon would go here */}
                <span class="sr-only">Save</span>
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Form Accessibility</h2>
          <div class="space-y-4">
            <form class="space-y-4">
              <div>
                <label 
                  htmlFor="name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  aria-describedby="name-description"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
                <p 
                  id="name-description" 
                  class="mt-1 text-sm text-gray-500"
                >
                  Enter your full name
                </p>
              </div>
              <div>
                <label 
                  htmlFor="email"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  aria-required="true"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>
            </form>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Best Practices</h2>
          <div class="prose max-w-none">
            <h3>Semantic HTML</h3>
            <ul>
              <li>Use proper heading hierarchy (h1-h6)</li>
              <li>Use semantic elements (nav, main, article, etc.)</li>
              <li>Use lists for grouped content</li>
              <li>Use tables for tabular data</li>
            </ul>

            <h3>Focus Management</h3>
            <ul>
              <li>Ensure visible focus indicators</li>
              <li>Maintain logical tab order</li>
              <li>Trap focus in modals</li>
              <li>Skip to main content link</li>
            </ul>

            <h3>Images and Media</h3>
            <ul>
              <li>Provide alt text for images</li>
              <li>Captions for videos</li>
              <li>Transcripts for audio content</li>
              <li>No auto-playing media</li>
            </ul>

            <h3>Interactive Elements</h3>
            <ul>
              <li>Clear focus states</li>
              <li>Sufficient touch targets</li>
              <li>Error messages</li>
              <li>Success feedback</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
} 