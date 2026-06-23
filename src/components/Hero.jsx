import { useRef, useEffect } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    let rafId = null

    const update = () => {
      if (videoRef.current) {
        const progress = Math.min(window.scrollY / window.innerHeight, 1)
        const scale = 1 + progress * 0.14
        videoRef.current.style.transform = `scale(${scale})`
      }
    }

    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => { update(); rafId = null })
    }

    update() // 초기값
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.video}
        src="/EL_intro.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={styles.overlay} />

      <div className={styles.scrollHint}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Scroll</span>
      </div>
    </section>
  )
}
