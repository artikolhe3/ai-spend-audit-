export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-white/50 md:flex-row">

        <p>
          © 2026 AI Spend Audit. Built for Credex Internship Assignment.
        </p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-white">
            Privacy
          </a>

          <a href="#" className="hover:text-white">
            Terms
          </a>
        </div>

      </div>

    </footer>
  );
}