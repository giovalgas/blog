# Currículo: listagem e pane

## Listagem (`$ ls ~/documents`)

Uma linha por arquivo, grid `230px 1fr auto`, `gap: 24px`, padding `15px 12px`,
borda superior 0.5px `--base`, hover background `--base`:

1. nome do arquivo em `--text` 13px (`curriculo-pt.pdf`, `resume-en.pdf`);
2. descrição em `--subtext0` ("currículo em português", "resumo em inglês");
3. duas ações separadas por `|` em `--surface0`: **abrir** (botão, abre o pane) e
   **baixar** (link `download` para o PDF). Ambas `--subtext0` com hover peach.

A ordem dos arquivos segue o idioma ativo (o do idioma atual primeiro).

## Pane (estilo split do tmux)

- Overlay `position: fixed; inset: 0` com `rgba(17,17,27,0.72)`; clique fora fecha.
- O pane ocupa `78vh` na parte de baixo da tela, fundo `--crust`,
  **borda superior 1px peach** (marca o pane ativo).
- Cabeçalho: `$ less ~/documents/<arquivo>` à esquerda; à direita "baixar pdf" e `esc`
  (13px, `--overlay0`, hover peach).
- Corpo: `<iframe>` com o PDF, fundo `--base`, sem borda.
- Rodapé do pane: replica **exatamente** a barra de status da página (`0:home*` · `1:blog`),
  mais a dica "esc para fechar" em `--overlay0` à direita. A barra não muda de estado.
- Fecha com `Esc`, clique no overlay ou no `esc`.

## Mobile (≤ 720px)

- Pane ocupa `92vh`; cabeçalho empilha comando (linha 1) e ações (linha 2).
- Listagem colapsa: nome do arquivo na primeira linha, descrição em `--overlay0` 12px na
  segunda, ações na terceira alinhadas à esquerda.
