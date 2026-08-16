# Home

Duas telas verticais: hero em full screen e o bloco sobre + currículo.

## Hero (`min-height: 100vh`, conteúdo centrado verticalmente)

Ordem:

1. `$ whoami` — 13px, `$` peach, comando em `--subtext0`, 34px de margem inferior.
2. `h1` com "Giovani" e "Valgas" em duas linhas (`<br>`), 76px.
3. Linha do cargo: texto peach que digita/apaga (ver 03-CHROME) + cursor. Altura fixa 30px
   para não deslocar o layout.
4. Lista de comandos-link (52px acima, 64px abaixo), `gap: 2px`:
   - `$ open github` · hint `github.com/giovalgas`
   - `$ open linkedin` · hint `linkedin.com/in/giovalgas`
   - `$ mail` · hint `contato@giovalgas.dev.br`
   - `$ tmux select-window -t blog` · hint "notas e artigos" / "notes and articles"
   Cada linha: `$` peach, comando `--subtext0`, hint `--overlay0` 13px, padding `7px 12px`,
   `width: fit-content`, hover com background + translateX.
5. Cue de scroll no fim do hero (`margin-top: auto`): "role para saber mais" / "scroll for more"
   + seta peach animada; link para `#sobre`; desaparece após 40px de scroll.

Instagram e YouTube **não** aparecem no hero — só no rodapé.

## Sobre + currículo

Uma seção, começa com borda superior 0.5px `--surface0` e 72px de padding-top.

1. `$ cat SOBRE.md` / `$ cat ABOUT.md`.
2. Parágrafo 1 (max 66ch): "Software Engineer autodidata, hoje Tech Lead na Prolog App,
   em Florianópolis, SC." — **Software Engineer** e **Tech Lead** em peach.
3. Parágrafo 2: "Trabalho principalmente com Java, Spring Boot e PostgreSQL, e faço DevOps
   e infraestrutura em AWS e GCP." — os nomes capitalizados em peach.
4. Frase de efeito, 26px acima, com `>` peach à esquerda:
   "Paixão por construir sistemas robustos e escaláveis."
5. `$ ls ~/documents` (72px acima) e a listagem de currículos — ver `07-CV-PANE.md`.

Todos os três parágrafos usam a **mesma** cor de texto (`--text`). Nada apagado.

## Rodapé

200px de respiro antes dele. Uma linha: github · linkedin · instagram · youtube · email · blog
à esquerda (13px, `--subtext0`, hover peach, `gap: 26px`), `$` + cursor piscando à direita.

## Mobile (≤ 720px)

- Padding lateral 24px; `h1` 44px; cargo 15px.
- Comandos-link viram lista de largura total; o hint quebra para a linha de baixo em
  `--overlay0` 12px, sem elipse.
- Cue de scroll mantém-se, seta inclusive.
- Listagem de currículos: ver `07-CV-PANE.md` (colapsa para duas linhas).
- Barra de status: esconde o caminho da direita, mantém sessão + janelas.
