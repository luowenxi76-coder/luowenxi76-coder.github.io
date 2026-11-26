import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Command, Copy, Mail, Phone } from 'lucide-react'
import { CONTACT, CONTENT, type Lang, type RoleLens } from './data/content'
import { Navbar } from './components/Navbar'
import { HalftoneWaveCanvas } from './components/HalftoneWaveCanvas'
import { McpTerminalCard } from './components/McpTerminalCard'
import { ScrollRevealStatement } from './components/ScrollRevealStatement'
import { MoliPulseShowcase } from './components/MoliPulseShowcase'
import { VoxRadioShowcase } from './components/VoxRadioShowcase'
import { EcosystemCases } from './components/EcosystemCases'
import { CommandPalette } from './components/CommandPalette'
import { CadFooter } from './components/CadFooter'

export default function App() {
  const [lang, setLang] = useState<Lang>('zh')
  const [lens, setLens] = useState<RoleLens>('ops')
  const [cmdOpen, setCmdOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [cursor, setCursor] = useState({ x: 1280, y: 720 })

  const copy = CONTENT[lang]
  const metrics = lens === 'ops' ? copy.hero.metricsOps : copy.hero.metricsPm

  const showToast = useCallback((msg: string) => {
    setToast(msg)
    window.clearTimeout((window as unknown as { __toastTimer?: number }).__toastTimer)
    ;(window as unknown as { __toastTimer?: number }).__toastTimer = window.setTimeout(() => {
      setToast(null)
    }, 2200)
  }, [])

  const copyText = useCallback(
    (value: string, prefix: string) => {
      if (navigator.clipboard) {
        void navigator.clipboard.writeText(value).catch(() => {})
      }
      showToast(`${prefix}：${value}`)
    },
    [showToast],
  )

  const handleJump = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const handleToggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === 'zh' ? 'en' : 'zh'
      document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en'
      showToast(CONTENT[next].toast.langSwitched)
      return next
    })
  }, [showToast])

  const handleSetLens = useCallback(
    (next: RoleLens) => {
      setLens(next)
      showToast(next === 'ops' ? copy.toast.switchedToOps : copy.toast.switchedToPm)
    },
    [copy.toast.switchedToOps, copy.toast.switchedToPm, showToast],
  )

  // Global ⌘K / Ctrl+K shortcut & subtle CAD viewport cursor tracking
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setCmdOpen((o) => !o)
      }
    }
    const onPointerMove = (e: PointerEvent) => {
      setCursor({ x: Math.round(e.clientX), y: Math.round(e.clientY) })
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [])

  return (
    <div id="top" className="min-h-screen text-[#14161A]">
      <Navbar
        lang={lang}
        copy={copy.nav}
        onToggleLang={handleToggleLang}
        onOpenCmd={() => setCmdOpen(true)}
        onJump={handleJump}
        onContactClick={() => handleJump('contact')}
      />

      {/* HERO: Plan B Light Blueprint Typography & Grid + Plan A 3D Halftone Wave + Interactive Codex MCP Terminal */}
      <section className="relative overflow-x-clip pt-8 pb-14 sm:pt-12 sm:pb-18">
        {/* CAD Margin Registration Marks */}
        <div className="pointer-events-none mx-auto mb-3 hidden max-w-[1280px] items-center justify-between px-4 font-mono text-[10.5px] text-[#707584] sm:flex sm:px-6 lg:px-8">
          <span className="tabular-nums">[0, 246] // LUO WENXI · AI PRODUCT LAB</span>
          <span className="tabular-nums">
            CURSOR [{cursor.x}, {cursor.y}] · {lens.toUpperCase()} LENS
          </span>
        </div>

        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10">
            {/* Left Column: Swiss Architectural Hero Copy + Role Lens Switcher + Metrics */}
            <div className="min-w-0 pt-1">
              <div className="mb-4 inline-flex max-w-full flex-wrap items-center gap-2 rounded border border-[#14161A]/15 bg-white/90 px-2.5 py-1 font-mono text-[10.5px] font-medium leading-snug text-[#444854] sm:text-[11px]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#10B981] led-pulse" />
                <span>{copy.hero.eyebrow}</span>
              </div>

              {/* Segmented Role Lens Switcher with Framer Motion Spring */}
              <div
                role="tablist"
                aria-label="Role perspective switcher"
                className="mb-5 inline-flex max-w-full flex-wrap rounded-full border border-[#14161A]/20 bg-white p-1 shadow-xs"
              >
                {(['ops', 'pm'] as RoleLens[]).map((mode) => {
                  const active = lens === mode
                  return (
                    <button
                      key={mode}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => handleSetLens(mode)}
                      className={`relative cursor-pointer rounded-full px-3 py-1.5 text-[12px] font-semibold transition-colors sm:px-3.5 sm:text-[12.5px] ${
                        active ? 'text-white' : 'text-[#444854] hover:text-[#14161A]'
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="role-lens-pill"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                          className="absolute inset-0 rounded-full bg-[#14161A]"
                        />
                      )}
                      <span className="relative z-10">
                        {mode === 'ops' ? copy.hero.roleOps : copy.hero.rolePm}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Display Name + Dynamic Headline */}
              <div className="mb-2 flex items-baseline gap-3">
                <span className="font-display text-[15px] font-bold tracking-widest text-[#E84A27] uppercase">
                  {copy.hero.displayName}
                </span>
                <span className="h-px flex-1 max-w-[72px] bg-[#14161A]/20" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${lang}-${lens}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22 }}
                >
                  <h1 className="font-display text-[28px] font-extrabold leading-[1.18] tracking-tight text-[#14161A] sm:text-[38px] lg:text-[42px]">
                    {lens === 'ops' ? copy.hero.headlineOps : copy.hero.headlinePm}
                  </h1>
                  <p className="mt-4 max-w-xl text-[14.5px] leading-[1.72] text-[#444854] sm:text-[15px]">
                    {lens === 'ops' ? copy.hero.subcopyOps : copy.hero.subcopyPm}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Hero CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleJump('systems')}
                  className="cta-vermilion cursor-pointer rounded-md text-[13px]"
                >
                  <span className="px-4 py-2.5">{copy.hero.primaryCta}</span>
                  <span className="cta-seam flex items-center justify-center px-3 py-2.5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>

                <a
                  href={CONTACT.molipulseReport}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-[#14161A]/25 bg-white px-4 py-2.5 text-[13px] font-semibold text-[#14161A] transition-colors hover:border-[#14161A] hover:bg-[#14161A] hover:text-white"
                >
                  <span>{copy.hero.secondaryCta}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setCmdOpen(true)}
                  className="hidden cursor-pointer items-center gap-1.5 rounded-md border border-dashed border-[#14161A]/28 bg-transparent px-3 py-2.5 font-mono text-[11.5px] text-[#555964] transition-colors hover:border-[#14161A] hover:text-[#14161A] sm:inline-flex"
                >
                  <Command className="h-3.5 w-3.5" />
                  <span>{copy.hero.cmdHint}</span>
                </button>
              </div>

              {/* Compact Contact Quick-Copy Strip */}
              <div className="mt-5 flex flex-wrap items-center gap-2 text-[12px] text-[#555964]">
                <button
                  type="button"
                  onClick={() => copyText(CONTACT.phone, copy.toast.phoneCopied)}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded border border-[#14161A]/12 bg-white/80 px-2.5 py-1 font-mono text-[11.5px] hover:border-[#14161A]"
                >
                  <Phone className="h-3 w-3 text-[#E84A27]" />
                  <span className="tabular-nums">{CONTACT.phone}</span>
                  <Copy className="h-3 w-3 opacity-50" />
                </button>
                <button
                  type="button"
                  onClick={() => copyText(CONTACT.email, copy.toast.emailCopied)}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded border border-[#14161A]/12 bg-white/80 px-2.5 py-1 font-mono text-[11.5px] hover:border-[#14161A]"
                >
                  <Mail className="h-3 w-3 text-[#2563EB]" />
                  <span>{CONTACT.email}</span>
                  <Copy className="h-3 w-3 opacity-50" />
                </button>
              </div>
            </div>

            {/* Right Column: Plan A Showpiece (Interactive 3D Halftone Wave + Floating Live Codex MCP Terminal) */}
            <div className="relative min-w-0">
              <HalftoneWaveCanvas className="h-[300px] w-full sm:h-[395px]" />

              {/* Floating Obsidian OLED Interactive MCP Sandbox Card */}
              <div className="relative z-20 -mt-14 ml-auto w-full sm:-mt-28 sm:w-[88%] lg:-mt-32 lg:w-[88%]">
                <McpTerminalCard lang={lang} />
              </div>
            </div>
          </div>

          {/* 4-Column Architectural Telemetry Metric Strip */}
          <div className="mt-10 grid grid-cols-1 gap-3 border-t border-[#14161A]/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => {
              const accentColor =
                m.accent === 'vermilion'
                  ? 'text-[#E84A27]'
                  : m.accent === 'cobalt'
                    ? 'text-[#2563EB]'
                    : m.accent === 'emerald'
                      ? 'text-emerald-700'
                      : 'text-[#14161A]'
              return (
                <div key={`${lens}-${m.label}`} className="blueprint-card rounded-xl p-4">
                  <div className="flex items-baseline gap-2">
                    <span className={`font-display text-[26px] font-extrabold tabular-nums tracking-tight ${accentColor}`}>
                      {m.value}
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-[#707584]">{m.unit}</span>
                  </div>
                  <div className="mt-1 text-[13.5px] font-bold text-[#14161A]">{m.label}</div>
                  <div className="mt-0.5 font-mono text-[11px] text-[#707584]">{m.detail}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SCROLL-LINKED MANIFESTO (Scrolltide Ondine) */}
      <ScrollRevealStatement
        tag={copy.statement.tag}
        segments={lens === 'ops' ? copy.statement.segmentsOps : copy.statement.segmentsPm}
      />

      {/* MAIN CONTENT CONTAINER */}
      <main className="mx-auto max-w-[1280px] px-4 pt-16 sm:px-6 lg:px-8">
        {/* SECTION: Flagship Dual-Engine Systems Lab (MoliPulse + VoxRadio) */}
        <section id="systems" className="mb-20 scroll-mt-20">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-1.5 font-mono text-[11px] font-semibold tracking-widest text-[#E84A27]">
                {copy.labHeader.eyebrow}
              </div>
              <h2 className="font-display text-[26px] font-bold tracking-tight text-[#14161A] sm:text-[34px]">
                {copy.labHeader.title}
              </h2>
              <p className="mt-1 max-w-3xl text-[14.5px] text-[#444854]">{copy.labHeader.subtitle}</p>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <MoliPulseShowcase lang={lang} copy={copy.molipulse} />
            <VoxRadioShowcase lang={lang} copy={copy.voxradio} />
          </div>
        </section>

        {/* SECTION: Field Cases (Moli x e2e, ModelBest, Commercial, Capability Matrix) */}
        <EcosystemCases
          lens={lens}
          moli={copy.moliCase}
          modelbest={copy.modelbestCase}
          commercial={copy.commercial}
          capability={copy.capability}
        />
      </main>

      {/* CAD FOOTER */}
      <CadFooter
        copy={copy.footer}
        cursor={cursor}
        onCopyPhone={() => copyText(CONTACT.phone, copy.toast.phoneCopied)}
        onCopyEmail={() => copyText(CONTACT.email, copy.toast.emailCopied)}
        onOpenCmd={() => setCmdOpen(true)}
      />

      {/* GLOBAL ⌘K COMMAND PALETTE */}
      <CommandPalette
        open={cmdOpen}
        copy={copy.cmdPalette}
        onClose={() => setCmdOpen(false)}
        onJump={handleJump}
        onToggleLang={handleToggleLang}
        onSetLens={handleSetLens}
        onCopyPhone={() => copyText(CONTACT.phone, copy.toast.phoneCopied)}
        onCopyEmail={() => copyText(CONTACT.email, copy.toast.emailCopied)}
      />

      {/* TACTILE TOAST */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-md border border-[#14161A] bg-[#14161A] px-4 py-2 font-mono text-[12px] font-medium text-white shadow-xl"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
