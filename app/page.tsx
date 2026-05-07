import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center">
        <div className="rounded-full border px-4 py-1 text-sm">
          AI Spend Optimization
        </div>

        <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight">
          Audit Your AI Tool Spend in Minutes
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Discover where your team is overspending on ChatGPT,
          Claude, Cursor, Copilot, and other AI tools.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-lg bg-black px-6 py-3 text-white">
            Start Free Audit
          </button>

          <button className="rounded-lg border px-6 py-3">
            View Example Report
          </button>
        </div>
      </section>
    </main>
  );
}