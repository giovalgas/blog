# Chrome: barra de status, toggle, animações

Medidas conferidas em `Home.dc.html` e `Post.dc.html`.

## Barra de status (estilo tmux)

Fixa no rodapé da viewport, sempre visível, em todas as páginas.

- Altura: padding `7px 16px`; fundo `--surface0`; `font-size: 12px`; cor base `--subtext0`;
  `justify-content: space-between` com `gap: 24px`.
- Esquerda: nome da sessão `giovalgas` (fundo `--peach`, texto `--crust`, radius 3px,
  padding `1px 9px`), seguido das janelas: `0:home` e `1:blog`. Sessão e janelas ficam na
  mesma linha com `gap: 14px` uniforme (a sessão não recebe gap maior).
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

- Posição fixa: `top: 28px; right: 32px; z-index: 20`. `font-size: 12px`, sem borda,
  fundo transparente, `padding: 6px`.
- Renderiza `pt / en`: o idioma **ativo** em peach, o inativo em `--overlay0`,
  a barra `/` em `--surface1` (com espaço de cada lado: `" / "`).
- Um clique alterna. A escolha persiste em `localStorage` e reflete na URL (`/` e `/en/`).
- No comp é um `<button>` porque o comp troca idioma em memória. No site é um **`<a>`** para
  a rota equivalente (`08-I18N.md`), com o mesmo visual: sem sublinhado, sem borda.

## Animações

- Entrada: `fadeUp` (opacity 0→1, translateY 10px→0), `ease both`. No hero só **três**
  elementos animam, nesta ordem: `$ whoami` (`.5s`, sem atraso), `h1` (`.6s`, atraso `.08s`)
  e o **bloco inteiro** de comandos-link (`.6s`, atraso `.22s`; os itens não escalonam entre si).
  A linha do cargo e o cue de scroll **não** têm `fadeUp`. No post, o `article` inteiro
  recebe `fadeUp .5s ease both`.
- Cursor: `blink` 1.1s step-end infinite,
  `@keyframes blink { 0%,49% { opacity: 1 } 50%,100% { opacity: 0 } }`.
  Bloco peach de 9×19px no hero e 8×16px no rodapé.
- Cargo no hero: digita caractere por caractere (62–130ms aleatório), segura 2.2s,
  apaga (34ms por caractere), pausa 420ms, troca para o próximo. Alterna **Tech Lead** e
  **Senior Software Engineer**. O cursor fica logo após o texto, `gap: 2px`.
- Hover de linha/link: `background: --base` + `translateX(4px)`,
  `transition: background .16s ease, transform .16s ease`.
- Hover de link de texto: cor → peach, `transition: color .14s ease`.
- Seta do "role para saber mais": `nudge` (translateY 0→4px), 1.8s ease-in-out infinite.
- Cue de scroll: **limiar**, não progressivo. Ouve `scroll` (passivo) e, passados 40px,
  vira `opacity: 0; visibility: hidden; pointer-events: none` com
  `transition: opacity .3s ease, visibility .3s ease`. Abaixo de 40px volta a aparecer.
- Pane de currículo: overlay `fadeIn` 0.18s ease both; pane `paneUp` 0.26s
  `cubic-bezier(.2,.8,.3,1) both`, animando translateY 24px→0 **e** opacity 0→1.
- `@media (prefers-reduced-motion: reduce) { * { animation: none !important } }`.
