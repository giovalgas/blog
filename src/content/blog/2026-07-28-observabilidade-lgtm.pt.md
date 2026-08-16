---
title: "Migrando observabilidade de New Relic para a stack LGTM"
date: 2026-07-28
lang: pt
slug: observabilidade-lgtm
translationKey: observabilidade-lgtm
tag: infra
readingMinutes: 12
---

Rodávamos observabilidade em SaaS fechado por três anos. A conta crescia junto com o volume de spans, e o time consultava dashboards que ninguém sabia editar. A decisão foi migrar para a stack LGTM — Loki, Grafana, Tempo e Mimir — com instrumentação em OpenTelemetry.

## O que sai do agente proprietário

O agente antigo fazia três coisas ao mesmo tempo: coleta, enriquecimento e envio. Separar isso em collector e exportadores deixou claro quanto do custo vinha de span que ninguém lia.

```yaml title="otel-collector.yaml"
exporters:
  otlp/tempo:
    endpoint: tempo:4317
    tls:
      insecure: true

processors:
  tail_sampling:
    decision_wait: 10s
    policies:
      - name: errors
        type: status_code
        status_code: {status_codes: [ERROR]}
```

Com `tail_sampling` guardando erro e latência alta, o volume caiu sem perder o que se olha em incidente.

## O que eu faria diferente

Instrumentar antes de migrar. Passamos duas semanas comparando gráficos entre as duas ferramentas porque os nomes de métrica não batiam. Padronizar convenção semântica primeiro teria evitado isso.

> Se a métrica não tem dono, ela não vira alerta — vira gráfico bonito no telão.
