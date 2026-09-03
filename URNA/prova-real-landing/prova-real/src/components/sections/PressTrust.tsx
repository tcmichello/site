import { press } from '@/content/press';

/**
 * Prova social da primeira dobra. Composição tipográfica monocromática — os
 * veículos não têm logo no projeto, então o nome é tratado como marca.
 * Nenhum veículo é adicionado aqui: a lista vem de src/content/press.ts, que
 * só aceita item com reportagem publicada e link verificável.
 */
export function PressTrust() {
  const outlets = press.slice(0, 4);

  return (
    <div className="border-t border-line-soft pt-6">
      <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-paper-dim">
        Reconhecido pela imprensa
      </p>

      <ul className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3 sm:gap-x-9">
        {outlets.map((item) => (
          <li key={item.url}>
            <span className="font-display text-[0.92rem] font-bold uppercase tracking-[0.06em] text-paper-muted sm:text-[0.98rem]">
              {item.outlet}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#imprensa"
        className="group mt-5 inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-brand-aqua transition-colors hover:text-brand-green"
      >
        Ver repercussão na imprensa
        <span
          aria-hidden="true"
          className="transition-transform duration-300 motion-safe:group-hover:translate-x-1"
        >
          →
        </span>
      </a>
    </div>
  );
}
