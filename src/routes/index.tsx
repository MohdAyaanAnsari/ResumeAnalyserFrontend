import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Upload, Cpu, CheckCircle, AlertCircle, Sparkles, RefreshCw } from 'lucide-react'
import { uploadResume } from '../api/Uplaod' // Assuming your service file is here

export const Route = createFileRoute('/')({ component: App })

type AnalysisData = {
  score: number
  strengths: string[]
  weaknesses: string[]
  suggestions: string[]
  missing_keywords: string[]
}

function App() {
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle')
  const [result, setResult] = useState<AnalysisData | null>(null)
  const [errorMsg, setErrorMsg] = useState<string>('')

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setStatus('processing')
    setErrorMsg('')

    try {
      // Calling your actual Axios service
      const response = await uploadResume(file)

      // Map the response to your state (adjust based on your exact JSON nesting)
      setResult(response.data)
      setStatus('success')
    } catch (err: any) {
      console.error("Upload failed:", err)
      setErrorMsg(err.response?.data?.message || "Could not connect to analysis server.")
      setStatus('error')
    }
  }

  const reset = () => {
    setStatus('idle')
    setResult(null)
    setErrorMsg('')
  }

  return (
    <main className="max-w-6xl mx-auto px-4 pb-20 pt-14">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold mb-6 border border-indigo-500/20">
          <Sparkles size={14} />
          <span>LIVE ENGINE</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-(--text-main) mb-6">
          Optimize your <span className="text-indigo-500">Resume</span> <br />with Neural Analysis.
        </h1>
      </section>
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">

        {/* TOP SECTION: Upload & Status */}
        <div className="w-full flex flex-col gap-6">

          {/* IDLE STATE */}
          {status === 'idle' && (
            <div className="relative group">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-(--border-color) rounded-3xl cursor-pointer bg-(--card-bg) hover:border-indigo-500/50 transition-all">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <div className="p-4 bg-indigo-500/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="text-indigo-500" size={32} />
                  </div>
                  <p className="mb-2 text-sm font-semibold text-(--text-main)">Upload Resume (PDF)</p>
                </div>
                <input type="file" className="hidden" onChange={handleFileUpload} accept=".pdf" />
              </label>
            </div>
          )}

          {/* PROCESSING STATE */}
          {status === 'processing' && (
            <div className="flex flex-col items-center justify-center h-64 bg-(--card-bg) rounded-3xl border border-(--border-color) relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-indigo-500/10 to-transparent h-20 w-full animate-scan" />
              <div className="relative z-10 flex flex-col items-center">
                <Cpu className="text-indigo-500 animate-spin mb-4" size={40} />
                <h3 className="text-lg font-bold text-(--text-main)">AI is Analyzing...</h3>
                <p className="text-sm text-(--text-soft) mt-2 italic">Consulting career intelligence models</p>
              </div>
            </div>
          )}

          {/* ERROR STATE */}
          {status === 'error' && (
            <div className="flex flex-col items-center justify-center h-64 bg-rose-500/5 rounded-3xl border border-rose-500/20 text-center p-6">
              <AlertCircle className="text-rose-500 mb-4" size={40} />
              <h3 className="text-lg font-bold text-rose-700">Analysis Failed</h3>
              <p className="text-xs text-rose-600/80 mt-2 mb-6">{errorMsg}</p>
              <button onClick={reset} className="flex items-center gap-2 text-sm font-bold text-rose-700 underline underline-offset-4">
                <RefreshCw size={14} /> Try again
              </button>
            </div>
          )}

          {/* Success Summary Info */}
          {status === 'success' && (
            <div className="p-6 rounded-3xl bg-indigo-500/5 border border-indigo-500/20">
              <h4 className="text-sm font-bold text-indigo-600 mb-2 uppercase tracking-tight">System Status</h4>
              <p className="text-xs text-(--text-soft) leading-relaxed">
                The analysis is complete. Our AI has identified {result?.strengths.length} strengths and {result?.missing_keywords.length} missing industry keywords.
              </p>
              <button onClick={reset} className="mt-4 text-xs font-bold text-indigo-500 hover:underline">← Analyze another document</button>
            </div>
          )}
        </div>

        {/* BOTTOM SECTION: Results (Now appears directly below the upload area) */}
        <div className="w-full">
          {!result ? null : (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">

              {/* Score Header */}
              <div className="p-8 rounded-3xl bg-indigo-600 text-white shadow-xl shadow-indigo-500/20 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-black italic tracking-tighter">SCORE: {result.score}/10</h2>
                  <p className="opacity-80 text-xs mt-1 uppercase font-bold tracking-widest">Neural Evaluation Rating</p>
                </div>
                <div className="h-16 w-16 rounded-2xl border-2 border-white/30 flex items-center justify-center font-black text-2xl rotate-3 bg-white/10">
                  {result.score}
                </div>
              </div>

              {/* Strengths & Weaknesses Grid (Kept as 2 cols for better use of space) */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-6 rounded-3xl bg-emerald-500/3 border border-emerald-500/10">
                  <h3 className="font-bold text-emerald-600 mb-4 flex items-center gap-2 text-sm uppercase">
                    <CheckCircle size={16} /> Key Assets
                  </h3>
                  <ul className="space-y-3">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="text-xs leading-relaxed text-(--text-main) flex gap-2">
                        <span className="text-emerald-500">•</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-3xl bg-ro
                se-500/[0.03] border border-rose-500/10">
                  <h3 className="font-bold text-rose-600 mb-4 flex items-center gap-2 text-sm uppercase">
                    <AlertCircle size={16} /> Gaps Found
                  </h3>
                  <ul className="space-y-3">
                    {result.weaknesses.map((w, i) => (
                      <li key={i} className="text-xs leading-relaxed text-(--text-main) flex gap-2">
                        <span className="text-rose-500">•</span> {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Keywords */}
              <div className="p-6 rounded-3xl bg-(--card-bg) border border-(--border-color)">
                <h3 className="font-bold text-(--text-main) mb-4 text-sm flex items-center gap-2">
                  <Sparkles size={16} className="text-indigo-500" /> Optimize Keywords
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.missing_keywords.map((kw, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-indigo-500/5 text-indigo-600 border border-indigo-500/10 text-[10px] font-black uppercase tracking-wider">
                      + {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Roadmap */}
              <div className="p-6 rounded-3xl bg-slate-900 text-slate-100 shadow-inner">
                <h3 className="font-bold text-indigo-400 mb-4 text-sm">Actionable Roadmap</h3>
                <div className="space-y-3">
                  {result.suggestions.map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-800/50 text-xs border border-slate-700/50 leading-relaxed">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}