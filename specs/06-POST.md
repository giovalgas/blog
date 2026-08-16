# Post individual

Comp: `specs/Post.dc.html`. Foco total em leitura.

## Estrutura

- `main`: container 1000px, `padding: 88px 56px 120px`.
- Primeiro elemento: `$ cd ..` (volta ao índice; **não** cria janela nova no tmux). 13px,
  `gap: 12px`, `padding: 6px 12px`, `margin-left: -12px`, radius 5px,
  hover `background: --base` + `translateX(4px)`.
- `article`: `max-width: 68ch`, `margin-top: 56px`, `fadeUp .5s ease both`.
- `$ cat NOME-DO-POST.md` (maiúsculas): 13px, `gap: 10px`, 30px de margem inferior.
- `h1`: 32px, weight 500, `letter-spacing: -0.03em`, `line-height: 1.25`, `text-wrap: pretty`.
- Metadados: `margin-top: 18px`, `gap: 16px`, 13px, tudo em `--overlay0` — inclusive os
  separadores `·` (nunca `--surface0`: fica ilegível). Ordem: data · tempo de leitura · tag.
- Primeiro parágrafo: `margin-top: 44px`.
- Corpo: 16px / 1.7, `--text`. `h2` 19px / weight 500 / `-0.02em` com `margin-top: 52px`;
  o parágrafo seguinte a um `h2` usa `margin-top: 18px`; os demais 32px.
- Código inline: fundo `--surface0`, radius 3px, padding `2px 6px`, 14px.
- Bloco de código: `margin-top: 32px`, borda 0.5px `--surface0`, radius 6px,
  `overflow: hidden`. Cabeçalho: fundo `--base`, borda inferior 0.5px `--surface0`,
  `padding: 9px 16px`, 12px `--overlay0`, nome do arquivo à esquerda e linguagem à direita.
  Corpo: fundo `--base`, `padding: 20px`, 13px / 1.65, `overflow-x: auto`.
  Syntax highlighting com Shiki, tema Catppuccin Mocha.
  Preserve indentação e linhas em branco fielmente — o exemplo tem que ser válido.
- Citação: `margin-top: 32px`, borda esquerda 1px `--surface1`, `padding-left: 20px`,
  16px / 1.7, texto `--subtext0`.
- Navegação anterior/próximo: `max-width: 68ch`, `margin-top: 88px`, `padding-top: 28px`,
  borda superior 0.5px `--surface0`, grid `1fr 1fr` com `gap: 24px`. Cada lado:
  flex coluna `gap: 8px`, `padding: 16px 14px`, `margin: 0 -14px`, radius 6px,
  hover `background: --base`. Rótulo "← anterior" / "próximo →" em 12px `--overlay0`,
  título em 14px `--text` com `text-wrap: pretty`. O lado direito alinha à direita
  (`align-items: flex-end; text-align: right`).
- Rodapé: `max-width: 68ch`, `margin-top: 72px`, `padding-top: 28px`, borda superior 0.5px
  `--surface0`, 13px. Nav com `gap: 26px` e **quatro** links: github · linkedin · email · rss
  (sem instagram, youtube ou blog). `$` + cursor 8×16px à direita.

## Mobile (≤ 720px)

- Padding lateral 24px; `h1` 26px; corpo 16px mantido.
- Bloco de código: rola horizontalmente, sem reduzir a fonte abaixo de 12px.
- Nav anterior/próximo empilha em uma coluna, o "próximo" volta a alinhar à esquerda.

## Barra de status

`0:home` (link) · `1:blog*`; caminho `~/blog/<slug>`.
