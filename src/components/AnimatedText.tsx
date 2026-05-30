import React, { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  /* Split into words, then characters within each word */
  const words = text.split(' ')

  return (
    <p
      ref={ref}
      className={className}
      style={{ ...style, lineHeight: 1.8, wordWrap: 'break-word', overflowWrap: 'break-word' }}
    >
      {words.map((word, wi) => {
        /* Calculate the global char index offset for this word */
        const charsBefore = words.slice(0, wi).reduce((sum, w) => sum + w.length + 1, 0)
        const totalChars = text.length

        return (
          <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {word.split('').map((char, ci) => (
              <AnimatedChar
                key={ci}
                char={char}
                globalIndex={charsBefore + ci}
                totalChars={totalChars}
                progress={scrollYProgress}
              />
            ))}
            {/* Add space after each word except the last */}
            {wi < words.length - 1 && (
              <AnimatedChar
                char=" "
                globalIndex={charsBefore + word.length}
                totalChars={totalChars}
                progress={scrollYProgress}
              />
            )}
          </span>
        )
      })}
    </p>
  )
}

interface AnimatedCharProps {
  char: string
  globalIndex: number
  totalChars: number
  progress: MotionValue<number>
}

const AnimatedChar: React.FC<AnimatedCharProps> = ({ char, globalIndex, totalChars, progress }) => {
  const start = globalIndex / totalChars
  const end = (globalIndex + 1) / totalChars
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return (
    <motion.span style={{ opacity }}>
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  )
}

export default AnimatedText
