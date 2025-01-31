import { DocPage } from "../components/ui/layout/doc-page.tsx";
import { Alert } from "../components/ui/alert.tsx";
import { Button } from "../components/ui/button.tsx";

export default function AlertsPage() {
  return (
    <DocPage
      title="Alerts"
      description="Alert patterns for communicating important messages and feedback."
    >
      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Alert Types</h2>
          <div class="space-y-4">
            <Alert variant="info" title="Information">
              This is an informational message.
            </Alert>
            <Alert variant="success" title="Success">
              Operation completed successfully.
            </Alert>
            <Alert variant="warning" title="Warning">
              Please review your changes before continuing.
            </Alert>
            <Alert variant="error" title="Error">
              An error occurred while processing your request.
            </Alert>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Alert with Actions</h2>
          <div class="space-y-4">
            <div class="rounded-md bg-blue-50 p-4">
              <div class="flex">
                <div class="flex-1">
                  <h3 class="text-sm font-medium text-blue-800">
                    Update Available
                  </h3>
                  <div class="mt-2 text-sm text-blue-700">
                    <p>A new version is available. Would you like to update now?</p>
                  </div>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <Button size="sm">Update</Button>
                </div>
              </div>
            </div>

            <div class="rounded-md bg-yellow-50 p-4">
              <div class="flex">
                <div class="flex-1">
                  <h3 class="text-sm font-medium text-yellow-800">
                    Attention Required
                  </h3>
                  <div class="mt-2 text-sm text-yellow-700">
                    <p>Your subscription will expire soon. Renew now to avoid service interruption.</p>
                  </div>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <Button variant="warning" size="sm">Renew</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Dismissible Alerts</h2>
          <div class="space-y-4">
            <div class="rounded-md bg-green-50 p-4">
              <div class="flex">
                <div class="flex-1">
                  <h3 class="text-sm font-medium text-green-800">
                    Changes Saved
                  </h3>
                  <div class="mt-2 text-sm text-green-700">
                    <p>Your changes have been saved successfully.</p>
                  </div>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    class="inline-flex text-green-800 hover:text-green-600"
                  >
                    <span class="sr-only">Dismiss</span>
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Usage Guidelines</h2>
          <div class="prose max-w-none">
            <h3>When to Use Alerts</h3>
            <ul>
              <li>To communicate important messages</li>
              <li>For system status updates</li>
              <li>To show success/error feedback</li>
              <li>For time-sensitive information</li>
            </ul>

            <h3>Best Practices</h3>
            <ul>
              <li>Use appropriate colors for different alert types</li>
              <li>Keep messages clear and concise</li>
              <li>Include actions when relevant</li>
              <li>Allow dismissal when appropriate</li>
            </ul>

            <h3>Accessibility</h3>
            <ul>
              <li>Use proper ARIA roles</li>
              <li>Ensure sufficient color contrast</li>
              <li>Provide clear focus states</li>
              <li>Support keyboard interaction</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
} 