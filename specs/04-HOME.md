# Home

Comp: `specs/Home.dc.html`. Ele é desktop; as regras de ≤720px continuam sendo só deste `.md`.

Quatro blocos verticais: hero, sobre, currículos e rodapé. Sobre e currículos são **seções
separadas** (o comp não os agrupa).

## Hero

`section`: `min-height: 100vh`, flex coluna, container 1000px, `padding: 88px 56px 48px`.

O conteúdo **não** é centrado na viewport: o `padding-top` de 88px ancora o bloco no topo e o
cue de scroll usa `margin-top: auto`, que absorve toda a folga e o prende embaixo.

Ordem:

1. `$ whoami` — 13px, gap 10px, `$` peach, comando em `--subtext0`, 34px de margem inferior,
   `fadeUp .5s ease both`.
2. `h1` com "Giovani" e "Valgas" em duas linhas (`<br>`), 76px / weight 500 /
   `letter-spacing: -0.045em` / `line-height: 1.02`, `fadeUp .6s ease .08s both`.
3. Linha do cargo: `margin-top: 24px`, altura fixa 30px, `font-size: 17px`, `gap: 2px`.
   Texto peach que digita/apaga (ver `03-CHROME.md`) + cursor 9×19px. **Sem `fadeUp`.**
4. Bloco de comandos-link: `margin: 52px 0 64px`, `gap: 2px`, `font-size: 14px`,
   `fadeUp .6s ease .22s both` no **bloco**, não em cada item.
   - `$ open github` · hint `github.com/giovalgas`
   - `$ open linkedin` · hint `linkedin.com/in/giovalgas`
   - `$ mail` · hint `contato@giovalgas.dev.br`
   - `$ tmux select-window -t blog` · hint "notas e artigos" / "notes and articles"

   Cada linha: `inline-flex`, `align-items: baseline`, `gap: 12px`, `padding: 7px 12px`,
   `margin-left: -12px`, radius 5px, `width: fit-content`. `$` peach, comando `--subtext0`,
   hint `--overlay0` 13px. Hover: `background: --base` + `translateX(4px)`.
5. Cue de scroll (`margin-top: auto`): "role para saber mais" / "scroll for more" + seta peach
   animada; link para `#sobre`. `inline-flex`, `gap: 12px`, 13px `--overlay0`,
   `padding: 6px 12px`, `margin-left: -12px`, radius 5px, `width: fit-content`.
   Hover: `background: --base` e o texto vai para `--subtext0` (**não** para peach; a seta já
   é o acento). Some após 40px de scroll, ver `03-CHROME.md`. **Sem `fadeUp`.**

Instagram e YouTube **não** aparecem no hero — só no rodapé.

## Sobre

`section#sobre`: borda superior 0.5px `--surface0`, container 1000px, `padding: 72px 56px 0`.

1. `$ cat SOBRE.md` / `$ cat ABOUT.md` — 13px, gap 10px, 30px de margem inferior.
2. Parágrafo 1 (16px / 1.75, max 66ch): "Software Engineer autodidata, hoje Tech Lead na
   Prolog App, em Florianópolis, SC." — **Software Engineer** e **Tech Lead** em peach.
3. Parágrafo 2 (`margin-top: 20px`): "Trabalho principalmente com Java, Spring Boot e
   PostgreSQL, e faço DevOps e infraestrutura em AWS e GCP." — capitalizados em peach.
4. Frase de efeito (`margin-top: 26px`): `display: flex; gap: 12px`, com `>` peach como
   elemento próprio à esquerda: "Paixão por construir sistemas robustos e escaláveis."

Todos os três parágrafos usam a **mesma** cor de texto (`--text`). Nada apagado.

## Currículos

`section` própria, container 1000px, `padding: 96px 56px 0`.

1. `$ ls ~/documents` — 13px, gap 10px, 28px de margem inferior.
2. A listagem e o pane: ver `07-CV-PANE.md`.

## Rodapé

`footer`, container 1000px, `padding: 200px 56px 104px` (os 104px são a reserva da barra de
status). `display: flex`, `justify-content: space-between`, `align-items: center`,
`gap: 24px`, `flex-wrap: wrap`, `font-size: 13px`.

Esquerda: github · linkedin · instagram · youtube · email · blog (`--subtext0`, hover peach,
`gap: 26px`). Direita: `$` peach + cursor piscando de 8×16px, `gap: 8px`.

## Mobile (≤ 720px)

- Padding lateral 24px; `h1` 44px; cargo 15px.
- Comandos-link viram lista de largura total; o hint quebra para a linha de baixo em
  `--overlay0` 12px, sem elipse.
- Cue de scroll mantém-se, seta inclusive.
- Listagem de currículos: ver `07-CV-PANE.md` (colapsa para duas linhas).
- Barra de status: esconde o caminho da direita, mantém sessão + janelas.
