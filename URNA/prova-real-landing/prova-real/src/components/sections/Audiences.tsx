import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { audiences } from '@/content/product';

export function Audiences() {
  return (
    <Section id="para-quem" labelledBy="para-quem-titulo" className="border-t border-line-soft">
      <SectionHeading
        id="para-quem-titulo"
        index="05"
        eyebrow="Para quem é"
        title={<>Três formas de usar a mesma checagem.</>}
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {audiences.map((a) => (
          <article key={a.id} className="surface flex flex-col p-6 sm:p-7">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-brand-aqua">
              {a.kicker}
            </p>
            <h3 className="mt-4 text-display-md">{a.title}</h3>
            <p className="mt-4 leading-relaxed text-paper-muted">{a.body}</p>
            <ul className="mt-6 grid gap-2.5 border-t border-line-soft pt-6 text-sm text-paper-muted">
              {a.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-green" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
