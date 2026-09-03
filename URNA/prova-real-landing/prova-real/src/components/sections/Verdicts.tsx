import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { VerdictChip } from '@/components/ui/VerdictChip';
import { verdicts } from '@/content/product';

export function Verdicts() {
  return (
    <Section id="vereditos" labelledBy="vereditos-titulo" className="border-t border-line-soft">
      <SectionHeading
        id="vereditos-titulo"
        index="03"
        eyebrow="Os vereditos"
        title={<>Quatro saídas possíveis — e nenhuma delas é opinião.</>}
        intro="A plataforma classifica a afirmação e mostra o documento que sustenta a classificação. Quem lê pode discordar da fonte; não precisa acreditar na ferramenta."
      />

      <dl className="mt-14 grid gap-5 sm:grid-cols-2">
        {verdicts.map((v) => (
          <div key={v.key} className="surface p-6 sm:p-7">
            <dt>
              <VerdictChip verdict={v.key} />
            </dt>
            <dd className="mt-4 leading-relaxed text-paper-muted">{v.body}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-8 max-w-prose font-mono text-xs leading-relaxed text-paper-dim">
        Toda classificação sai acompanhada da fonte consultada — documentos oficiais, bancos de
        dados públicos, pesquisas e conteúdos já verificados.
      </p>
    </Section>
  );
}
