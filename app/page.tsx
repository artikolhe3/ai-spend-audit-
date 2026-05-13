import { Button } from "@/components/ui/button";
import AuditForm from "@/components/audit-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">

        <div className="mb-6 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/70">
          AI Spend Optimization for Modern Teams
        </div>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Stop Overpaying For AI Tools
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
          Instantly audit your AI infrastructure spending, uncover hidden savings,
          and discover cheaper alternatives for Cursor, Claude, ChatGPT, Copilot,
          Gemini, and more.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button className="h-12 px-8 text-base">
            Start Free Audit
          </Button>

          <Button
            variant="outline"
            className="h-12 border-white/20 bg-transparent px-8 text-base text-white hover:bg-white hover:text-black"
          >
            View Example Report
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">$2,400+</h3>
            <p className="mt-2 text-sm text-white/70">
              Average annual savings identified
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">7+ AI Platforms</h3>
            <p className="mt-2 text-sm text-white/70">
              Cursor, Claude, ChatGPT, Gemini & more
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">2 Minutes</h3>
            <p className="mt-2 text-sm text-white/70">
              Instant personalized AI spend audit
            </p>
          </div>

        </div>

        <AuditForm />

      </section>
    </main>
  );
}