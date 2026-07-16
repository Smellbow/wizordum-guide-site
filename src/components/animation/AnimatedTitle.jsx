import { useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'
import './AnimatedTitle.css'

gsap.registerPlugin(SplitText, useGSAP)

function AnimatedTitle({ id, children }) {
  const titleRef = useRef(null)

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      if (prefersReducedMotion) {
        return
      }

      const split = SplitText.create(titleRef.current, {
        type: 'words,chars',
        smartWrap: true,
        aria: 'auto',
      })

      const animation = gsap.from(split.chars, {
        autoAlpha: 0,
        yPercent: 25,
        duration: 0.12,
        stagger: 0.045,
        ease: 'none',
      })

      return () => {
        animation.kill()
        split.revert()
      }
    },
    {
      scope: titleRef,
    },
  )

  return (
    <h1
      ref={titleRef}
      id={id}
      className="animated-title"
    >
      {children}
    </h1>
  )
}

export default AnimatedTitle