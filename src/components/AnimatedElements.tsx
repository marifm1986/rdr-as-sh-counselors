import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
type AnimationType =
  | 'fadeIn'
  | 'slideUp'
  | 'slideLeft'
  | 'slideRight'
  | 'scale'
  | 'stagger'
interface AnimatedElementProps {
  children: React.ReactNode
  type: AnimationType
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  once?: boolean
}
export function AnimatedElement({
  children,
  type = 'fadeIn',
  delay = 0,
  duration = 0.5,
  className = '',
  threshold = 0.1,
  once = true,
}: AnimatedElementProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  })
  const variants = {
    fadeIn: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
        },
      },
    },
    slideUp: {
      hidden: {
        opacity: 0,
        y: 50,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
        },
      },
    },
    slideLeft: {
      hidden: {
        opacity: 0,
        x: 75,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration,
          delay,
        },
      },
    },
    slideRight: {
      hidden: {
        opacity: 0,
        x: -75,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration,
          delay,
        },
      },
    },
    scale: {
      hidden: {
        opacity: 0,
        scale: 0.8,
      },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration,
          delay,
        },
      },
    },
    stagger: {
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
        },
      },
    },
  }
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants[type]}
      className={className}
    >
      {children}
    </motion.div>
  )
}
