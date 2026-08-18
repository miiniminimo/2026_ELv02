import { useRef, useEffect } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    // scroll 이벤트 대신 매 프레임 스크롤 위치를 직접 읽는 rAF 루프 사용
    // → 해시 링크 진입 등 이벤트가 안 잡히는 스크롤 점프에도 항상 정확히 동기화됨
    let rafId = null

    const tick = () => {
      if (videoRef.current) {
        const progress = Math.min(window.scrollY / window.innerHeight, 1)
        const scale = 1 + progress * 0.14
        videoRef.current.style.transform = `scale(${scale})`
      }
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.video}
        src="/EL_intro.mp4"
        poster="/EL_intro_poster.jpg"
        preload="auto"
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
