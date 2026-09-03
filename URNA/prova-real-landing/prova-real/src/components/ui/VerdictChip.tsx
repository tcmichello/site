import type { VerdictKey } from '@/content/product';
import { verdictLabels } from '@/content/product';

const styles: Record<VerdictKey, string> = {
  true: 'border-verdict-true/40 bg-verdict-true/10 text-verdict-true',
  unclear: 'border-verdict-unclear/40 bg-verdict-unclear/10 text-verdict-unclear',
  false: 'border-verdict-false/40 bg-verdict-false/10 text-verdict-false',
  context: 'border-verdict-context/40 bg-verdict-context/10 text-verdict-context',
};

const dots: Record<VerdictKey, string> = {
  true: 'bg-verdict-true',
  unclear: 'bg-verdict-unclear',
  false: 'bg-verdict-false',
  context: 'bg-verdict-context',
};

/** Selo de classificação: o vocabulário visual central do produto. */
export function VerdictChip({
  verdict,
  className = '',
  size = 'md',
}: {
  verdict: VerdictKey;
  className?: string;
  size?: 'sm' | 'md';
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border font-mono font-medium uppercase tracking-widest ${
        size === 'sm' ? 'px-2.5 py-1 text-[0.6rem]' : 'px-3 py-1.5 text-[0.68rem]'
      } ${styles[verdict]} ${className}`}
    >
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${dots[verdict]}`} />
      {verdictLabels[verdict]}
    </span>
  );
}
