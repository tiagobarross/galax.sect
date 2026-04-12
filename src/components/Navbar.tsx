import { Logo } from "./logo"
import { Button } from "./ui/button"
import { MobileNav } from "./mobile-nav"
import { ThemeToggleWrapper } from "./theme-toggle/theme-toggle-wrapper"
import Link from "next/link"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 pt-[env(safe-area-inset-top)] dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Logo />

                <nav className="hidden md:flex">
                    <ul className="flex gap-1">
                        <li>
                            <Link href="/" className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 dark:text-white transition-colors hover:bg-gray-100 dark:hover:bg-white/10">
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard" className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 dark:text-white transition-colors hover:bg-gray-100 dark:hover:bg-white/10">
                                Painel
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 dark:text-white transition-colors hover:bg-gray-100 dark:hover:bg-white/10">
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 dark:text-white transition-colors hover:bg-gray-100 dark:hover:bg-white/10">
                                Contato
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center gap-3">
                    <ThemeToggleWrapper />
                    <Button className="hidden bg-eletric-blue hover:bg-hover-eletric-blue md:inline-flex">
                        Entrar
                    </Button>
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}