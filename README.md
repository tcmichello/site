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
- o campo `urlSite` em `dados.js`.

---

## Estrutura dos arquivos

```
.
├── index.html                  página única, com todas as seções
├── 404.html                    página de erro com a identidade da campanha
├── .nojekyll                   obrigatório para o GitHub Pages
├── robots.txt
├── COMO-EDITAR.md              guia da equipe de campanha (leia este!)
├── ANTES-DE-PUBLICAR.md        checklist de 3 itens para o jurídico
└── assets/
    ├── css/estilo.css          todo o visual
    ├── js/dados.js             >>> CONTEÚDO EDITÁVEL: vídeos, depoimentos, mídia
    ├── js/app.js               comportamento (urna, jingle, carrosséis, formulário)
    ├── audio/
    │   ├── jingle-michello.mp3     jingle oficial da campanha
    │   ├── urna-tecla.mp3          bipe de cada tecla
    │   ├── urna-confirma.mp3       som de confirmação
    │   └── urna-erro.mp3           som de número errado
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
- Quatro bandeiras, com o texto oficial da campanha.
- **Seis blocos "Comprovado → O compromisso"**: cada entrega verificada emparelhada com o que ele promete ampliar.
- Contadores animados (28 anos, 10 anos, 2 batalhões, 206 mil seguidores).
- **Galeria de vídeos com 4 vídeos reais do YouTube**, capa automática, filtro por categoria e player em modal.
- **Oito matérias reais de imprensa**: faixa rolante de veículos, clipping em destaque e lista em formato de pauta de redação.
- Formulário que abre o WhatsApp da campanha já preenchido.
- **Player do jingle** com aviso "aumente o som", play/pause, barra de progresso arrastável, volume e mudo.
- **Sons da urna em arquivo**, tocados a cada tecla, no acerto e no erro.
- **9 regiões, uma cidade só**: as nove regiões do folheto, com o dado do IPEDF em destaque.
- **Meus compromissos**: as três frentes oficiais, incluindo o Observatório Distrital de Segurança.
- **Chamada do filtro oficial** no topo e em faixa própria antes do formulário.
- **Seção de financiamento coletivo** com barra de progresso animada e link para a vaquinha.
- **Painel de canais oficiais**: vaquinha, filtro de stories, cadastro AgregAmigos, Instagram, TikTok e WhatsApp.
- QR code funcional apontando para a página de apoio.
- Responsivo, acessível por teclado, respeita `prefers-reduced-motion`, tem versão para impressão.

## Estrutura do site: 6 seções

O site foi reconstruído para ter uma ordem de leitura clara, uma seção por tarefa:

| # | Seção | Trabalho que ela faz |
|---|---|---|
| 1 | **Topo** | Nome, número, lema e o jingle. Uma chamada só: "o que eu faço pela sua região" |
| 2 | **Sua região** | O visitante escolhe entre as 9 regiões e vê a mensagem dele para aquele lugar |
| 3 | **Quem é** | Três parágrafos de biografia e uma faixa com 5 marcos da carreira |
| 4 | **Por que acreditar** | Quatro fatos verificáveis, cada um com link para o veículo que publicou |
| 5 | **Vídeos** | Um em destaque e mais quatro |
| 6 | **Agora é com você** | Treinar o voto na urna, usar o filtro, apoiar a campanha e o cadastro |

Menu com 5 itens. Nada de conteúdo se perdeu: o que saiu foram as repetições.

### O seletor de região

É o elemento central da página. Cada região tem a frase e o texto do folheto, e as seis
que estão sob os batalhões que ele comandou (7º e 3º BPM) aparecem com um ponto dourado
e o selo "Ele comandou o batalhão daqui". No celular vira um trilho deslizante.

Para editar as regiões, veja o bloco `regioes` em `dados.js`.

### Pronto para publicar

Não há mais tarja de aviso, texto de exemplo ou espaço vazio no site. Tudo que aparece na
tela é conteúdo final.

Três pontos dependem de decisão da campanha, não de código, e estão listados no
**ANTES-DE-PUBLICAR.md**: confirmar o CNPJ, validar os blocos "O compromisso" e manter o
valor da vaquinha atualizado. Nenhum deles impede a publicação.

Para editar o dia a dia (vídeos, matérias, contatos), veja o **COMO-EDITAR.md**.

---

## Sobre a seção de depoimentos

A seção foi **removida do site**. Pesquisei e não encontrei na internet nenhum depoimento
público de morador, colega de farda ou liderança comunitária sobre o Coronel Michello que
pudesse ser citado com fonte e com segurança jurídica.

Publicar depoimento inventado seria o pior erro possível num site cuja força inteira está
em "confira a fonte". Por isso, sem material real, a seção sai.

**Quando a campanha tiver depoimentos gravados e autorizados**, me avise que eu remonto a
seção — o desenho já existia e funcionava. O que falta é o conteúdo verdadeiro:
gravação, transcrição e autorização de uso de nome e imagem por escrito.

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

Se precisar trocar, o CNPJ aparece em três lugares: `dados.js` (campo `cnpj`),
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
