import { BaseLayout } from "../components/ui/layout/base-layout.tsx";
import { Button } from "../components/ui/button.tsx";

export default function ButtonsPage() {
  return (
    <BaseLayout>
      <div>
        <h1 class="text-3xl font-bold mb-8">Buttons</h1>

        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-4">Variants</h2>
          <div class="flex gap-4 flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-4">Sizes</h2>
          <div class="flex gap-4 items-center flex-wrap">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-4">States</h2>
          <div class="flex gap-4 flex-wrap">
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
          </div>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-4">With Icons</h2>
          <div class="flex gap-4 flex-wrap">
            <Button leftIcon={<span class="material-icons">add</span>}>Add Item</Button>
            <Button rightIcon={<span class="material-icons">arrow_forward</span>}>Continue</Button>
            <Button leftIcon={<span class="material-icons">delete</span>} variant="danger">Delete</Button>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Usage Guidelines</h2>
          <div class="prose max-w-none">
            <h3>When to use</h3>
            <ul>
              <li>Use primary buttons for main actions</li>
              <li>Use secondary buttons for alternative actions</li>
              <li>Use danger buttons for destructive actions</li>
              <li>Use ghost buttons for subtle actions</li>
            </ul>

            <h3>Best practices</h3>
            <ul>
              <li>Keep button labels clear and concise</li>
              <li>Use sentence case for button labels</li>
              <li>Left-align button groups on forms</li>
              <li>Right-align button groups on modals</li>
            </ul>
          </div>
        </section>
      </div>
    </BaseLayout>
  );
} 