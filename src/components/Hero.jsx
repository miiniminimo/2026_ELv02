import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
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
