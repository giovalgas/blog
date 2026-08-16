# Prompt inicial (cole isso no Claude Code)

Quero construir meu site pessoal (portfólio + blog) do zero, em Astro + TypeScript,
seguindo as specs deste repositório. Leia todos os arquivos de `specs/` antes de escrever código.

## Comps de referência (fonte de verdade visual)

`specs/Home.dc.html` e `specs/Post.dc.html` são comps navegáveis com todos os estilos inline.
**Onde o comp e o texto de uma spec divergirem, o comp vence.** Os valores em `.md` são a
intenção; os do comp são a medida. Não existe comp do índice do blog: derive dele os padrões
de `Post.dc.html` (container, rodapé, linhas com hover).

Os comps usam Google Fonts, `<x-dc>` e um runtime próprio (`support.js`). Nada disso vai para
o site: são só referência. Não copie a marcação, copie as medidas.

Ordem de trabalho:

1. `specs/01-STACK.md` — decisões técnicas e estrutura de pastas.
2. `specs/02-DESIGN-SYSTEM.md` — paleta, tipografia, espaçamento, regras de uso do acento.
3. `specs/03-CHROME.md` — barra de status estilo tmux, toggle de idioma, animações.
4. `specs/04-HOME.md`
5. `specs/05-BLOG.md`
6. `specs/06-POST.md`
7. `specs/07-CV-PANE.md`
8. `specs/08-I18N.md`
9. `specs/09-CONTEUDO.md` — textos reais, links, dados.

Ao trabalhar a home, abra `Home.dc.html` junto de `04-HOME.md`; ao trabalhar o post,
`Post.dc.html` junto de `06-POST.md`.

Regras gerais:

- Não invente cor, fonte, sombra ou gradiente fora do que está em `02-DESIGN-SYSTEM.md`.
- Não adicione seções, CTAs ou copy que não estejam nas specs. Se achar que falta algo, pergunte.
- Comece pela home em desktop. Só siga para a próxima página depois que eu aprovar.
- Cada página deve ser responsiva; as specs descrevem o comportamento mobile.
- Tailwind 4 com os tokens do design system no `@theme`. Sem biblioteca de componente pronta
  (shadcn, daisyUI, tema de terceiro). JS só nas ilhas React listadas em `01-STACK.md`.

Ao final de cada página, rode `bun run build` e me mostre o resultado.
