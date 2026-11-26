import { useState } from 'react'
import { Terminal, CheckCircle2, CornerDownLeft, Sparkles } from 'lucide-react'
import type { Lang } from '../data/content'

interface McpTerminalCardProps {
  lang: Lang
}

interface CommandPreset {
  cmd: string
  labelZh: string
  labelEn: string
  linesZh: string[]
  linesEn: string[]
  statusZh: string
  statusEn: string
}

const PRESETS: CommandPreset[] = [
  {
    cmd: 'pulse today',
    labelZh: 'pulse today',
    labelEn: 'pulse today',
    linesZh: [
      '[MCP] stdio://molipulse → sqlite_wal (54 repos · 79 signals)',
      '✓ 捕获新回复：e2e 集成文档上线确认（已归档 · 防重复提醒）',
      '✓ 飞书 diff 校验通过：0 并发冲突 · 18/18 pytest pass',
    ],
    linesEn: [
      '[MCP] stdio://molipulse → sqlite_wal (54 repos · 79 signals)',
      '✓ New thread synced: e2e integration live (deduped once-only)',
      '✓ Feishu diff check ok: 0 conflicts · 18/18 pytest pass',
    ],
    statusZh: 'WAL: synced · 18/18 pass',
    statusEn: 'WAL: synced · 18/18 pass',
  },
  {
    cmd: 'pulse inspect --pr 3478',
    labelZh: 'inspect #3478',
    labelEn: 'inspect #3478',
    linesZh: [
      '[AUDIT] lexmount/moli#3478 · 多行文本框截图空白盲区',
      '→ 根因：原 57/57 套件同浏览器自对比 diff=0 掩盖缺字',
      '✓ 产出 Moli vs Chrome 像素证据单 → 研发已合入修复 PR',
    ],
    linesEn: [
      '[AUDIT] lexmount/moli#3478 · Blank textarea screenshot bug',
      '→ Root cause: 57/57 suite self-diffed two blank captures (diff=0)',
      '✓ Moli vs Chrome pixel/DOM report → Fix merged in PR #3478',
    ],
    statusZh: 'PR #3478 · MERGED',
    statusEn: 'PR #3478 · MERGED',
  },
  {
    cmd: 'voxradio status',
    labelZh: 'voxradio',
    labelEn: 'voxradio',
    linesZh: [
      '[MACOS] VoxRadio SwiftUI · 246 commits · VoxCPM2 Sidecar',
      '♪ Now Playing: Late Night Build FM (Apple MusicKit)',
      '✓ 14 Coding Agent Hooks active · Receive-Only 安全红线开启',
    ],
    linesEn: [
      '[MACOS] VoxRadio SwiftUI · 246 commits · VoxCPM2 Sidecar',
      '♪ Now Playing: Late Night Build FM (Apple MusicKit)',
      '✓ 14 Coding Agent Hooks active · Receive-Only boundary locked',
    ],
    statusZh: '14 Hooks · Receive-Only',
    statusEn: '14 Hooks · Receive-Only',
  },
  {
    cmd: 'whoami --2027',
    labelZh: 'whoami',
    labelEn: 'whoami',
    linesZh: [
      '罗文希 · 北京语言大学数字经济硕士（2027 届应届生）',
      '方向：AI 产品运营（开发者生态/出海）｜ AI 产品经理',
      '城市：深圳 / 广州 / 东莞 · 状态：可随时约聊面试',
    ],
    linesEn: [
      'Luo Wenxi · M.S. Digital Economy, BLCU (Class of 2027)',
      'Focus: AI Product Ops (DevRel/GTM) | AI Product Manager',
      'Target: Shenzhen / Guangzhou / Dongguan · Open to interviews',
    ],
    statusZh: '2027 届 · 广深莞可聊',
    statusEn: 'Class of 2027 · Ready',
  },
]

export function McpTerminalCard({ lang }: McpTerminalCardProps) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [customInput, setCustomInput] = useState('')
  const [customNote, setCustomNote] = useState<string | null>(null)

  const current = PRESETS[activeIdx]
  const outputLines = lang === 'zh' ? current.linesZh : current.linesEn

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const q = customInput.trim().toLowerCase()
    if (!q) return
    const matchIdx = PRESETS.findIndex(
      (p) =>
        p.cmd.toLowerCase().includes(q) ||
        (q.includes('3478') && p.cmd.includes('3478')) ||
        (q.includes('vox') && p.cmd.includes('voxradio')) ||
        (q.includes('who') && p.cmd.includes('whoami')) ||
        (q.includes('pulse') && p.cmd.includes('pulse today')),
    )
    if (matchIdx >= 0) {
      setActiveIdx(matchIdx)
      setCustomNote(null)
    } else {
      setCustomNote(
        lang === 'zh'
          ? `未识别指令 "${customInput.trim()}"，可点上方预设或输入 pulse / 3478 / voxradio / whoami`
          : `Unknown "${customInput.trim()}". Try clicking presets or type pulse / 3478 / voxradio / whoami.`,
      )
    }
    setCustomInput('')
  }

  return (
    <div className="rounded-xl border border-[#14161A] bg-[#111318]/96 text-[#F3F4F6] shadow-[0_22px_48px_-16px_rgba(20,22,26,0.48)] backdrop-blur-md">
      {/* OLED hardware header */}
      <div className="flex items-center justify-between border-b border-white/10 px-3.5 py-2.5">
        <div className="flex items-center gap-2 font-mono text-[11px] font-medium text-white/90">
          <Terminal className="h-3.5 w-3.5 text-[#E84A27]" />
          <span>Codex MCP Session</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 led-pulse" />
          <span>LIVE SANDBOX</span>
        </div>
      </div>

      {/* Clickable command pills */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-white/8 bg-white/[0.03] px-3 py-2">
        {PRESETS.map((preset, idx) => {
          const active = idx === activeIdx && !customNote
          return (
            <button
              key={preset.cmd}
              type="button"
              onClick={() => {
                setActiveIdx(idx)
                setCustomNote(null)
              }}
              className={`cursor-pointer rounded px-2 py-0.5 font-mono text-[10.5px] transition-colors ${
                active
                  ? 'bg-[#E84A27] text-white font-semibold'
                  : 'bg-white/8 text-white/65 hover:bg-white/14 hover:text-white'
              }`}
            >
              {lang === 'zh' ? preset.labelZh : preset.labelEn}
            </button>
          )
        })}
      </div>

      {/* Active command & verified output */}
      <div className="space-y-2 px-3.5 py-3 font-mono text-[11.5px] leading-relaxed">
        <div className="flex items-center gap-1.5 text-[#F59E0B]">
          <span className="text-[#E84A27] font-bold">&gt;</span>
          <span className="text-white font-medium">{current.cmd}</span>
        </div>

        <div className="space-y-1 text-[11px] text-white/78">
          {customNote ? (
            <p className="text-amber-300">{customNote}</p>
          ) : (
            outputLines.map((line, i) => (
              <p key={i} className={i === 0 ? 'text-sky-300/95' : i === outputLines.length - 1 ? 'text-emerald-300' : 'text-white/80'}>
                {line}
              </p>
            ))
          )}
        </div>

        {/* Mini live input */}
        <form onSubmit={handleSubmit} className="mt-2 flex items-center gap-1.5 border-t border-white/10 pt-2">
          <Sparkles className="h-3 w-3 shrink-0 text-[#E84A27]" />
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder={lang === 'zh' ? '输入 pulse / 3478 / voxradio 回车试玩...' : 'Type pulse / 3478 / voxradio + Enter...'}
            aria-label="MCP Sandbox Command Input"
            className="w-full bg-transparent font-mono text-[11px] text-white placeholder:text-white/35 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Run command"
            className="cursor-pointer rounded bg-white/10 p-1 text-white/70 hover:bg-[#E84A27] hover:text-white transition-colors"
          >
            <CornerDownLeft className="h-3 w-3" />
          </button>
        </form>
      </div>

      {/* Status bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 bg-black/30 px-3.5 py-2 font-mono text-[10px]">
        <span className="inline-flex items-center gap-1.5 text-white/60">
          SOURCE
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-white/90">github/verified</span>
        </span>
        <span className="inline-flex items-center gap-1 text-emerald-400">
          <CheckCircle2 className="h-3 w-3" />
          {lang === 'zh' ? current.statusZh : current.statusEn}
        </span>
      </div>
    </div>
  )
}
