import { useEffect, useRef } from 'react'

interface NodePin {
  label: string
  lat: number
  lon: number
  color: string
}

const DEVREL_PINS: NodePin[] = [
  { label: 'e2e.com', lat: 37.7, lon: -122.4, color: '#E84A27' },
  { label: 'GitHub', lat: 40.7, lon: -74.0, color: '#2563EB' },
  { label: 'Discord', lat: 51.5, lon: -0.1, color: '#E84A27' },
  { label: 'Awesome Moli', lat: 39.9, lon: 116.4, color: '#2563EB' },
  { label: 'Shenzhen', lat: 22.5, lon: 114.0, color: '#10B981' },
  { label: 'Reddit / HN', lat: 35.6, lon: 139.7, color: '#E84A27' },
]

/**
 * Interactive drag-to-rotate 3D wireframe globe (Plan B's Scrolltide Synapse touch)
 * marking global developer ecosystem hubs for Moli × e2e.
 */
export function WireframeGlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rotRef = useRef({ yaw: 0.4, pitch: 0.25, dragging: false, lastX: 0, lastY: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animId = 0
    let w = 0
    let h = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = rect.width
      h = rect.height
      canvas.width = Math.max(1, Math.floor(w * dpr))
      canvas.height = Math.max(1, Math.floor(h * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    const obs = new ResizeObserver(resize)
    obs.observe(canvas)

    const project = (latDeg: number, lonDeg: number, r: number, cx: number, cy: number) => {
      const lat = (latDeg * Math.PI) / 180
      const lon = (lonDeg * Math.PI) / 180 + rotRef.current.yaw
      const x0 = Math.cos(lat) * Math.sin(lon)
      const y0 = Math.sin(lat)
      const z0 = Math.cos(lat) * Math.cos(lon)

      const pitch = rotRef.current.pitch
      const y1 = y0 * Math.cos(pitch) - z0 * Math.sin(pitch)
      const z1 = y0 * Math.sin(pitch) + z0 * Math.cos(pitch)

      return {
        x: cx + x0 * r,
        y: cy - y1 * r,
        z: z1,
      }
    }

    let pulsePhase = 0
    const render = () => {
      ctx.clearRect(0, 0, w, h)
      const cx = w / 2
      const cy = h / 2
      const r = Math.min(w, h) * 0.41

      // Outer blueprint circle
      ctx.strokeStyle = 'rgba(20, 22, 26, 0.28)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
      ctx.stroke()

      // Latitude rings
      ctx.strokeStyle = 'rgba(20, 22, 26, 0.12)'
      for (const lat of [-60, -30, 0, 30, 60]) {
        ctx.beginPath()
        let started = false
        for (let lon = -180; lon <= 180; lon += 6) {
          const p = project(lat, lon, r, cx, cy)
          if (p.z < -0.1) {
            started = false
            continue
          }
          if (!started) {
            ctx.moveTo(p.x, p.y)
            started = true
          } else {
            ctx.lineTo(p.x, p.y)
          }
        }
        ctx.stroke()
      }

      // Longitude meridians
      for (let lon = 0; lon < 360; lon += 30) {
        ctx.beginPath()
        let started = false
        for (let lat = -84; lat <= 84; lat += 6) {
          const p = project(lat, lon, r, cx, cy)
          if (p.z < -0.1) {
            started = false
            continue
          }
          if (!started) {
            ctx.moveTo(p.x, p.y)
            started = true
          } else {
            ctx.lineTo(p.x, p.y)
          }
        }
        ctx.stroke()
      }

      // Connecting arc between e2e.com and Shenzhen
      const pFrom = project(DEVREL_PINS[0].lat, DEVREL_PINS[0].lon, r, cx, cy)
      const pTo = project(DEVREL_PINS[4].lat, DEVREL_PINS[4].lon, r, cx, cy)
      if (pFrom.z > -0.15 && pTo.z > -0.15) {
        ctx.save()
        ctx.setLineDash([4, 4])
        ctx.strokeStyle = 'rgba(232, 74, 39, 0.55)'
        ctx.lineWidth = 1.2
        ctx.beginPath()
        ctx.moveTo(pFrom.x, pFrom.y)
        ctx.quadraticCurveTo(cx, cy - r * 0.45, pTo.x, pTo.y)
        ctx.stroke()
        ctx.restore()
      }

      // Ecosystem pins
      for (const pin of DEVREL_PINS) {
        const p = project(pin.lat, pin.lon, r, cx, cy)
        if (p.z < -0.05) continue

        const halo = 4 + Math.sin(pulsePhase * 2.4 + pin.lat) * 2
        ctx.fillStyle = `${pin.color}28`
        ctx.beginPath()
        ctx.arc(p.x, p.y, halo + 2.5, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = pin.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, 3.2, 0, Math.PI * 2)
        ctx.fill()

        ctx.font = '600 9.5px "JetBrains Mono", monospace'
        ctx.fillStyle = '#14161A'
        ctx.fillText(pin.label, p.x + 6, p.y + 3)
      }

      if (!rotRef.current.dragging && !reducedMotion) {
        rotRef.current.yaw += 0.0045
      }
      if (!reducedMotion) {
        pulsePhase += 0.03
        animId = requestAnimationFrame(render)
      }
    }

    render()

    return () => {
      cancelAnimationFrame(animId)
      obs.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={(e) => {
        rotRef.current.dragging = true
        rotRef.current.lastX = e.clientX
        rotRef.current.lastY = e.clientY
        e.currentTarget.setPointerCapture(e.pointerId)
      }}
      onPointerMove={(e) => {
        if (!rotRef.current.dragging) return
        const dx = e.clientX - rotRef.current.lastX
        const dy = e.clientY - rotRef.current.lastY
        rotRef.current.yaw += dx * 0.008
        rotRef.current.pitch = Math.max(-0.8, Math.min(0.8, rotRef.current.pitch + dy * 0.006))
        rotRef.current.lastX = e.clientX
        rotRef.current.lastY = e.clientY
      }}
      onPointerUp={(e) => {
        rotRef.current.dragging = false
        e.currentTarget.releasePointerCapture(e.pointerId)
      }}
      className="h-full w-full cursor-grab active:cursor-grabbing"
    />
  )
}
