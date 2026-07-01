import React from 'react'
import FadeIn from '../components/FadeIn'

const skills = [
  {
    num: '01',
    name: 'Languages',
    desc: 'Proficiency in Python, JavaScript, C, C++, and SQL — from AI pipeline backends and full-stack web apps to low-level programming and database management.',
  },
  {
    num: '02',
    name: 'Backend & AI',
    desc: 'Building production APIs with FastAPI and Pydantic v2. Designing multi-stage LLM pipelines with Groq and Cerebras APIs, including auto-repair, provider fallback, and deterministic schema generation.',
  },
  {
    num: '03',
    name: 'Frontend',
    desc: 'Creating responsive, animated interfaces with React.js, Tailwind CSS, Vite, and Framer Motion — focused on clean design, performance, and smooth user experiences.',
  },
  {
    num: '04',
    name: 'Tools & Platforms',
    desc: 'GitHub for version control, pytest for testing (78+ unit tests), Vercel and Render for deployments, VS Code as primary IDE, and Uvicorn for ASGI server management.',
  },
  {
    num: '05',
    name: 'CS Fundamentals',
    desc: 'Strong grasp of Data Structures, Algorithms, OOP, DBMS, system design, and API architecture — the foundation behind every scalable solution I build.',
  },
]

const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="bg-white rounded-t-[30px] sm:rounded-t-[50px] md:rounded-t-[60px] px-4 sm:px-8 md:px-10 py-14 sm:py-24 md:py-32 relative z-20"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center text-[#0C0C0C] mb-10 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(2.5rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <FadeIn key={skill.num} delay={i * 0.1} y={30}>
            <div
              className={`flex items-start gap-4 sm:gap-8 md:gap-12 py-6 sm:py-10 md:py-12 border-t border-[rgba(12,12,12,0.15)] ${
                i === skills.length - 1 ? 'border-b border-b-[rgba(12,12,12,0.15)]' : ''
              }`}
            >
              <div
                className="font-black text-[#0C0C0C] leading-none shrink-0"
                style={{ fontSize: 'clamp(2rem, 10vw, 140px)' }}
              >
                {skill.num}
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-4">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {skill.name}
                </h3>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C] opacity-60 max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {skill.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
