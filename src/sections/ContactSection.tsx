import React from 'react'
import FadeIn from '../components/FadeIn'

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={30}>
        <div className="max-w-[580px] mx-auto">
          <p
            className="text-center text-[#D7E2EA] opacity-50 font-light leading-relaxed mb-10"
            style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)' }}
          >
            I&apos;m actively looking for internship and entry-level
            opportunities. If you have a role, a project idea, or just want to
            talk tech — my inbox is open.
          </p>

          <div className="flex flex-col gap-4">
            {/* Email */}
            <a
              href="mailto:contact.jayesh.dev@gmail.com"
              className="clink-green flex items-center gap-4 px-6 py-5 rounded-xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.02] no-underline"
            >
              <span className="text-[#00ff88] font-mono text-sm min-w-[28px]">
                &gt;_
              </span>
              <span className="text-[#D7E2EA] font-mono text-sm tracking-wide">
                contact.jayesh.dev@gmail.com
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jayesh-shete-a09j08/"
              target="_blank"
              rel="noopener noreferrer"
              className="clink-blue flex items-center gap-4 px-6 py-5 rounded-xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.02] no-underline"
            >
              <span className="text-[#00ccff] font-mono text-sm min-w-[28px]">
                [in]
              </span>
              <span className="text-[#D7E2EA] font-mono text-sm tracking-wide">
                linkedin.com/in/jayesh-shete-a09j08
              </span>
            </a>
          </div>
        </div>
      </FadeIn>

      {/* ── Footer ── */}
      <div className="mt-20 pt-8 border-t border-[#D7E2EA]/10 text-center">
        <p className="font-mono text-xs text-[#D7E2EA]/50 tracking-wider">
          Designed &amp; built by{' '}
          <span className="text-[#D7E2EA]">Jayesh Shete</span> ·{' '}
          <span className="text-[#D7E2EA]">2026</span>
        </p>
      </div>
    </section>
  )
}

export default ContactSection
