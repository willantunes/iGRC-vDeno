import { DocPage } from "../components/ui/layout/doc-page.tsx";
import { Button } from "../components/ui/button.tsx";
import { icons } from "../components/ui/icons.tsx";

export default function DataDisplayPage() {
  return (
    <DocPage
      title="Data Display Patterns"
      description="Patterns and components for displaying data in various formats."
    >
      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Data Table</h2>
          <div class="border rounded-lg overflow-hidden">
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  {[1, 2, 3].map((i) => (
                    <tr key={i}>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="h-10 w-10 flex-shrink-0 bg-gray-100 rounded-full" />
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">User {i}</div>
                            <div class="text-sm text-gray-500">user{i}@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Member</td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button variant="ghost" size="sm">Edit</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Stats Grid</h2>
          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Total Users", stat: "12,345", icon: icons.Users },
              { name: "Active Users", stat: "9,876", icon: icons.User },
              { name: "Revenue", stat: "$123,456", icon: icons.Money },
              { name: "Growth", stat: "+12.3%", icon: icons.Chart },
            ].map((item) => (
              <div key={item.name} class="bg-white overflow-hidden shadow rounded-lg">
                <div class="p-5">
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <item.icon />
                    </div>
                    <div class="ml-5 w-0 flex-1">
                      <dl>
                        <dt class="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                        <dd class="text-lg font-semibold text-gray-900">{item.stat}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">List View</h2>
          <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul class="divide-y divide-gray-200">
              {[1, 2, 3, 4].map((i) => (
                <li key={i}>
                  <div class="px-4 py-4 flex items-center sm:px-6">
                    <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                      <div>
                        <div class="text-sm font-medium text-blue-600 truncate">
                          Item {i}
                        </div>
                        <div class="mt-2 flex">
                          <div class="text-sm text-gray-500">
                            Description for item {i}
                          </div>
                        </div>
                      </div>
                      <div class="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                        <div class="flex -space-x-1 overflow-hidden">
                          <div class="h-6 w-6 rounded-full bg-gray-200" />
                          <div class="h-6 w-6 rounded-full bg-gray-300" />
                          <div class="h-6 w-6 rounded-full bg-gray-400" />
                        </div>
                      </div>
                    </div>
                    <div class="ml-5 flex-shrink-0">
                      {icons.ArrowRight()}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Usage Guidelines</h2>
          <div class="prose max-w-none">
            <h3>When to use</h3>
            <ul>
              <li>Tables: For structured data with multiple attributes</li>
              <li>Stats Grid: For key metrics and numbers</li>
              <li>List View: For collections of similar items</li>
              <li>Cards: For visual content with equal importance</li>
            </ul>

            <h3>Best practices</h3>
            <ul>
              <li>Choose appropriate format for data type</li>
              <li>Maintain consistent alignment</li>
              <li>Use clear headers and labels</li>
              <li>Include sorting and filtering when needed</li>
              <li>Consider mobile responsiveness</li>
              <li>Provide empty states</li>
            </ul>
          </div>
        </section>
      </div>
    </DocPage>
  );
} 