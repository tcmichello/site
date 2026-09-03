'use client';

import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { demoStatements } from '@/content/product';
import { filled, metrics } from '@/config/site';
import { VerdictChip } from '@/components/ui/VerdictChip';

/** Etapas reais do produto: capturar -> analisar -> consultar -> concluir. */
type Stage = 'captura' | 'analise' | 'consulta' | 'concluida' | 'veredito';

type Statement = (typeof demoStatements)[number];

const TYPE_MS = 34; // intervalo entre caracteres da transcrição
const ANALISE_MS = 950;
const CONSULTA_MS = 1250;
const CONCLUIDA_MS = 550;
const HOLD_MS = 3600; // tempo que o veredito permanece na tela

const STAGES: ReadonlyArray<{ key: Stage; label: string }> = [
  { key: 'captura', label: 'Capturando fala' },
  { key: 'analise', label: 'Analisando afirmação' },
  { key: 'consulta', label: 'Consultando fontes' },
  { key: 'concluida', label: 'Verificação concluída' },
];

const stageIndex = (stage: Stage) =>
  stage === 'veredito' ? STAGES.length - 1 : STAGES.findIndex((s) => s.key === stage);

/* -------------------------------------------------------------------------- */
/* Preferência de movimento do sistema, lida como fonte externa                */
/* -------------------------------------------------------------------------- */

const QUERY = '(prefers-reduced-motion: reduce)';

function subscribeMotion(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

const getMotionSnapshot = () => window.matchMedia(QUERY).matches;
const getMotionServerSnapshot = () => false;

/** Evita setState dentro de efeito: a mídia query é tratada como store externa. */
function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribeMotion, getMotionSnapshot, getMotionServerSnapshot);
}

/* -------------------------------------------------------------------------- */
/* Peças da interface                                                          */
/* -------------------------------------------------------------------------- */

const WAVE_HEIGHTS = [7, 13, 9, 17, 11, 20, 14, 9, 16, 12, 19, 8, 14, 10, 17, 11];

/** Waveform do áudio em captura. Só se move enquanto a fala está entrando. */
function Waveform({ active }: { active: boolean }) {
  return (
    <span aria-hidden="true" className="flex h-5 items-center gap-[3px]">
      {WAVE_HEIGHTS.map((h, i) => (
        <span
          key={i}
          style={{ height: `${h}px`, animationDelay: `${(i % 7) * 110}ms` }}
          className={`w-[2px] origin-center rounded-full transition-colors duration-500 ${
            active
              ? 'bg-brand-aqua/80 motion-safe:animate-wave'
              : 'scale-y-[0.35] bg-line'
          }`}
        />
      ))}
    </span>
  );
}

/**
 * Texto que "digita". Isolado de propósito: só este nó volta a renderizar a
 * cada caractere. Usa um único `setInterval` no lugar de um `setTimeout` por
 * letra — menos agendamentos e menos trabalho na thread principal.
 */
function TypedText({ text, animate }: { text: string; animate: boolean }) {
  const [count, setCount] = useState(animate ? 0 : text.length);

  useEffect(() => {
    if (!animate) return;

    const id = setInterval(() => {
      setCount((current) => {
        if (current >= text.length) {
          clearInterval(id);
          return current;
        }
        return current + 1;
      });
    }, TYPE_MS);

    return () => clearInterval(id);
  }, [text, animate]);

  return <span className="text-paper">{text.slice(0, count)}</span>;
}

/** Estrutura cinza que ocupa o lugar do resultado enquanto ele é apurado.
 *  Espelha o formato do veredito (selo, nota, fonte e base) para que o painel
 *  não fique vazio e para que nada salte de posição quando o resultado chega. */
function ResultSkeleton() {
  return (
    <div aria-hidden="true" className="grid gap-3 motion-safe:animate-pulse">
      <div className="flex items-center gap-3">
        <span className="block h-2.5 w-14 rounded-full bg-line" />
        <span className="block h-5 w-24 rounded-full bg-line" />
      </div>
      <span className="block h-2 w-full rounded-full bg-line-soft" />
      <span className="block h-2 w-3/4 rounded-full bg-line-soft" />
      <div className="mt-2 grid gap-2.5 border-t border-line-soft pt-4">
        <span className="block h-2 w-2/3 rounded-full bg-line-soft" />
        <span className="block h-2 w-1/2 rounded-full bg-line-soft" />
      </div>
    </div>
  );
}

/** Trilho das quatro etapas, com a atual destacada. */
function StageRail({ stage }: { stage: Stage }) {
  const current = stageIndex(stage);

  return (
    <div aria-hidden="true">
      <p className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.16em]">
        {stage === 'veredito' || stage === 'concluida' ? (
          <span className="text-brand-green">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="m2.5 6.2 2.4 2.4 4.6-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        ) : (
          <span className="h-1.5 w-1.5 rounded-full bg-brand-aqua motion-safe:animate-pulse-dot" />
        )}
        <span className={stage === 'veredito' || stage === 'concluida' ? 'text-brand-green' : 'text-paper-muted'}>
          {STAGES[current].label}
          {stage === 'veredito' || stage === 'concluida' ? '' : '…'}
        </span>
      </p>

      <div className="mt-3 flex gap-1.5">
        {STAGES.map((s, i) => (
          <span key={s.key} className="h-0.5 flex-1 overflow-hidden rounded-full bg-line">
            <span
              className={`block h-full origin-left rounded-full transition-colors duration-300 ${
                i < current ? 'bg-brand-aqua/50' : i === current ? 'bg-brand-aqua' : 'bg-transparent'
              }`}
              style={{ transform: i <= current ? 'scaleX(1)' : 'scaleX(0)' }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Um ciclo completo                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Remontado a cada exemplo (via `key` no pai), o que zera o estado sem precisar
 * de setState síncrono dentro do efeito.
 */
function VerificationCycle({
  item,
  reduced,
  latencyLabel,
  onFinished,
}: {
  item: Statement;
  reduced: boolean;
  latencyLabel: string;
  onFinished: () => void;
}) {
  const [stage, setStage] = useState<Stage>(reduced ? 'veredito' : 'captura');

  useEffect(() => {
    if (reduced) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const capturaMs = item.quote.length * TYPE_MS + 280;
    const at = (ms: number, fn: () => void) => timers.push(setTimeout(fn, ms));

    let t = capturaMs;
    at(t, () => setStage('analise'));
    t += ANALISE_MS;
    at(t, () => setStage('consulta'));
    t += CONSULTA_MS;
    at(t, () => setStage('concluida'));
    t += CONCLUIDA_MS;
    at(t, () => setStage('veredito'));
    at(t + HOLD_MS, onFinished);

    return () => timers.forEach(clearTimeout);
  }, [item.quote, reduced, onFinished]);

  const showResult = stage === 'veredito';

  return (
    <div aria-hidden="true">
      {/* Painel 1 — a afirmação capturada */}
      <div className="border-b border-line-soft px-4 py-5 sm:px-6">
        <div className="flex flex-col gap-1 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between min-[420px]:gap-3">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-brand-aqua">
            Afirmação identificada
          </p>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-paper-dim">
            {item.speaker}
          </p>
        </div>
        <p className="mt-3 min-h-[4.5rem] font-display text-base font-bold leading-snug tracking-tight sm:min-h-[4rem] sm:text-lg">
          <TypedText text={item.quote} animate={!reduced} />
          {stage === 'captura' ? (
            <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-brand-aqua align-middle motion-safe:animate-caret" />
          ) : null}
        </p>
      </div>

      {/* Painel 2 — processamento e resultado */}
      <div className="px-4 py-5 sm:px-6">
        <StageRail stage={stage} />

        <div className="mt-5 min-h-[8.5rem] sm:min-h-[8rem]">
          {showResult ? (
            <div className="animate-rise-in">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-paper-dim">
                  Veredito
                </p>
                <span className="animate-chip-in">
                  <VerdictChip verdict={item.verdict} size="sm" />
                </span>
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-paper-dim">
                  {latencyLabel}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-paper-muted">{item.note}</p>

              <dl className="mt-4 grid gap-2 border-t border-line-soft pt-4 font-mono text-[0.66rem]">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <dt className="uppercase tracking-[0.16em] text-paper-dim">Fonte</dt>
                  <dd className="text-paper">{item.source}</dd>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <dt className="uppercase tracking-[0.16em] text-paper-dim">Base consultada</dt>
                  <dd className="text-paper">{item.base}</dd>
                </div>
              </dl>
            </div>
          ) : (
            <ResultSkeleton />
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Cartão completo                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Mockup da interface do Prova Real, usado como demonstração na primeira dobra.
 *
 * Percorre o ciclo real do produto — capturar a fala, identificar a afirmação,
 * consultar as fontes, devolver o veredito — com falas e descrições de fonte
 * FICTÍCIAS, declaradas como simulação no próprio cartão. Não é uma checagem
 * real, não cita pessoas reais e não nomeia órgãos ou bases reais.
 *
 * Acessibilidade: a animação é decorativa (aria-hidden) e o cartão carrega uma
 * descrição textual equivalente. Com `prefers-reduced-motion`, exibe o estado
 * final sem animar.
 */
export function LiveVerdictDemo() {
  const [index, setIndex] = useState(0);
  const reduced = usePrefersReducedMotion();

  const advance = useCallback(() => {
    setIndex((current) => (current + 1) % demoStatements.length);
  }, []);

  /** A latência real ainda não é pública: usamos a afirmação divulgada pela empresa. */
  const latencyLabel = useMemo(() => {
    const measured = filled(metrics.find((m) => m.id === 'latencia')?.value ?? '');
    return measured ?? 'em milésimos de segundo';
  }, []);

  return (
    <figure className="relative">
      {/* Brilho de apoio atrás do cartão, discreto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-brand-blue/5 blur-2xl"
      />

      <div className="surface overflow-hidden bg-ink-800/95 backdrop-blur-sm">
        {/* Barra superior — estado da sessão e áudio entrando */}
        <div className="flex items-center justify-between gap-3 border-b border-line-soft bg-ink-700/70 px-4 py-3 sm:px-6">
          <span className="flex min-w-0 items-center gap-3">
            <span className="flex shrink-0 items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-paper-muted">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-verdict-false motion-safe:animate-pulse-dot"
              />
              Ao vivo
            </span>
            <span className="hidden sm:block">
              <Waveform active />
            </span>
          </span>
          <span className="shrink-0 rounded-full border border-line px-2.5 py-1 font-mono text-[0.54rem] uppercase tracking-[0.16em] text-paper-dim">
            Simulação
          </span>
        </div>

        <div
          role="img"
          aria-label="Mockup da interface do Prova Real: a fala é capturada e transcrita, a afirmação verificável é identificada, as fontes são consultadas e o resultado aparece com o veredito, a fonte e a base consultada."
        >
          <VerificationCycle
            // A preferencia de movimento so e conhecida apos a hidratacao (no
            // servidor ela e sempre `false`). Incluir `reduced` na key remonta o
            // componente quando ela resolve, garantindo que quem pediu menos
            // movimento receba o estado final ja pronto em vez de um cartao vazio.
            key={`${index}-${reduced}`}
            item={demoStatements[index]}
            reduced={reduced}
            latencyLabel={latencyLabel}
            onFinished={advance}
          />
        </div>

        {/* Progresso do carrossel de exemplos */}
        <div className="flex items-center gap-1.5 border-t border-line-soft px-4 py-3 sm:px-6">
          {demoStatements.map((statement, i) => (
            <span
              key={statement.quote}
              aria-hidden="true"
              className={`h-0.5 flex-1 rounded-full transition-colors duration-500 ${
                i === index ? 'bg-brand-aqua' : 'bg-line'
              }`}
            />
          ))}
        </div>
      </div>

      <figcaption className="mt-3 text-xs leading-relaxed text-paper-dim">
        Simulação ilustrativa da interface, com falas e fontes de exemplo. Não representa uma
        checagem real nem declaração de pessoa real.
      </figcaption>
    </figure>
  );
}
