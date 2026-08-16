# giovalgas.dev.br

Site pessoal (portfólio + blog) em Astro 7 + TypeScript, estático e bilíngue.
**Inglês é o idioma padrão** e fica sem prefixo; português mora sob `/pt`.

| Página | en | pt |
| --- | --- | --- |
| home | `/` | `/pt/` |
| blog | `/blog` | `/pt/blog` |
| post | `/blog/<slug>` | `/pt/blog/<slug>` |
| feed | `/rss.xml` | `/pt/rss.xml` |

Nas páginas em inglês, um script inline no `<head>` manda para `/pt` quando o visitante já
escolheu português antes (`localStorage.lang`) ou quando `navigator.language` começa com `pt`.
Páginas `/pt/*` nunca redirecionam. Detalhes em `specs/08-I18N.md`.

As specs vivem em [`specs/`](./specs). Os comps `specs/Home.dc.html` e `specs/Post.dc.html`
são a fonte de verdade visual: onde o texto de uma spec divergir do comp, o comp vence.

## Requisitos

- **Node >= 22.12** (exigência do Astro 7). O arquivo `.node-version` fixa a 22.18.0;
  com fnm, `fnm use` no diretório já resolve.
- **bun** como gerenciador de pacotes.

Se `bun run build` reclamar de versão de Node, ou você está fora do Node 22, ou pode forçar o
runtime do bun com `bun --bun run build`.

## Comandos

| Comando | O que faz |
| --- | --- |
| `bun install` | instala as dependências |
| `bun run dev` | servidor de desenvolvimento |
| `bun run build` | `astro check` + build estático em `dist/` |
| `bun run preview` | serve o `dist/` |
| `bun run lint` | Biome (não cobre `.astro`) |
| `bun run format` | Biome com `--write` |

`.astro` fica fora do escopo do Biome de propósito: a checagem desses arquivos é do
`astro check`, e a formatação é do editor.

### O dev server do Astro 7 é um daemon

`bun run dev` **reaproveita** um servidor já rodando em vez de subir outro, mesmo que o
`package.json`, o `astro.config.mjs` ou as dependências tenham mudado desde que ele subiu.
Quando isso acontece ele continua servindo o grafo de módulos antigo, e o sintoma típico é
`_jsxDEV is not a function` no console: a hidratação estoura e as ilhas **somem da tela**
(o cue de scroll do hero é o primeiro a sumir, porque é só ele naquela área).

Depois de mexer em dependências ou config, reinicie de fato:

```
astro dev stop && bun run dev
```

`astro dev status` e `astro preview status` mostram o que está de pé; `astro dev logs`
mostra a saída.

## Estrutura

```
src/
  components/
    islands/           ilhas React (quase todo o JS do site)
      LangToggle.tsx   troca de idioma, persiste em localStorage
      Typewriter.tsx   cargo que digita e apaga no hero
      ScrollCue.tsx    esconde o cue depois de 40px de scroll
      CvPane.tsx       listagem de currículos + pane estilo split do tmux
    BlogIndex.astro    índice do blog, agrupado por ano
    CommandLink.astro  linha "$ comando" clicável, com hint
    Footer.astro
    Home.astro         a home inteira, parametrizada por idioma
    Post.astro         post individual, prev/next e traduções
    Prompt.astro       "$ comando" não clicável
    StatusBar.astro    barra fixa estilo tmux
  content/blog/        um arquivo por idioma, ligados por translationKey
  content.config.ts    schema da collection
  i18n/ui.ts           toda a copy dos dois idiomas
  layouts/Base.astro   head, hreflang, detecção de idioma, toggle e barra de status
  pages/               ver a tabela de rotas acima
  styles/global.css    @theme do Tailwind 4, @font-face, keyframes, .post-body
public/
  fonts/               JetBrains Mono woff2 (subsets latin e latin-ext)
  documents/           PDFs dos currículos
```

Não existe `tailwind.config.js`: os tokens do design system são variáveis do bloco `@theme`
em `src/styles/global.css`. A paleta padrão do Tailwind é zerada ali (`--color-*: initial`),
então só as cores do Catppuccin Mocha da spec geram utilities.

O corpo do post é a classe `.post-body`, escrita à mão, e não `@tailwindcss/typography`:
o `Post.dc.html` fixa cada margem e tamanho.

Bloco de código com cabeçalho sai de um transformer de Shiki (`codeFrame` em
`astro.config.mjs`) que lê a meta do fence:

````markdown
```yaml title="otel-collector.yaml"
````

## Pendências

- `public/documents/curriculo-pt.pdf` e `public/documents/resume-en.pdf` são **placeholders**
  gerados só para o pane ter o que exibir. Substitua pelos PDFs reais.
- Só o post de 2026-07-28 está semeado (o texto existe verbatim em `specs/Post.dc.html`).
  Os outros três de `specs/09-CONTEUDO.md` estão sem corpo escrito.
