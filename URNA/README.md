# Coronel Michello 20122 — site de campanha

Site institucional e de campanha do **Tenente-Coronel Michello Bueno Gonçalves Oliveira**,
candidato a Deputado Distrital do Distrito Federal pelo Podemos (nº **20122**) nas eleições de 2026.

Site estático. Sem build, sem Node, sem framework, sem banco de dados.
É só subir os arquivos e funciona.

---

## Publicar no GitHub Pages em 5 minutos

1. Crie um repositório novo no GitHub (pode ser público ou privado com Pages habilitado).
2. Suba **todo o conteúdo desta pasta** na raiz do repositório — `index.html` precisa ficar
   na raiz, não dentro de uma subpasta.
3. No repositório, vá em **Settings → Pages**.
4. Em *Source*, escolha **Deploy from a branch**; em *Branch*, escolha `main` e a pasta `/ (root)`.
5. Salve. Em 1–2 minutos o site sai no ar em
   `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

O arquivo `.nojekyll` já está incluído — ele impede o GitHub de processar a pasta como blog
Jekyll, o que quebraria os caminhos de `assets/`.

### Domínio próprio

Se a campanha tiver um domínio (ex.: `coronelmichello20122.com.br`):

1. Crie um arquivo chamado `CNAME` na raiz do repositório contendo só o domínio, sem `https://`.
2. No painel do provedor do domínio, aponte um registro `CNAME` de `www` para
   `SEU-USUARIO.github.io`, e registros `A` do domínio raiz para os IPs do GitHub Pages.
3. Em **Settings → Pages**, preencha o campo *Custom domain* e marque *Enforce HTTPS*.

Depois de definir o domínio, atualize duas coisas:
- a tag `<link rel="canonical">` no `index.html`;
- o campo `urlSite` em `assets/js/dados.js`.

---

## Estrutura dos arquivos

```
.
├── index.html                  página única, com todas as seções
├── 404.html                    página de erro com a identidade da campanha
├── .nojekyll                   obrigatório para o GitHub Pages
├── robots.txt
├── COMO-EDITAR.md              guia da equipe de campanha (leia este!)
└── assets/
    ├── css/estilo.css          todo o visual
    ├── js/dados.js             >>> CONTEÚDO EDITÁVEL: vídeos, depoimentos, mídia
    ├── js/app.js               comportamento (urna, carrosséis, formulário)
    └── img/
        ├── lockup.png/.webp        assinatura oficial (nome + número), fundo transparente
        ├── michello-recorte.png    recorte do candidato, fundo transparente
        ├── michello-recorte.webp   versão leve usada no site
        ├── retrato.webp            retrato usado na seção "Quem é"
        ├── urna-foto.webp          busto usado dentro da urna de treino
        ├── og.jpg                  imagem de compartilhamento (WhatsApp, Facebook)
        ├── qrcode.png              QR code do WhatsApp da campanha
        ├── favicon-512.png
        └── apple-touch-icon.png
```

---

## O que já está pronto e o que falta

### Pronto
- Hero com a assinatura oficial e o recorte do candidato (a franja branca da máscara foi removida).
- **Urna de treino interativa** — o eleitor digita 20122 e vê a tela exata da urna eletrônica.
  Funciona por clique e por teclado, tem som opcional e botão de compartilhar.
- Linha do tempo com 9 marcos da carreira, cada um com link para a fonte pública.
- Quatro bandeiras oficiais (texto da landing) + duas propostas marcadas para revisão.
- Seis conquistas com link para a matéria original de cada uma.
- Contadores animados (28 anos, 10 anos, 2 batalhões, 206 mil seguidores).
- Galeria de vídeos com filtro por categoria e player em modal.
- Oito matérias reais de imprensa, com link.
- Carrossel de depoimentos.
- Formulário que abre o WhatsApp da campanha já preenchido.
- **Seção de financiamento coletivo** com barra de progresso animada e link para a vaquinha.
- **Painel de canais oficiais**: vaquinha, filtro de stories, cadastro AgregAmigos, Instagram, TikTok e WhatsApp.
- QR code funcional apontando para a página de apoio.
- Responsivo, acessível por teclado, respeita `prefers-reduced-motion`, tem versão para impressão.

### Falta a equipe preencher
| O quê | Onde | Situação |
|---|---|---|
| IDs dos vídeos do YouTube | `assets/js/dados.js` | Cards aparecem como "aguardando publicação" |
| Valor arrecadado na vaquinha | `assets/js/dados.js`, bloco `vaquinha` | Fixo em R$ 7.605 — **não atualiza sozinho** |
| Confirmar o CNPJ de campanha | `dados.js`, `index.html`, `404.html` | Há divergência entre a landing e o impresso |
| Depoimentos reais | `assets/js/dados.js` | Estão com tarja laranja **EXEMPLO — SUBSTITUIR** |
| Texto final das bandeiras | `index.html`, seção `#bandeiras` | Redação proposta, precisa bater com o plano registrado no TSE |
| Fotos de eventos e comício | `assets/img/` | Ainda não há galeria de fotos |

Detalhes de como mexer em cada item estão no **COMO-EDITAR.md**.

---

## ⚠️ Divergência de CNPJ — resolver antes de publicar

Há **dois CNPJs diferentes** circulando no material da campanha:

| Origem | CNPJ |
|---|---|
| Landing oficial `tcmichello.github.io/ordemsemmedo` | **68.462.311/0001-06** |
| Material impresso enviado pela equipe | 20.329.974/0001-20 |

O site está usando o da landing oficial, por ser o mais recente e por estar rotulado lá
como "CNPJ de campanha". **Confirme com o jurídico qual é o correto** — a identificação do
responsável é exigência do TSE para propaganda eleitoral.

Se precisar trocar, o CNPJ aparece em três lugares: `assets/js/dados.js` (campo `cnpj`),
o rodapé do `index.html` e o rodapé do `404.html`.

O mesmo vale para o **telefone**: a landing traz (61) 99562-3696 e o impresso traz
(61) 98615-2185. O site adotou o da landing.

---

## Aviso legal

Conteúdo de propaganda eleitoral. CNPJ de campanha: 68.462.311/0001-06.

Todas as informações biográficas e as conquistas exibidas no site vêm de fontes públicas
verificáveis (Metrópoles, Jornal de Brasília, GPS Brasília, portal da PMDF, CABE/PMDF e
Câmara Legislativa do DF), e o link da fonte aparece junto de cada afirmação.

**Antes de publicar, confira com o jurídico da campanha** se todo o material atende às regras
do TSE para propaganda eleitoral na internet, em especial quanto à identificação do responsável,
ao uso de imagem de terceiros e à veiculação de depoimentos.
