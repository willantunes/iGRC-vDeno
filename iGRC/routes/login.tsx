import { Button } from "../components/ui/button.tsx";
import { Input } from "../components/ui/input.tsx";
import { Card } from "../components/ui/card.tsx";
import { TechBackground } from "../components/ui/tech-background.tsx";

export default function Login() {
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <div class="min-h-screen relative flex items-center justify-center p-4 sm:p-8 overflow-hidden">
      <TechBackground />
      
      <Card class="relative w-full max-w-md bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl">
        <div class="p-8">
          <div class="flex flex-col items-center mb-8">
            <img
              src="/logo-secundario-azul.png"
              alt="Logo iGRC"
              class="h-12 mb-6"
            />
            <h1 class="text-2xl font-bold text-brand-blue">Bem-vindo de volta</h1>
            <p class="text-gray-600">Acesse sua conta</p>
          </div>

          <form class="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Input
                type="email"
                placeholder="E-mail"
                class="w-full h-12 px-4 border border-gray-200 rounded-lg focus:border-brand-blue focus:ring-brand-blue/20"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Senha" 
                class="w-full h-12 px-4 border border-gray-200 rounded-lg focus:border-brand-blue focus:ring-brand-blue/20"
              />
            </div>
            <div class="flex items-center justify-between">
              <label class="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  class="w-4 h-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue/20"
                />
                <span class="text-sm text-gray-600">Lembrar-me</span>
              </label>
              <a href="#" class="text-sm text-brand-blue hover:text-brand-dark">
                Esqueceu a senha?
              </a>
            </div>
            <Button
              class="w-full h-12 bg-brand-blue hover:bg-brand-dark transition-colors text-white font-medium"
            >
              Entrar
            </Button>
          </form>

          <div class="mt-6 text-center text-gray-600">
            <span>Não tem uma conta? </span>
            <a href="#" class="text-brand-blue hover:text-brand-dark">
              Cadastre-se
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
} 