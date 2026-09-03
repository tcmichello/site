import { ButtonLink } from '@/components/ui/Button';
import { LiveVerdictDemo } from '@/components/LiveVerdictDemo';
import { PressTrust } from '@/components/sections/PressTrust';

/**
 * Primeira dobra.
 *
 * A grade é montada por posicionamento explícito para que a ordem de leitura
 * no mobile seja exatamente: rótulo -> headline -> texto -> CTA principal ->
 * CTA secundário -> demonstração do produto -> prova social. No desktop, o
 * texto ocupa a coluna da esquerda e a demonstração acompanha as duas linhas
 * à direita, sem alongar demais a dobra.
 */
export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
      {/* Fundo: malha herdada da arte da logo + brilho ciano/verde da marca */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-backdrop opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[52rem] max-w-[140vw] -translate-x-1/2 rounded-full bg-brand-blue/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-40 h-[26rem] w-[26rem] max-w-[90vw] rounded-full bg-brand-green/10 blur-[110px]"
      />

      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-x-14 lg:gap-y-10">
          {/* Bloco de texto — coluna esquerda no desktop */}
          <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
            <p className="eyebrow flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <span className="text-paper-muted">Prova Real</span>
              <span aria-hidden="true" className="hidden h-px w-6 bg-line sm:block" />
              Uma plataforma MobilizaX
            </p>

            <h1 className="mt-6 text-display-xl">
              Checagem de fatos{' '}
              <span className="brand-gradient-text">enquanto o debate acontece</span>.
            </h1>

            <p className="mt-7 max-w-[34ch] text-lg leading-relaxed text-paper-muted sm:max-w-[46ch] sm:text-xl">
              A Prova Real acompanha debates e discursos ao vivo, identifica afirmações
              verificáveis e confronta cada uma com fontes oficiais. O resultado aparece em tempo
              real, com a fonte à vista.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="#contato" size="lg" className="w-full sm:w-auto">
                Agendar demonstração
              </ButtonLink>
              <ButtonLink href="#como-funciona" variant="secondary" size="lg" className="w-full sm:w-auto">
                Ver como funciona
              </ButtonLink>
            </div>
          </div>

          {/* Demonstração do produto — coluna direita, acompanhando as duas linhas */}
          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center lg:pl-2">
            <LiveVerdictDemo />
          </div>

          {/* Prova social — abaixo do texto no desktop, por último no mobile */}
          <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
            <PressTrust />
          </div>
        </div>
      </div>
    </section>
  );
}
