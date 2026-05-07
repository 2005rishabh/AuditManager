## Day 1 — 2026-05-08

**Hours worked:** 5

**What I did:**

* Initialized the project using Next.js, TypeScript, Tailwind CSS, and App Router
* Installed core dependencies including React Hook Form, Zod, Supabase client, Recharts, and testing libraries
* Set up the base project structure with separate folders for components, audit logic, pricing data, types, and tests
* Designed the initial pricing architecture to support both seat-based plans (ChatGPT Team, Cursor Pro, GitHub Copilot Business) and usage-based API pricing models (OpenAI API, Anthropic API)
* Created centralized pricing configuration files to avoid hardcoding values inside recommendation logic
* Started planning the audit engine structure and recommendation flow
* Began collecting official pricing sources for supported AI tools

**What I learned:**

* AI tooling pricing is highly inconsistent across vendors, especially between subscription plans and API-based billing
* Separating pricing data from audit rules makes the recommendation engine easier to maintain and extend
* Most meaningful savings opportunities come from plan mismatches, duplicated subscriptions, or unnecessary enterprise tiers rather than switching vendors entirely

**Blockers / what I'm stuck on:**

* Some enterprise pricing details are not publicly available and require assumptions or clearly documented estimates
* API pricing models are more difficult to normalize compared to fixed monthly subscriptions

**Plan for tomorrow:**

* Build the spend input form
* Add validation using React Hook Form and Zod
* Implement localStorage persistence for form state
* Continue pricing research and begin writing initial audit recommendation rules
