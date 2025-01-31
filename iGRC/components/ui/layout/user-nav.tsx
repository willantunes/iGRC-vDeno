import { Avatar } from "../avatar.tsx";
import { Button } from "../button.tsx";
import { DropdownMenu } from "../dropdown-menu.tsx";

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="ghost" class="relative h-8 w-8 rounded-full">
          <Avatar class="h-8 w-8">
            <Avatar.Image src="/avatars/user.png" alt="User" />
            <Avatar.Fallback>U</Avatar.Fallback>
          </Avatar>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content class="w-56" align="end">
        <DropdownMenu.Label>Minha Conta</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Perfil</DropdownMenu.Item>
        <DropdownMenu.Item>Configurações</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Sair</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
} 