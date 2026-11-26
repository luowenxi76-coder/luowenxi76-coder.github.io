import { ArrowRight, Command, Globe } from 'lucide-react'
import type { Lang, SiteCopy } from '../data/content'

interface NavbarProps {
  lang: Lang
  copy: SiteCopy['nav']
  onToggleLang: () => void
  onOpenCmd: () => void
  onJump: (id: string) => void
  onContactClick: () => void
}

export function Navbar({
  lang,
  copy,
  onToggleLang,
  onOpenCmd,
  onJump,
  onContactClick,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#14161A]/15 bg-[#F7F6F2]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-2 px-3 py-2.5 sm:gap-3 sm:px-6 lg:px-8">
        {/* Left: Crosshair Brand + Hairline divider + Nav Links */}
        <div className="flex min-w-0 items-center gap-3 lg:gap-6">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="group flex shrink-0 items-center gap-2 text-[#14161A] no-underline sm:gap-2.5"
          >
            {/* Architectural Crosshair Logo */}
            <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#14161A]/20 bg-white transition-colors group-hover:border-[#E84A27]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#14161A] transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" strokeWidth="1.75">
                <circle cx="12" cy="12" r="5.5" />
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
              </svg>
              <span className="absolute h-1.5 w-1.5 rounded-full bg-[#E84A27]" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[13.5px] font-bold tracking-tight text-[#14161A] sm:text-[14px]">
                {lang === 'zh' ? '罗文希' : 'LUO WENXI'}
              </span>
              <span className="mt-0.5 hidden font-mono text-[9.5px] tracking-widest text-[#707584] sm:block">
                {copy.brandSub}
              </span>
            </span>
          </a>

          <span className="hidden h-5 w-px bg-[#14161A]/15 md:block" />

          <nav className="hidden items-center gap-5 md:flex" aria-label="Primary Navigation">
            {copy.links.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onJump(item.id)}
                className="cursor-pointer font-sans text-[13.5px] font-medium text-[#444854] transition-colors hover:text-[#E84A27]"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right: Telemetry Pills (Plan A) + 中/EN Switch + ⌘K + Dashed Vermilion CTA (Plan B) */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Live Telemetry Pills */}
          <button
            type="button"
            onClick={() => onJump('voxradio-card')}
            className="hidden cursor-pointer items-center gap-1.5 rounded-full border border-[#14161A]/14 bg-white px-2.5 py-1 font-mono text-[11px] font-medium text-[#14161A] transition-colors hover:border-[#14161A]/40 xl:inline-flex"
            title="VoxRadio"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] led-pulse" />
            <span className="tabular-nums">{copy.voxPill}</span>
          </button>

          <button
            type="button"
            onClick={() => onJump('molipulse-card')}
            className="hidden cursor-pointer items-center gap-1.5 rounded-full border border-[#14161A]/14 bg-white px-2.5 py-1 font-mono text-[11px] font-medium text-[#14161A] transition-colors hover:border-[#2563EB]/50 lg:inline-flex"
            title="MoliPulse"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] led-pulse" />
            <span className="tabular-nums">{copy.pulsePill}</span>
          </button>

          {/* 中 / EN Instant Language Toggle */}
          <button
            type="button"
            onClick={onToggleLang}
            className="inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-md border border-[#14161A]/16 bg-white px-2 py-1.5 font-mono text-[11px] font-semibold text-[#14161A] transition-colors hover:border-[#14161A] sm:px-2.5 sm:text-[11.5px]"
            aria-label="Toggle language"
          >
            <Globe className="hidden h-3.5 w-3.5 text-[#707584] sm:block" />
            <span className={lang === 'zh' ? 'text-[#E84A27]' : 'text-[#707584]'}>中</span>
            <span className="text-[#14161A]/25">/</span>
            <span className={lang === 'en' ? 'text-[#E84A27]' : 'text-[#707584]'}>EN</span>
          </button>

          {/* ⌘K Command Palette Trigger */}
          <button
            type="button"
            onClick={onOpenCmd}
            className="inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-md border border-[#14161A]/16 bg-white px-2 py-1.5 font-mono text-[11px] font-semibold text-[#14161A] transition-colors hover:border-[#14161A] hover:bg-[#14161A] hover:text-white sm:px-2.5 sm:text-[11.5px]"
            aria-label="Open Command Palette"
          >
            <Command className="h-3.5 w-3.5" />
            <span>K</span>
          </button>

          {/* Plan B Signature Dashed-Seam Vermilion CTA */}
          <button
            type="button"
            onClick={onContactClick}
            className="cta-vermilion shrink-0 cursor-pointer rounded-md text-[11.5px] sm:text-[12px]"
          >
            <span className="px-2.5 py-1.5 sm:px-3.5">{copy.contactCta}</span>
            <span className="cta-seam flex items-center justify-center px-1.5 py-1.5 sm:px-2">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
