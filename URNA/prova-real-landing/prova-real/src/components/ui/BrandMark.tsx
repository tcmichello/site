import Image from 'next/image';
import Link from 'next/link';

/** Assinatura da MobilizaX. `priority` apenas no cabeçalho (candidata a LCP). */
export function BrandMark({
  href = '#topo',
  priority = false,
  className = '',
}: {
  href?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-3 ${className}`} aria-label="MobilizaX Prova Real — voltar ao topo">
      <Image
        src="/mobilizax-mark.png"
        alt=""
        width={256}
        height={192}
        priority={priority}
        sizes="40px"
        className="h-8 w-auto transition-transform duration-300 motion-safe:group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-extrabold tracking-tight">
          Mobiliza<span className="text-brand-green">X</span>
        </span>
        {/* O espaco explicito faz o texto visivel ser calculado como
            "MobilizaX Prova Real", casando com o aria-label do link — sem ele o
            nome acessivel nao contem o texto visivel (WCAG 2.5.3). */}{' '}
        <span className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-paper-muted">Prova Real</span>
      </span>
    </Link>
  );
}
