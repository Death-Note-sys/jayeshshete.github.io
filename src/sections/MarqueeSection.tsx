import React, { useEffect, useRef, useState } from 'react'

const row1Images = [
  './images/ff-login.png',
  './images/ff-dashboard.png',
  './images/hy-hero.png',
]

const row2Images = [
  './images/ff-expenses.png',
  './images/hy-form.png',
  './images/hy-plan.png',
]

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const sectionTop = sectionRef.current.offsetTop
      const scrollOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(scrollOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Triple each row for seamless scrolling */
  const tripled1 = [...row1Images, ...row1Images, ...row1Images]
  const tripled2 = [...row2Images, ...row2Images, ...row2Images]

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      {/* Row 1 — moves right on scroll */}
      <div
        className="flex gap-3 mb-3"
        style={{
          transform: `translateX(${offset - 200}px)`,
          willChange: 'transform',
        }}
      >
        {tripled1.map((src, i) => (
          <img
            key={`r1-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className="w-[280px] h-[180px] sm:w-[350px] sm:h-[225px] md:w-[420px] md:h-[270px] rounded-xl sm:rounded-2xl object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Row 2 — moves left on scroll */}
      <div
        className="flex gap-3"
        style={{
          transform: `translateX(${-(offset - 200)}px)`,
          willChange: 'transform',
        }}
      >
        {tripled2.map((src, i) => (
          <img
            key={`r2-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className="w-[280px] h-[180px] sm:w-[350px] sm:h-[225px] md:w-[420px] md:h-[270px] rounded-xl sm:rounded-2xl object-cover flex-shrink-0"
          />
        ))}
      </div>
    </section>
  )
}

export default MarqueeSection
