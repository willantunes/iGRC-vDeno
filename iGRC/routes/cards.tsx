import { DocPage } from "../components/ui/layout/doc-page.tsx";
import { Button } from "../components/ui/button.tsx";

export default function CardsPage() {
  return (
    <DocPage
      title="Cards"
      description="Card components for displaying content in containers."
    >
      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Basic Card</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white rounded-lg shadow p-6">
              <h3 class="text-lg font-medium mb-2">Card Title</h3>
              <p class="text-gray-600">
                This is a basic card with some sample content. Cards can contain
                any combination of text, links, and other HTML elements.
              </p>
            </div>

            <div class="bg-white rounded-lg shadow p-6">
              <h3 class="text-lg font-medium mb-2">Interactive Card</h3>
              <p class="text-gray-600 mb-4">
                This card has a button that demonstrates interactivity.
              </p>
              <Button variant="primary">Learn More</Button>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Card with Image</h2>
          <div class="max-w-sm bg-white rounded-lg shadow overflow-hidden">
            <img
              src="https://picsum.photos/400/200"
              alt="Sample"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-lg font-medium mb-2">Featured Content</h3>
              <p class="text-gray-600 mb-4">
                A card with an image header, perfect for featured content or blog posts.
              </p>
              <Button variant="outline">Read More</Button>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Card Layouts</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div class="bg-white rounded-lg shadow p-6">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                    {i}
                  </div>
                  <h3 class="text-lg font-medium ml-4">Feature {i}</h3>
                </div>
                <p class="text-gray-600">
                  Description for feature {i}. Add your content here.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Usage Guidelines</h2>
          <div class="prose max-w-none">
            <h3>When to use</h3>
            <ul>
              <li>Group related content</li>
              <li>Present a collection of similar items</li>
              <li>Display featured content or highlights</li>
            </ul>

            <h3>Best practices</h3>
            <ul>
              <li>Keep content concise and focused</li>
              <li>Use consistent spacing within cards</li>
              <li>Maintain hierarchy with clear headings</li>
              <li>Consider mobile responsiveness</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
} 