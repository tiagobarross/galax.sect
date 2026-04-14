'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="bottom"
        align="end"
        className="z-50 w-64 bg-black/95 p-2 backdrop-blur-md border border-white/10 md:hidden"
      >
        <DropdownMenuLabel className="px-2 text-lg font-bold text-white">Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="p-0">
          <Link
            href="/"
            className="block rounded-lg px-4 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 focus:bg-white/10"
            onClick={closeMenu}
          >
            Início
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="p-0">
          <Link
            href="/dashboard"
            className="block rounded-lg px-4 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 focus:bg-white/10"
            onClick={closeMenu}
          >
            Painel
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="p-0">
          <Link
            href="/about"
            className="block rounded-lg px-4 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 focus:bg-white/10"
            onClick={closeMenu}
          >
            Sobre
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="p-0">
          <Link
            href="/contact"
            className="block rounded-lg px-4 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 focus:bg-white/10"
            onClick={closeMenu}
          >
            Contato
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="p-0">
          <Button
            className="mt-2 w-full bg-eletric-blue hover:bg-hover-eletric-blue"
            onClick={closeMenu}
          >
            Entrar
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
