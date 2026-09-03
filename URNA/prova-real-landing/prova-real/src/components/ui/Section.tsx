import type { ReactNode } from 'react';

/**
 * Casca padrão de seção: concentra o espaçamento vertical num único seletor
 * para que seções vizinhas nunca disputem margens.
 */
export function Section({
  id,
  children,
  className = '',
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative py-20 sm:py-24 lg:py-28 ${className}`}>
      <div className="shell">{children}</div>
    </section>
  );
}
