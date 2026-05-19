import styles from './Stats.module.css'

const STATS = [
  { num: '4+',  label: '활동 연도' },
  { num: '12+', label: '수상 경력' },
  { num: '80+', label: '졸업 멤버' },
  { num: '30+', label: '진행 프로젝트' },
]

export default function Stats() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        {STATS.map((s, i) => (
          <div className={`${styles.item} fade-up`} key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
            <span className={styles.num}>{s.num}</span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
