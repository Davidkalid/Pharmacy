# Pharmacy (APTS/IFRR/RRF) Monorepo

An offline-first, multi-tenant pharmacy management system aligned to Ethiopia MoH APTS with IFRR/RRF official templates, FEFO enforcement, audits, and comprehensive POS/dispensing workflows.

- Multi-tenant, multi-store; modular monolith (microservices-ready)
- Offline-first PWA (Dexie + background sync), real-time sync (WS/SSE)
- Web app (Next.js 14) + API (Fastify TS) + Prisma (MySQL via XAMPP)
- Customization: custom fields/entities, workflows, scripts (sandboxed), report/print builders, marketplace, governance

## Stack (planned)
- Monorepo: pnpm workspaces (apps/api, apps/web, packages/db, packages/config, packages/eslint-config, packages/customization-sdk)
- API: Fastify (TS), Zod, Prisma (MySQL), Swagger/OpenAPI, WS/SSE
- Web: Next.js 14 (TS), Tailwind, React Query, PWA, ECharts
- Infra: XAMPP MySQL (STRICT_TRANS_TABLES, TZ=UTC)

## Prerequisites
- Git, GitHub CLI (gh), Node LTS, pnpm, XAMPP (MySQL)
- Windows PowerShell (or Terminal)

## Working Agreement
- PROJECT_CHECKLIST.md is our single source of truth for tasks.
- We proceed one checklist item at a time (no skipping ahead).
- Code targets TypeScript, clean architecture, modular, minimal deps.

## Next Actions
- Follow PROJECT_CHECKLIST.md — we are in “Create project repository and save master to-do file”.
- After docs are created, we’ll make the initial commit and tag v0.0.0, then push.

## Security & Compliance (high-level)
- FEFO enforcement, bin cards/stock registers, ABC-VEN, IFRR/RRF, <2% wastage KPI, audits, six-step dispensing, controlled meds rules
- Fraud prevention: duplicate dispensing checks, override approvals, anomaly reports

## License
TBD
