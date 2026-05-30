import React from 'react'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import Magnet from '../components/Magnet'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="h-screen flex flex-col overflow-x-clip">
      {/* ── Navbar ── */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col justify-between relative px-6 md:px-10">
        {/* Heading */}
        <FadeIn delay={0.15} y={40}>
          <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14.5vw]">
              Hi, I&apos;m Jayesh
            </h1>
          </div>
        </FadeIn>

        {/* ── Portrait (centered) ── */}
        <FadeIn
          delay={0.6}
          y={30}
          className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none sm:pointer-events-auto"
        >
          <Magnet padding={150} strength={3}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Jayesh Shete portrait"
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-contain select-none"
              draggable={false}
            />
          </Magnet>
        </FadeIn>

        {/* ── Bottom bar ── */}
        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              a cs student driven by building full-stack apps that solve real problems
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
