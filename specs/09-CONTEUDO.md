# Conteúdo real

## Identidade

- Nome: **Giovani Valgas**
- Cargos que alternam no hero: **Tech Lead** e **Senior Software Engineer**
- Local: Florianópolis, SC

## Sobre (pt)

> Software Engineer autodidata, hoje Tech Lead na Prolog App, em Florianópolis, SC.
>
> Trabalho principalmente com Java, Spring Boot e PostgreSQL, e faço DevOps e infraestrutura
> em AWS e GCP.
>
> \> Paixão por construir sistemas robustos e escaláveis.

## Sobre (en)

> Self-taught Software Engineer, currently Tech Lead at Prolog App, in Florianópolis, Brazil.
>
> I work mostly with Java, Spring Boot and PostgreSQL, and I do DevOps and infrastructure
> work in AWS and GCP.
>
> \> Passion for building robust and scalable systems.

Mantenha esses textos **verbatim**. Não reescreva, não expanda.

## Links

O `href` sai da coluna da direita (valores de `Home.dc.html`); o texto visível na tela é o da
coluna do meio.

| Rede | Texto na tela | href |
| --- | --- | --- |
| github | `github.com/giovalgas` | `https://github.com/giovalgas` |
| linkedin | `linkedin.com/in/giovalgas` | `https://www.linkedin.com/in/giovalgas/` |
| instagram | `instagram` (só no rodapé) | `https://www.instagram.com/giosvalgas/` |
| youtube | `youtube` (só no rodapé) | `https://www.youtube.com/@giovalgasdev` |
| email | `contato@giovalgas.dev.br` | `mailto:contato@giovalgas.dev.br` |

RSS: `/rss.xml` (en, padrão) e `/pt/rss.xml`.

## Documentos

- `public/documents/curriculo-pt.pdf`
- `public/documents/resume-en.pdf`

## Posts de referência (para semear o conteúdo)

Inglês é o idioma padrão (`08-I18N.md`), então a coluna `en` é a que manda na rota sem prefixo.

| Data | pt | en | Leitura |
| --- | --- | --- | --- |
| 2026-07-28 | Migrando observabilidade de New Relic para a stack LGTM | Migrating observability from New Relic to the LGTM stack | 12 min |
| 2026-05-14 | Blue-green com Traefik e Docker Swarm sem downtime | Blue-green with Traefik and Docker Swarm, no downtime | 9 min |
| 2026-02-03 | Keycloak como SSO: o que eu faria diferente | Keycloak as SSO: what I would do differently | 7 min |
| 2025-11-19 | Escrevendo um TUI em Go com Bubbletea | Writing a TUI in Go with Bubbletea | 10 min |

Se ainda não houver post publicado, a listagem mostra o estado vazio descrito em `05-BLOG.md`.

O corpo do post de 2026-07-28 já está escrito nos dois idiomas dentro de `Post.dc.html`
(objeto `COPY`, chaves `p1`, `h1`, `p2`, `p3a`/`p3b`, `h2`, `p4`, `quote`, mais o bloco
`otel-collector.yaml`). Use aquele texto **verbatim** ao semear o Markdown; slug
`observabilidade-lgtm` / `observability-lgtm`, tag `infra`.
