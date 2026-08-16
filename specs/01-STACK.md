# Stack e estrutura

Referência de convenções: `prologapp/site-comercial-prolog` (mesmo stack, escala maior).
Referência visual: `specs/Home.dc.html` e `specs/Post.dc.html` (ver `00-PROMPT.md`).

## Decisões

- **Astro 7** com `output: 'static'`, TypeScript strict (`astro/tsconfigs/strict`),
  alias `@/*` para `src/*`. Exige Node >= 22.12 (ver `.node-version`).
- Gerenciador de pacotes: **bun**. Lint e format: **Biome** (`.astro` fora do escopo do Biome,
  formatação de `.astro` fica com o `astro check` / editor).
- Conteúdo do blog em **Markdown/MDX** via Content Collections (`src/content/blog/`).
- CSS: **Tailwind 4** via `@tailwindcss/vite` (sem `tailwind.config.js`). Os tokens do
  `02-DESIGN-SYSTEM.md` viram variáveis no bloco `@theme` de `src/styles/global.css` e
  ganham utilities automaticamente (`bg-crust`, `text-peach`, `border-surface0`...).
  A escala padrão de cores do Tailwind é zerada (`--color-*: initial`), então só as cores do
  `02-DESIGN-SYSTEM.md` existem como utility.
- CSS próprio só onde utility não expressa bem: barra de status tmux, cursor piscando,
  keyframes. Fica em `@layer utilities` ou `@layer components` dentro de `global.css`.
  **O corpo do post é um `.post-body` próprio, não `@tailwindcss/typography`**: o
  `Post.dc.html` fixa cada margem e tamanho, e sobrescrever o plugin inteiro custa mais que
  escrever as regras.
- Bloco de código: transformer de Shiki (`code-frame`) lê a meta ` ```yaml title="arquivo" `
  e envolve o `<pre>` num `<figure>` com cabeçalho de nome do arquivo e linguagem.
- Interatividade: **ilhas React 19** (`@astrojs/react`) em `src/components/islands/*.tsx`.
  Quatro coisas precisam de JS: toggle de idioma, efeito de digitação do hero, cue de scroll
  do hero e o pane de currículo. Hidratação por `client:idle` (toggle, pane) e
  `client:visible` (typewriter, cue).
  A **única** exceção à regra de "nada de `<script>` de página" é o redirecionamento de idioma
  descrito em `08-I18N.md`: precisa ser `is:inline` no `<head>` para rodar antes da pintura.
- Deploy: build estático (Vercel/Netlify/Cloudflare Pages, tanto faz).
- Fonte: **JetBrains Mono** self-hosted (woff2, subset latin + latin-ext), `font-display: swap`.

## Estrutura

```
src/
  content/
    blog/
      2026-07-28-observabilidade-lgtm.pt.md
      2026-07-28-observabilidade-lgtm.en.md
  components/
    islands/
      LangToggle.tsx
      Typewriter.tsx
      ScrollCue.tsx
      CvPane.tsx
    StatusBar.astro      # barra tmux fixa
    Prompt.astro         # "$ comando" reutilizável
    CommandLink.astro    # linha "$ comando + hint" com hover
    Footer.astro         # nav + "$" com cursor
  layouts/
    Base.astro
  content.config.ts      # collection blog (loader glob + schema zod)
  pages/
    index.astro          # /        (en, padrão)
    blog/index.astro     # /blog
    blog/[slug].astro    # /blog/<slug>
    rss.xml.ts           # /rss.xml
    pt/index.astro       # /pt/
    pt/blog/index.astro  # /pt/blog
    pt/blog/[slug].astro # /pt/blog/<slug>
    pt/rss.xml.ts        # /pt/rss.xml
  styles/
    global.css           # @import "tailwindcss" + @theme + camadas próprias
public/
  fonts/
  documents/curriculo-pt.pdf
  documents/resume-en.pdf
```

## Requisitos não funcionais

- Lighthouse ≥ 95 em todas as categorias.
- Orçamento de JS: as ilhas somadas não passam de ~15kb gzip (fora o runtime do React).
- Zero CLS por causa de fonte: preload do woff2 principal.
- `prefers-reduced-motion: reduce` desliga todas as animações.
- Feed RSS um por idioma: `/rss.xml` (en) e `/pt/rss.xml`.
