import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { leadership, press } from '@/content/press';

const formatarData = (iso: string) => {
  if (!iso) return '';
  const [ano, mes, dia] = iso.split('-');
  return `${dia}/${mes}/${ano}`;
};

export function PressCoverage() {
  return (
    <Section id="imprensa" labelledBy="imprensa-titulo" className="border-t border-line-soft">
      <SectionHeading
        id="imprensa-titulo"
        index="06"
        eyebrow="Na imprensa"
        title={<>O que já foi publicado sobre a Prova Real.</>}
        intro="Reportagens públicas sobre a plataforma. Os links abrem a íntegra em cada veículo."
      />

      <ul className="mt-14 divide-y divide-line-soft border-y border-line-soft">
        {press.map((item) => (
          <li key={item.url}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 py-6 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-8"
            >
              <span className="min-w-0">
                <span className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand-aqua">
                  {item.outlet}
                  {item.date ? (
                    <span className="text-paper-dim">{formatarData(item.date)}</span>
                  ) : null}
                </span>
                <span className="mt-2 block font-display text-lg font-bold tracking-tight transition-colors group-hover:text-brand-aqua sm:text-xl">
                  {item.title}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 self-start text-paper-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand-aqua sm:self-auto"
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M7 15 15 7M8.2 7H15v6.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
        {leadership.map((person) => (
          <p key={person.name} className="text-sm">
            <span className="block font-display font-bold tracking-tight text-paper">{person.name}</span>
            <span className="mt-1 block font-mono text-xs text-paper-muted">{person.role}</span>
          </p>
        ))}
      </div>
    </Section>
  );
}
