import { DocPage } from "../components/ui/layout/doc-page.tsx";
import { Button } from "../components/ui/button.tsx";

export default function NavigationPage() {
  return (
    <DocPage
      title="Navigation Patterns"
      description="Navigation components and patterns for effective user movement through the application."
    >
      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Top Navigation Bar</h2>
          <div class="border rounded-lg overflow-hidden">
            <nav class="bg-white border-b px-4 py-2">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <span class="font-semibold">Logo</span>
                  <div class="hidden md:flex space-x-4">
                    <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">Products</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">Services</a>
                    <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <Button variant="outline" size="sm">Sign In</Button>
                  <Button size="sm">Sign Up</Button>
                </div>
              </div>
            </nav>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Breadcrumb Navigation</h2>
          <nav class="flex space-x-2 text-sm">
            <a href="#" class="text-gray-500 hover:text-gray-900">Home</a>
            <span class="text-gray-500">/</span>
            <a href="#" class="text-gray-500 hover:text-gray-900">Products</a>
            <span class="text-gray-500">/</span>
            <span class="text-gray-900">Current Page</span>
          </nav>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Vertical Navigation</h2>
          <div class="w-64 border rounded-lg overflow-hidden">
            <nav class="bg-white p-4 space-y-2">
              <a href="#" class="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-gray-100">
                <span class="material-icons">home</span> <span>Dashboard</span>
              </a>
              <a href="#" class="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-gray-100">
                <span class="material-icons">shopping_cart</span> <span>Products</span>
              </a>
              <a href="#" class="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-gray-100">
                <span class="material-icons">settings</span> <span>Settings</span>
              </a>
            </nav>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Tab Navigation</h2>
          <div class="border-b">
            <nav class="-mb-px flex space-x-8">
              <a href="#" class="border-b-2 border-blue-500 py-4 px-1 text-sm font-medium text-blue-600">
                Overview
              </a>
              <a href="#" class="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Features
              </a>
              <a href="#" class="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Pricing
              </a>
            </nav>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Mobile Navigation</h2>
          <div class="border rounded-lg overflow-hidden">
            <div class="bg-white p-4 flex justify-between items-center border-b">
              <span class="font-semibold">Logo</span>
              <button class="md:hidden">
                <span class="material-icons">menu</span>
              </button>
            </div>
            <div class="bg-white p-4 border-t md:hidden">
              <nav class="space-y-2">
                <a href="#" class="block p-2 text-gray-600 hover:bg-gray-100 rounded-lg">Home</a>
                <a href="#" class="block p-2 text-gray-600 hover:bg-gray-100 rounded-lg">Products</a>
                <a href="#" class="block p-2 text-gray-600 hover:bg-gray-100 rounded-lg">Services</a>
                <a href="#" class="block p-2 text-gray-600 hover:bg-gray-100 rounded-lg">About</a>
              </nav>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Usage Guidelines</h2>
          <div class="prose max-w-none">
            <h3>When to use</h3>
            <ul>
              <li>Top Navigation: For primary navigation in web applications</li>
              <li>Breadcrumbs: For hierarchical navigation and context</li>
              <li>Vertical Navigation: For complex applications with many sections</li>
              <li>Tabs: For switching between related views</li>
              <li>Mobile Navigation: For responsive design on small screens</li>
            </ul>

            <h3>Best practices</h3>
            <ul>
              <li>Keep navigation consistent across pages</li>
              <li>Highlight current location</li>
              <li>Use clear and concise labels</li>
              <li>Consider mobile responsiveness</li>
              <li>Maintain accessibility standards</li>
              <li>Limit navigation depth</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
} 