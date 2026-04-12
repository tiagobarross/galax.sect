'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={toggleMenu}
        aria-label="Abrir menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
            onClick={toggleMenu}
          />
          <nav className="fixed right-0 top-0 z-50 h-full w-64 bg-black/95 backdrop-blur-md border-l border-white/10 p-6 md:hidden">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-lg font-bold text-white">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Fechar menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="block rounded-lg px-4 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
                  onClick={toggleMenu}
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="block rounded-lg px-4 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
                  onClick={toggleMenu}
                >
                  Painel
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block rounded-lg px-4 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
                  onClick={toggleMenu}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block rounded-lg px-4 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
                  onClick={toggleMenu}
                >
                  Contato
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <Button className="w-full bg-eletric-blue hover:bg-hover-eletric-blue">
                Entrar
              </Button>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
