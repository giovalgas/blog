# Índice do blog

Lista cronológica densa, agrupada por ano.

- Container 1000px, padding `88px 56px 120px`.
- Primeiro elemento: `$ tmux select-window -t home` (volta para a home).
- Cabeçalho da listagem 56px abaixo: `$ ls -t ~/blog` à esquerda,
  contagem ("4 textos" / "4 posts") em `--overlay0` 12px à direita.
- Para cada ano (decrescente): rótulo do ano em `--overlay0` 13px com borda inferior
  0.5px `--surface0`; depois as linhas de post.
- Linha de post: grid `110px 1fr auto`, `gap: 28px`, padding `15px 12px`,
  borda inferior 0.5px `--base`, hover background + translateX 4px.
  - data `YYYY-MM-DD` em `--overlay0` 13px;
  - título em `--text` 15px, `letter-spacing: -0.01em`, `text-wrap: pretty`;
  - tempo de leitura em `--overlay0` 12px.
- Estado vazio (nenhum post publicado): bloco em `--overlay0` com
  `ls: ~/blog: 0 entradas` e uma segunda linha em `--subtext0` dizendo que os textos vêm
  em breve. Sem ilustração, sem card.
- Rodapé: mesma nav da home + `rss`, com `$` e cursor à direita.
- Barra de status: `0:home` (link) · `1:blog*`; caminho `~/blog`.

## Mobile (≤ 720px)

- Grid vira duas linhas: data + tempo de leitura na primeira (13px/12px, `--overlay0`,
  separados por `gap: 12px`), título na segunda em 15px.
- Rótulo do ano fica sticky no topo, abaixo do padding, com fundo `--crust`.
