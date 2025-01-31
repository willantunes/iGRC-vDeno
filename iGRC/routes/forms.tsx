import { DocPage } from "../components/ui/layout/doc-page.tsx";
import { Button } from "../components/ui/button.tsx";

export default function FormsPage() {
  return (
    <DocPage
      title="Forms"
      description="Form components and patterns for collecting user input."
    >
      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Text Inputs</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-1">Default Input</label>
              <input
                type="text"
                class="w-full px-3 py-2 border rounded-md"
                placeholder="Enter text..."
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Disabled Input</label>
              <input
                type="text"
                disabled
                class="w-full px-3 py-2 border rounded-md bg-gray-50"
                value="Disabled input"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Select</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-1">Default Select</label>
              <select class="w-full px-3 py-2 border rounded-md">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Checkboxes</h2>
          <div class="space-y-2">
            <label class="flex items-center">
              <input type="checkbox" class="mr-2" />
              <span>Option 1</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" class="mr-2" />
              <span>Option 2</span>
            </label>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Radio Buttons</h2>
          <div class="space-y-2">
            <label class="flex items-center">
              <input type="radio" name="radio" class="mr-2" />
              <span>Option 1</span>
            </label>
            <label class="flex items-center">
              <input type="radio" name="radio" class="mr-2" />
              <span>Option 2</span>
            </label>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Form Example</h2>
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                class="w-full px-3 py-2 border rounded-md"
                placeholder="Enter your email..."
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                class="w-full px-3 py-2 border rounded-md"
                placeholder="Enter your password..."
              />
            </div>
            <div>
              <label class="flex items-center">
                <input type="checkbox" class="mr-2" />
                <span>Remember me</span>
              </label>
            </div>
            <Button>Submit</Button>
          </form>
        </section>
      </div>
    </DocPage>
  );
} 