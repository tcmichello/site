import { BrandMark } from '@/components/ui/BrandMark';
import { contact, filled, legal, navLinks, social } from '@/config/site';

export function SiteFooter() {
  const ano = new Date().getFullYear();
  const email = filled(contact.email);
  const phone = filled(contact.phone);
  const address = filled(contact.address);
  const cnpj = filled(contact.cnpj);
  const privacy = filled(legal.privacyUrl);
  const terms = filled(legal.termsUrl);
  const redes = social
    .map((s) => ({ label: s.label, href: filled(s.href) }))
    .filter((s): s is { label: string; href: string } => Boolean(s.href));

  return (
    <footer className="border-t border-line-soft bg-ink-800">
      <div className="shell grid gap-10 py-14 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-12">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper-muted">
            Prova Real é a plataforma de checagem de fatos em tempo real desenvolvida pela
            MobilizaX para debates, entrevistas e discursos políticos.
          </p>
        </div>

        <nav aria-label="Seções da página">
          <h2 className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-paper-dim">
            Navegar
          </h2>
          <ul className="mt-4 grid gap-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-paper-muted transition-colors hover:text-paper">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-paper-dim">
            Contato
          </h2>
          <ul className="mt-4 grid gap-2.5 text-sm text-paper-muted">
            {email ? (
              <li>
                <a href={`mailto:${email}`} className="transition-colors hover:text-paper">
                  {email}
                </a>
              </li>
            ) : null}
            {phone ? (
              <li>
                <a href={`tel:${phone}`} className="transition-colors hover:text-paper">
                  {phone}
                </a>
              </li>
            ) : null}
            {address ? <li>{address}</li> : null}
            {redes.map((rede) => (
              <li key={rede.label}>
                <a
                  href={rede.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-paper"
                >
                  {rede.label}
                </a>
              </li>
            ))}
            {!email && !phone && !address && redes.length === 0 ? (
              <li>
                <a href="#contato" className="transition-colors hover:text-paper">
                  Falar pelo formulário
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-line-soft py-6 text-xs text-paper-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {ano} MobilizaX. Todos os direitos reservados.
          {cnpj ? <> · CNPJ {cnpj}</> : null}
        </p>
        {privacy || terms ? (
          <p className="flex gap-5">
            {privacy ? (
              <a href={privacy} className="transition-colors hover:text-paper">
                Política de Privacidade
              </a>
            ) : null}
            {terms ? (
              <a href={terms} className="transition-colors hover:text-paper">
                Termos de Uso
              </a>
            ) : null}
          </p>
        ) : null}
      </div>
    </footer>
  );
}
