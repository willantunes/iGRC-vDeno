import { DocPage } from "../components/ui/layout/doc-page.tsx";
import { Alert } from "../components/ui/alert.tsx";
import { Button } from "../components/ui/button.tsx";

export default function FeedbackPage() {
  return (
    <DocPage
      title="Feedback Patterns"
      description="Patterns for providing feedback and status information to users."
    >
      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Alert Messages</h2>
          <div class="space-y-4">
            <Alert variant="success" title="Success">
              Your changes have been saved successfully.
            </Alert>
            <Alert variant="error" title="Error">
              There was a problem processing your request.
            </Alert>
            <Alert variant="warning" title="Warning">
              Your session will expire in 5 minutes.
            </Alert>
            <Alert variant="info" title="Info">
              A new version is available.
            </Alert>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Loading States</h2>
          <div class="space-y-4">
            <div class="flex gap-4">
              <Button loading>Loading</Button>
              <Button variant="outline" loading>Processing</Button>
            </div>
            <div class="p-8 flex justify-center">
              <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Progress Indicators</h2>
          <div class="space-y-6">
            <div>
              <div class="flex justify-between mb-1">
                <span class="text-sm font-medium">Progress</span>
                <span class="text-sm font-medium">70%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full" style="width: 70%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span class="text-sm font-medium">Steps</span>
                <span class="text-sm font-medium">2 of 4</span>
              </div>
              <div class="flex gap-2">
                <div class="flex-1 h-2 bg-blue-500 rounded-full"></div>
                <div class="flex-1 h-2 bg-blue-500 rounded-full"></div>
                <div class="flex-1 h-2 bg-gray-200 rounded-full"></div>
                <div class="flex-1 h-2 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Empty States</h2>
          <div class="space-y-4">
            <div class="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <div class="text-gray-500 mb-4">No items found</div>
              <Button variant="outline">Add Item</Button>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Usage Guidelines</h2>
          <div class="prose max-w-none">
            <h3>Alert Messages</h3>
            <ul>
              <li>Use appropriate colors for different message types</li>
              <li>Keep messages clear and concise</li>
              <li>Position alerts where users will notice them</li>
              <li>Allow dismissal when appropriate</li>
            </ul>

            <h3>Loading States</h3>
            <ul>
              <li>Show loading indicators for operations over 300ms</li>
              <li>Use appropriate size loading indicators</li>
              <li>Maintain layout stability during loading</li>
              <li>Consider skeleton screens for content loading</li>
            </ul>

            <h3>Progress Indicators</h3>
            <ul>
              <li>Show progress for long operations</li>
              <li>Use determinate indicators when progress is known</li>
              <li>Use indeterminate indicators when progress is unknown</li>
              <li>Provide clear status information</li>
            </ul>

            <h3>Empty States</h3>
            <ul>
              <li>Provide helpful information about why content is missing</li>
              <li>Include actions users can take</li>
              <li>Use appropriate imagery or illustrations</li>
              <li>Maintain consistent layout with content states</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
} 