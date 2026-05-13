# AI Spend Audit

AI Spend Audit is a SaaS-style web application that helps startups and engineering teams identify overspending across AI tools like Cursor, Claude, ChatGPT, GitHub Copilot, Gemini, and API-based AI services.

The platform analyzes current AI tooling costs, recommends cheaper alternatives or better-fit plans, estimates monthly and annual savings, and generates personalized optimization summaries.

## Live Demo

https://ai-spend-audit-ecru.vercel.app/

---

# Features

- Multi-tool AI spend analysis
- Savings optimization engine
- Personalized AI-generated summaries
- Shareable audit URLs
- Email lead capture
- Responsive UI
- Real-time audit calculations
- Plan-based optimization recommendations

---

# Screenshots

## Homepage

(Add screenshot here)

## Audit Results

(Add screenshot here)

## Recommendations Section

(Add screenshot here)

---

# Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Vercel
- Supabase
- OpenAI / Anthropic API

---

# Quick Start

## Install dependencies

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Production build

```bash
npm run build
```

---

# Decisions & Tradeoffs

## 1. Rule-based audit engine instead of AI-generated pricing analysis

I intentionally used deterministic logic for pricing calculations and optimization recommendations instead of relying on LLM-generated financial analysis. This improves consistency, transparency, and trustworthiness.

## 2. Next.js App Router architecture

I selected Next.js App Router because it simplifies routing, server rendering, metadata generation, and shareable dynamic URLs.

## 3. Tailwind CSS over component-heavy UI frameworks

Tailwind allowed faster iteration speed and cleaner customization without large bundle overhead.

## 4. Email capture after value delivery

Users see savings insights before being asked for contact information to improve trust and conversion quality.

## 5. Lightweight MVP architecture

The application prioritizes shipping speed and usability over premature scalability optimizations.

---

# Deployment

The project is deployed on Vercel:

https://ai-spend-audit-ecru.vercel.app/

---

# Future Improvements

- Benchmarking against industry averages
- PDF report export
- Team collaboration support
- Advanced AI spend forecasting
- Vendor pricing change alerts