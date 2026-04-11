import { ShieldCheck, Zap, BarChart3, Globe } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-(--border-color) bg-(--card-bg) px-6 pb-12 pt-16 text-(--text-soft)">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Section 1: Brand & Mission */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 font-bold text-(--text-main) text-xl">
              <img src="/Logo.png" alt="" width={30} />
              <span className="tracking-tight">Resume<span className="text-indigo-500">AI</span></span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              A high-performance neural engine designed to optimize professional resumes for modern Applicant Tracking Systems (ATS).
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-(--border-color) bg-emerald-500/5 px-3 py-1 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">v1.0.4 Stable</span>
            </div>
          </div>

          {/* Section 2: Core Features (Informational) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-(--text-main)">Core Capabilities</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Zap size={14} className="text-indigo-500" />
                <span>Instant Neural Parsing</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BarChart3 size={14} className="text-indigo-500" />
                <span>ATS Compatibility Scoring</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Globe size={14} className="text-indigo-500" />
                <span>Industry Keyword Mapping</span>
              </div>
            </div>
          </div>

          {/* Section 3: Data Safety (Informational) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-(--text-main)">Data Security</h4>
            <div className="flex items-start gap-2">
              <ShieldCheck size={18} className="text-indigo-500 shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed">
                Your data is processed in-memory. Resumes are not stored on our servers after analysis is complete to ensure 100% user privacy.
              </p>
            </div>
          </div>

          {/* Section 4: Tech Stack (Informational) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-(--text-main)">Architecture</h4>
            <p className="text-xs leading-relaxed italic">
              Built using React, TanStack Router, and custom Gemini-based career models. Optimized for low-latency document processing.
            </p>
          </div>

        </div>

        {/* Bottom Bar: Clean & Centered */}
        <div className="mt-16 border-t border-(--border-color) pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-[10px] font-bold tracking-[0.15em] uppercase opacity-60">
            &copy; {year} ResumeAI Engine
          </div>
          <div className="h-px w-12 bg-(--border-color) hidden md:block"></div>
          <div className="text-[11px] font-medium">
            ENGINEERED BY <span className="text-indigo-500 font-bold ml-1 tracking-tighter text-sm uppercase">Mohd Ayaan Ansari</span>
          </div>
        </div>
      </div>
    </footer>
  )
}