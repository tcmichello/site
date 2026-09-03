import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ceoQuote } from '@/content/press';

/**
 * O ciclo abaixo é uma sequência temporal real do noticiário, por isso os
 * marcadores de etapa carregam informação — não são numeração decorativa.
 */
const cycle = [
  {
    when: 'Durante a transmissão',
    what: 'A afirmação vai ao ar',
    body: 'Números, obras e promessas são citados em sequência, sem intervalo para conferência.',
  },
  {
    when: 'Depois do bloco',
    what: 'A redação começa a apurar',
    body: 'Alguém precisa achar o documento, conferir o período e escrever a correção.',
  },
  {
    when: 'No dia seguinte',
    what: 'A checagem é publicada',
    body: 'Quando o texto sai, a fala original já circulou muito além do público da correção.',
  },
];

export function ProblemGap() {
  return (
    <Section id="o-intervalo" labelledBy="o-intervalo-titulo" className="border-t border-line-soft">
      <SectionHeading
        id="o-intervalo-titulo"
        index="01"
        eyebrow="O intervalo"
        title={<>A checagem sempre chegou depois que o debate acabou.</>}
        intro="Entre a declaração e a verificação existe uma janela de horas. É nela que a desinformação se instala — e ela costuma ser mais larga que o alcance da correção."
      />

      <ol className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3">
        {cycle.map((item, i) => (
          <li key={item.what} className="relative bg-ink-700 p-6 sm:p-7">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-paper-dim">
              {item.when}
            </p>
            <h3 className="mt-3 text-display-md">{item.what}</h3>
            <p className="mt-3 text-sm leading-relaxed text-paper-muted">{item.body}</p>
            {i < cycle.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-r border-t border-line bg-ink-700 md:block"
              />
            ) : null}
          </li>
        ))}
      </ol>

      <figure className="mt-14 max-w-prose border-l-2 border-brand-aqua/60 pl-6 sm:pl-8">
        <blockquote>
          <p className="font-display text-display-md">&ldquo;{ceoQuote.text}&rdquo;</p>
        </blockquote>
        <figcaption className="mt-5 font-mono text-xs leading-relaxed text-paper-muted">
          <span className="text-paper">{ceoQuote.name}</span> · {ceoQuote.role}
          <br />
          <a
            href={ceoQuote.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-line underline-offset-4 transition-colors hover:text-brand-aqua"
          >
            Declaração ao {ceoQuote.sourceOutlet}, 16/07/2026
          </a>
        </figcaption>
      </figure>
    </Section>
  );
}
