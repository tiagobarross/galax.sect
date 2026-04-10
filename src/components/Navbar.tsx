import { Button } from "./ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

export function Navbar() {
    return (
        <div className="w-full flex items-center justify-between px-6 py-4 bg-black text-white">
            <div className="flex items-center gap-2">
                <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
                <span className="font-bold text-lg">Galax<span className="text-eletric-blue">.sect</span></span>
            </div>

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink>Home</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>Serviços</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>Contato</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <Button className="bg-eletric-blue hover:bg-hover-eletric-blue cursor-pointer">Entrar</Button>
        </div>
    )
}