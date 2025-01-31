import { DocPage } from "../components/ui/layout/doc-page.tsx";
import { useI18n } from "../i18n/context.ts";

export default function OverviewPage() {
  const { t } = useI18n();
  
  return (
    <DocPage
      title={t("overview.title")}
      description={t("overview.welcome")}
    >
      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-4">{t("overview.introduction.title")}</h2>
          <p>{t("overview.introduction.description")}</p>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-6">{t("overview.principles.title")}</h2>
          <div class="grid gap-6 md:grid-cols-3">
            <div class="p-6 border rounded-lg">
              <h3 class="font-semibold mb-2">{t("overview.principles.consistency.title")}</h3>
              <p class="text-gray-600">{t("overview.principles.consistency.description")}</p>
            </div>
            <div class="p-6 border rounded-lg">
              <h3 class="font-semibold mb-2">{t("overview.principles.accessibility.title")}</h3>
              <p class="text-gray-600">{t("overview.principles.accessibility.description")}</p>
            </div>
            <div class="p-6 border rounded-lg">
              <h3 class="font-semibold mb-2">{t("overview.principles.flexibility.title")}</h3>
              <p class="text-gray-600">{t("overview.principles.flexibility.description")}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4">{t("overview.gettingStarted.title")}</h2>
          <div class="bg-blue-50 border border-blue-100 p-4 rounded-lg mb-4">
            <div class="flex items-center gap-2 text-blue-700">
              <span class="material-icons">info</span>
              <p>{t("overview.gettingStarted.info")}</p>
            </div>
          </div>
          <ul class="list-disc pl-5 space-y-2">
            <li>{t("overview.gettingStarted.steps.foundations")}</li>
            <li>{t("overview.gettingStarted.steps.components")}</li>
            <li>{t("overview.gettingStarted.steps.patterns")}</li>
            <li>{t("overview.gettingStarted.steps.accessibility")}</li>
          </ul>
        </section>
      </div>
    </DocPage>
  );
} 