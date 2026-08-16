# Post individual

Foco total em leitura.

- Container 1000px; o `article` tem `max-width: 68ch`.
- Primeiro elemento: `$ cd ..` (volta ao índice). **Não** cria janela nova no tmux.
- `$ cat NOME-DO-POST.md` (maiúsculas) 30px acima do título.
- `h1` 32px weight 500; abaixo, metadados em `--overlay0` 13px separados por `·`
  em `--overlay0` (nunca `--surface0`: fica ilegível): data · tempo de leitura · tag.
- Corpo: 16px / 1.7, `--text`. H2 19px com 52px acima. Parágrafos 18–32px de espaço.
- Código inline: fundo `--surface0`, radius 3px, padding `2px 6px`, 14px.
- Bloco de código: borda 0.5px `--surface0`, radius 6px, cabeçalho em `--base` com nome do
  arquivo à esquerda e linguagem à direita (12px `--overlay0`), corpo em `--base`, 13px / 1.65,
  `overflow-x: auto`. Syntax highlighting com Shiki, tema Catppuccin Mocha.
  Preserve indentação e linhas em branco fielmente — o exemplo tem que ser válido.
- Citação: borda esquerda 1px `--surface1`, padding-left 20px, texto `--subtext0`.
- Navegação anterior/próximo no fim: 88px acima, borda superior 0.5px, grid de 2 colunas.
  Esquerda: "← anterior" em `--overlay0` 12px + título 14px. Direita: espelhada
  ("próximo →", alinhada à direita). Hover: background `--base`.
- Rodapé igual ao do índice, limitado a 68ch.
- Barra de status: `0:home` · `1:blog*`; caminho `~/blog/<slug>`.

## Mobile (≤ 720px)

- Padding lateral 24px; `h1` 26px; corpo 16px mantido.
- Bloco de código: rola horizontalmente, sem reduzir a fonte abaixo de 12px.
- Nav anterior/próximo empilha em uma coluna, o "próximo" volta a alinhar à esquerda.
