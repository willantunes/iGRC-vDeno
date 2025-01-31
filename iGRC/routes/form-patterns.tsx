import { DocPage } from "../components/ui/layout/doc-page.tsx";
import { Button } from "../components/ui/button.tsx";
import { Alert } from "../components/ui/alert.tsx";

export default function FormPatternsPage() {
  return (
    <DocPage
      title="Form Patterns"
      description="Common form patterns and best practices for collecting user input."
    >
      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Basic Form Layout</h2>
          <div class="max-w-xl">
            <form class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Inline Form</h2>
          <form class="flex gap-4 items-end">
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Search
              </label>
              <input
                type="search"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Search..."
              />
            </div>
            <Button type="submit">Search</Button>
          </form>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Form Validation</h2>
          <div class="max-w-xl space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                class="mt-1 block w-full rounded-md border-red-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                aria-invalid="true"
                aria-describedby="username-error"
              />
              <p class="mt-1 text-sm text-red-600" id="username-error">
                Username is already taken
              </p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                class="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                value="valid@example.com"
              />
              <p class="mt-1 text-sm text-green-600">
                Email is valid
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Complex Form Controls</h2>
          <div class="max-w-xl space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Select Option
              </label>
              <select class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Multiple Select
              </label>
              <select multiple class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Checkbox Group
              </label>
              <div class="mt-2 space-y-2">
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label class="ml-2 text-sm text-gray-700">Option 1</label>
                </div>
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label class="ml-2 text-sm text-gray-700">Option 2</label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Usage Guidelines</h2>
          <div class="prose max-w-none">
            <h3>Form Layout</h3>
            <ul>
              <li>Use consistent spacing between form elements</li>
              <li>Group related fields together</li>
              <li>Align labels and inputs consistently</li>
              <li>Consider mobile-friendly layouts</li>
            </ul>

            <h3>Validation</h3>
            <ul>
              <li>Provide immediate feedback when possible</li>
              <li>Use clear error messages</li>
              <li>Indicate required fields</li>
              <li>Show validation state clearly</li>
            </ul>

            <h3>Accessibility</h3>
            <ul>
              <li>Use proper label associations</li>
              <li>Provide error messages using aria-describedby</li>
              <li>Ensure keyboard navigation works</li>
              <li>Use appropriate ARIA attributes</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
} 