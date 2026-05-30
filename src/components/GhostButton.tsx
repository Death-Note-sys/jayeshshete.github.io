import React from 'react'

interface GhostButtonProps {
  href: string
  children: React.ReactNode
  target?: string
}

const GhostButton: React.FC<GhostButtonProps> = ({ href, children, target }) => {
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm text-[#D7E2EA] font-medium uppercase tracking-widest no-underline transition-all duration-200 hover:bg-[#D7E2EA]/10 hover:-translate-y-0.5"
    >
      {children}
    </a>
  )
}

export default GhostButton
