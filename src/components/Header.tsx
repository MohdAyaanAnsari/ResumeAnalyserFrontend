import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--border-color) bg-[var(--header-bg
    )] px-4 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 py-3">
        {/* Logo Section */}
        <h2 className="m-0 shrink-0">
          <Link
            to="/"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-(--card-bg) px-4 py-2 text-sm font-bold text-(--text-main) no-underline transition-all hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <div className="relative flex h-6 w-6 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 text-white shadow-sm">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                className="h-4 w-4"
              >
                <path d="M12 3c.132 0 .263 0 .393 0a.75.75 0 0 0 .534-1.281l-1.027-1.027a.75.75 0 0 0-1.06 0l-1.027 1.027A.75.75 0 0 0 10.346 3H12Z" />
                <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c.337 0 .669.018 1 .054" />
                <path d="m15 7 2 2-2 2" />
                <path d="m19 7-2 2 2 2" />
              </svg>
            </div>
            <span className="tracking-tight">Resume<span className="text-indigo-500">AI</span></span>
          </Link>
        </h2>

        {/* Navigation Links */}
        {/* <div className="order-3 flex w-full flex-wrap items-center gap-x-5 text-sm font-medium sm:order-2 sm:w-auto">
          <Link
            to="/"
            className="text-[var(--text-soft)] transition-colors hover:text-indigo-500"
            activeProps={{ className: 'text-indigo-500 font-semibold' }}
          >
            Analyzer
          </Link>
          <Link
            to="/templates"
            className="text-[var(--text-soft)] transition-colors hover:text-indigo-500"
            activeProps={{ className: 'text-indigo-500 font-semibold' }}
          >
            Templates
          </Link>
          <Link
            to="/history"
            className="text-[var(--text-soft)] transition-colors hover:text-indigo-500"
            activeProps={{ className: 'text-indigo-500 font-semibold' }}
          >
            My Scans
          </Link>
        </div> */}

        {/* Action Buttons */}
        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle />
          {/* <button className="hidden sm:block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 shadow-md shadow-indigo-500/20">
            Sign In
          </button> */}
        </div>
      </nav>
    </header>
  )
}