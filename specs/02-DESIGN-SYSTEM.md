# Design system

Estética: vocabulário de terminal Unix (prompt de shell, listagem de arquivos, monoespaçada)
executado com refinamento — espaçamento generoso, hierarquia clara, **um único acento**.
Contido e caro, não tema de editor de código.

## Paleta (Catppuccin Mocha)

No `@theme` do `global.css` cada token vira `--color-<nome>` (ex.: `--color-crust`), o que
gera as utilities `bg-crust`, `text-peach`, `border-surface0`. Nenhuma cor da escala padrão
do Tailwind (`slate`, `zinc`, `emerald`...) é usada.

| Token | Hex | Uso |
| --- | --- | --- |
| `--crust` | `#11111b` | fundo da página |
| `--base` | `#1e1e2e` | superfície elevada: hover, blocos de código, cabeçalho do pane |
| `--surface0` | `#313244` | bordas, barra de status, código inline |
| `--surface1` | `#45475a` | borda de ênfase, seleção de texto |
| `--text` | `#cdd6f4` | texto primário |
| `--subtext0` | `#a6adc8` | texto secundário, comandos |
| `--overlay0` | `#6c7086` | metadados, datas, hints |
| `--peach` | `#fab387` | **acento único** |

### Regras do acento (obrigatórias)

Peach aparece em **no máximo 5% da tela**, e apenas em:

- o símbolo `$` do prompt e o `>` da frase de efeito;
- o cursor piscando;
- link em hover e idioma ativo no toggle;
- o cargo que digita/apaga no hero;
- os termos capitalizados do parágrafo de stack (Java, Spring Boot, PostgreSQL, DevOps, AWS, GCP)
  e os cargos (Software Engineer, Tech Lead);
- o nome da sessão na barra de status (`giovalgas`, fundo peach, texto crust);
- borda superior do pane de currículo.

Nenhum outro acento da paleta na interface. Exceções semânticas: Green `#a6e3a1` (status
disponível), Red `#f38ba8` (erro). Syntax highlighting em bloco de código é o único lugar
com variedade cromática (Blue `#89b4fa`, Green, Peach, Mauve `#cba6f7`, Teal `#94e2d5`).

## Tipografia

- JetBrains Mono em **toda** a interface. Pesos 400/500.
- Hero `h1`: 76px, weight 500, `letter-spacing: -0.045em`, `line-height: 1.02`.
- Título de post: 32px, weight 500, `-0.03em`.
- H2 dentro de post: 19px, weight 500, `-0.02em`.
- Corpo: 16px / `line-height: 1.7` (posts 1.7, sobre 1.75).
- UI e listagens: 14px; metadados 12–13px.
- **Sentence case sempre. Nunca caixa alta.**

## Espaçamento

- Container: `max-width: 1000px`, padding lateral 56px (desktop).
- Coluna de leitura de post: `max-width: 68ch`.
- Seções: hero `min-height: 100vh`; sobre com 72px acima; ~200px de respiro antes do rodapé.
- Bordas: 0.5px `--surface0`; linhas de listagem 0.5px `--base`.
- Raio: 5px em linhas/hover, 6px em cards e blocos de código.

## Medidas confirmadas pelos comps

Valores lidos de `Home.dc.html` / `Post.dc.html`. Onde este bloco e a prosa acima
divergirem, este bloco vence.

- **Base do documento**: `font-size: 14px`, `line-height: 1.7`, `-webkit-font-smoothing: antialiased`.
- **Link padrão**: cor `--text`, `text-decoration: none`, hover `--peach`,
  `transition: color .14s ease`. Link de nav e de rodapé nasce em `--subtext0`.
- **Recuo negativo (obrigatório)**: todo alvo com fundo no hover recebe padding lateral e um
  `margin` negativo do mesmo tamanho, para o texto continuar alinhado com a coluna e só o
  fundo sangrar para fora:

  | Alvo | Padding | Margin | Raio |
  | --- | --- | --- | --- |
  | linha de comando-link (hero, `cd ..`, cue) | `7px 12px` (cue e `cd ..`: `6px 12px`) | `margin-left: -12px` | 5px |
  | linha de listagem (currículos, posts) | `15px 12px` | `0 -12px` | 5px |
  | card anterior/próximo do post | `16px 14px` | `0 -14px` | 6px |

- **Prompt `$`**: `align-items: baseline`; gap 10px entre `$` e comando em prompt solto
  (`$ whoami`, `$ cat SOBRE.md`, `$ ls ~/documents`), gap 12px em linha clicável.
  Prompt solto é 13px.
- **Cursor**: bloco peach, `blink 1.1s step-end infinite` com
  `@keyframes blink { 0%,49% { opacity: 1 } 50%,100% { opacity: 0 } }`.
  Dois tamanhos: **9×19px** no hero (acompanha o cargo em 17px) e **8×16px** no rodapé.
- **Alturas de linha**: hero `h1` 1.02; título de post 1.25; corpo 1.7; sobre 1.75;
  bloco de código 1.65.

## Proibido

Overlay de scanline CRT, glow/text-shadow neon, gradiente, box-shadow, animação de digitação
que bloqueia conteúdo, ASCII art em excesso, cores da paleta espalhadas como enfeite.
