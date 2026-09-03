import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { faq } from '@/content/faq';

export function Faq() {
  return (
    <Section id="duvidas" labelledBy="duvidas-titulo" className="border-t border-line-soft">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <SectionHeading
          id="duvidas-titulo"
          index="07"
          eyebrow="Dúvidas"
          title={<>Perguntas que a gente ouve primeiro.</>}
        />
        <Accordion items={faq} />
      </div>
    </Section>
  );
}
