import { useRef, useState, useEffect, useCallback } from 'react'
import styles from './HorizontalGallery.module.css'

const IMAGES = [
  '/activities/activity01.jpg',
  '/activities/activity02.jpg',
  '/activities/activity03.jpg',
  '/activities/activity04.jpg',
  '/activities/activity05.jpg',
  '/activities/activity06.jpg',
  '/activities/activity07.jpg',
  '/activities/activity08.jpg',
  '/activities/activity09.jpg',
  '/activities/activity10.jpg',
]

// 3벌 복제 → 양 끝 도달 시 중간으로 점프해서 무한 루프
const LOOPED = [...IMAGES, ...IMAGES, ...IMAGES]

export default function HorizontalGallery() {
  const trackRef   = useRef(null)
  const itemRefs   = useRef([])
  const rafRef     = useRef(null)
  const isJumping  = useRef(false)   // 점프 중 재진입 방지
  const [dragging, setDragging] = useState(false)
  const startX     = useRef(0)
  const scrollL    = useRef(0)

  // ── 커브 계산 ─────────────────────────────────────────
  const updateCurve = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const visibleCenter = track.scrollLeft + track.clientWidth / 2

    itemRefs.current.forEach((item) => {
      if (!item) return
      const itemCenter = item.offsetLeft + item.offsetWidth / 2
      const dist       = itemCenter - visibleCenter
      const normalized = dist / (track.clientWidth * 0.70)
      const clamped    = Math.max(-1, Math.min(1, normalized))
      const angle      = clamped * 52
      const brightness = Math.max(0.30, 1 - Math.abs(clamped) * 0.70)
      const scale      = 1 - Math.abs(clamped) * 0.12

      item.style.transform = `perspective(900px) rotateY(${-angle}deg) scale(${scale.toFixed(3)})`
      item.style.filter    = `brightness(${brightness.toFixed(3)})`
    })
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // 마운트 시 중간 세트(1/3 지점)로 초기 스크롤
    const setWidth = () => track.scrollWidth / 3
    track.scrollLeft = setWidth()
    updateCurve()

    const onScroll = () => {
      // ── 무한 루프: 양 끝 도달 시 중간으로 순간이동 ──
      if (!isJumping.current) {
        const sw = setWidth()
        if (track.scrollLeft < sw * 0.08) {
          // 왼쪽 끝 → 오른쪽 세트로 점프
          isJumping.current = true
          track.scrollLeft += sw
          requestAnimationFrame(() => { isJumping.current = false })
        } else if (track.scrollLeft > sw * 2 - sw * 0.08) {
          // 오른쪽 끝 → 왼쪽 세트로 점프
          isJumping.current = true
          track.scrollLeft -= sw
          requestAnimationFrame(() => { isJumping.current = false })
        }
      }

      // 커브 업데이트
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(updateCurve)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateCurve, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateCurve)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [updateCurve])

  // ── 드래그 ────────────────────────────────────────────
  const onDown = (e) => {
    setDragging(true)
    startX.current  = e.pageX
    scrollL.current = trackRef.current.scrollLeft
  }

  const onMove = (e) => {
    if (!dragging) return
    e.preventDefault()
    trackRef.current.scrollLeft = scrollL.current - (e.pageX - startX.current) * 1.8
  }

  const onUp = () => setDragging(false)

  return (
    <section className={styles.section}>
      <p className={styles.label}>Gallery</p>
      <p className={styles.hint}>← drag →</p>

      <div
        ref={trackRef}
        className={`${styles.track} ${dragging ? styles.grabbing : ''}`}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
      >
        {LOOPED.map((src, i) => (
          <div
            className={styles.item}
            key={i}
            ref={(el) => (itemRefs.current[i] = el)}
          >
            <img
              src={src}
              alt={`activity ${i + 1}`}
              className={styles.img}
              draggable={false}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextSibling.style.display = 'flex'
              }}
            />
            <div className={styles.placeholder} style={{ display: 'none' }}>📷</div>
          </div>
        ))}
      </div>
    </section>
  )
}
