# Como colocar a página no ar em /materiais

Guia para publicar a biblioteca de materiais no endereço
`www.michello.com.br/materiais`.

---

## Parte 1 · Subir a pasta no GitHub

O endereço termina em `/materiais` porque os arquivos ficam dentro de uma **pasta**
chamada `materiais`. E aqui está o truque que resolve o problema que já aconteceu antes
com a pasta `assets`:

> **Arrastar pasta para o GitHub costuma falhar.** Em vez disso, crie a pasta digitando
> o nome dela junto com o do arquivo. O GitHub cria a pasta sozinha.

### Passo a passo

1. Abra o seu repositório no GitHub.
2. Clique em **Add file → Create new file**.
3. No campo do nome, digite exatamente:

   ```
   materiais/index.html
   ```

   **Assim que você digitar a barra `/`, o GitHub cria a pasta** e mostra
   `materiais /` antes do campo. É esse o comportamento esperado.
4. Abra o arquivo `index.html` que eu te mandei, copie **todo** o conteúdo e cole
   na caixa de texto.
5. Role até o fim e clique em **Commit changes**.

Agora repita para os outros três arquivos. Como a pasta já existe, é mais rápido:
entre na pasta `materiais` e use **Add file → Create new file** para cada um.

| Nome do arquivo | O que é |
|---|---|
| `materiais/index.html` | a página |
| `materiais/materiais.css` | o visual |
| `materiais/materiais.js` | a busca e os filtros |
| `materiais/itens.js` | **a lista de materiais, é o único que você vai editar depois** |

Em um ou dois minutos a página estará em `seu-endereco/materiais`.

---

## Parte 2 · O domínio michello.com.br

Isto é independente da página e **só funciona se a campanha já tiver comprado o
domínio `michello.com.br`**. Hoje vocês usam `tcmichello.com.br`, que aponta para a
vaquinha no QueroApoiar, então é outro domínio.

Se a campanha tiver o domínio:

1. No repositório, crie um arquivo chamado `CNAME` (sem extensão, tudo maiúsculo) na
   raiz, contendo só esta linha:

   ```
   www.michello.com.br
   ```

2. No painel onde o domínio foi comprado (Registro.br, GoDaddy, Hostinger...), crie:
   - um registro **CNAME** de `www` apontando para `SEU-USUARIO.github.io`
   - quatro registros **A** do domínio raiz apontando para:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. No GitHub, vá em **Settings → Pages**, preencha *Custom domain* com
   `www.michello.com.br` e marque **Enforce HTTPS**.

O DNS pode levar de 15 minutos a algumas horas para propagar. Enquanto isso, a página
funciona normalmente no endereço do GitHub Pages.

> **Se a campanha ainda não tem esse domínio**, a página já funciona hoje em
> `seu-usuario.github.io/seu-repositorio/materiais`. Dá para mandar esse link para a
> equipe agora e trocar depois, sem refazer nada.

---

## Parte 3 · Como acrescentar material novo

Abra `materiais/itens.js` e copie um bloco existente. Cada item é assim:

```js
{
  titulo:   "Nome que aparece no card",
  descricao:"Uma linha dizendo o que é e quando usar",
  categoria:"Fotos",
  tipo:     "imagem",
  arquivo:  "../nome-do-arquivo.png",
  capa:     "../nome-do-arquivo.png",
  formato:  "PNG · 1200×800",
  tags:     "palavras que alguem digitaria para achar isso"
},
```

**Categorias:** Identidade · Fotos · Vídeos · Áudio · Impressos · Links
**Tipos:** imagem · video · audio · pdf · link

### A regra mais importante: arquivo pequeno x arquivo grande

| Situação | O que fazer |
|---|---|
| Logo, foto, PDF até ~25 MB | Sobe na raiz do repositório. Em `arquivo:` use `"../nome.png"` |
| Vídeo, pasta de fotos, arquivo de gráfica | **Não sobe no GitHub.** Suba no Google Drive, gere o link com acesso "qualquer pessoa com o link" e cole em `arquivo:` com `tipo: "link"` |

O GitHub recusa arquivo acima de 100 MB e fica lento perto de 1 GB de repositório.
Vídeo bruto estoura isso rápido.

### As tags fazem a busca funcionar

Escreva as palavras que a pessoa realmente digitaria, não o nome técnico. Se o designer
procura "arte do story", a tag precisa ter `story`. Sem acento funciona: a busca ignora
acentuação.

---

## Parte 4 · Três cuidados

**A página é pública.** Qualquer pessoa com o endereço vê tudo. Coloquei
`noindex` para não aparecer no Google, mas isso não é senha. **Não suba contrato,
planilha de custo, lista de apoiadores nem dado pessoal.** Se precisar de material
restrito, use uma pasta do Drive com acesso controlado e coloque aqui só o link.

**Direito de imagem.** Foto com apoiador, criança ou terceiro identificável só entra
com autorização de uso de imagem assinada. É o tipo de coisa que vira problema jurídico
em campanha.

**Todo material impresso precisa do CNPJ.** A página já traz
`20.329.974/0001-20` no rodapé, o mesmo dos folhetos. Continua valendo confirmar com o
jurídico qual é o número correto, porque eu já vi três variações diferentes no material
que vocês me mandaram.
