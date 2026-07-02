import { useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Activities from './components/Activities'
import Awards from './components/Awards'
import Apply from './components/Apply'
import HorizontalGallery from './components/HorizontalGallery'
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

      // ── spacer = 130vh이므로 카드 상단이 뷰포트 바닥에 닿는 시점 = scrollY 30vh ──
      // 그 시점(entryScrollY)부터 애니메이션 시작 → 카드가 처음 보일 때 scale 0.50
      const SPACER_VH    = 1.30
      const entryScrollY = (SPACER_VH - 1.0) * vh   // 0.30 * vh
      const animDuration = vh * 1.0                  // 1 viewport 높이 동안 펼쳐짐

      const p = Math.max(0, Math.min(1, (sy - entryScrollY) / animDuration))

      const scale    = 0.50 + p * 0.50          // 0.50 → 1.00  (더 극적으로)
      const opacity  = Math.pow(p, 0.5)         // 초반 빠르게 나타남
      const brBottom = (1 - p) * 28             // 28px → 0px

      el.style.transform       = `scale(${scale.toFixed(4)})`
      el.style.transformOrigin = 'center top'
      el.style.opacity         = opacity.toFixed(3)
      el.style.borderRadius    = `28px 28px ${brBottom.toFixed(1)}px ${brBottom.toFixed(1)}px`
    }

    _update()  // 초기 상태 적용
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', _update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', _update)
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
        <HorizontalGallery />
        <Apply />
      </main>

      {/* 푸터: 흰 카드 밖에 위치 → 자체 배경 없음, 호버 시 나타남 */}
      <Footer />
    </>
  )
}
