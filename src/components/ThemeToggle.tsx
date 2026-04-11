import { useEffect, useState } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'

type ThemeMode = 'light' | 'dark' | 'auto'

function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') return 'auto'
  const stored = window.localStorage.getItem('theme')
  return (stored as ThemeMode) || 'auto'
}

function applyThemeMode(mode: ThemeMode) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const resolved = mode === 'auto' ? (prefersDark ? 'dark' : 'light') : mode
  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(resolved)
  document.documentElement.setAttribute('data-theme', resolved)
  document.documentElement.style.colorScheme = resolved
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>('auto')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const initialMode = getInitialMode()
    setMode(initialMode)
    applyThemeMode(initialMode)
  }, [])

  useEffect(() => {
    if (mode !== 'auto') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyThemeMode('auto')
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [mode])

  function toggleMode() {
    const modes: ThemeMode[] = ['light', 'dark', 'auto']
    const nextMode = modes[(modes.indexOf(mode) + 1) % modes.length]
    setMode(nextMode)
    applyThemeMode(nextMode)
    window.localStorage.setItem('theme', nextMode)
  }

  if (!mounted) return <div className="h-10 w-10" />

  return (
    <button
      type="button"
      onClick={toggleMode}
      className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-(--border-color) bg-(--card-bg) shadow-sm transition-all duration-300 hover:border-indigo-500/50 hover:bg-(--header-bg) hover:shadow-indigo-500/10 active:scale-90"
      aria-label={`Switch theme (current: ${mode})`}
    >
      {/* Icon Wrapper */}
      <div className="relative h-5 w-5">
        <Sun
          className={`absolute inset-0 h-full w-full transition-all duration-500 ${
            mode === 'light' 
              ? 'rotate-0 scale-100 opacity-100 text-amber-500' 
              : 'rotate-12 scale-50 opacity-0'
          }`}
        />
        <Moon
          className={`absolute inset-0 h-full w-full transition-all duration-500 ${
            mode === 'dark' 
              ? 'rotate-0 scale-100 opacity-100 text-indigo-400' 
              : '-rotate-12 scale-50 opacity-0'
          }`}
        />
        <Monitor
          className={`absolute inset-0 h-full w-full transition-all duration-500 ${
            mode === 'auto' 
              ? 'scale-100 opacity-100 text-(--text-soft)' 
              : 'scale-50 opacity-0'
          }`}
        />
      </div>

      {/* Modern Highlight Ring */}
      <div className="absolute inset-0 rounded-xl border border-indigo-500/0 transition-all group-hover:border-indigo-500/30 group-hover:ring-4 group-hover:ring-indigo-500/5" />
      
      {/* Dynamic Glow Background */}
      <div 
        className={`absolute inset-0 -z-10 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-linear-to-br ${
          mode === 'light' ? 'from-amber-500/10' : mode === 'dark' ? 'from-indigo-500/10' : 'from-slate-500/10'
        } to-transparent`} 
      />
    </button>
  )
}