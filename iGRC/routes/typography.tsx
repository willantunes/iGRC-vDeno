import { DocPage } from "../components/ui/layout/doc-page.tsx";

export default function TypographyPage() {
  return (
    <DocPage
      title="Typography"
      description="Typography guidelines and text styles for consistent content hierarchy."
    >
      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Headings</h2>
          <div class="space-y-4">
            <div>
              <h1 class="text-5xl font-bold">Heading 1</h1>
              <p class="text-sm text-gray-500 mt-1">text-5xl font-bold</p>
            </div>
            <div>
              <h2 class="text-4xl font-semibold">Heading 2</h2>
              <p class="text-sm text-gray-500 mt-1">text-4xl font-semibold</p>
            </div>
            <div>
              <h3 class="text-3xl font-medium">Heading 3</h3>
              <p class="text-sm text-gray-500 mt-1">text-3xl font-medium</p>
            </div>
            <div>
              <h4 class="text-2xl font-medium">Heading 4</h4>
              <p class="text-sm text-gray-500 mt-1">text-2xl font-medium</p>
            </div>
            <div>
              <h5 class="text-xl font-medium">Heading 5</h5>
              <p class="text-sm text-gray-500 mt-1">text-xl font-medium</p>
            </div>
            <div>
              <h6 class="text-lg font-medium">Heading 6</h6>
              <p class="text-sm text-gray-500 mt-1">text-lg font-medium</p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Body Text</h2>
          <div class="space-y-4">
            <div>
              <p class="text-base">
                Default body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p class="text-sm text-gray-500 mt-1">text-base</p>
            </div>
            <div>
              <p class="text-sm">
                Small text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p class="text-sm text-gray-500 mt-1">text-sm</p>
            </div>
            <div>
              <p class="text-xs">
                Extra small text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p class="text-sm text-gray-500 mt-1">text-xs</p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Font Weights</h2>
          <div class="space-y-4">
            <div>
              <p class="font-bold">Bold text (700)</p>
              <p class="text-sm text-gray-500 mt-1">font-bold</p>
            </div>
            <div>
              <p class="font-semibold">Semibold text (600)</p>
              <p class="text-sm text-gray-500 mt-1">font-semibold</p>
            </div>
            <div>
              <p class="font-medium">Medium text (500)</p>
              <p class="text-sm text-gray-500 mt-1">font-medium</p>
            </div>
            <div>
              <p class="font-normal">Normal text (400)</p>
              <p class="text-sm text-gray-500 mt-1">font-normal</p>
            </div>
            <div>
              <p class="font-light">Light text (300)</p>
              <p class="text-sm text-gray-500 mt-1">font-light</p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Special Styles</h2>
          <div class="space-y-4">
            <div>
              <p class="italic">Italic text</p>
              <p class="text-sm text-gray-500 mt-1">italic</p>
            </div>
            <div>
              <p class="underline">Underlined text</p>
              <p class="text-sm text-gray-500 mt-1">underline</p>
            </div>
            <div>
              <p class="line-through">Strikethrough text</p>
              <p class="text-sm text-gray-500 mt-1">line-through</p>
            </div>
            <div>
              <p class="uppercase">Uppercase text</p>
              <p class="text-sm text-gray-500 mt-1">uppercase</p>
            </div>
            <div>
              <p class="capitalize">Capitalized text</p>
              <p class="text-sm text-gray-500 mt-1">capitalize</p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Usage Guidelines</h2>
          <div class="prose max-w-none">
            <h3>Hierarchy</h3>
            <ul>
              <li>Use appropriate heading levels for document structure</li>
              <li>Maintain consistent spacing between text elements</li>
              <li>Use font weights to create visual hierarchy</li>
            </ul>

            <h3>Readability</h3>
            <ul>
              <li>Keep line lengths between 45-75 characters</li>
              <li>Use sufficient line height for readability</li>
              <li>Ensure adequate contrast with backgrounds</li>
            </ul>

            <h3>Responsive Design</h3>
            <ul>
              <li>Scale font sizes appropriately for different screens</li>
              <li>Adjust line lengths for mobile devices</li>
              <li>Test readability across devices</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
} 