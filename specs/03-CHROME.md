# Chrome: barra de status, toggle, animações

## Barra de status (estilo tmux)

Fixa no rodapé da viewport, sempre visível, em todas as páginas.

- Altura: padding `7px 16px`; fundo `--surface0`; `font-size: 12px`.
- Esquerda: nome da sessão `giovalgas` (fundo `--peach`, texto `--crust`, radius 3px,
  padding `1px 9px`), seguido das janelas: `0:home` e `1:blog`.
- A janela ativa fica em `--text` com `*` no fim (`0:home*`); a inativa em `--overlay0`
  e é link para a outra página, com hover em peach.
- Direita: caminho atual em `--overlay0` — `~` na home, `~/blog` no índice,
  `~/blog/<slug>` no post.
- **A barra não muda quando um overlay abre.** O pane de currículo replica o mesmo estado.
- O conteúdo da página reserva espaço para ela (padding-bottom ≥ 104px).

## Navegação por comandos

Toda navegação é escrita como comando de shell, com `$` em peach e o comando em `--subtext0`:

| Ação | Comando |
| --- | --- |
| home → blog | `tmux select-window -t blog` |
| blog → home | `tmux select-window -t home` |
| post → índice do blog | `cd ..` |
| abrir link externo | `open github`, `open linkedin` |
| e-mail | `mail` |
| ler about | `cat SOBRE.md` / `cat ABOUT.md` |
| listar currículos | `ls ~/documents` |
| listar posts | `ls -t ~/blog` |
| ler post | `cat NOME-DO-POST.md` |
| abrir pdf | `less ~/documents/resume-en.pdf` |

Nomes de arquivo `.md` sempre em MAIÚSCULAS. Nunca use `tmux new -s` (erro de sessão
aninhada); criar/trocar janela é `select-window`.

## Toggle de idioma

- Posição fixa: `top: 28px; right: 32px`. `font-size: 12px`, sem borda, fundo transparente.
- Renderiza `pt / en`: o idioma **ativo** em peach, o inativo em `--overlay0`,
  a barra `/` em `--surface1`.
- Um clique alterna. A escolha persiste em `localStorage` e reflete na URL (`/` e `/en/`).

## Animações

- Entrada de seção: `fadeUp` (opacity 0→1, translateY 10px→0), 0.5–0.6s ease,
  escalonada em 0.08s / 0.22s no hero.
- Cursor: `blink` 1.1s step-end infinite, bloco 8×16px peach.
- Cargo no hero: digita caractere por caractere (62–130ms aleatório), segura 2.2s,
  apaga (34ms), pausa 420ms, troca para o próximo. Alterna **Tech Lead** e
  **Senior Software Engineer**. O cursor fica logo após o texto.
- Hover de linha/link: `background: --base` + `translateX(4px)`, transição 0.16s ease.
- Hover de link de texto: cor → peach, transição 0.14s.
- Seta do "role para saber mais": `nudge` (translateY 0→4px), 1.8s ease-in-out infinite;
  o bloco todo desaparece (opacity + visibility + pointer-events) após 40px de scroll.
- Pane de currículo: overlay `fadeIn` 0.18s; pane `paneUp` (translateY 24px→0) 0.26s
  `cubic-bezier(.2,.8,.3,1)`.
- `@media (prefers-reduced-motion: reduce) { * { animation: none !important } }`.
