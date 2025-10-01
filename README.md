# Bridge to Relief – MVP

**Purpose:** One-page MVP website to demonstrate a compassionate, AI-assisted navigator that connects Florida residents to verified disaster relief resources.

## What this MVP shows
- Clear value prop and simple flow
- **Live chat prototype** (Anthropic Claude) that simulates resource guidance
- **Lead capture** for individuals, partners, and funders
- Privacy/Terms pages and basic guardrails

## Tech stack
- **Next.js** (App Router) + **TypeScript** + **TailwindCSS**
- **Anthropic Claude** via `@anthropic-ai/sdk`
- Deploy target: **Vercel**

## Page structure
1. **Hero:** “Find the right disaster relief—fast.”
2. **Value Props:** Local & verified; Simple steps; Human handoff
3. **Live Chat (Prototype):** Demo with safety disclaimer
4. **Join the Pilot:** Email + role form
5. **Footer:** Privacy, Terms, Contact, nonprofit-in-formation note

## Safety & trust (MVP guardrails)
- Do **not** request SSN, bank info, DOB, or protected health info
- Display disclaimers in UI and in the system prompt
- Minimal logs for quality (no sensitive content); `.env.local` is never committed
- Aim for accessible, mobile-first experience

## Local development
```bash
pnpm install
pnpm dev
# open http://localhost:3000 (or Codespaces forwarded port)
