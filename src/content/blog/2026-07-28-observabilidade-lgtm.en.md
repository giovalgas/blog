---
title: "Migrating observability from New Relic to the LGTM stack"
date: 2026-07-28
lang: en
slug: observability-lgtm
translationKey: observabilidade-lgtm
tag: infra
readingMinutes: 12
---

We ran observability on a closed SaaS for three years. The bill grew with span volume, and the team relied on dashboards nobody knew how to edit. We decided to move to the LGTM stack — Loki, Grafana, Tempo and Mimir — instrumented with OpenTelemetry.

## What the proprietary agent takes with it

The old agent did three things at once: collection, enrichment and shipping. Splitting that into a collector and exporters made it clear how much of the cost came from spans nobody read.

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

With `tail_sampling` keeping errors and high latency, volume dropped without losing what you actually look at during an incident.

## What I would do differently

Instrument before migrating. We spent two weeks comparing charts between both tools because metric names did not match. Standardizing semantic conventions first would have avoided that.

> A metric with no owner never becomes an alert — it becomes a nice chart on the wall screen.
