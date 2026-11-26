import { useState } from 'react'
import { ArrowUpRight, CheckCircle2, Cpu, Database, Radio, Server } from 'lucide-react'
import { CONTACT, type Lang, type SiteCopy } from '../data/content'

interface MoliPulseShowcaseProps {
  lang: Lang
  copy: SiteCopy['molipulse']
}

const NODE_ICONS = [Radio, Database, Cpu, Server]

export function MoliPulseShowcase({ lang, copy }: MoliPulseShowcaseProps) {
  const [selectedNode, setSelectedNode] = useState(0)
  const [activeTab, setActiveTab] = useState(0)

  const currentNode = copy.nodes[selectedNode]
  const currentTab = copy.tabs[activeTab]

  return (
    <article id="molipulse-card" className="blueprint-card flex flex-col justify-between rounded-xl p-5 sm:p-7">
      <div>
        {/* Card Header */}
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2 font-mono text-[10.5px] font-semibold tracking-wider text-[#2563EB]">
              <span className="inline-flex items-center gap-1.5 rounded bg-[#2563EB]/10 px-2 py-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] led-pulse" />
                {copy.badge}
              </span>
              <span className="text-[#707584]">2026.11</span>
            </div>
            <h3 className="font-display text-[22px] font-bold tracking-tight text-[#14161A] sm:text-[25px]">
              {copy.title}
            </h3>
            <p className="mt-1 text-[13.5px] font-medium text-[#444854]">{copy.subtitle}</p>
          </div>

          <a
            href={CONTACT.molipulseReport}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[#14161A] bg-[#14161A] px-3 py-1.5 font-mono text-[11.5px] font-semibold text-white transition-colors hover:bg-[#E84A27] hover:border-[#E84A27]"
          >
            <span>{lang === 'zh' ? '公开核验报告' : 'Live Report'}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <p className="mb-5 text-[13.5px] leading-relaxed text-[#444854]">{copy.summary}</p>

        {/* Interactive Plan A Animated Signal Pipeline on Plan B Blueprint Surface */}
        <div className="relative mb-5 overflow-hidden rounded-xl border border-[#14161A]/15 bg-[#F7F6F2] p-4">
          <div className="mb-3 flex items-center justify-between font-mono text-[10px] text-[#707584]">
            <span>PIPELINE // CLICK NODE TO INSPECT</span>
            <span className="inline-flex items-center gap-1 text-emerald-700">
              <CheckCircle2 className="h-3 w-3 text-[#10B981]" />
              18/18 pytest · WAL synced
            </span>
          </div>

          {/* Animated SVG Connector Layer (Desktop) */}
          <div className="relative">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-10 w-full -translate-y-1/2 sm:block"
              viewBox="0 0 800 40"
              preserveAspectRatio="none"
            >
              <path
                d="M 80 20 Q 200 2, 300 20 T 520 20 T 720 20"
                fill="none"
                stroke="#E84A27"
                strokeWidth="1.6"
                className="animate-dash-flow"
                opacity="0.7"
              />
              <path
                d="M 80 22 Q 200 38, 300 22 T 520 22 T 720 22"
                fill="none"
                stroke="#2563EB"
                strokeWidth="1.2"
                className="animate-dash-flow"
                opacity="0.45"
              />
            </svg>

            <div className="relative z-10 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {copy.nodes.map((node, idx) => {
                const Icon = NODE_ICONS[idx % NODE_ICONS.length]
                const active = idx === selectedNode
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setSelectedNode(idx)}
                    className={`group cursor-pointer rounded-lg border p-2.5 text-left transition-all ${
                      active
                        ? 'border-[#14161A] bg-white shadow-[3px_3px_0_0_rgba(232,74,39,0.22)] -translate-y-0.5'
                        : 'border-[#14161A]/15 bg-white/85 hover:border-[#14161A]/45'
                    }`}
                  >
                    <div className="mb-1.5 flex items-center justify-between">
                      <span
                        className={`rounded px-1.5 py-0.5 font-mono text-[9.5px] font-bold ${
                          active ? 'bg-[#E84A27] text-white' : 'bg-[#14161A]/8 text-[#444854]'
                        }`}
                      >
                        [{node.step}]
                      </span>
                      <Icon className={`h-3.5 w-3.5 ${active ? 'text-[#E84A27]' : 'text-[#707584]'}`} />
                    </div>
                    <div className="font-display text-[12px] font-bold leading-snug text-[#14161A]">
                      {node.title}
                    </div>
                    <div className="mt-0.5 font-mono text-[10px] text-[#707584]">{node.sub}</div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Node Inspector Readout */}
          <div className="mt-3 flex flex-col gap-1.5 rounded-lg border border-[#14161A]/12 bg-white px-3.5 py-2.5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[12.5px] leading-relaxed text-[#444854]">
              <span className="mr-2 font-mono text-[11px] font-bold text-[#E84A27]">
                [{currentNode.step}] {currentNode.stat}
              </span>
              {currentNode.desc}
            </p>
          </div>
        </div>

        {/* Technical Specs Tabs */}
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

      {/* Footer Tags + CTA */}
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
          href={CONTACT.molipulseReport}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-[12px] font-semibold text-[#E84A27] hover:underline"
        >
          {copy.ctaReport}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  )
}
