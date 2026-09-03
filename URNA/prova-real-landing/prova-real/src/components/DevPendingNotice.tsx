import { listarPendencias } from '@/config/site';

/**
 * Aviso exclusivo de desenvolvimento: lista tudo que a MobilizaX ainda precisa
 * preencher em src/config/site.ts. Nunca aparece em produção.
 */
export function DevPendingNotice() {
  if (process.env.NODE_ENV === 'production') return null;

  const pendencias = listarPendencias();
  if (pendencias.length === 0) return null;

  return (
    <aside className="border-t border-verdict-unclear/30 bg-verdict-unclear/5 px-5 py-6 sm:px-8">
      <div className="mx-auto max-w-shell">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-verdict-unclear">
          Somente em desenvolvimento · {pendencias.length} dado(s) comercial(is) pendente(s)
        </p>
        <p className="mt-2 text-sm text-paper-muted">
          Preencha em <code className="font-mono text-paper">src/config/site.ts</code>. Enquanto
          estiverem pendentes, os itens abaixo não são exibidos ao visitante.
        </p>
        <ul className="mt-3 grid gap-1 font-mono text-xs text-paper-muted sm:grid-cols-2">
          {pendencias.map((p) => (
            <li key={p}>· {p}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
