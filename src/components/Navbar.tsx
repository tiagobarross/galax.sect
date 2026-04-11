import { Logo } from "./logo"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"

export function Navbar() {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 bg-black text-white">
                <Logo />

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
        </div>
    )
}