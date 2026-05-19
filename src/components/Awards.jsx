import styles from './Awards.module.css'

const AWARDS = [
  {
    year: '2026',
    items: [
      { medal: '🥇', cls: 'gold',   name: '교내 최우수 동아리상',           org: '소속 대학교 총학생회' },
      { medal: '🥈', cls: 'silver', name: '전국 대학생 IT 경진대회 은상',    org: '한국정보처리학회' },
    ],
  },
  {
    year: '2025',
    items: [
      { medal: '🥇', cls: 'gold',   name: '전국 대학생 논문 발표 대회 금상', org: '한국컴퓨터정보학회' },
      { medal: '🥈', cls: 'silver', name: 'AI 해커톤 준우승',               org: '카카오 × KAIST 공동 주최' },
      { medal: '🥉', cls: 'bronze', name: '교내 창의 아이디어 경진대회 장려상', org: '소속 대학교 공과대학' },
    ],
  },
  {
    year: '2024',
    items: [
      { medal: '🥇', cls: 'gold',   name: '대학생 오픈소스 기여 대회 대상',  org: '정보통신산업진흥원(NIPA)' },
      { medal: '🥈', cls: 'silver', name: '교내 소프트웨어 경진대회 우수상',  org: '소속 대학교 SW중심사업단' },
    ],
  },
  {
    year: '2023',
    items: [
      { medal: '🥇', cls: 'gold',   name: '신생 동아리 최우수상',            org: '소속 대학교 학생처' },
      { medal: '🥉', cls: 'bronze', name: '전국 대학생 독서 경진대회 장려상', org: '교육부 주최' },
    ],
  },
]

export default function Awards() {
  return (
    <>
      <div className={styles.divider} />
      <section id="awards" className={styles.section}>
        <div className="fade-up">
          <p className={styles.label}>Achievement</p>
          <h2 className={styles.title}>수상 내역</h2>
          <p className={styles.desc}>
            2023년 창립 이래 교내외 각종 대회에서 꾸준히 성과를 내고 있습니다.
          </p>
        </div>

        <div className={styles.timeline}>
          {AWARDS.map((group, gi) => (
            <div className={`${styles.yearGroup} fade-up`} key={gi} style={{ transitionDelay: `${gi * 0.12}s` }}>
              <div className={styles.year}>{group.year}</div>
              <div className={styles.items}>
                {group.items.map((item, ii) => (
                  <div className={styles.item} key={ii}>
                    <div className={`${styles.medal} ${styles[item.cls]}`}>{item.medal}</div>
                    <div>
                      <p className={styles.itemName}>{item.name}</p>
                      <p className={styles.itemOrg}>{item.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className={styles.divider} />
    </>
  )
}
