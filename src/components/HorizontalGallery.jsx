import { useRef, useState } from 'react'
import styles from './HorizontalGallery.module.css'

// 활동 사진과 동일한 폴더 사용
// 이미지 없으면 placeholder 표시
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

export default function HorizontalGallery() {
  const trackRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const startX   = useRef(0)
  const scrollL  = useRef(0)

  const onDown = (e) => {
    setDragging(true)
    startX.current  = e.pageX
    scrollL.current = trackRef.current.scrollLeft
  }

  const onMove = (e) => {
    if (!dragging) return
    e.preventDefault()
    const delta = (e.pageX - startX.current) * 1.6
    trackRef.current.scrollLeft = scrollL.current - delta
  }

  const onUp = () => setDragging(false)

  return (
    <section className={styles.section}>

      {/* 상단 레이블 */}
      <p className={styles.label}>Gallery</p>

      {/* 드래그 힌트 */}
      <p className={styles.hint}>← 드래그하여 둘러보기 →</p>

      {/* 필름 스트립 */}
      <div
        ref={trackRef}
        className={`${styles.track} ${dragging ? styles.grabbing : ''}`}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
      >
        {IMAGES.map((src, i) => (
          <div className={styles.item} key={i}>
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
