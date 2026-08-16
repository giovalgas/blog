# Graph Report - /Users/giovani.valgas/Documents/git/github.com/giovalgas/blog  (2026-08-16)

## Corpus Check
- Corpus is ~14,061 words - fits in a single context window. You may not need a graph.

## Summary
- 317 nodes · 421 edges · 19 communities (13 shown, 6 thin omitted)
- Extraction: 80% EXTRACTED · 19% INFERRED · 1% AMBIGUOUS · INFERRED: 80 edges (avg confidence: 0.9)
- Token cost: 274,417 input · 0 output

## Community Hubs (Navigation)
- Astro Pages and Islands
- Stack and Build Conventions
- Blog, Post and i18n Specs
- Bilingual CV Career History
- Biome Lint and Format Config
- Package Manifest and Dependencies
- Terminal Chrome and Comp Logic
- Dev Dependencies and Tooling
- Specs and Comps Authority
- TypeScript Config
- Language Detection and Head
- Apple Touch Icon Branding
- Favicon Brand Mark
- ScrollCue Island
- Blog Content Collection
- Astro Config codeFrame
- Shiki Code Frame Transformer
- Mobile Breakpoint Specs
- Status Bar Replicas

## God Nodes (most connected - your core abstractions)
1. `includes` - 9 edges
2. `scripts` - 7 edges
3. `Lang` - 7 edges
4. `Ui` - 7 edges
5. `postPath()` - 7 edges
6. `Peach Single-Accent Rule (max 5% of screen)` - 7 edges
7. `tmux-Style Fixed Status Bar` - 7 edges
8. `Giovani Valgas CV (English)` - 7 edges
9. `Senior Software Engineer at PrologApp (Sep 2024 - May 2026)` - 7 edges
10. `Curriculo Giovani Valgas (Portugues)` - 7 edges

## Surprising Connections (you probably didn't know these)
- `General Build Rules (no invented color, no extra copy)` --semantically_similar_to--> `Specs Are the Product Source of Truth`  [INFERRED] [semantically similar]
  specs/00-PROMPT.md → CLAUDE.md
- `Custom .post-body Instead of Typography Plugin` --semantically_similar_to--> `.post-body Hand-Written Instead of @tailwindcss/typography`  [INFERRED] [semantically similar]
  specs/01-STACK.md → CLAUDE.md
- `Dev Server Daemon Breaks Island Hydration (_jsxDEV)` --semantically_similar_to--> `Astro 7 Dev Server Is a Daemon (Stale Module Graph)`  [INFERRED] [semantically similar]
  README.md → CLAUDE.md
- `Head Inline Redirect to /pt on English Pages` --semantically_similar_to--> `Inline Pre-Paint Language Detection Script`  [INFERRED] [semantically similar]
  README.md → CLAUDE.md
- `src/ and public/ Project Structure` --semantically_similar_to--> `Canonical src/ Directory Layout and Page Routes`  [INFERRED] [semantically similar]
  README.md → specs/01-STACK.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Bilingual Routing and Language Selection Flow** — claude_bilingual_mirrored_routes, claude_i18n_ui_single_source, claude_language_detection_script, readme_route_table, specs_03_chrome_lang_toggle, claude_translationkey_pairing [INFERRED 0.85]
- **The Four React Islands Under a ~15kb gzip Budget** — specs_01_stack_react_islands, claude_react_islands_budget, specs_03_chrome_lang_toggle, specs_03_chrome_typewriter_role, specs_03_chrome_scroll_cue_threshold, specs_03_chrome_cv_pane_animation, specs_01_stack_nonfunctional_requirements [EXTRACTED 1.00]
- **Design Token Pipeline: Catppuccin Spec to Tailwind @theme Utilities** — specs_02_design_system_catppuccin_mocha_palette, specs_02_design_system_peach_accent_rule, specs_01_stack_tailwind4, claude_tailwind_theme_tokens, claude_segment_accent_type [EXTRACTED 1.00]
- **Fluxo bilingue: rotas, deteccao, toggle e par de traducao** — specs_08_i18n_routes, specs_08_i18n_language_detection, specs_08_i18n_lang_toggle, specs_08_i18n_translation_key, specs_08_i18n_hreflang, specs_home_dc_togglelang [EXTRACTED 1.00]
- **Fluxo do CV: listagem, abertura do pane, iframe e fechamento** — specs_07_cv_pane_cv_listing, specs_07_cv_pane_cv_pane, specs_07_cv_pane_pane_header, specs_07_cv_pane_dismissal, specs_home_dc_cv_overlay, specs_09_conteudo_documents [INFERRED 0.85]
- **Padrao da barra de status estilo tmux em todas as superficies** — specs_05_blog_status_bar, specs_06_post_status_bar, specs_home_dc_status_bar, specs_post_dc_status_bar, specs_07_cv_pane_pane_status_bar [INFERRED 0.85]
- **PrologApp cost reduction initiatives under Tech Lead ownership** — public_documents_giovani_valgas_cv_en_tech_lead_prologapp, public_documents_giovani_valgas_cv_en_lgtm_observability_migration, public_documents_giovani_valgas_cv_en_cicd_runner_redesign, public_documents_giovani_valgas_cv_en_infrastructure_as_code [INFERRED 0.85]
- **Observability practice carried across Radar Saude and PrologApp roles** — public_documents_giovani_valgas_cv_en_grafana_stack_observability, public_documents_giovani_valgas_cv_en_newrelic_cloudwatch_sentry_monitoring, public_documents_giovani_valgas_cv_en_lgtm_observability_migration [INFERRED 0.85]
- **Deployment pipeline evolution: Bash and Git Flow to Swarm blue-green under IaC** — public_documents_giovani_valgas_cv_en_bash_gitflow_deploy_automation, public_documents_giovani_valgas_cv_en_docker_swarm_blue_green_traefik, public_documents_giovani_valgas_cv_en_infrastructure_as_code, public_documents_giovani_valgas_cv_en_cicd_runner_redesign [INFERRED 0.75]
- **Favicon brand identity surface** — public_favicon_32, public_favicon_32_brand_mark, public_favicon_32_raster_icon_asset [INFERRED 0.75]

## Communities (19 total, 6 thin omitted)

### Community 0 - "Astro Pages and Islands"
Cohesion: 0.07
Nodes (27): !**/*.astro, Props, Props, Props, enSibling, position, ptSibling, published (+19 more)

### Community 1 - "Stack and Build Conventions"
Cohesion: 0.06
Nodes (49): Astro 7 Dev Server Is a Daemon (Stale Module Graph), Biome Deliberately Ignores .astro Files, bun run build Is the Only Verification, Commonly Violated Design System Rules, src/i18n/ui.ts as Single Source of Copy and Routes, Node >= 22.12 Requirement / bun --bun Escape Hatch, .post-body Hand-Written Instead of @tailwindcss/typography, Four React Islands and the ~15kb gzip Budget (+41 more)

### Community 2 - "Blog, Post and i18n Specs"
Cohesion: 0.07
Nodes (35): Blog index page, Estado vazio do blog (ls: ~/blog: 0 entradas), Cabecalho da listagem ($ ls -t ~/blog + contagem), Indice do blog no mobile (<= 720px), Linha de post (grid 110px 1fr auto), Barra de status do indice (0:home . 1:blog*), Agrupamento por ano, Tipografia do corpo do post (+27 more)

### Community 3 - "Bilingual CV Career History"
Cohesion: 0.10
Nodes (33): Bash deploy automation aligned with Git Flow, CI/CD runner setup redesign, Giovani Valgas CV (English), Docker Swarm blue-green deployments via Traefik, EF SET English Certificate (C2 Proficient), May 2024, Frontend stack migration from PHP to ReactJS, Grafana stack observability at Radar Saude, Infrastructure as Code with Terraform and Pulumi (+25 more)

### Community 4 - "Biome Lint and Format Config"
Cohesion: 0.06
Nodes (31): source, assist, actions, files, includes, formatter, enabled, indentStyle (+23 more)

### Community 5 - "Package Manifest and Dependencies"
Cohesion: 0.08
Nodes (24): astro, @astrojs/mdx, @astrojs/react, @astrojs/rss, dependencies, astro, @astrojs/mdx, @astrojs/react (+16 more)

### Community 6 - "Terminal Chrome and Comp Logic"
Cohesion: 0.10
Nodes (20): $ tmux select-window -t home (voltar para a home), Rodape do indice do blog, $ cd .. (voltar ao indice), Rodape do post (quatro links), CV pane (split do tmux), Fechamento do pane (Esc, clique fora, botao esc), Cabecalho do pane ($ less ~/documents/<arquivo>), Identidade: Giovani Valgas, Tech Lead / Senior Software Engineer (+12 more)

### Community 7 - "Dev Dependencies and Tooling"
Cohesion: 0.13
Nodes (15): @astrojs/check, @biomejs/biome, devDependencies, @astrojs/check, @biomejs/biome, tailwindcss, @tailwindcss/vite, @types/react (+7 more)

### Community 8 - "Specs and Comps Authority"
Cohesion: 0.18
Nodes (13): Bilingual Mirrored Routes, Single Shared Component, blog Content Collection (glob loader + zod schema), Personal Site (Portfolio + Blog) on Astro 7, Specs Are the Product Source of Truth, translationKey Pairs Posts Across Languages, Comps Are the Visual Source of Truth, Only the 2026-07-28 Post Is Seeded, Comp Wins Where It Diverges from the .md Spec (+5 more)

### Community 9 - "TypeScript Config"
Cohesion: 0.15
Nodes (12): **/*, astro/tsconfigs/strict, .astro/types.d.ts, compilerOptions, baseUrl, jsx, jsxImportSource, paths (+4 more)

### Community 10 - "Language Detection and Head"
Cohesion: 0.47
Nodes (6): Base.astro Head Concentrator, Inline Pre-Paint Language Detection Script, Head Inline Redirect to /pt on English Pages, Bilingual Route Table (en unprefixed, pt under /pt), No Page <script> Rule, One Exception for Language Redirect, Language Toggle (pt / en, fixed top-right)

### Community 11 - "Apple Touch Icon Branding"
Cohesion: 0.67
Nodes (4): Apple Touch Icon (site avatar photo), Humorous working-dog persona (meme avatar), iOS home screen / PWA icon asset, Personal site branding identity

### Community 12 - "Favicon Brand Mark"
Cohesion: 0.83
Nodes (4): Site favicon 32x32, Unidentified glyph in favicon artwork, Peach-on-dark brand mark, Raster browser tab icon asset

## Ambiguous Edges - Review These
- `Canonical src/ Directory Layout and Page Routes` → `Non-Functional Requirements (Lighthouse, JS budget, CLS, RSS)`  [AMBIGUOUS]
  specs/01-STACK.md · relation: shares_data_with
- `Documentos PDF (curriculo-pt.pdf, resume-en.pdf)` → `COPY (objeto de copy pt/en da home)`  [AMBIGUOUS]
  specs/09-CONTEUDO.md · relation: shares_data_with
- `Spring Framework microservices scaling to 400+ clients` → `Optimized Java plugins for Spigot Minecraft servers`  [AMBIGUOUS]
  public/documents/giovani-valgas-cv-en.pdf · relation: conceptually_related_to
- `Site favicon 32x32` → `Unidentified glyph in favicon artwork`  [AMBIGUOUS]
  public/favicon-32.png · relation: references
- `Peach-on-dark brand mark` → `Unidentified glyph in favicon artwork`  [AMBIGUOUS]
  public/favicon-32.png · relation: conceptually_related_to

## Knowledge Gaps
- **96 isolated node(s):** `codeFrame`, `$schema`, `enabled`, `clientKind`, `useIgnoreFile` (+91 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Canonical src/ Directory Layout and Page Routes` and `Non-Functional Requirements (Lighthouse, JS budget, CLS, RSS)`?**
  _Edge tagged AMBIGUOUS (relation: shares_data_with) - confidence is low._
- **What is the exact relationship between `Documentos PDF (curriculo-pt.pdf, resume-en.pdf)` and `COPY (objeto de copy pt/en da home)`?**
  _Edge tagged AMBIGUOUS (relation: shares_data_with) - confidence is low._
- **What is the exact relationship between `Spring Framework microservices scaling to 400+ clients` and `Optimized Java plugins for Spigot Minecraft servers`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Site favicon 32x32` and `Unidentified glyph in favicon artwork`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `Peach-on-dark brand mark` and `Unidentified glyph in favicon artwork`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `includes` connect `Biome Lint and Format Config` to `Astro Pages and Islands`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **Why does `!**/*.astro` connect `Astro Pages and Islands` to `Biome Lint and Format Config`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._