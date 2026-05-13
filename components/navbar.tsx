export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        <div>
          <h1 className="text-xl font-bold text-white">
            AI Spend Audit
          </h1>
        </div>

        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          <a href="#" className="hover:text-white">
            Features
          </a>

          <a href="#" className="hover:text-white">
            Pricing
          </a>

          <a href="#" className="hover:text-white">
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}