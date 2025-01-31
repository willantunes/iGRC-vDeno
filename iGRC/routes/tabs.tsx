import { DocPage } from "../components/ui/layout/doc-page.tsx";
import { Alert } from "../components/ui/alert.tsx";

export default function TabsPage() {
  return (
    <DocPage
      title="Tabs"
      description="Tab patterns for organizing and switching between related content sections."
    >
      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Basic Tabs</h2>
          <div class="border-b border-gray-200">
            <nav class="-mb-px flex space-x-8">
              <a
                href="#"
                class="border-blue-500 text-blue-600 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
              >
                Tab 1
              </a>
              <a
                href="#"
                class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
              >
                Tab 2
              </a>
              <a
                href="#"
                class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
              >
                Tab 3
              </a>
            </nav>
          </div>
          <div class="mt-4 p-4 bg-gray-50 rounded-lg">
            Content for Tab 1
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Tab Variants</h2>
          <div class="space-y-8">
            <div>
              <h3 class="text-lg font-medium mb-4">Pill Tabs</h3>
              <div class="flex space-x-2 p-1 bg-gray-100 rounded-lg">
                <button class="px-3 py-1.5 text-sm font-medium text-white bg-blue-500 rounded-md">
                  Tab 1
                </button>
                <button class="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md">
                  Tab 2
                </button>
                <button class="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md">
                  Tab 3
                </button>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-medium mb-4">Vertical Tabs</h3>
              <div class="flex">
                <div class="w-48 space-y-1">
                  <button class="w-full px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg">
                    Tab 1
                  </button>
                  <button class="w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                    Tab 2
                  </button>
                  <button class="w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                    Tab 3
                  </button>
                </div>
                <div class="ml-4 p-4 flex-1 bg-gray-50 rounded-lg">
                  Content for Tab 1
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Usage Guidelines</h2>
          <div class="prose max-w-none">
            <h3>When to Use Tabs</h3>
            <ul>
              <li>To organize related content into sections</li>
              <li>When content can be viewed independently</li>
              <li>To reduce cognitive load</li>
              <li>For switching between different views</li>
            </ul>

            <h3>Best Practices</h3>
            <ul>
              <li>Use clear, concise tab labels</li>
              <li>Maintain consistent tab ordering</li>
              <li>Show active state clearly</li>
              <li>Consider mobile interactions</li>
            </ul>

            <h3>Accessibility</h3>
            <ul>
              <li>Use proper ARIA roles (tablist, tab, tabpanel)</li>
              <li>Support keyboard navigation</li>
              <li>Indicate selected state</li>
              <li>Maintain focus management</li>
            </ul>

            <Alert variant="info">
              Avoid using tabs when content needs to be compared or viewed simultaneously.
            </Alert>
          </div>
        </section>
      </div>
    </DocPage>
  );
} 