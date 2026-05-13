import AuditForm from "@/components/audit-form";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">

        <div className="mb-6 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/70">
          AI Infrastructure Optimization Platform
        </div>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Stop Overpaying For AI Tools
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
          Instantly analyze your AI software spending and uncover hidden savings opportunities across Cursor, Claude, ChatGPT, Gemini, and more.
        </p>

        <AuditForm />

      </section>

      <Footer />

    </main>
  );
}