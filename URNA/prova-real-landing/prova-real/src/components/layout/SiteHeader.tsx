'use client';

import { useEffect, useState } from 'react';
import { navLinks } from '@/config/site';
import { BrandMark } from '@/components/ui/BrandMark';
import { ButtonLink } from '@/components/ui/Button';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Trava a rolagem do corpo enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen ? 'border-b border-line-soft bg-ink/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-4 lg:h-20">
        <BrandMark priority />

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-paper-muted transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="#contato" className="hidden sm:inline-flex">
            Agendar demonstração
          </ButtonLink>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-field border border-line text-paper lg:hidden"
          >
            <span className="sr-only">{menuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!menuOpen}
        className="border-t border-line-soft bg-ink/95 backdrop-blur-md lg:hidden"
      >
        <nav aria-label="Navegação principal (mobile)" className="shell flex flex-col py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-line-soft py-3.5 font-display font-bold tracking-tight text-paper"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink href="#contato" size="lg" className="mt-5" onClick={() => setMenuOpen(false)}>
            Agendar demonstração
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
