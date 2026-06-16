import { useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Activities from './components/Activities'
import Awards from './components/Awards'
import Apply from './components/Apply'
import Footer from './components/Footer'
import styles from './App.module.css'

function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        }),
      { threshold: 0.12 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useFadeUp()

  const mainRef = useRef(null)

  useEffect(() => {
    const el = mainRef.current
    if (!el) return

    let rafId = null
    const update = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => { _update(); rafId = null })
    }
    const _update = () => {
      const vh = window.innerHeight
      const sy = window.scrollY

      // ── 메인 카드: 작은 박스 → 전체 너비로 펼쳐짐 ──
      // transform-origin: center top → 카드 상단이 고정된 채 좌우로 펼쳐짐
      // sy=0        → scale 0.60, opacity 0,   4방향 radius 28px
      // sy=vh*1.30  → scale 1.00, opacity 1.0, 상단 radius만 유지
      const p = Math.max(0, Math.min(1, sy / (vh * 1.30)))   // 느린 속도

      const scale    = 0.60 + p * 0.40                        // 0.60 → 1.00
      const opacity  = Math.pow(p, 0.65)                      // 초반에 빠르게 나타남
      const brBottom = (1 - p) * 28                           // 28px → 0px

      el.style.transform       = `scale(${scale.toFixed(4)})`
      el.style.transformOrigin = 'center top'
      el.style.opacity         = opacity.toFixed(3)
      el.style.borderRadius    = `28px 28px ${brBottom.toFixed(1)}px ${brBottom.toFixed(1)}px`
    }

    _update()  // 초기 상태 적용
    window.addEventListener('scroll', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <Nav />

      {/* 히어로: position fixed → 뒤에서 줌인 */}
      <Hero />

      {/* spacer: fixed hero는 layout flow에서 빠지므로 공간 확보 */}
      <div className={styles.heroSpacer} />

      {/* 메인 카드: 작은 박스로 시작 → 스크롤하면 전체 너비로 펼쳐짐 */}
      <main ref={mainRef} className={styles.mainContent}>
        <Benefits />
        <Activities />
        <Awards />
        <Apply />
        <Footer />
      </main>
    </>
  )
}
