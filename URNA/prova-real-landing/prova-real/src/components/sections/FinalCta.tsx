import { LeadForm } from '@/components/sections/LeadForm';
import { contact, filled } from '@/config/site';

export function FinalCta() {
  const email = filled(contact.email);
  const whatsapp = filled(contact.whatsapp);

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="relative overflow-hidden border-t border-line-soft py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-backdrop opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[30rem] w-[46rem] max-w-[140vw] -translate-x-1/2 rounded-full bg-brand-green/10 blur-[130px]"
      />

      <div className="shell relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
        <div>
          <p className="eyebrow flex items-center gap-2.5">
            <span aria-hidden="true" className="text-paper-muted">§&nbsp;08</span>
            <span aria-hidden="true" className="h-px w-6 bg-line" />
            Demonstração
          </p>
          <h2 id="contato-titulo" className="mt-5 text-display-lg">
            Veja a Prova Real rodando na sua próxima cobertura.
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-paper-muted">
            Conte em que tipo de transmissão você trabalha e o time da MobilizaX prepara uma
            demonstração com o cenário mais próximo da sua operação.
          </p>

          {email || whatsapp ? (
            <div className="mt-8 border-t border-line-soft pt-6">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-paper-dim">
                Prefere falar direto
              </p>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                {email ? (
                  <a href={`mailto:${email}`} className="font-display font-bold tracking-tight transition-colors hover:text-brand-aqua">
                    {email}
                  </a>
                ) : null}
                {whatsapp ? (
                  <a
                    href={`https://wa.me/${whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-bold tracking-tight transition-colors hover:text-brand-aqua"
                  >
                    WhatsApp comercial
                  </a>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
