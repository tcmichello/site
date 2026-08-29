# Antes de publicar — checklist

O site está **pronto para ir ao ar**. Não há mais tarja de aviso, texto de exemplo nem
espaço vazio: tudo que aparece na tela é conteúdo final.

Este arquivo existe só para registrar as três coisas que dependem de uma decisão da
campanha, não de código. Nada aqui impede a publicação — mas confira antes de divulgar
o link em massa.

---

## 1. Confirmar o CNPJ de campanha ⚠️

Há dois números diferentes circulando no material:

| Origem | CNPJ |
|---|---|
| Landing oficial `tcmichello.github.io/ordemsemmedo` | **68.462.311/0001-06** ← o site usa este |
| Material impresso enviado pela equipe | 20.329.974/0001-20 |

A identificação do responsável é **exigência do TSE** para propaganda eleitoral.
Confirme com o jurídico qual é o válido.

Se precisar trocar, o CNPJ aparece em três lugares:
- `dados.js`, campo `cnpj`
- rodapé do `index.html`
- rodapé do `404.html`

**O mesmo vale para o telefone.** A landing traz (61) 99562-3696 e o impresso traz
(61) 98615-2185. O site adotou o da landing.

---

## 2. Validar os blocos "O compromisso"

Na seção **Ele já fez. Agora quer ampliar.**, cada entrega comprovada vem emparelhada
com um bloco dourado *O compromisso*.

- Os blocos **Comprovado** (selo verde) são fatos verificáveis, cada um com link para a
  fonte original. Podem ir ao ar sem ressalva.
- Os blocos **O compromisso** (selo dourado) foram redigidos a partir do que o candidato
  defende publicamente, mas são **texto proposto**. Peça uma leitura dele e confira se
  batem com o plano de governo registrado no TSE.

São seis, todos no `index.html`, seção `#conquistas`. Para ajustar, troque só o texto
dentro do `<div class="prova__compromisso">`.

As quatro **bandeiras** usam o texto oficial da landing, sem alteração — não precisam de
revisão.

---

## 3. Manter o valor da vaquinha atualizado

O total arrecadado está fixo em `dados.js`, bloco `vaquinha`, e **não se atualiza sozinho**.

```js
vaquinha: {
  arrecadado:   7605,     // só dígitos, sem R$ e sem pontuação
  meta:         150000,
  link:         "https://tcmichello.com.br"
}
```

A data da última conferência **não aparece** no site, então o visitante não percebe se o
número está velho. Ainda assim, combine uma rotina: duas vezes por semana resolve.

---

## 4. Sobre os sons da urna

Os três sons da urna (`urna-tecla.mp3`, `urna-confirma.mp3`, `urna-erro.mp3`) são
**reproduções sintetizadas**, feitas para soar como a urna eletrônica. Não são o áudio
oficial do TSE, que não está disponível para download livre.

Eles cumprem bem a função no treino e não têm problema de licença, justamente por serem
originais. Se a campanha quiser o som oficial, precisa obter o arquivo por uma fonte
autorizada e substituir os três arquivos mantendo os mesmos nomes.

O som vem **ligado por padrão**, mas o navegador só o libera depois do primeiro clique
do visitante, que é uma regra dos próprios navegadores. Há um botão para desligar
logo abaixo do teclado.

---

## O que dá para melhorar depois (nada disso trava a publicação)

**Depoimentos.** A seção foi removida porque não existe, publicamente, depoimento de
morador, colega de farda ou liderança sobre o Coronel Michello que pudesse ser citado
com fonte. Publicar depoimento inventado destruiria a credibilidade de uma página que se
apoia inteira em "confira a fonte". Quando a campanha tiver material real — gravação,
transcrição e **autorização escrita de uso de nome e imagem** — a seção pode ser
remontada. Priorize vídeo: converte muito mais que texto.

**Mais vídeos.** Estão no ar quatro vídeos reais do YouTube, o podcast da Rádio Corredor
e um reel do Instagram. Conforme a campanha produzir material novo, é só acrescentar em
`dados.js` (o passo a passo está no `COMO-EDITAR.md`).

**Fotos de rua.** Não há galeria de eventos, caminhadas e reuniões comunitárias. É o que
mais falta para dar calor humano à página.

**Domínio próprio.** O site funciona no endereço do GitHub Pages, mas
`tcmichello.com.br` transmite mais seriedade. Instruções no `README.md`.
