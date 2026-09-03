'use client';

import { useState, type FormEvent } from 'react';
import { filled, leadForm } from '@/config/site';
import { Button } from '@/components/ui/Button';

type Status = 'idle' | 'sending' | 'ok' | 'error';

const perfis = [
  'Redação / veículo de imprensa',
  'Campanha ou comunicação política',
  'Instituição ou organização da sociedade civil',
  'Outro',
];

const field =
  'w-full rounded-field border border-line bg-ink-800/80 px-4 py-3 text-paper placeholder:text-paper-dim ' +
  'transition-colors focus:border-brand-aqua/70';

/**
 * Formulário de captação. Enquanto `leadForm.endpoint` estiver PENDENTE, os
 * campos ficam desabilitados e a página avisa isso de forma explícita — em vez
 * de simular um envio bem-sucedido que nunca chega a ninguém.
 */
export function LeadForm() {
  const endpoint = filled(leadForm.endpoint);
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint) return;

    setStatus('sending');
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus(response.ok ? 'ok' : 'error');
      if (response.ok) event.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'ok') {
    return (
      <div className="surface p-8 text-center" role="status">
        <p className="font-display text-xl font-extrabold tracking-tight">Pedido registrado</p>
        <p className="mx-auto mt-3 max-w-sm text-paper-muted">
          O time da MobilizaX vai responder no e-mail informado com os próximos passos da
          demonstração.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="surface p-6 sm:p-8" noValidate={false}>
      <fieldset disabled={!endpoint || status === 'sending'} className="grid gap-4">
        <legend className="sr-only">Solicitar demonstração do Prova Real</legend>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="lead-nome" className="mb-2 block text-sm font-medium">
              Nome
            </label>
            <input id="lead-nome" name="nome" type="text" required autoComplete="name" className={field} placeholder="Como podemos te chamar" />
          </div>
          <div>
            <label htmlFor="lead-org" className="mb-2 block text-sm font-medium">
              Organização
            </label>
            <input id="lead-org" name="organizacao" type="text" required autoComplete="organization" className={field} placeholder="Veículo, campanha ou instituição" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="lead-email" className="mb-2 block text-sm font-medium">
              E-mail profissional
            </label>
            <input id="lead-email" name="email" type="email" required autoComplete="email" className={field} placeholder="nome@organizacao.com.br" />
          </div>
          <div>
            <label htmlFor="lead-tel" className="mb-2 block text-sm font-medium">
              Telefone <span className="font-normal text-paper-muted">(opcional)</span>
            </label>
            <input id="lead-tel" name="telefone" type="tel" autoComplete="tel" className={field} placeholder="(00) 00000-0000" />
          </div>
        </div>

        <div>
          <label htmlFor="lead-perfil" className="mb-2 block text-sm font-medium">
            Perfil
          </label>
          <select id="lead-perfil" name="perfil" required defaultValue="" className={field}>
            <option value="" disabled>
              Selecione uma opção
            </option>
            {perfis.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="lead-msg" className="mb-2 block text-sm font-medium">
            O que você precisa cobrir? <span className="font-normal text-paper-muted">(opcional)</span>
          </label>
          <textarea id="lead-msg" name="mensagem" rows={3} className={`${field} resize-y`} placeholder="Debates municipais, sabatinas, entrevistas ao vivo…" />
        </div>

        <label htmlFor="lead-consent" className="flex items-start gap-3 text-sm text-paper-muted">
          <input
            id="lead-consent"
            name="consentimento"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 shrink-0 rounded border-line bg-ink-800 accent-brand-green"
          />
          <span>
            Autorizo a MobilizaX a usar meus dados para responder a este contato comercial.
          </span>
        </label>

        <Button type="submit" size="lg" className="mt-2 w-full">
          {status === 'sending' ? 'Enviando…' : 'Solicitar demonstração'}
        </Button>
      </fieldset>

      {!endpoint ? (
        // PENDENTE: enquanto não houver endpoint, o formulário não finge funcionar.
        <p className="mt-4 rounded-field border border-verdict-unclear/30 bg-verdict-unclear/5 px-4 py-3 text-sm text-verdict-unclear">
          Formulário aguardando o destino dos leads. Preencha{' '}
          <code className="font-mono">leadForm.endpoint</code> em{' '}
          <code className="font-mono">src/config/site.ts</code> para ativar o envio.
        </p>
      ) : null}

      {status === 'error' ? (
        <p role="alert" className="mt-4 rounded-field border border-verdict-false/30 bg-verdict-false/5 px-4 py-3 text-sm text-verdict-false">
          O envio não foi concluído. Tente novamente em instantes ou fale com o time pelos canais no
          rodapé.
        </p>
      ) : null}
    </form>
  );
}
