import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    let rafId = null
    let current = true   // 현재 atTop 값 추적 (re-render 없이)

    const handleScroll = () => {
      // rAF로 throttle: 프레임당 최대 1회만 계산
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        const next = window.scrollY < window.innerHeight - 80
        // 값이 실제로 바뀔 때만 setState → 불필요한 transition 차단
        if (next !== current) {
          current = next
          setAtTop(next)
        }
        rafId = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <nav className={`${styles.nav} ${atTop ? styles.transparent : styles.solid}`}>
      <a href="#" className={styles.logoWrap}>
        <img
          src="/EL_logo.png"
          alt="EL"
          className={styles.logoImg}
        />
      </a>

      <div className={styles.links}>
        <a href="#benefits">활동 혜택</a>
        <a href="#activities">활동 사진</a>
        <a href="#awards">수상내역</a>
        <a href="#apply">지원하기</a>
      </div>

      <a href="#apply" className={styles.cta}>
        지원하기 →
      </a>
    </nav>
  )
}
