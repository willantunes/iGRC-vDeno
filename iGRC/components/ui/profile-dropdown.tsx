import { useState } from "preact/hooks";

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        class="flex items-center space-x-2 p-2 rounded hover:bg-gray-100"
      >
        <span class="material-icons">account_circle</span>
        <span>Minha Conta</span>
      </button>

      {isOpen && (
        <div class="absolute right-0 mt-2 w-48 py-2 bg-white rounded-md shadow-xl z-50">
          <a
            href="/profile"
            class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Perfil
          </a>
          <a
            href="/settings"
            class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Configurações
          </a>
          <a
            href="/logout"
            class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Sair
          </a>
        </div>
      )}
    </div>
  );
} 