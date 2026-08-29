# Como editar o site — guia da equipe

Escrito para quem **não é programador**. Você só precisa de um editor de texto
(o Bloco de Notas serve, mas o [VS Code](https://code.visualstudio.com/) é bem melhor)
ou do próprio editor do GitHub, clicando no lápis do arquivo.

**Regra única e absoluta:** troque só o texto que fica **entre aspas**.
Não apague vírgulas, chaves `{ }` nem colchetes `[ ]`.

---

## 1. Publicar um vídeo

Abra `dados.js` e procure o bloco `videos:`.

Cada vídeo é um bloco assim:

```js
{
  tipo: "youtube",
  id: null,
  titulo: "Por que eu decidi ser candidato",
  descricao: "O convite, o chamado e a decisão de sair da farda.",
  categoria: "Campanha",
  capa: null,
  link: null
}
```

Enquanto `id` estiver como `null`, o card aparece com a moldura listrada
"aguardando publicação". Isso é de propósito: o site nunca fica quebrado.

**Para colocar um vídeo do YouTube no ar:**

Os quatro vídeos do YouTube que já estão no ar foram localizados na pesquisa e são reais:
reportagem do **DF Record**, cobertura do **DF Alerta**, a entrevista sobre a carreira na PMDF
e o short do **Deu Liga**. As capas vêm sozinhas do YouTube.

O vídeo marcado com `destaque: true` aparece grande no topo da seção. Só um deve ter
essa marca.

**Para acrescentar outro vídeo do YouTube:**

1. Abra o vídeo no YouTube e copie o endereço. Exemplo:
   `https://www.youtube.com/watch?v=`**`dQw4w9WgXcQ`**
2. O código é o que vem **depois de `watch?v=`** — no exemplo, `dQw4w9WgXcQ`.
3. Troque `id: null` por `id: "dQw4w9WgXcQ"` (com aspas!).
4. Salve. Pronto: a miniatura aparece sozinha e o vídeo abre num player dentro do site.

**Vídeo do Instagram ou de outra rede:** deixe `id: null` e preencha o `link` com o endereço
do post. O card vira um botão "Abrir no perfil ↗" e abre em nova aba.

**Criar uma categoria nova:** é só escrever um nome diferente em `categoria`.
O botão de filtro aparece sozinho lá em cima.

**Adicionar mais um vídeo:** copie um bloco inteiro (do `{` até o `}`), cole logo abaixo
e não esqueça da vírgula separando os blocos.

---

## 2. Depoimentos

A seção **não existe mais** no site. Não encontrei depoimentos públicos de pessoas reais
sobre o candidato, e publicar depoimento inventado destruiria a credibilidade da página
inteira — que se apoia justamente em "confira a fonte de tudo".

Para reativar, a campanha precisa de:

1. gravação ou texto do depoimento real;
2. **autorização por escrito** de uso de nome e imagem;
3. de preferência, um vídeo curto — depoimento em vídeo converte muito mais que texto.

Com esse material em mãos, peça a remontagem da seção. O desenho já estava pronto.

---

## 3. Acrescentar uma matéria de imprensa

Em `dados.js`, bloco `midia:`. Copie um item, cole e preencha:

```js
{
  veiculo: "Correio Braziliense",
  data: "Set/2026",
  titulo: "Título da matéria",
  resumo: "Duas ou três linhas explicando o que a matéria diz.",
  link: "https://endereco-da-materia.com.br/..."
}
```

Os itens aparecem na ordem em que estão no arquivo. Para destacar uma matéria nova,
coloque ela como primeira da lista.

> Só entre com matérias reais, com link que funcione. Essa seção é a que dá credibilidade
> ao site inteiro — uma matéria inventada derruba a confiança em todo o resto.

---

## 4. Mudar o texto das bandeiras

As bandeiras ficam direto no `index.html`, na seção que começa com
`<!-- ================= BANDEIRAS ================= -->`.

Cada uma é um bloco assim:

```html
<article class="bg__card" data-reveal>
  <span class="bg__ico" aria-hidden="true"> … desenho do ícone … </span>
  <h3>Segurança que chega antes do crime</h3>
  <p>Policiamento de proximidade, presença fixa nas quadras…</p>
</article>
```

Troque o que está dentro de `<h3>` (o título) e de `<p>` (o texto).
Não mexa no `<span class="bg__ico">` — é o desenho do ícone.

As quatro usam o texto oficial da campanha e já estão prontas.

**Para acrescentar uma quinta bandeira:** copie um `<article>` inteiro, cole logo abaixo
e troque o `<h3>` e o `<p>`. O ícone você pode reaproveitar de outro card.

---

## 4b. Atualizar o valor da vaquinha

O total arrecadado **não é puxado automaticamente** da plataforma. Precisa ser digitado.

Em `dados.js`, procure o bloco `vaquinha`:

```js
vaquinha: {
  arrecadado:   7605,        // troque por este número
  meta:         150000,
  link:         "https://tcmichello.com.br"
}
```

Regra do número: **só dígitos**. Sete mil e seiscentos se escreve `7600`. Sem `R$`,
sem ponto, sem vírgula. A barra de progresso e a porcentagem se recalculam sozinhas.

O site **não mostra a data** da última conferência, então o eleitor nunca vê que o número
está velho. Isso resolve o constrangimento, mas não resolve o problema: valor parado ainda
passa impressão de campanha parada quando alguém volta ao site depois de umas semanas.
Vale combinar uma rotina de atualização, duas vezes por semana já basta.

Se quiser tirar a barra de vez e deixar só o botão "Doar agora", apague o bloco `vaquinha`
inteiro do `dados.js`. O cartão continua funcionando, só sem o número.

---

## 5. Trocar telefone, Instagram ou o número

Tudo isso está no começo do `dados.js`, no bloco `config:`:

```js
config: {
  numero:    "20122",
  whatsapp:  "5561995623696",   // só números, com o 55 do Brasil na frente
  instagram: "tc_michello",
  tiktok:    "tc.michello",
  cnpj:      "68.462.311/0001-06",
  urlSite:   "https://tcmichello.com.br"
}
```

Logo abaixo fica o bloco `links`, com todos os endereços oficiais que alimentam o painel
de canais da seção "Faça parte":

```js
links: {
  vaquinha:  "https://tcmichello.com.br",
  filtro:    "https://tcmichello.github.io/filtro/",
  amigos:    "https://www.agregamigos.com.br/michello-bueno/link-cadastro",
  instagram: "https://www.instagram.com/tc_michello",
  tiktok:    "https://www.tiktok.com/@tc.michello",
  whatsapp:  "https://wa.me/5561995623696"
}
```

Mudou um link? Troque só aqui — o card correspondente se atualiza sozinho.
Apagou um link (deixou vazio)? O card some da lista, sem quebrar nada.

⚠️ **Atenção:** o telefone aparece em mais três lugares que são HTML fixo —
o rodapé do `index.html`, o botão verde flutuante do WhatsApp e o texto do card de canais.
Se trocar o número, use **Localizar e substituir** no `index.html` procurando por
`5561995623696` e por `99562-3696`, e também em `app.js`.

### Sobre o CNPJ

O site usa **68.462.311/0001-06**, o CNPJ informado na landing oficial. O material impresso
traz outro número. Detalhes e o que fazer estão no **ANTES-DE-PUBLICAR.md**.

---

## 6. Trocar o QR code

O QR que está no site aponta para o WhatsApp da campanha com uma mensagem já escrita.

Para trocar por outro (link de cadastro, site oficial, o que for):
gere o novo QR, salve como PNG e substitua o arquivo `qrcode.png`,
mantendo exatamente esse nome. Não precisa mexer em código nenhum.

Se o arquivo for apagado, o site mostra o número 20122 no lugar, sem quebrar.

---

## 7. Trocar as fotos

Substitua os arquivos dentro de `` mantendo os **mesmos nomes**:

| Arquivo | Onde aparece | Formato ideal |
|---|---|---|
| `michello-recorte.webp` | topo do site | recorte sem fundo, vertical, ~940×1665 |
| `retrato.webp` | seção "Quem é" | vertical, ~900×1023 |
| `urna-foto.webp` | dentro da urna de treino | quadrada, rosto e ombros, ~600×600 |
| `lockup.png` | topo e rodapé | assinatura com fundo transparente |
| `og.jpg` | prévia no WhatsApp e Facebook | 1200×630 |

Foto com fundo branco não funciona bem no topo, porque o fundo do site é azul-marinho.
Peça ao designer um **PNG com fundo transparente**, e recortado com cuidado nas bordas
do cabelo — foi exatamente isso que precisou ser corrigido no arquivo original.

---

## 8. Publicar as alterações

Se está editando pelo site do GitHub:

1. Clique no lápis do arquivo.
2. Faça a alteração.
3. Role até o fim, escreva uma frase curta do que mudou (ex.: "adiciona vídeo da entrevista")
   e clique em **Commit changes**.
4. Em 1 ou 2 minutos o site atualiza sozinho.

Se o site não atualizar, dê um **Ctrl + F5** (ou Cmd + Shift + R no Mac) para o navegador
buscar a versão nova em vez da que está guardada na memória dele.

---

## Quebrou alguma coisa?

O erro é quase sempre uma **vírgula a mais ou a menos** no `dados.js`.
Sintoma: a seção de vídeos, depoimentos ou mídia aparece vazia.

Como conferir:
1. Abra o site no Chrome.
2. Aperte **F12** e clique na aba **Console**.
3. Se aparecer uma linha vermelha escrito `SyntaxError`, o número ao lado indica a linha
   com o problema no arquivo.

Regra prática: dentro das listas, **todo item tem vírgula depois do `}`, menos o último**.
