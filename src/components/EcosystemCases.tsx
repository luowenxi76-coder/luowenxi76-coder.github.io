import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Info } from 'lucide-react'
import type { RoleLens, SiteCopy } from '../data/content'
import { WireframeGlobeCanvas } from './WireframeGlobeCanvas'

interface EcosystemCasesProps {
  lens: RoleLens
  moli: SiteCopy['moliCase']
  modelbest: SiteCopy['modelbestCase']
  commercial: SiteCopy['commercial']
  capability: SiteCopy['capability']
}

export function EcosystemCases({
  lens,
  moli,
  modelbest,
  commercial,
  capability,
}: EcosystemCasesProps) {
  const [moliStepIdx, setMoliStepIdx] = useState(3) // Highlight final live website launch by default
  const [moliTabIdx, setMoliTabIdx] = useState(0)
  const [mbTabIdx, setMbTabIdx] = useState(0)

  const currentMoliStep = moli.steps[moliStepIdx]
  const currentMoliTab = moli.tabs[moliTabIdx]
  const currentMbTab = modelbest.tabs[mbTabIdx]

  return (
    <div className="space-y-16">
      {/* CASE 01: Lexmount / Moli + Interactive 3D Wireframe Globe */}
      <section id="moli" className="scroll-mt-20">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-1.5 font-mono text-[11px] font-semibold tracking-widest text-[#E84A27]">
              {moli.eyebrow}
            </div>
            <h2 className="font-display text-[26px] font-bold tracking-tight text-[#14161A] sm:text-[32px]">
              {moli.title}
            </h2>
            <p className="mt-1 text-[14px] text-[#444854]">{moli.subtitle}</p>
          </div>
          <span className="rounded-md border border-[#14161A]/15 bg-white px-3 py-1 font-mono text-[11.5px] font-medium text-[#444854]">
            {moli.period}
          </span>
        </div>

        <div className="blueprint-card rounded-xl p-5 sm:p-7">
          <p className="mb-6 max-w-4xl text-[14.5px] leading-relaxed text-[#444854]">{moli.summary}</p>

          {/* Interactive Split: 4-Stage GTM Pipeline + Draggable 3D Wireframe Globe */}
          <div className="mb-6 grid gap-5 lg:grid-cols-[1.45fr_0.95fr]">
            {/* Left: Interactive Moli x e2e GTM Pipeline */}
            <div className="rounded-xl border border-[#14161A]/15 bg-[#F7F6F2] p-4 sm:p-5">
              <div className="mb-3.5 flex items-center justify-between font-mono text-[10.5px] text-[#707584]">
                <span>{moli.pipelineTitle}</span>
                <span className="text-[#2563EB] font-semibold">e2e.com · LIVE</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {moli.steps.map((step, idx) => {
                  const active = idx === moliStepIdx
                  return (
                    <button
                      key={step.code}
                      type="button"
                      onClick={() => setMoliStepIdx(idx)}
                      className={`cursor-pointer rounded-lg border p-3 text-left transition-all ${
                        active
                          ? 'border-[#14161A] bg-white shadow-[3px_3px_0_0_rgba(232,74,39,0.22)] -translate-y-0.5'
                          : 'border-[#14161A]/14 bg-white/80 hover:border-[#14161A]/45'
                      }`}
                    >
                      <div className="mb-1 flex items-center justify-between font-mono text-[10px]">
                        <span className={active ? 'font-bold text-[#E84A27]' : 'text-[#707584]'}>
                          {step.code}
                        </span>
                        <CheckCircle2
                          className={`h-3.5 w-3.5 ${active ? 'text-[#10B981]' : 'text-[#2563EB]/60'}`}
                        />
                      </div>
                      <div className="font-display text-[12.5px] font-bold text-[#14161A]">{step.title}</div>
                      <div className="mt-1 font-mono text-[10.5px] text-[#2563EB]">{step.metric}</div>
                    </button>
                  )
                })}
              </div>

              {/* Active Step Grounded Detail */}
              <div className="mt-3.5 rounded-lg border border-[#14161A]/15 bg-white p-4">
                <div className="mb-1.5 flex flex-wrap items-center gap-2">
                  <span className="rounded bg-[#E84A27] px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">
                    {currentMoliStep.code}
                  </span>
                  <span className="font-display text-[14.5px] font-bold text-[#14161A]">
                    {currentMoliStep.title}
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-[#2563EB]">
                    · {currentMoliStep.metric}
                  </span>
                </div>
                <p className="text-[13.5px] leading-relaxed text-[#444854]">{currentMoliStep.desc}</p>
                <p className="mt-2 border-t border-dashed border-[#14161A]/14 pt-2 font-mono text-[11.5px] text-[#14161A]">
                  ✓ {currentMoliStep.evidence}
                </p>
              </div>
            </div>

            {/* Right: Plan B Draggable 3D Wireframe Globe */}
            <div className="flex flex-col justify-between rounded-xl border border-[#14161A]/15 bg-[#FAF9F6] p-4">
              <div className="flex items-center justify-between font-mono text-[10px] text-[#707584]">
                <span>{moli.globeTitle}</span>
                <span className="h-2 w-2 rounded-full bg-[#E84A27] led-pulse" />
              </div>
              <div className="my-2 h-[200px] w-full">
                <WireframeGlobeCanvas />
              </div>
              <p className="text-center font-mono text-[10.5px] text-[#707584]">{moli.globeHint}</p>
            </div>
          </div>

          {/* Deep-Dive Tabs (Awesome Moli + PR #3478) */}
          <div className="mb-3 flex flex-wrap gap-2">
            {moli.tabs.map((tab, i) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setMoliTabIdx(i)}
                className={`cursor-pointer rounded-md border px-3 py-1.5 text-[12.5px] font-medium transition-colors ${
                  i === moliTabIdx
                    ? 'border-[#14161A] bg-[#14161A] text-white'
                    : 'border-[#14161A]/14 bg-[#F7F6F2] text-[#444854] hover:border-[#14161A]/45'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid gap-4 rounded-xl border border-[#14161A]/12 bg-[#FAF9F6] p-4 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 text-[13.5px] font-bold text-[#14161A]">{currentMoliTab.leftTitle}</h4>
              <ul className="space-y-2 text-[13px] leading-relaxed text-[#444854]">
                {currentMoliTab.leftPoints.map((pt, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E84A27]" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-[13.5px] font-bold text-[#14161A]">{currentMoliTab.rightTitle}</h4>
              <ul className="space-y-2 text-[13px] leading-relaxed text-[#444854]">
                {currentMoliTab.rightPoints.map((pt, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Grounded Callout + Verified Proof Links */}
          <div className="mt-4 rounded-lg border border-[#2563EB]/22 bg-[#2563EB]/[0.05] px-4 py-3 text-[13px] text-[#1E3A8A]">
            {moli.callout}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-dashed border-[#14161A]/18 pt-4">
            {moli.proofLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-md border border-[#14161A]/16 bg-white px-2.5 py-1.5 text-[12px] font-medium text-[#14161A] transition-colors hover:border-[#14161A] hover:bg-[#14161A] hover:text-white"
              >
                {link.badge && (
                  <span className="rounded bg-[#E84A27]/12 px-1.5 py-0.5 font-mono text-[9.5px] font-bold text-[#E84A27] group-hover:bg-[#E84A27] group-hover:text-white">
                    {link.badge}
                  </span>
                )}
                <span>{link.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CASE 02: ModelBest */}
      <section id="modelbest" className="scroll-mt-20">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-1.5 font-mono text-[11px] font-semibold tracking-widest text-[#2563EB]">
              {modelbest.eyebrow}
            </div>
            <h2 className="font-display text-[26px] font-bold tracking-tight text-[#14161A] sm:text-[32px]">
              {modelbest.title}
            </h2>
            <p className="mt-1 text-[14px] text-[#444854]">{modelbest.subtitle}</p>
          </div>
          <span className="rounded-md border border-[#14161A]/15 bg-white px-3 py-1 font-mono text-[11.5px] font-medium text-[#444854]">
            {modelbest.period}
          </span>
        </div>

        <div className="blueprint-card rounded-xl p-5 sm:p-7">
          <p className="mb-6 max-w-4xl text-[14.5px] leading-relaxed text-[#444854]">{modelbest.summary}</p>

          {/* 4 Verified KPI Architectural Strip */}
          <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {modelbest.kpis.map((kpi, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#14161A]/14 bg-[#F7F6F2] p-3.5"
              >
                <div className="font-display text-[22px] font-bold tabular-nums tracking-tight text-[#14161A]">
                  {kpi.value}
                </div>
                <div className="mt-0.5 text-[12.5px] font-semibold text-[#14161A]">{kpi.label}</div>
                <div className="mt-1 font-mono text-[10.5px] text-[#707584]">{kpi.sub}</div>
              </div>
            ))}
          </div>

          {/* Interactive Tabs */}
          <div className="mb-3 flex flex-wrap gap-2">
            {modelbest.tabs.map((tab, i) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setMbTabIdx(i)}
                className={`cursor-pointer rounded-md border px-3 py-1.5 text-[12.5px] font-medium transition-colors ${
                  i === mbTabIdx
                    ? 'border-[#14161A] bg-[#14161A] text-white'
                    : 'border-[#14161A]/14 bg-[#F7F6F2] text-[#444854] hover:border-[#14161A]/45'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid gap-4 rounded-xl border border-[#14161A]/12 bg-[#FAF9F6] p-4 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 text-[13.5px] font-bold text-[#14161A]">{currentMbTab.leftTitle}</h4>
              <ul className="space-y-2 text-[13px] leading-relaxed text-[#444854]">
                {currentMbTab.leftPoints.map((pt, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-[13.5px] font-bold text-[#14161A]">{currentMbTab.rightTitle}</h4>
              <ul className="space-y-2 text-[13px] leading-relaxed text-[#444854]">
                {currentMbTab.rightPoints.map((pt, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E84A27]" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Transparent Factual Scope Callout */}
          <div className="mt-4 flex items-start gap-2 rounded-lg border border-[#14161A]/12 bg-[#F7F6F2] px-3.5 py-2.5 text-[12px] text-[#555964]">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2563EB]" />
            <span>{modelbest.honestyNote}</span>
          </div>
        </div>
      </section>

      {/* CASE 03: Commercial Grounding (Youju + Self-run Taobao) */}
      <section id="commercial" className="scroll-mt-20">
        <div className="mb-6">
          <div className="mb-1.5 font-mono text-[11px] font-semibold tracking-widest text-[#E84A27]">
            {commercial.eyebrow}
          </div>
          <h2 className="font-display text-[26px] font-bold tracking-tight text-[#14161A] sm:text-[32px]">
            {commercial.title}
          </h2>
          <p className="mt-1 text-[14px] text-[#444854]">{commercial.subtitle}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {commercial.cards.map((card) => (
            <article key={card.org} className="blueprint-card flex flex-col justify-between rounded-xl p-5 sm:p-6">
              <div>
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-bold text-[#E84A27]">{card.org}</span>
                  <span className="font-mono text-[11px] text-[#707584]">{card.period}</span>
                </div>
                <h3 className="font-display text-[19px] font-bold text-[#14161A]">{card.headline}</h3>
                <p className="mt-0.5 font-mono text-[11.5px] text-[#707584]">{card.role}</p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-[#444854]">{card.body}</p>

                <div className="mt-4 grid grid-cols-3 gap-2 rounded-lg border border-[#14161A]/12 bg-[#F7F6F2] p-3">
                  {card.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-[16px] font-bold tabular-nums text-[#14161A]">
                        {m.val}
                      </div>
                      <div className="text-[11px] text-[#707584]">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-dashed border-[#14161A]/15 pt-3.5">
                {card.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-[#14161A]/14 bg-[#F7F6F2] px-2 py-0.5 font-mono text-[10.5px] text-[#444854]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CAPABILITY SPEC MATRIX (Dynamic Bar Weights reacting to Role Lens!) */}
      <section id="capabilities" className="scroll-mt-20">
        <div className="mb-6">
          <div className="mb-1.5 font-mono text-[11px] font-semibold tracking-widest text-[#2563EB]">
            {capability.eyebrow}
          </div>
          <h2 className="font-display text-[26px] font-bold tracking-tight text-[#14161A] sm:text-[32px]">
            {capability.title}
          </h2>
          <p className="mt-1 text-[14px] text-[#444854]">{capability.subtitle}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {capability.pillars.map((pillar) => {
            const weight = lens === 'ops' ? pillar.weightOps : pillar.weightPm
            return (
              <div key={pillar.code} className="blueprint-card rounded-xl p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-[#707584]">{pillar.code}</span>
                  <span className="font-mono text-[12px] font-bold tabular-nums text-[#E84A27]">
                    {weight}% FIT
                  </span>
                </div>
                <h3 className="font-display text-[17px] font-bold text-[#14161A]">{pillar.title}</h3>
                {/* Animated Architectural Fit Gauge */}
                <div className="my-3 h-2 w-full overflow-hidden rounded-full bg-[#14161A]/8">
                  <motion.div
                    initial={false}
                    animate={{ width: `${weight}%` }}
                    transition={{ type: 'spring', stiffness: 180, damping: 24 }}
                    className={`h-full rounded-full ${
                      weight >= 92 ? 'bg-[#E84A27]' : 'bg-[#2563EB]'
                    }`}
                  />
                </div>
                <p className="text-[13px] leading-relaxed text-[#444854]">{pillar.summary}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {pillar.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-[#14161A]/14 bg-[#F7F6F2] px-2 py-0.5 font-mono text-[10.5px] text-[#14161A]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
