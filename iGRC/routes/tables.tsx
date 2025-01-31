import { DocPage } from "../components/ui/layout/doc-page.tsx";

export default function TablesPage() {
  return (
    <DocPage
      title="Tables"
      description="Table components for displaying data in a grid format."
    >
      <div class="space-y-12">
        <section>
          <h2 class="text-2xl font-semibold mb-4">Basic Table</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">Jane Cooper</td>
                  <td class="px-6 py-4 whitespace-nowrap">Regional Manager</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Striped Table</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr class="bg-white">
                  <td class="px-6 py-4 whitespace-nowrap">Jane Cooper</td>
                  <td class="px-6 py-4 whitespace-nowrap">Regional Manager</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap">John Doe</td>
                  <td class="px-6 py-4 whitespace-nowrap">Sales Manager</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DocPage>
  );
} 