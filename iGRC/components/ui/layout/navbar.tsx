import { useI18n } from "../../../i18n/context.ts";

export function Navbar() {
  const { t } = useI18n();
  
  return (
    <header class="sticky top-0 z-50 w-full border-b bg-white">
      <div class="flex h-16 items-center px-4 sm:px-6">
        <div class="flex items-center space-x-4">
          <img src="/logo-principal-azul.png" alt={t("common.logo")} class="h-8" />
        </div>
        
        <div class="ml-auto flex items-center space-x-4">
          <button type="button" class="flex text-sm rounded-full">
            <span class="material-icons">person</span>
            <span class="sr-only">{t("common.myAccount")}</span>
          </button>
        </div>
      </div>
    </header>
  );
} 