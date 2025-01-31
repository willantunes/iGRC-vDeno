import { DocPage } from "../components/ui/layout/doc-page.tsx";
import { Tabs } from "../components/ui/tabs.tsx";
import { Button } from "../components/ui/button.tsx";
import { BaseLayout } from "../components/ui/layout/base-layout.tsx";
import { Input } from "../components/ui/input.tsx";
import { Card } from "../components/ui/card.tsx";
import { Badge } from "../components/ui/badge.tsx";
import { Alert } from "../components/ui/alert.tsx";
import { useI18n } from "../i18n/context.ts";

export default function StyleGuidePage() {
  const { t } = useI18n();

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div>
          <h3 class="text-lg font-medium mb-4">Style Guide Overview</h3>
          <p class="text-gray-600">
            This style guide provides a comprehensive overview of our design system components and patterns.
          </p>
        </div>
      ),
    },
    {
      id: "components",
      label: "Components",
      content: (
        <div>
          <h3 class="text-lg font-medium mb-4">Components</h3>
          <div class="space-y-4">
            <Button>Sample Button</Button>
            <p class="text-gray-600">
              Browse our collection of reusable components.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "patterns",
      label: "Patterns",
      content: (
        <div>
          <h3 class="text-lg font-medium mb-4">Design Patterns</h3>
          <p class="text-gray-600">
            Common patterns and best practices for consistent user experiences.
          </p>
        </div>
      ),
    },
  ];

  return (
    <DocPage
      title={t("common.title")}
      description={t("overview.welcome")}
    >
      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold">{t("overview.introduction.title")}</h2>
          <p>{t("overview.introduction.description")}</p>
        </section>

        <section>
          <h2 class="text-2xl font-bold">{t("overview.principles.title")}</h2>
          <div class="grid gap-6 md:grid-cols-3">
            <div>
              <h3>{t("overview.principles.consistency.title")}</h3>
              <p>{t("overview.principles.consistency.description")}</p>
            </div>
            {/* ... other principles */}
          </div>
        </section>
      </div>
    </DocPage>
  );
} 