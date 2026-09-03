import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { pipeline } from '@/content/product';

export function HowItWorks() {
  return (
    <Section id="como-funciona" labelledBy="como-funciona-titulo" className="border-t border-line-soft">
      <SectionHeading
        id="como-funciona-titulo"
        index="02"
        eyebrow="Como funciona"
        title={<>Quatro etapas entre o microfone e o veredito.</>}
        intro="A ordem importa: cada etapa só existe porque a anterior entregou algo verificável. É o que separa uma checagem de um palpite automatizado."
      />

      <ol className="mt-14 grid gap-5 sm:grid-cols-2">
        {pipeline.map((item) => (
          <li key={item.step} className="surface group relative overflow-hidden p-6 transition-colors hover:border-brand-aqua/40 sm:p-8">
            <div className="flex items-baseline gap-4">
              <span aria-hidden="true" className="font-mono text-sm font-medium text-brand-aqua">
                {item.step}
              </span>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-paper-dim">
                {item.detail}
              </span>
            </div>
            <h3 className="mt-5 text-display-md">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-paper-muted">{item.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
