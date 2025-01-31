import { NavLink } from "./nav-link.tsx";
import { useI18n } from "../../../i18n/context.ts";

export function Sidebar() {
  const { t } = useI18n();
  
  return (
    <div class="h-full flex flex-col">
      <div class="h-[57px] flex justify-center items-center border-b">
        <img 
          src="/logo-principal-azul.png"
          alt="iGRC Logo" 
          class="h-8 w-auto"
        />
      </div>

      <div class="flex-1 overflow-y-auto p-4">
        <div class="space-y-8">
          <div>
            <h2 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {t("foundations.title")}
            </h2>
            <nav class="space-y-1">
              <NavLink href="/overview" icon="home">{t("foundations.overview")}</NavLink>
              <NavLink href="/color" icon="palette">{t("foundations.colors")}</NavLink>
              <NavLink href="/typography" icon="text_fields">{t("foundations.typography")}</NavLink>
              <NavLink href="/spacing" icon="space_bar">{t("foundations.spacing")}</NavLink>
              <NavLink href="/border" icon="border_style">{t("foundations.borders")}</NavLink>
              <NavLink href="/shadow" icon="layers">{t("foundations.shadows")}</NavLink>
            </nav>
          </div>

          <h3 class="mt-8 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {t("components.title")}
          </h3>
          <NavLink href="/buttons" icon="smart_button">{t("components.buttons")}</NavLink>
          <NavLink href="/forms" icon="input">{t("components.forms")}</NavLink>
          <NavLink href="/tables" icon="table_chart">{t("components.tables")}</NavLink>
          <NavLink href="/cards" icon="dashboard">{t("components.cards")}</NavLink>
          <NavLink href="/modals" icon="open_in_new">{t("components.modals")}</NavLink>
          <NavLink href="/tabs" icon="tab">{t("components.tabs")}</NavLink>
          <NavLink href="/alerts" icon="notification_important">{t("components.alerts")}</NavLink>
          <NavLink href="/tooltips" icon="info">{t("components.tooltips")}</NavLink>

          <h3 class="mt-8 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {t("patterns.title")}
          </h3>
          <NavLink href="/layouts" icon="layers">{t("patterns.layouts")}</NavLink>
          <NavLink href="/navigation" icon="navigation">{t("patterns.navigation")}</NavLink>
          <NavLink href="/data-display" icon="data_usage">{t("patterns.dataDisplay")}</NavLink>
          <NavLink href="/forms-patterns" icon="input">{t("patterns.formPatterns")}</NavLink>
          <NavLink href="/feedback" icon="feedback">{t("patterns.feedback")}</NavLink>

          <h3 class="mt-8 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {t("guidelines.title")}
          </h3>
          <NavLink href="/accessibility" icon="accessibility">{t("guidelines.accessibility")}</NavLink>
          <NavLink href="/responsive" icon="devices">{t("guidelines.responsiveDesign")}</NavLink>
          <NavLink href="/best-practices" icon="check_circle">{t("guidelines.bestPractices")}</NavLink>
        </div>
      </div>
    </div>
  );
} 