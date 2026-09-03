import { ButtonLink } from '@/components/ui/Button';

export const metadata = { title: 'Página não encontrada' };

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">Erro 404</p>
      <h1 className="mt-5 text-display-lg">Esta página não existe.</h1>
      <p className="mt-5 max-w-md text-paper-muted">
        O endereço acessado não corresponde a nenhuma página do Prova Real.
      </p>
      <ButtonLink href="/" size="lg" className="mt-8">
        Voltar para o início
      </ButtonLink>
    </section>
  );
}
