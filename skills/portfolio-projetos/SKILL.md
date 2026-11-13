---
name: portfolio-projetos
description: Research Arthur Martins Maciel's projects and maintain evidence-based portfolio stories about their problems, decisions, solutions and results. Use when investigating, reviewing or writing portfolio project cases.
---

# Arthur's portfolio projects

Show Arthur's product and engineering reasoning to recruiters, clients and partners. Lead with the problem, people and solution; use technology to explain decisions, not as a substitute for them.

## Research

1. Read the portfolio's project data and translations, and any relevant notes in `contexto-projetos/`. Identify repository links and existing claims.
2. Use an available local checkout, connected Git integration or read-only remote access. Inspect relevant README, documentation, code, tests and history. Examine related repositories together. Do not require a clone if remote reading suffices or put clones inside the portfolio repository without a reason and suitable location.
3. Distinguish source code, documentation, Arthur's account and inference. Record sources and the date checked; documentation may be stale. Never present plans, mock data or prototypes as production features. Do not expose secrets, private data or confidential details.
4. Establish, where supported: context and audience, motivation, user journey and solution, Arthur's role, key decisions and trade-offs, current status, measurable outcomes and lessons. Ask Arthur targeted questions when essential facts are missing. Never invent impact, metrics, clients, scale or contributions.
5. Record useful verified facts and sources in `contexto-projetos/` using `contexto-projetos/MODELO.md` as a guide. Mark uncertain claims. Update the notes when new evidence is found; omit sensitive information.

## Writing and updates

- Explain why the project exists, how it addresses the problem and which choices matter. Match the detail to the requested output and interface.
- Avoid generic marketing, unexplained jargon and technology lists in place of reasoning. Attribute contributions accurately.
- Preserve languages, links and the actual product status. When updating descriptions, check `src/data/projects.ts` and `src/data/i18n.ts`; keep Portuguese, English and Spanish consistent and supported by evidence.
- Follow existing design and applicable interface guidance when changing UI. Run the build and other appropriate checks.
- Report material unknowns, verification and sources. Label inferences rather than presenting them as facts.
