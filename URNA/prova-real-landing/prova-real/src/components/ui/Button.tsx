import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-field font-display font-bold ' +
  'tracking-tight transition-[transform,box-shadow,background-color,color] duration-200 ' +
  'disabled:cursor-not-allowed disabled:opacity-50 motion-safe:active:translate-y-px';

const variants: Record<Variant, string> = {
  // O CTA principal é o único lugar da página que usa o gradiente da marca cheio
  primary:
    'bg-gradient-to-r from-brand-blue via-brand-aqua to-brand-green text-ink shadow-glow hover:brightness-110',
  secondary:
    'border border-line bg-ink-600/60 text-paper hover:border-brand-aqua/60 hover:bg-ink-500/60',
  ghost: 'text-paper-muted hover:text-paper',
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base sm:text-[1.05rem]',
};

export type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

/** Botão-link, usado em todos os CTAs de navegação e âncora. */
export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps & { href: string } & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'className'>) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

/** Botão de ação (formulários e controles). */
export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps & Omit<ComponentPropsWithoutRef<'button'>, 'className'>) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
