import styles from './Apply.module.css'

export default function Apply() {
  const handleApply = (e) => {
    e.preventDefault()
    alert('지원 링크를 연결해 주세요!')
  }

  return (
    <section id="apply" className={styles.section}>
      <div className={styles.blob} />

      <div className={styles.inner}>
        <p className={styles.label}>Join Us</p>
        <h2 className={`${styles.title} fade-up`}>
          다음 이야기의<br />주인공이 되세요
        </h2>
        <p className={`${styles.desc} fade-up`}>
          EL은 새로운 멤버를 기다리고 있습니다.<br />
          논문이 낯설어도 괜찮아요. 배우고자 하는 마음이면 충분합니다.
        </p>

        <a
          href="#"
          className={`${styles.btn} fade-up`}
          onClick={handleApply}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="22" height="22">
            <path d="M15 3h6v6M10 14L21 3M9 3H3v18h18v-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          지원서 작성하기
        </a>

        <p className={styles.note}>📌 지원 기간 및 모집 일정은 공지사항을 확인해 주세요.</p>
      </div>
    </section>
  )
}
