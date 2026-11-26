import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Pause, Play, ShieldCheck, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react'
import { CONTACT, type Lang, type SiteCopy } from '../data/content'

interface VoxRadioShowcaseProps {
  lang: Lang
  copy: SiteCopy['voxradio']
}

const WAVE_BARS = [
  24, 42, 68, 38, 82, 54, 92, 62, 46, 78, 96, 58, 40, 86, 72, 34, 64, 90, 52, 76, 44, 88, 60, 36, 70, 84, 48, 30,
]

export function VoxRadioShowcase({ lang, copy }: VoxRadioShowcaseProps) {
  const [stationIdx, setStationIdx] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [activeAgentIdx, setActiveAgentIdx] = useState(0)
  const [activeTab, setActiveTab] = useState(0)
  const [tick, setTick] = useState(0)

  const audioCtxRef = useRef<AudioContext | null>(null)
  const station = copy.stations[stationIdx]
  const currentAgent = copy.agents[activeAgentIdx]
  const currentTab = copy.tabs[activeTab]

  // Animated waveform tick
  useEffect(() => {
    if (!playing) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const id = window.setInterval(() => setTick((t) => t + 1), 160)
    return () => window.clearInterval(id)
  }, [playing])

  // Subtle tactile ambient chime when audio preview is explicitly toggled on
  const playSoftChord = (baseFreq: number) => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx()
      }
      const ctx = audioCtxRef.current
      if (ctx.state === 'suspended') {
        void ctx.resume()
      }
      const now = ctx.currentTime
      const freqs = [baseFreq, baseFreq * 1.25, baseFreq * 1.5]
      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(f, now + idx * 0.04)
        gain.gain.setValueAtTime(0.0001, now + idx * 0.04)
        gain.gain.exponentialRampToValueAtTime(0.032, now + idx * 0.04 + 0.06)
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.04 + 0.65)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start(now + idx * 0.04)
        osc.stop(now + idx * 0.04 + 0.7)
      })
    } catch {
      // Audio playback blocked or unavailable; visual waveform still runs smoothly
    }
  }

  const handleStationChange = (nextIdx: number) => {
    const wrapped = (nextIdx + copy.stations.length) % copy.stations.length
    setStationIdx(wrapped)
    setPlaying(true)
    if (audioEnabled) {
      playSoftChord(261.63 + wrapped * 38)
    }
  }

  const handleToggleAudio = () => {
    const next = !audioEnabled
    setAudioEnabled(next)
    if (next) {
      setPlaying(true)
      playSoftChord(293.66)
    }
  }

  return (
    <article id="voxradio-card" className="blueprint-card flex flex-col justify-between rounded-xl p-5 sm:p-7">
      <div>
        {/* Card Header */}
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2 font-mono text-[10.5px] font-semibold tracking-wider text-[#E84A27]">
              <span className="inline-flex items-center gap-1.5 rounded bg-[#E84A27]/10 px-2 py-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E84A27] led-pulse" />
                {copy.badge}
              </span>
              <span className="text-[#707584]">2026.04 – 2026.11</span>
            </div>
            <h3 className="font-display text-[22px] font-bold tracking-tight text-[#14161A] sm:text-[25px]">
              {copy.title}
            </h3>
            <p className="mt-1 text-[13.5px] font-medium text-[#444854]">{copy.subtitle}</p>
          </div>

          <a
            href={CONTACT.voxradioRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[#14161A]/25 bg-white px-3 py-1.5 font-mono text-[11.5px] font-semibold text-[#14161A] transition-colors hover:border-[#14161A] hover:bg-[#14161A] hover:text-white"
          >
            <span>VoxRadio-public</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <p className="mb-5 text-[13.5px] leading-relaxed text-[#444854]">{copy.summary}</p>

        {/* Interactive macOS Player Widget (Plan B frosted light chrome + Plan A animated spectrum & agent dots) */}
        <div className="mb-5 overflow-hidden rounded-xl border border-[#14161A]/18 bg-[#F4F3EE] shadow-[0_14px_30px_-20px_rgba(20,22,26,0.3)]">
          {/* macOS Window Bar */}
          <div className="flex items-center justify-between border-b border-[#14161A]/10 bg-[#ECEAE3] px-3.5 py-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
              <span className="ml-2 font-mono text-[10.5px] font-semibold text-[#444854]">
                VoxRadio.app · macOS
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-[#707584]">{station.bpm}</span>
              <button
                type="button"
                onClick={handleToggleAudio}
                title={lang === 'zh' ? '开启/关闭轻柔音效预览' : 'Toggle subtle chime preview'}
                className={`cursor-pointer rounded p-1 transition-colors ${
                  audioEnabled ? 'bg-[#E84A27] text-white' : 'bg-white/80 text-[#444854] hover:text-[#14161A]'
                }`}
              >
                {audioEnabled ? <Volume2 className="h-3 w-3" /> : <VolumeX className="h-3 w-3" />}
              </button>
            </div>
          </div>

          {/* Player Body */}
          <div className="grid gap-4 p-4 sm:grid-cols-[84px_1fr] sm:items-center">
            {/* Plan B Bold Vermilion-Cobalt Vinyl Artwork */}
            <div className="relative mx-auto flex h-[84px] w-[84px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#14161A]/15 bg-gradient-to-br from-[#E84A27] via-[#F26B3A] to-[#2563EB] shadow-inner">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/70 bg-[#14161A]/25 backdrop-blur-xs transition-transform ${
                  playing ? 'animate-[spin_9s_linear_infinite]' : ''
                }`}
              >
                <div className="h-3 w-3 rounded-full bg-white" />
              </div>
              <span className="absolute right-1.5 bottom-1 font-mono text-[8.5px] font-bold text-white/90">
                FM
              </span>
            </div>

            {/* Station Info + Animated Waveform + Controls */}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="font-display text-[15px] font-bold text-[#14161A]">{station.name}</div>
                  <div className="font-mono text-[10.5px] text-[#707584]">{station.meta}</div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleStationChange(stationIdx - 1)}
                    aria-label="Previous mode"
                    className="cursor-pointer rounded border border-[#14161A]/14 bg-white p-1.5 text-[#14161A] hover:border-[#14161A]"
                  >
                    <SkipBack className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPlaying((p) => !p)
                      if (!playing && audioEnabled) playSoftChord(329.63)
                    }}
                    aria-label={playing ? 'Pause' : 'Play'}
                    className="cursor-pointer rounded border border-[#14161A] bg-[#14161A] p-1.5 text-white transition-colors hover:bg-[#E84A27] hover:border-[#E84A27]"
                  >
                    {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStationChange(stationIdx + 1)}
                    aria-label="Next mode"
                    className="cursor-pointer rounded border border-[#14161A]/14 bg-white p-1.5 text-[#14161A] hover:border-[#14161A]"
                  >
                    <SkipForward className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Animated Equalizer Bars */}
              <div className="mt-3 flex h-9 items-end gap-[3px]" aria-hidden="true">
                {WAVE_BARS.map((base, idx) => {
                  const mod = playing ? Math.sin(tick * 0.65 + idx * 0.55) * 26 : -18
                  const hPct = Math.max(16, Math.min(100, base + mod))
                  const isPeak = hPct > 74
                  return (
                    <span
                      key={idx}
                      style={{ height: `${hPct}%` }}
                      className={`flex-1 rounded-full transition-[height] duration-150 ${
                        isPeak ? 'bg-[#E84A27]' : idx % 5 === 0 ? 'bg-[#2563EB]/75' : 'bg-[#14161A]/75'
                      }`}
                    />
                  )
                })}
              </div>

              <p className="mt-2.5 text-[12px] leading-relaxed text-[#444854]">{station.detail}</p>
            </div>
          </div>

          {/* Interactive Agent Hook Telemetry Strip */}
          <div className="border-t border-[#14161A]/10 bg-white/80 px-4 py-2.5">
            <div className="flex flex-wrap items-center gap-1.5">
              {copy.agents.map((ag, idx) => {
                const active = idx === activeAgentIdx
                return (
                  <button
                    key={ag.name}
                    type="button"
                    onClick={() => setActiveAgentIdx(idx)}
                    className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10.5px] transition-colors ${
                      active
                        ? 'border-[#14161A] bg-[#14161A] text-white'
                        : 'border-[#14161A]/14 bg-[#F7F6F2] text-[#444854] hover:border-[#14161A]/45'
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        ag.state === 'active' ? 'bg-[#10B981]' : 'bg-[#2563EB]'
                      }`}
                    />
                    {ag.name}
                  </button>
                )
              })}
            </div>
            <div className="mt-2 flex items-center gap-2 font-mono text-[11px] text-[#444854]">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#10B981]" />
              <span>{currentAgent.note}</span>
            </div>
          </div>
        </div>

        {/* Technical Tabs */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {copy.tabs.map((tab, i) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`cursor-pointer rounded-md border px-2.5 py-1 text-[12px] font-medium transition-colors ${
                i === activeTab
                  ? 'border-[#14161A] bg-[#14161A] text-white'
                  : 'border-[#14161A]/14 bg-[#F7F6F2] text-[#444854] hover:border-[#14161A]/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid gap-3 rounded-lg border border-[#14161A]/12 bg-[#FAF9F6] p-3.5 sm:grid-cols-2">
          <div>
            <h4 className="mb-1.5 text-[12.5px] font-bold text-[#14161A]">{currentTab.leftTitle}</h4>
            <ul className="space-y-1.5 text-[12.5px] leading-relaxed text-[#444854]">
              {currentTab.leftPoints.map((pt, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E84A27]" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-1.5 text-[12.5px] font-bold text-[#14161A]">{currentTab.rightTitle}</h4>
            <ul className="space-y-1.5 text-[12.5px] leading-relaxed text-[#444854]">
              {currentTab.rightPoints.map((pt, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Tags + Public Repo */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-[#14161A]/18 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {copy.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-[#14161A]/14 bg-[#F7F6F2] px-2 py-0.5 font-mono text-[10.5px] text-[#444854]"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={CONTACT.voxradioRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-[12px] font-semibold text-[#E84A27] hover:underline"
        >
          {copy.ctaRepo}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  )
}
