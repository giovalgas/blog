# Stack e estrutura

Referência de convenções: `prologapp/site-comercial-prolog` (mesmo stack, escala maior).

## Decisões

- **Astro 6** com `output: 'static'`, TypeScript strict (`astro/tsconfigs/strict`),
  alias `@/*` para `src/*`.
- Gerenciador de pacotes: **bun**. Lint e format: **Biome** (`.astro` fora do escopo do Biome,
  formatação de `.astro` fica com o `astro check` / editor).
- Conteúdo do blog em **Markdown/MDX** via Content Collections (`src/content/blog/`).
- CSS: **Tailwind 4** via `@tailwindcss/vite` (sem `tailwind.config.js`). Os tokens do
  `02-DESIGN-SYSTEM.md` viram variáveis no bloco `@theme` de `src/styles/global.css` e
  ganham utilities automaticamente (`bg-crust`, `text-peach`, `border-surface0`...).
  `@tailwindcss/typography` para o corpo dos posts.
- CSS próprio só onde utility não expressa bem: barra de status tmux, cursor piscando,
  keyframes. Fica em `@layer utilities` ou `@layer components` dentro de `global.css`.
- Interatividade: **ilhas React 19** (`@astrojs/react`) em `src/components/islands/*.tsx`.
  Nada de `<script>` de página. Só três coisas precisam de JS: toggle de idioma,
  efeito de digitação do hero e o pane de currículo. Hidratação por `client:idle`
  (toggle, pane) e `client:visible` (typewriter).
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
      CvPane.tsx
    StatusBar.astro      # barra tmux fixa
    Prompt.astro         # "$ comando" reutilizável
  layouts/
    Base.astro
  pages/
    index.astro
    blog/index.astro
    blog/[...slug].astro
  styles/
    global.css           # @import "tailwindcss" + @theme + camadas próprias
public/
  fonts/
  documents/curriculo-pt.pdf
  documents/resume-en.pdf
```

## Requisitos não funcionais

- Lighthouse ≥ 95 em todas as categorias.
- Orçamento de JS: as três ilhas somadas não passam de ~15kb gzip.
- Zero CLS por causa de fonte: preload do woff2 principal.
- `prefers-reduced-motion: reduce` desliga todas as animações.
- Feed RSS em `/rss.xml` (um por idioma: `/rss.xml` e `/en/rss.xml`).
