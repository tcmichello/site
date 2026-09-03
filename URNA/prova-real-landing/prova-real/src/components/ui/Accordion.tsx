'use client';

import { useId, useState } from 'react';

export type AccordionEntry = { q: string; a: string; pendente?: boolean };

/**
 * FAQ acessível: um <button> por pergunta com aria-expanded/aria-controls,
 * navegável por teclado e sem dependência externa.
 */
export function Accordion({ items }: { items: ReadonlyArray<AccordionEntry> }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-line-soft border-y border-line-soft">
      {items.map((item, i) => {
        const expanded = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <div key={item.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : i)}
                className="flex w-full items-start justify-between gap-5 py-5 text-left transition-colors hover:text-brand-aqua"
              >
                <span className="font-display text-base font-bold tracking-tight sm:text-lg">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`mt-1 shrink-0 text-brand-aqua transition-transform duration-300 ${
                    expanded ? 'rotate-45' : ''
                  }`}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M9 2v14M2 9h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!expanded}>
              <p className="max-w-prose pb-6 pr-8 leading-relaxed text-paper-muted">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
