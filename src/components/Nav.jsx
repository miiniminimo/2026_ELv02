import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

// ↓ 폼 신청 URL — Apply.jsx의 FORM_URL과 동일하게 유지하세요
const FORM_URL = 'https://smore.im/form/xpFvq1OMsG'

const LINKS = [
  { href: '#benefits', label: '활동 혜택' },
  { href: '#activities', label: '활동 사진' },
  { href: '#awards', label: '수상내역' },
  { href: '#apply', label: '지원하기' },
]

export default function Nav() {
  const [atTop, setAtTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

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
    <>
      <nav className={`${styles.nav} ${atTop ? styles.transparent : styles.solid}`}>
        <a href="#" className={styles.logoWrap}>
          <img
            src="/EL_logo.png"
            alt="EL"
            className={styles.logoImg}
          />
        </a>

        <div className={styles.links}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>

        <div className={styles.right}>
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className={styles.cta}>
            지원하기 →
          </a>

          <button
            type="button"
            className={styles.hamburger}
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <button
          type="button"
          className={styles.closeBtn}
          aria-label="메뉴 닫기"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <div className={styles.mobileLinks}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
