import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import GhostButton from '../components/GhostButton'

const projects = [
  {
    num: '01',
    category: 'Full Stack · Finance',
    title: 'FinanceFlow',
    liveUrl: 'https://finance-tracker-taupe-eight.vercel.app/',
    githubUrl: 'https://github.com/Death-Note-sys/finance-tracker',
    images: {
      col1Top: './images/ff-login.png',
      col1Bottom: './images/ff-expenses.png',
      col2: './images/ff-dashboard.png',
    },
  },
  {
    num: '02',
    category: 'Frontend · Wellness',
    title: 'Healthify',
    liveUrl: 'https://healthify-woad.vercel.app/',
    githubUrl: 'https://github.com/Death-Note-sys/healthify',
    images: {
      col1Top: './images/hy-form.png',
      col1Bottom: './images/hy-plan.png',
      col2: './images/hy-hero.png',
    },
  },
]

const totalCards = projects.length

interface ProjectCardProps {
  project: (typeof projects)[0]
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={cardRef} className="h-[85vh] sm:h-[85vh] relative" style={{ zIndex: index + 1 }}>
      <motion.div
        className="sticky rounded-[24px] sm:rounded-[40px] md:rounded-[60px] border-2 border-[#D7E2EA]/20 bg-[#0C0C0C] p-3 sm:p-6 md:p-8 origin-top"
        style={{ scale, top: `${72 + index * 20}px` }}
      >
        {/* ── Top row ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-8 gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-6">
            <div
              className="font-black text-[#D7E2EA] leading-none opacity-10 hidden sm:block"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.num}
            </div>
            <div className="flex flex-col gap-0.5 sm:gap-1">
              <span className="font-mono text-[10px] sm:text-xs md:text-sm text-accent2 uppercase tracking-widest opacity-70">
                {project.category}
              </span>
              <h3
                className="font-bold text-[#D7E2EA] uppercase tracking-wide text-lg sm:text-xl md:text-2xl"
              >
                {project.title}
              </h3>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-3 flex-wrap">
            <GhostButton href={project.liveUrl} target="_blank">
              Live App ↗
            </GhostButton>
            <GhostButton href={project.githubUrl} target="_blank">
              GitHub ↗
            </GhostButton>
          </div>
        </div>

        {/* ── Image grid ── */}
        {/* Mobile: vertical stack. Desktop: two-column layout */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          {/* Left column — full width on mobile, 40% on desktop */}
          <div className="w-full sm:w-[40%] flex flex-row sm:flex-col gap-2 sm:gap-4">
            <img
              src={project.images.col1Top}
              alt={`${project.title} screenshot 1`}
              className="w-1/2 sm:w-full rounded-[16px] sm:rounded-[30px] md:rounded-[40px] object-cover h-[120px] sm:h-auto"
              style={{ minHeight: undefined }}
              loading="lazy"
            />
            <img
              src={project.images.col1Bottom}
              alt={`${project.title} screenshot 2`}
              className="w-1/2 sm:w-full rounded-[16px] sm:rounded-[30px] md:rounded-[40px] object-cover h-[120px] sm:h-auto"
              loading="lazy"
            />
          </div>
          {/* Right column — full width on mobile, 60% on desktop */}
          <div className="w-full sm:w-[60%]">
            <img
              src={project.images.col2}
              alt={`${project.title} screenshot 3`}
              className="w-full rounded-[16px] sm:rounded-[30px] md:rounded-[40px] object-cover h-[180px] sm:h-full"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[30px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-4 sm:px-8 md:px-10 py-14 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-10 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(2.5rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
