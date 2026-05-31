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
      className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full border border-[#D7E2EA] sm:border-2 px-4 py-2 sm:px-8 sm:py-3 text-[10px] sm:text-xs md:text-sm text-[#D7E2EA] font-medium uppercase tracking-wider sm:tracking-widest no-underline transition-all duration-200 hover:bg-[#D7E2EA]/10 hover:-translate-y-0.5"
    >
      {children}
    </a>
  )
}

export default GhostButton
