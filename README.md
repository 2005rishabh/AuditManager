# Audit Manager

Audit Manager is a web application that helps startups and engineering teams analyze their AI tooling spend and identify potential savings opportunities across products like ChatGPT, Claude, Cursor, GitHub Copilot, Gemini, and API providers.

The tool generates actionable audit recommendations based on current plans, team size, usage patterns, and pricing models. It also provides personalized AI-generated summaries and shareable audit reports.

## Features

* Multi-tool AI spend audit
* Pricing and plan optimization recommendations
* Monthly and annual savings calculations
* AI-generated personalized audit summary
* Shareable public audit links
* Lead capture with backend storage
* Responsive and mobile-friendly UI

## Tech Stack

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui
* Supabase
* React Hook Form
* Zod
* Recharts
* Vitest

## Quick Start

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Project Status

Current progress:

* Project initialized
* Core architecture setup completed
* Pricing schema and audit domain models in progress
* Audit engine under development

## Decisions

* Chose TypeScript for safer financial calculations and maintainable audit logic
* Centralized pricing data instead of embedding pricing inside recommendation rules
* Using hardcoded recommendation logic instead of AI for audit calculations to keep recommendations deterministic and explainable
* Prioritized shareable audit results and clear UI hierarchy over advanced dashboard functionality
* Using Supabase for simple backend storage and fast deployment iteration

## Planned MVP

* AI spend input form
* Audit recommendation engine
* Savings calculations
* Personalized AI summary
* Shareable results page
* Lead capture and email confirmation
