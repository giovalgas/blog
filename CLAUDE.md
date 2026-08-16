# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Site pessoal (portfólio + blog) em Astro 7, estático e bilíngue. As specs em `specs/` são a
fonte de verdade do produto; os comps `specs/Home.dc.html` e `specs/Post.dc.html` vencem
quando divergirem do texto das specs em `.md`.

## Comandos

| Comando | O que faz |
| --- | --- |
| `bun install` | instala dependências |
| `bun run dev` | dev server |
| `bun run build` | `astro check` + build estático em `dist/` |
| `bun run preview` | serve o `dist/` |
| `bun run check` | só o `astro check` (typecheck de `.astro` e TS) |
| `bun run lint` | Biome |
| `bun run format` | Biome com `--write` |

Não existe suíte de testes. A verificação é `bun run build`.

Node >= 22.12 (Astro 7); `.node-version` fixa 22.18.0, então `fnm use` resolve. Se o build
reclamar de versão de Node, `bun --bun run build` força o runtime do bun.

### O dev server do Astro 7 é um daemon

`bun run dev` reaproveita um servidor já rodando em vez de subir outro, mesmo depois de mudar
`package.json`, `astro.config.mjs` ou dependências. O sintoma é `_jsxDEV is not a function` no
console e as ilhas React sumindo da tela. Depois de mexer em dependência ou config:

```
astro dev stop && bun run dev
```

`astro dev status` mostra o que está de pé, `astro dev logs` mostra a saída.

## Arquitetura

### Bilíngue: rotas espelhadas, componente único

Inglês é o padrão e fica sem prefixo; português mora sob `/pt`. Cada arquivo em `src/pages/`
é uma casca de poucas linhas que passa `lang` para um componente compartilhado
(`Home.astro`, `BlogIndex.astro`, `Post.astro`). Toda página nova precisa dos dois lados:
`src/pages/x.astro` e `src/pages/pt/x.astro`, mais a rota correspondente em `ui.ts`.

`src/i18n/ui.ts` é a fonte única de copy, rotas e helpers (`ui[lang]`, `postPath`, `windows`,
`readingTime`, `isoDate`, `other`). A interface `Ui` é tipada, então adicionar uma chave
obriga preencher `en` e `pt`. Nenhuma copy é escrita direto no template. Parágrafos com
destaque são arrays de `Segment`, onde `accent: true` vira `text-peach`. O texto real também
aparece em `specs/09-CONTEUDO.md`: ao editar copy, atualize os dois.

`Base.astro` concentra head, canonical, `hreflang` (com `x-default` no inglês), preload da
fonte, Google Analytics apenas em `import.meta.env.PROD`, o `LangToggle` e a `StatusBar`.

Detecção de idioma: um `<script is:inline>` no `<head>` roda **apenas nas páginas em inglês**,
antes da primeira pintura, e manda para `/pt` quando `localStorage.lang === "pt"` ou quando
não há escolha salva e `navigator.language` começa com `pt`. Páginas `/pt/*` nunca
redirecionam. Este é o único `<script>` de página do site; qualquer outra interatividade vai
para uma ilha React.

### Conteúdo do blog

Collection `blog` com loader glob sobre `src/content/blog/**/*.{md,mdx}` e schema zod em
`src/content.config.ts`. **O diretório ainda não existe**: o índice do blog renderiza o estado
vazio (`blogIndex.emptyCommand` / `emptyHint`) e as rotas `[slug]` não geram nada.

Cada post é um arquivo por idioma. O par é ligado por `translationKey` idêntico nos dois; o
`slug` diverge entre idiomas (`observability-lgtm` ↔ `observabilidade-lgtm`). Post.astro usa
esse par para o `hreflang` e para o toggle; sem tradução, o toggle cai no índice do blog do
outro idioma. Toda query de conteúdo filtra `lang` e `!draft` e ordena por data decrescente.

### Ilhas

Só quatro coisas carregam JS: `LangToggle` e `CvPane` (`client:idle`), `Typewriter` e
`ScrollCue` (`client:visible`). Orçamento da spec: ~15kb gzip somados, fora o runtime do React.

### Estilo

Tailwind 4 via `@tailwindcss/vite`, sem `tailwind.config.js`. Os tokens vivem no bloco
`@theme` de `src/styles/global.css`, que zera a escala padrão (`--color-*: initial`): só
existem as cores do Catppuccin Mocha da spec, mais `--font-mono` e o breakpoint `desk` (720px).
Cor fora dessa lista não gera utility, e inventar cor é proibido pela spec.

O corpo do post é a classe `.post-body`, escrita à mão, e não `@tailwindcss/typography`.
Bloco de código com cabeçalho sai do transformer `codeFrame` em `astro.config.mjs`, que lê a
meta do fence:

````markdown
```yaml title="otel-collector.yaml"
````

Regras do design system que costumam ser violadas sem querer: peach é acento único e fica em
no máximo 5% da tela (lista fechada de usos em `specs/02-DESIGN-SYSTEM.md`); sentence case
sempre, nunca caixa alta; nada de gradiente, box-shadow, glow ou biblioteca de componente
pronta; todo alvo com fundo no hover leva padding lateral com margin negativo do mesmo tamanho.

## Convenções

- Alias `@/*` para `src/*`, TypeScript strict.
- Biome ignora `.astro` de propósito: typecheck desses arquivos é do `astro check` e a
  formatação fica com o editor. Aspas duplas, ponto e vírgula, largura 100.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
