import { ComponentType, JSX } from "preact";

export const App: ComponentType = () => {
  return (
    <div class="min-h-screen bg-gray-100 p-8">
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md p-8 space-y-4">
        <h1 class="text-2xl font-bold text-gray-900">Hello Shadcn!</h1>
        <p class="text-gray-600">This is a simple demo using Deno + Preact + shadcn components.</p>
        <div class="space-x-2">
        </div>
      </div>
    </div>
  );
}; 