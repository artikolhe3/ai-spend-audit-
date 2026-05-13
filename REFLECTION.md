# REFLECTION.md

## 1. Hardest bug and how I debugged it

The hardest issue I faced was the test setup failing due to module resolution errors in Vitest.

At first, I assumed the problem was in my audit logic, so I started modifying the `generateAudit` function. That didn’t fix anything.

Then I tested the import manually and realized the issue was not logic-related but path resolution between Next.js alias (`@/lib/...`) and Vitest.

I confirmed this by:
- checking file structure (`lib/` vs `tests/`)
- switching from alias imports to relative imports (`../lib/...`)
- rerunning Vitest after each change

Once I removed the alias dependency in test files, all tests passed immediately.

This taught me that most “logic bugs” are actually environment/configuration issues.

---

## 2. A decision I reversed mid-week

Initially, I considered using AI (LLM) to generate pricing recommendations dynamically.

However, I reversed this decision and moved to a **rule-based audit engine**.

Reason:
- AI outputs were inconsistent for pricing logic
- Hard to guarantee deterministic financial recommendations
- Required reproducibility for evaluation and trust

Instead, I used AI only for generating the final summary text, not for calculations.

This improved reliability and made the system easier to test.

---

## 3. What I would build in week 2

If I had more time, I would add:

- Benchmarking system (compare user spend vs similar startups)
- Real-time pricing sync from vendor APIs
- Referral system for viral growth
- Slack integration for engineering teams
- PDF export of audit reports for internal finance sharing

Most importantly, I would improve conversion tracking to measure how audits translate into Credex consultations.

---

## 4. How I used AI tools

I used AI tools (ChatGPT / similar assistants) for:

- brainstorming audit rules and edge cases
- structuring project architecture
- refining documentation (README, GTM, ECONOMICS)
- debugging configuration issues in Vitest setup

I did NOT rely on AI for:
- core audit calculation logic
- pricing decisions
- test design decisions

One specific case where AI was wrong:
It initially suggested using Next.js path aliases (`@/`) inside Vitest tests. This caused module resolution errors. I caught this by inspecting the runtime error and switching to relative imports.

---

## 5. Self-rating

### Discipline: 8/10
I maintained consistent progress across multiple days and completed a full working product, but some parts were compressed into final-stage execution.

### Code Quality: 8.5/10
Clean separation between audit logic and UI. Rule-based engine ensures predictability. Some areas could be further modularized.

### Design Sense: 8/10
Focused on clarity and decision visibility (savings-first UI). Could improve visual polish further.

### Problem Solving: 9/10
Strong debugging approach—especially in isolating environment vs logic issues.

### Entrepreneurial Thinking: 8.5/10
Clear focus on user pain (AI overspending) and conversion funnel into Credex ecosystem rather than just building a tool.

---