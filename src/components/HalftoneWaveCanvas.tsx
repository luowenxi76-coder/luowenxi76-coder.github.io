import { useEffect, useRef, useState } from 'react'

interface HalftoneWaveCanvasProps {
  className?: string
}

/**
 * Plan A's show-off 3D halftone dot-matrix wave + orbiting sphere crest,
 * re-engineered for Plan B's warm architectural blueprint canvas
 * (carbon ink troughs -> glowing vermilion crests + interactive CAD coordinates).
 */
export function HalftoneWaveCanvas({ className = '' }: HalftoneWaveCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const pointerRef = useRef({ x: 0.62, y: 0.36, active: false })
  const [coords, setCoords] = useState({ z: '0.84', anchorX: 62, anchorY: 36 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animId = 0
    let t = 0
    let width = 0
    let height = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Subtle inner drafting grid inside the wave viewport
      ctx.strokeStyle = 'rgba(20, 22, 26, 0.055)'
      ctx.lineWidth = 1
      const step = 32
      ctx.beginPath()
      for (let x = step; x < width; x += step) {
        ctx.moveTo(x + 0.5, 0)
        ctx.lineTo(x + 0.5, height)
      }
      for (let y = step; y < height; y += step) {
        ctx.moveTo(0, y + 0.5)
        ctx.lineTo(width, y + 0.5)
      }
      ctx.stroke()

      const px = pointerRef.current.x
      const py = pointerRef.current.y

      // Orbiting halftone sphere crest (Plan A signature geometry in Vermilion + Ink)
      const sphereCx = width * (0.64 + (px - 0.5) * 0.08)
      const sphereCy = height * (0.38 + (py - 0.5) * 0.08)
      const sphereR = Math.min(width, height) * 0.25

      // Soft warm vermilion aura behind the sphere
      const aura = ctx.createRadialGradient(sphereCx, sphereCy, sphereR * 0.1, sphereCx, sphereCy, sphereR * 1.65)
      aura.addColorStop(0, 'rgba(232, 74, 39, 0.19)')
      aura.addColorStop(0.55, 'rgba(37, 99, 235, 0.05)')
      aura.addColorStop(1, 'rgba(247, 246, 242, 0)')
      ctx.fillStyle = aura
      ctx.beginPath()
      ctx.arc(sphereCx, sphereCy, sphereR * 1.65, 0, Math.PI * 2)
      ctx.fill()

      // Halftone dots on the 3D sphere
      const latSteps = 18
      const lonSteps = 32
      for (let i = 1; i < latSteps; i++) {
        const phi = (i / latSteps) * Math.PI
        for (let j = 0; j < lonSteps; j++) {
          const theta = (j / lonSteps) * Math.PI * 2 + t * 0.35
          const sx = Math.sin(phi) * Math.cos(theta)
          const sy = Math.cos(phi)
          const sz = Math.sin(phi) * Math.sin(theta)
          if (sz < -0.22) continue

          const x = sphereCx + sx * sphereR
          const y = sphereCy + sy * sphereR
          const light = Math.max(0, sx * 0.45 - sy * 0.55 + sz * 0.72)
          const r = 0.8 + light * 1.95
          const isHot = light > 0.52
          ctx.fillStyle = isHot
            ? `rgba(232, 74, 39, ${0.35 + light * 0.62})`
            : `rgba(20, 22, 26, ${0.18 + (sz + 0.3) * 0.35})`
          ctx.beginPath()
          ctx.arc(x, y, r, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // 3D perspective halftone sine-terrain wave ribbons
      const rows = 26
      const cols = 58
      for (let row = 0; row < rows; row++) {
        const v = row / (rows - 1) // 0 back -> 1 front
        const perspective = 0.68 + v * 0.42
        const baseY = height * (0.34 + v * 0.56)

        for (let col = 0; col < cols; col++) {
          const u = col / (cols - 1)
          const centered = (u - 0.5) * width * 1.08 * perspective + width * 0.5
          if (centered < -10 || centered > width + 10) continue

          const dx = u - px
          const dy = v - py
          const pointerRipple = Math.exp(-(dx * dx + dy * dy) * 9.5) * 26

          const wave1 = Math.sin(u * 7.2 + t * 1.15 + v * 3.1) * 19
          const wave2 = Math.cos(u * 4.4 - t * 0.85 + v * 5.2) * 12
          const elevation = wave1 + wave2 + pointerRipple
          const y = baseY - elevation * (0.65 + v * 0.55)

          const normH = Math.max(0, Math.min(1, (elevation + 32) / 68))
          const dotRadius = 0.75 + normH * 1.75 * (0.65 + v * 0.45)

          if (normH > 0.62) {
            ctx.fillStyle = `rgba(232, 74, 39, ${0.28 + normH * 0.68})`
          } else if (normH > 0.46) {
            ctx.fillStyle = `rgba(37, 99, 235, ${0.18 + normH * 0.32})`
          } else {
            ctx.fillStyle = `rgba(20, 22, 26, ${0.12 + v * 0.32})`
          }

          ctx.beginPath()
          ctx.arc(centered, y, dotRadius, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Crisp CAD callout leader lines (ANCHOR // 01 & Z: 0.xx)
      const anchorX = width * 0.14
      const anchorY = height * 0.34 + Math.sin(t * 1.2) * 6
      ctx.strokeStyle = 'rgba(20, 22, 26, 0.45)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(anchorX, anchorY)
      ctx.lineTo(anchorX, height * 0.17)
      ctx.lineTo(anchorX + 18, height * 0.17)
      ctx.stroke()

      ctx.fillStyle = '#E84A27'
      ctx.beginPath()
      ctx.arc(anchorX, anchorY, 3, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = '#FFFFFF'
      ctx.lineWidth = 1.5
      ctx.stroke()

      // Sphere telemetry leader line
      const rimX = sphereCx + sphereR * 0.55
      const rimY = sphereCy - sphereR * 0.52
      ctx.strokeStyle = 'rgba(20, 22, 26, 0.42)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(rimX, rimY)
      ctx.lineTo(rimX + 22, rimY - 22)
      ctx.lineTo(rimX + 76, rimY - 22)
      ctx.stroke()

      ctx.fillStyle = '#2563EB'
      ctx.beginPath()
      ctx.arc(rimX, rimY, 3, 0, Math.PI * 2)
      ctx.fill()

      if (!reducedMotion) {
        t += 0.016
        animId = requestAnimationFrame(draw)
      }
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      observer.disconnect()
    }
  }, [])

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const nx = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    const ny = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height))
    pointerRef.current = { x: nx, y: ny, active: true }
    const zVal = (0.62 + (1 - ny) * 0.34 + (nx - 0.5) * 0.08).toFixed(2)
    setCoords({
      z: zVal,
      anchorX: Math.round(nx * 100),
      anchorY: Math.round(ny * 100),
    })
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        pointerRef.current = { x: 0.62, y: 0.36, active: false }
      }}
      className={`relative overflow-hidden rounded-xl border border-[#14161A]/18 bg-[#F9F8F4] shadow-[0_20px_50px_-30px_rgba(20,22,26,0.22)] ${className}`}
    >
      {/* CAD top chrome bar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-[#14161A]/10 bg-[#F7F6F2]/75 px-3.5 py-2 font-mono text-[10px] tracking-wider text-[#555964] backdrop-blur-xs">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E84A27] led-pulse" />
          ANCHOR // 01 · HALFTONE FIELD
        </span>
        <span className="tabular-nums text-[#14161A]">
          Z: {coords.z} · [{coords.anchorX}, {coords.anchorY}]
        </span>
      </div>

      {/* Interactive Canvas */}
      <canvas ref={canvasRef} className="block h-full w-full cursor-crosshair" />
    </div>
  )
}
