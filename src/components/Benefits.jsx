import styles from './Benefits.module.css'

const BENEFITS = [
  {
    icon: '📚',
    color: 'rgba(108,99,255,.2)',
    title: '최신 기술 논문 스터디',
    desc: '매주 최신 CS 논문을 함께 읽고 분석합니다. 복잡한 개념도 토론을 통해 명확하게 이해할 수 있어요.',
  },
  {
    icon: '🗣️',
    color: 'rgba(0,212,255,.15)',
    title: '발표 & 커뮤니케이션',
    desc: '정기적인 발표 세션으로 기술적 내용을 명확하게 전달하는 능력을 기릅니다.',
  },
  {
    icon: '🤝',
    color: 'rgba(245,200,66,.15)',
    title: '네트워킹 & 멘토링',
    desc: '다양한 전공의 동료들과 교류하고, 선배 기수의 멘토링을 통해 진로를 설계합니다.',
  },
  {
    icon: '🏆',
    color: 'rgba(255,100,100,.15)',
    title: '대회 & 공모전 참가',
    desc: '팀 프로젝트로 교내외 공모전에 도전하며 실전 경험과 수상 이력을 쌓습니다.',
  },
  {
    icon: '💡',
    color: 'rgba(100,255,180,.12)',
    title: '사이드 프로젝트',
    desc: '논문에서 아이디어를 얻어 실제로 구현하는 프로젝트를 진행합니다. 포트폴리오를 함께 만들어요.',
  },
  {
    icon: '🎓',
    color: 'rgba(200,100,255,.15)',
    title: '취업 & 대학원 지원',
    desc: '자기소개서 첨삭, 면접 스터디 등 다음 단계로 나아가는 데 필요한 모든 지원을 제공합니다.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className={styles.section}>
      <div className="fade-up">
        <p className={styles.label}>Why EL?</p>
        <h2 className={styles.title}>
          함께하면<br />달라지는 것들
        </h2>
        <p className={styles.desc}>
          EL은 단순한 스터디 모임이 아닙니다. 논문 읽기를 시작으로, 발표·토론·프로젝트까지
          성장의 모든 단계를 지원합니다.
        </p>
      </div>

      <div className={styles.grid}>
        {BENEFITS.map((b, i) => (
          <div
            className={`${styles.card} fade-up`}
            key={i}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className={styles.icon} style={{ background: b.color }}>
              {b.icon}
            </div>
            <h3 className={styles.cardTitle}>{b.title}</h3>
            <p className={styles.cardDesc}>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
