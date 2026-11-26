import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Copy,
  Globe,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react'
import { CONTACT, type RoleLens, type SiteCopy } from '../data/content'

interface CommandPaletteProps {
  open: boolean
  copy: SiteCopy['cmdPalette']
  onClose: () => void
  onJump: (id: string) => void
  onToggleLang: () => void
  onSetLens: (lens: RoleLens) => void
  onCopyPhone: () => void
  onCopyEmail: () => void
}

interface PaletteItem {
  id: string
  group: 'nav' | 'actions' | 'links'
  label: string
  keywords: string
  icon: 'nav' | 'action' | 'copy' | 'lang' | 'ext'
  run: () => void
}

export function CommandPalette({
  open,
  copy,
  onClose,
  onJump,
  onToggleLang,
  onSetLens,
  onCopyPhone,
  onCopyEmail,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [selectedIdx, setSelectedIdx] = useState(0)

  const items: PaletteItem[] = useMemo(
    () => [
      {
        id: 'goto-systems',
        group: 'nav',
        label: copy.items.gotoSystems,
        keywords: 'systems molipulse voxradio mcp macos 系统 作品',
        icon: 'nav',
        run: () => onJump('systems'),
      },
      {
        id: 'goto-moli',
        group: 'nav',
        label: copy.items.gotoMoli,
        keywords: 'moli lexmount e2e devrel gtm pr 3478 出海 揽岳',
        icon: 'nav',
        run: () => onJump('moli'),
      },
      {
        id: 'goto-mb',
        group: 'nav',
        label: copy.items.gotoModelBest,
        keywords: 'modelbest openbmb voxcpm shengci 面壁 声辞 监控 归因',
        icon: 'nav',
        run: () => onJump('modelbest'),
      },
      {
        id: 'goto-commercial',
        group: 'nav',
        label: copy.items.gotoCommercial,
        keywords: 'youju taobao roi ads 优矩 淘宝 电商 投放',
        icon: 'nav',
        run: () => onJump('commercial'),
      },
      {
        id: 'goto-cap',
        group: 'nav',
        label: copy.items.gotoCapabilities,
        keywords: 'capability stack skills 能力 矩阵 技能',
        icon: 'nav',
        run: () => onJump('capabilities'),
      },
      {
        id: 'toggle-lang',
        group: 'actions',
        label: copy.items.toggleLang,
        keywords: 'lang language english chinese 中文 英文 切换',
        icon: 'lang',
        run: onToggleLang,
      },
      {
        id: 'lens-ops',
        group: 'actions',
        label: copy.items.lensOps,
        keywords: 'ops gtm devrel 运营 视角',
        icon: 'action',
        run: () => onSetLens('ops'),
      },
      {
        id: 'lens-pm',
        group: 'actions',
        label: copy.items.lensPm,
        keywords: 'pm product manager 产品经理 视角',
        icon: 'action',
        run: () => onSetLens('pm'),
      },
      {
        id: 'copy-phone',
        group: 'actions',
        label: copy.items.copyPhone,
        keywords: 'phone tel contact 13692774440 手机 电话 联系',
        icon: 'copy',
        run: onCopyPhone,
      },
      {
        id: 'copy-email',
        group: 'actions',
        label: copy.items.copyEmail,
        keywords: 'email mail contact qq 邮箱 联系',
        icon: 'copy',
        run: onCopyEmail,
      },
      {
        id: 'open-molipulse',
        group: 'links',
        label: copy.items.openMoliPulse,
        keywords: 'molipulse report html 报告 核验',
        icon: 'ext',
        run: () => window.open(CONTACT.molipulseReport, '_blank', 'noopener,noreferrer'),
      },
      {
        id: 'open-voxradio',
        group: 'links',
        label: copy.items.openVoxRadio,
        keywords: 'voxradio github repo 仓库 开源',
        icon: 'ext',
        run: () => window.open(CONTACT.voxradioRepo, '_blank', 'noopener,noreferrer'),
      },
      {
        id: 'open-pr',
        group: 'links',
        label: copy.items.openPr,
        keywords: 'pr 3478 github moli bug fix',
        icon: 'ext',
        run: () => window.open(CONTACT.moliPr3478, '_blank', 'noopener,noreferrer'),
      },
    ],
    [copy, onCopyEmail, onCopyPhone, onJump, onSetLens, onToggleLang],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter(
      (it) => it.label.toLowerCase().includes(q) || it.keywords.toLowerCase().includes(q),
    )
  }, [items, query])

  useEffect(() => {
    setSelectedIdx(0)
  }, [query, open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIdx((i) => (filtered.length ? (i + 1) % filtered.length : 0))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIdx((i) => (filtered.length ? (i - 1 + filtered.length) % filtered.length : 0))
      } else if (e.key === 'Enter' && filtered[selectedIdx]) {
        e.preventDefault()
        filtered[selectedIdx].run()
        onClose()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [filtered, onClose, open, selectedIdx])

  const renderIcon = (kind: PaletteItem['icon']) => {
    switch (kind) {
      case 'copy':
        return <Copy className="h-3.5 w-3.5" />
      case 'lang':
        return <Globe className="h-3.5 w-3.5" />
      case 'action':
        return <SlidersHorizontal className="h-3.5 w-3.5" />
      case 'ext':
        return <ArrowUpRight className="h-3.5 w-3.5" />
      default:
        return <ArrowRight className="h-3.5 w-3.5" />
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.14 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-start justify-center bg-[#14161A]/45 px-4 pt-[12vh] backdrop-blur-xs"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -6 }}
            transition={{ duration: 0.16 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-xl border border-[#14161A] bg-[#F7F6F2] shadow-[0_32px_80px_-20px_rgba(20,22,26,0.55)]"
          >
            {/* Input Bar */}
            <div className="flex items-center gap-3 border-b border-[#14161A]/15 bg-white px-4 py-3.5">
              <Search className="h-4 w-4 text-[#E84A27]" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={copy.placeholder}
                className="w-full bg-transparent text-[14px] text-[#14161A] placeholder:text-[#707584] focus:outline-none"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close palette"
                className="cursor-pointer rounded border border-[#14161A]/15 px-1.5 py-0.5 font-mono text-[10px] text-[#707584] hover:border-[#14161A] hover:text-[#14161A]"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[380px] overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <div className="py-10 text-center font-mono text-[12.5px] text-[#707584]">
                  {copy.empty}
                </div>
              ) : (
                filtered.map((item, idx) => {
                  const active = idx === selectedIdx
                  const prevGroup = idx > 0 ? filtered[idx - 1].group : null
                  const showHeader = item.group !== prevGroup
                  return (
                    <div key={item.id}>
                      {showHeader && (
                        <div className="px-2.5 pt-2.5 pb-1 font-mono text-[10px] font-semibold tracking-wider text-[#707584] uppercase">
                          {copy.groups[item.group]}
                        </div>
                      )}
                      <button
                        type="button"
                        onMouseEnter={() => setSelectedIdx(idx)}
                        onClick={() => {
                          item.run()
                          onClose()
                        }}
                        className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-left text-[13px] transition-colors ${
                          active
                            ? 'bg-[#14161A] text-white'
                            : 'text-[#14161A] hover:bg-[#14161A]/8'
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span className={active ? 'text-[#E84A27]' : 'text-[#707584]'}>
                            {renderIcon(item.icon)}
                          </span>
                          <span className="font-medium">{item.label}</span>
                        </span>
                        {active && (
                          <span className="font-mono text-[10px] text-white/60">ENTER ↵</span>
                        )}
                      </button>
                    </div>
                  )
                })
              )}
            </div>

            {/* Footer Key Hints */}
            <div className="flex items-center justify-between border-t border-[#14161A]/12 bg-white px-4 py-2 font-mono text-[10.5px] text-[#707584]">
              <span>↑↓ SELECT · ↵ RUN · ESC CLOSE</span>
              <span className="text-[#14161A]">LUO WENXI // CMD</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
