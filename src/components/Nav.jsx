import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    // hero 섹션 높이(100vh)를 기준으로 투명 ↔ 불투명 전환
    const handleScroll = () => {
      setAtTop(window.scrollY < window.innerHeight - 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
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
