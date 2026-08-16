# Currículo: listagem e pane

Comp: `specs/Home.dc.html` (seção de currículos e o overlay).

## Listagem (`$ ls ~/documents`)

Uma linha por arquivo, `font-size: 13px`, grid `230px 1fr auto`, `align-items: baseline`,
`gap: 24px`, `padding: 15px 12px`, `margin: 0 -12px`, radius 5px, borda superior 0.5px
`--base`, hover `background: --base` com `transition: background .16s ease`:

1. nome do arquivo em `--text` (`curriculo-pt.pdf`, `resume-en.pdf`);
2. descrição em `--subtext0` ("currículo em português", "resumo em inglês" /
   "resume in english", "resume in portuguese" — minúsculas nos dois idiomas);
3. duas ações com `gap: 14px`, separadas por `|` em `--surface0`: **abrir** (botão, abre o
   pane) e **baixar** (link `download` para o PDF). Ambas `--subtext0` com hover peach.

A ordem dos arquivos segue o idioma ativo (o do idioma atual primeiro).

## Pane (estilo split do tmux)

- Overlay `position: fixed; inset: 0; z-index: 40` com `rgba(17,17,27,0.72)`;
  `display: flex; flex-direction: column; justify-content: flex-end`; clique fora fecha.
- O pane ocupa `78vh` na parte de baixo da tela, fundo `--crust`,
  **borda superior 1px peach** (marca o pane ativo).
- Cabeçalho: fundo `--base`, borda inferior 0.5px `--surface0`, `padding: 14px 24px`,
  `font-size: 13px`, `justify-content: space-between`, `gap: 24px`.
  À esquerda `$ less ~/documents/<arquivo>` (gap 10px, `$` peach, comando `--subtext0`).
  À direita, com `gap: 22px`: "baixar pdf" / "download pdf" em **`--subtext0`** e `esc` em
  **`--overlay0`**; as duas com hover peach.
- Corpo: `<iframe>` com o PDF, `flex: 1`, fundo `--base`, sem borda.
- Rodapé do pane: replica **exatamente** a barra de status da página (`0:home*` · `1:blog`,
  `padding: 7px 16px`, fundo `--surface0`, 12px), mas sem link e sem o caminho: no lugar do
  caminho vai a dica "esc para fechar" / "esc to close" em `--overlay0`.
  A barra da página não muda de estado.
- Fecha com `Esc`, clique no overlay ou no `esc`.

## Mobile (≤ 720px)

- Pane ocupa `92vh`; cabeçalho empilha comando (linha 1) e ações (linha 2).
- Listagem colapsa: nome do arquivo na primeira linha, descrição em `--overlay0` 12px na
  segunda, ações na terceira alinhadas à esquerda.
