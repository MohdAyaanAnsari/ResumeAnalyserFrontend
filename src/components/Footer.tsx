import { Link } from '@tanstack/react-router'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-(--border-color) bg-(--card-bg) px-4 pb-10 pt-12 text-(--text-soft)">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          
          {/* Brand & Status Section */}
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <div className="flex items-center gap-2 font-bold text-(--text-main)">
              <div className="h-5 w-5 rounded bg-linear-to-br from-indigo-500 to-purple-600" />
              <span>ResumeAI</span>
            </div>
            <p className="max-w-60 text-center text-xs leading-relaxed sm:text-left">
              Empowering careers through precise, AI-driven document intelligence.
            </p>
            <div className="flex items-center gap-2 rounded-full border border-(--border-color) bg-(--header-bg) px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider">AI Systems Online</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-10 sm:gap-20">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-(--text-main)">Product</span>
              <Link to="/" className="text-sm transition hover:text-indigo-500">Analyzer</Link>
              <Link to="/" className="text-sm transition hover:text-indigo-500">Templates</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-(--text-main)">Legal</span>
              <Link to="/" className="text-sm transition hover:text-indigo-500">Privacy</Link>
              <Link to="/" className="text-sm transition hover:text-indigo-500">Terms</Link>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-(--border-color) transition hover:border-indigo-500/50 hover:bg-indigo-500/5 hover:text-indigo-500"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-(--border-color) transition hover:border-indigo-500/50 hover:bg-indigo-500/5 hover:text-indigo-500"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center border-t border-(--border-color) pt-8 sm:flex-row">
          <p className="text-xs">
            &copy; {year} ResumeAI. Built by <span className="text-(--text-main) font-medium">Mohd Ayaan Ansari</span>
          </p>
        </div>
      </div>
    </footer>
  )
}