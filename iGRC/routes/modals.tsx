import { DocPage } from "../components/ui/layout/doc-page.tsx";
import { Button } from "../components/ui/button.tsx";
import { Alert } from "../components/ui/alert.tsx";

export default function ModalsPage() {
  return (
    <DocPage
      title="Modal Patterns"
      description="Guidelines for using modal dialogs and overlays effectively."
    >
      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Basic Modal</h2>
          <div class="max-w-xl">
            <div class="border rounded-lg p-6 space-y-4">
              <div class="flex justify-between items-center">
                <h3 class="text-lg font-medium">Modal Title</h3>
                <button class="text-gray-400 hover:text-gray-500">×</button>
              </div>
              <div class="py-4">
                <p class="text-gray-600">
                  This is the modal content. Modals should be used sparingly and only when necessary.
                </p>
              </div>
              <div class="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button>Confirm</Button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Modal Variants</h2>
          <div class="space-y-6">
            <div class="border rounded-lg p-6">
              <h3 class="text-lg font-medium mb-4">Confirmation Dialog</h3>
              <div class="space-y-4">
                <p class="text-gray-600">Are you sure you want to delete this item?</p>
                <div class="flex justify-end gap-3">
                  <Button variant="outline">Cancel</Button>
                  <Button variant="destructive">Delete</Button>
                </div>
              </div>
            </div>

            <div class="border rounded-lg p-6">
              <h3 class="text-lg font-medium mb-4">Form Dialog</h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div class="flex justify-end gap-3">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Usage Guidelines</h2>
          <div class="prose max-w-none">
            <h3>When to Use Modals</h3>
            <ul>
              <li>For important actions requiring user attention</li>
              <li>When immediate feedback is needed</li>
              <li>For self-contained workflows</li>
              <li>To prevent context switching</li>
            </ul>

            <h3>When Not to Use Modals</h3>
            <ul>
              <li>For complex, multi-step processes</li>
              <li>For content that requires scrolling</li>
              <li>When the action can be done inline</li>
              <li>For non-essential information</li>
            </ul>

            <h3>Accessibility</h3>
            <ul>
              <li>Trap focus within the modal</li>
              <li>Provide escape key functionality</li>
              <li>Use proper ARIA roles and attributes</li>
              <li>Ensure keyboard navigation</li>
            </ul>

            <Alert variant="info">
              Remember to maintain scroll position of the main content when the modal is closed.
            </Alert>
          </div>
        </section>
      </div>
    </DocPage>
  );
} 