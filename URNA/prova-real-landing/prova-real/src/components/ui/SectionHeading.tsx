import type { ReactNode } from 'react';

/**
 * Cabeçalho de seção. O marcador "§" em monoespaçada é o dispositivo
 * estrutural da página: cada bloco é tratado como item de um documento
 * citável — que é exatamente a lógica do produto (afirmação -> fonte).
 */
export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  intro,
  align = 'left',
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
}) {
  const centered = align === 'center';
  return (
    <header className={`max-w-prose ${centered ? 'mx-auto text-center' : ''}`}>
      <p className={`eyebrow flex items-center gap-2.5 ${centered ? 'justify-center' : ''}`}>
        <span aria-hidden="true" className="text-paper-muted">
          §&nbsp;{index}
        </span>
        <span aria-hidden="true" className="h-px w-6 bg-line" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-5 text-display-lg">
        {title}
      </h2>
      {intro ? <p className="mt-5 text-lg leading-relaxed text-paper-muted">{intro}</p> : null}
    </header>
  );
}
