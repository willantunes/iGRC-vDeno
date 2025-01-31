import { JSX } from "preact";
import { Sidebar } from "./sidebar.tsx";
import ProfileDropdown from "../../../islands/ProfileDropdown.tsx";
import LanguageSwitcher from "../../../islands/language-switcher.tsx";
import I18nProvider from "../../../islands/i18n-provider.tsx";

interface BaseLayoutProps {
  children: JSX.Element;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <I18nProvider>
      <div class="h-screen flex overflow-hidden">
        {/* Sidebar with independent scroll */}
        <aside class="w-64 flex-shrink-0 border-r bg-white overflow-y-auto">
          <Sidebar />
        </aside>

        {/* Main content area */}
        <div class="flex-1 flex flex-col min-w-0">
          {/* Fixed height header */}
          <header class="h-[57px] flex justify-between items-center px-4 border-b bg-white">
            <h1>iLiberty Design System</h1>
            <div class="flex items-center gap-4">
              <LanguageSwitcher />
              <ProfileDropdown />
            </div>
          </header>

          {/* Scrollable main content */}
          <main class="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </I18nProvider>
  );
} 