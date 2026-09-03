import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { limits } from '@/content/product';

export function Limits() {
  return (
    <Section id="limites" labelledBy="limites-titulo" className="border-t border-line-soft">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <SectionHeading
          id="limites-titulo"
          index="04"
          eyebrow="Os limites"
          title={<>O que a Prova Real se recusa a fazer.</>}
          intro="Numa ferramenta que julga afirmações, o limite declarado vale tanto quanto a capacidade. Estes são os que a MobilizaX assumiu publicamente."
        />

        <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-line">
          {limits.map((limit) => (
            <li key={limit.title} className="flex gap-4 bg-ink-700 p-6 sm:gap-5 sm:p-7">
              <span aria-hidden="true" className="mt-1 shrink-0 text-verdict-false">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="9" cy="9" r="7.4" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M4.4 13.6 13.6 4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <h3 className="font-display text-lg font-bold tracking-tight">{limit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-muted">{limit.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
