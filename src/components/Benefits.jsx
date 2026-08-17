import styles from './Benefits.module.css'

const TAGS = ['신입생 환영회', '하계 동계 MT', '동아리 내 경진대회', '하계 동계 총회']

const BENEFITS = [
  {
    num: '01',
    title: '튜터링',
    desc: '학기마다 동아리 내 튜터링 시스템으로 체계적인 학습 지원',
  },
  {
    num: '02',
    title: '제작 지원비',
    desc: '교내 IoT 관련 수업, 공모전 대외 활동 참가 시 제작 지원비 지급',
  },
  {
    num: '03',
    title: '다양한 기자재',
    desc: '동아리방, 프린터기, 동아리 소유 센서 등 다양한 기자재 사용 가능',
  },
  {
    num: '04',
    title: '활발한 커뮤니티',
    desc: '타전공 수강, 근로 등 학교생활에 모르는 건 편하게 단톡방에 물어보세요.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          <p className={`${styles.label} fade-up`}>Our Domain</p>
          <h2 className={`${styles.title} fade-up`}>
            같이 해봐요<br />EL에서
          </h2>
          <p className={`${styles.desc} fade-up`}>
            컴퓨터소프트웨어공학과 전공 동아리 EL에서 다양한 활동에 적극적으로
            참여하실 분을 기다립니다.
          </p>

          <div className={styles.tags}>
            {TAGS.map((tag, i) => (
              <span
                className={`${styles.tag} fade-up`}
                key={tag}
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.benefitsCol}>
          <p className={`${styles.subLabel} fade-up`}>활동 혜택</p>

          <div className={styles.grid}>
            {BENEFITS.map((b, i) => (
              <div
                className={`${styles.card} fade-up`}
                key={i}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className={styles.icon}>{b.num}</div>
                <h3 className={styles.cardTitle}>{b.title}</h3>
                <p className={styles.cardDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
