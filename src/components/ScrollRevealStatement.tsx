import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

interface Segment {
  text: string
  highlight?: 'vermilion' | 'cobalt'
}

interface ScrollRevealStatementProps {
  tag: string
  segments: Segment[]
}

function RevealToken({
  token,
  highlight,
  progress,
  range,
}: {
  token: string
  highlight?: 'vermilion' | 'cobalt'
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.22, 1])
  const colorClass =
    highlight === 'vermilion'
      ? 'text-[#E84A27]'
      : highlight === 'cobalt'
        ? 'text-[#2563EB]'
        : 'text-[#14161A]'

  return (
    <motion.span style={{ opacity }} className={`inline transition-colors ${colorClass}`}>
      {token}
    </motion.span>
  )
}

/**
 * Scrolltide `Ondine`-inspired architectural scroll-linked manifesto reveal.
 */
export function ScrollRevealStatement({ tag, segments }: ScrollRevealStatementProps) {
  const containerRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.88', 'end 0.55'],
  })

  // Flatten into compact chunks so both Chinese and English reveal smoothly
  const tokens: { text: string; highlight?: 'vermilion' | 'cobalt' }[] = []
  for (const seg of segments) {
    const isCjk = /[\u4e00-\u9fff]/.test(seg.text)
    if (isCjk) {
      // Split Chinese into 2-char smooth visual rhythms
      const chars = Array.from(seg.text)
      for (let i = 0; i < chars.length; i += 2) {
        tokens.push({ text: chars.slice(i, i + 2).join(''), highlight: seg.highlight })
      }
    } else {
      const words = seg.text.split(/(\s+)/)
      for (const w of words) {
        if (w) tokens.push({ text: w, highlight: seg.highlight })
      }
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative border-y border-[#14161A]/14 bg-[#F2F0EA]/70 py-14 sm:py-18"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-between font-mono text-[11px] tracking-widest text-[#707584]">
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 bg-[#E84A27]" />
            {tag}
          </span>
          <span className="hidden sm:inline">SCROLL-LINKED SPEC // ONDINE</span>
        </div>

        <p className="max-w-5xl font-display text-[24px] font-bold leading-[1.38] tracking-tight sm:text-[32px] lg:text-[38px]">
          {tokens.map((tok, i) => {
            const start = (i / Math.max(1, tokens.length)) * 0.82
            const end = Math.min(1, start + 0.18)
            return (
              <RevealToken
                key={i}
                token={tok.text}
                highlight={tok.highlight}
                progress={scrollYProgress}
                range={[start, end]}
              />
            )
          })}
        </p>
      </div>
    </section>
  )
}
