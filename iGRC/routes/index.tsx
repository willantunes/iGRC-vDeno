import { BaseLayout } from "../components/ui/layout/base-layout.tsx";
import { Card } from "../components/ui/card.tsx";
import { Button } from "../components/ui/button.tsx";

export default function Home() {
  return (
    <BaseLayout>
      <div class="space-y-6">
        <div class="flex items-center justify-between">
          <h1 class="text-3xl font-bold">Dashboard</h1>
          <Button>Novo Relatório</Button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <Card.Header>
              <Card.Title>Riscos Críticos</Card.Title>
              <Card.Description>Total de riscos críticos ativos</Card.Description>
            </Card.Header>
            <Card.Content>
              <p class="text-4xl font-bold text-red-600">12</p>
            </Card.Content>
          </Card>
          
          {/* Add more dashboard cards */}
        </div>
      </div>
    </BaseLayout>
  );
}
