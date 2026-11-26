import { ArrowUpRight, Command, Copy, Mail, Phone } from 'lucide-react'
import { CONTACT, type SiteCopy } from '../data/content'

interface CadFooterProps {
  copy: SiteCopy['footer']
  cursor: { x: number; y: number }
  onCopyPhone: () => void
  onCopyEmail: () => void
  onOpenCmd: () => void
}

export function CadFooter({
  copy,
  cursor,
  onCopyPhone,
  onCopyEmail,
  onOpenCmd,
}: CadFooterProps) {
  return (
    <footer id="contact" className="mt-20 border-t border-[#14161A]/18 bg-[#F2F0EA]/85 pt-12 pb-6">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Candidate Architectural Card */}
        <div className="blueprint-card-ink rounded-xl p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-[112px_1fr_auto] md:items-center">
            {/* Portrait Avatar */}
            <div className="h-[118px] w-[112px] overflow-hidden rounded-lg border border-[#14161A]/20 bg-white">
              <img
                src="assets/avatar.png"
                alt="罗文希"
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Bio & Education */}
            <div>
              <div className="mb-1.5 flex flex-wrap items-center gap-2 font-mono text-[10.5px]">
                <span className="font-bold text-[#E84A27]">{copy.aboutTag}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-2.5 py-0.5 font-semibold text-emerald-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] led-pulse" />
                  {copy.statusBadge}
                </span>
              </div>
              <h2 className="font-display text-[22px] font-bold tracking-tight text-[#14161A] sm:text-[26px]">
                {copy.name}
              </h2>
              <p className="mt-1.5 text-[13.5px] font-medium text-[#14161A]">{copy.eduLine}</p>
              <p className="mt-1 text-[13px] text-[#444854]">{copy.targetLine}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
              <button
                type="button"
                onClick={onCopyPhone}
                className="cta-vermilion cursor-pointer justify-between rounded-md text-[12px]"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-2">
                  <Phone className="h-3.5 w-3.5" />
                  <span className="tabular-nums">{CONTACT.phone}</span>
                </span>
                <span className="cta-seam flex items-center gap-1 px-2.5 py-2 text-[10.5px]">
                  <Copy className="h-3 w-3" />
                  {copy.copyPhone}
                </span>
              </button>

              <button
                type="button"
                onClick={onCopyEmail}
                className="inline-flex cursor-pointer items-center justify-between gap-3 rounded-md border border-[#14161A] bg-white px-3.5 py-2 font-mono text-[12px] font-semibold text-[#14161A] transition-colors hover:bg-[#14161A] hover:text-white"
              >
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-[#2563EB]" />
                  <span>{CONTACT.email}</span>
                </span>
                <Copy className="h-3.5 w-3.5 opacity-65" />
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1 rounded-md border border-[#14161A]/20 bg-[#F7F6F2] px-3 py-1.5 font-mono text-[11px] font-semibold text-[#14161A] hover:border-[#14161A]"
                >
                  GitHub
                  <ArrowUpRight className="h-3 w-3" />
                </a>
                <button
                  type="button"
                  onClick={onOpenCmd}
                  className="inline-flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-md border border-[#14161A]/20 bg-[#F7F6F2] px-3 py-1.5 font-mono text-[11px] font-semibold text-[#14161A] hover:border-[#14161A]"
                >
                  <Command className="h-3 w-3" />
                  <span>{copy.openCmd}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Plan A Iconic CAD Notched Bottom Bar adapted to Plan B Ink */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#14161A]/15 pt-4 font-mono text-[10.5px] text-[#707584] sm:flex-row">
          <span className="tabular-nums">
            [0, 246] · CURSOR X: {cursor.x} · Y: {cursor.y}
          </span>
          <div className="rounded-md border border-[#14161A] bg-[#14161A] px-4 py-1 font-mono text-[10.5px] font-semibold tracking-widest text-white">
            {copy.archNotch}
          </div>
          <span className="tabular-nums">BUILD // REACT 19 + TW4 + VITE</span>
        </div>
      </div>
    </footer>
  )
}
