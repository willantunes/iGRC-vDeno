import { DocPage } from "../components/ui/layout/doc-page.tsx";
import { Alert } from "../components/ui/alert.tsx";

export default function ResponsivePage() {
  return (
    <DocPage
      title="Responsive Design"
      description="Guidelines and patterns for creating responsive interfaces that work across all devices."
    >
      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Breakpoints</h2>
          <div class="space-y-4">
            <Alert variant="info">
              Our design system uses Tailwind CSS default breakpoints:
            </Alert>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="p-4 bg-gray-100 rounded-lg">
                <h3 class="font-medium">sm: 640px</h3>
                <p class="text-sm text-gray-600">Small devices and up</p>
              </div>
              <div class="p-4 bg-gray-100 rounded-lg">
                <h3 class="font-medium">md: 768px</h3>
                <p class="text-sm text-gray-600">Medium devices and up</p>
              </div>
              <div class="p-4 bg-gray-100 rounded-lg">
                <h3 class="font-medium">lg: 1024px</h3>
                <p class="text-sm text-gray-600">Large devices and up</p>
              </div>
              <div class="p-4 bg-gray-100 rounded-lg">
                <h3 class="font-medium">xl: 1280px</h3>
                <p class="text-sm text-gray-600">Extra large devices and up</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Responsive Layout Example</h2>
          <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div class="p-4 bg-white border rounded-lg">
                <h3 class="font-medium mb-2">Card 1</h3>
                <p class="text-gray-600">This card will stack on mobile and align in a grid on larger screens.</p>
              </div>
              <div class="p-4 bg-white border rounded-lg">
                <h3 class="font-medium mb-2">Card 2</h3>
                <p class="text-gray-600">Responsive design ensures optimal layout across devices.</p>
              </div>
              <div class="p-4 bg-white border rounded-lg">
                <h3 class="font-medium mb-2">Card 3</h3>
                <p class="text-gray-600">Content adapts to available space automatically.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Responsive Navigation</h2>
          <div class="border rounded-lg overflow-hidden">
            <nav class="bg-white p-4">
              <div class="flex justify-between items-center">
                <span class="font-semibold">Logo</span>
                <div class="hidden md:flex space-x-4">
                  <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
                  <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
                  <a href="#" class="text-gray-600 hover:text-gray-900">Services</a>
                  <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
                </div>
                <button class="md:hidden">
                  <span class="material-icons">menu</span>
                </button>
              </div>
            </nav>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Best Practices</h2>
          <div class="prose max-w-none">
            <h3>Mobile-First Approach</h3>
            <ul>
              <li>Design for mobile devices first</li>
              <li>Progressive enhancement for larger screens</li>
              <li>Use relative units (rem, em) over fixed units</li>
              <li>Test on real devices</li>
            </ul>

            <h3>Layout Considerations</h3>
            <ul>
              <li>Use flexible grids</li>
              <li>Implement responsive images</li>
              <li>Consider touch targets on mobile</li>
              <li>Maintain readable text sizes</li>
            </ul>

            <h3>Performance</h3>
            <ul>
              <li>Optimize images for different screen sizes</li>
              <li>Minimize unnecessary content on mobile</li>
              <li>Consider loading times on mobile networks</li>
              <li>Use appropriate image formats</li>
            </ul>

            <h3>Testing</h3>
            <ul>
              <li>Test across multiple devices</li>
              <li>Check different orientations</li>
              <li>Verify touch interactions</li>
              <li>Ensure consistent experience</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
} 