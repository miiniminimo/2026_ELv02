import styles from './Awards.module.css'

const AWARDS = [
  {
    year: '2026',
    items: [
      { medal: '🏆', cls: 'gold',   name: 'PD Lab STAR 선정 (2년 연속)',                          org: '동양미래대학교' },
      { medal: '🥇', cls: 'gold',   name: '부스트업 스타트업 프로그램 데모데이 최우수상',           org: '2026' },
      { medal: '🥇', cls: 'gold',   name: '제3회 SOMKATHON 대상',                                 org: '2026' },
      { medal: '🥈', cls: 'silver', name: 'RISE사업 학생참여형 리빙랩 활동 우수상',               org: '2026' },
      { medal: '🥈', cls: 'silver', name: 'AI로 만드는 우리 대학 이야기 우수상',                  org: '2026' },
      { medal: '🥈', cls: 'silver', name: '창업전략 시뮬레이션 챌린지 연합창업캠프 우수상',       org: '2026' },
      { medal: '🥈', cls: 'silver', name: '제3회 SOMKATHON 최우수상 · 우수상 (3팀)',              org: '2026' },
      { medal: '📋', cls: 'bronze', name: '연합동아리 UMC 9기 수료 (5명)',                         org: '2026' },
    ],
  },
  {
    year: '2025',
    items: [
      { medal: '🏆', cls: 'gold',   name: 'PD Lab STAR 최초 선정',                               org: '동양미래대학교' },
      { medal: '🥇', cls: 'gold',   name: 'Dig-STAR Program in JEJU 대상',                       org: '2025' },
      { medal: '🥇', cls: 'gold',   name: '스마트 SW 개발 경진대회 최우수상',                    org: '2025' },
      { medal: '🥇', cls: 'gold',   name: '로컬잇슈! 창업캠프 미니 경진대회 최우수상',           org: '2025' },
      { medal: '🥇', cls: 'gold',   name: '솜커톤 2기 최우수상',                                 org: '2025' },
      { medal: '🥈', cls: 'silver', name: '동양미래대 EXPO 졸업작품 전시회 우수상',              org: '2025' },
      { medal: '🥈', cls: 'silver', name: '학생창업주간 AX START UP 우수상',                     org: '2025' },
      { medal: '🥈', cls: 'silver', name: '스마트 SW 개발 경진대회 우수상',                      org: '2025' },
      { medal: '🥈', cls: 'silver', name: '생성형 AI 개발 활용 실무 경진대회 우수상',            org: '2025' },
      { medal: '🥈', cls: 'silver', name: '솜커톤 2기 우수상',                                   org: '2025' },
      { medal: '🥈', cls: 'silver', name: '스마트 제조 AI Agent 해커톤 2등 (본선)',              org: '2025' },
      { medal: '🥉', cls: 'bronze', name: '교육장비 개발 및 아이디어 경진대회 동상',             org: '2025' },
      { medal: '🥉', cls: 'bronze', name: '머신러닝·딥러닝 경진대회 장려상',                     org: '2025' },
      { medal: '📋', cls: 'bronze', name: 'Digtech 캡스톤디자인 경진대회 ABEEK상',              org: '2025' },
      { medal: '📋', cls: 'bronze', name: '달서 전국 대학생 AI 활용 아이디어 콘테스트 입선',     org: '2025' },
      { medal: '📋', cls: 'bronze', name: '한이음 드림업 ICT 멘토링 공모전',                     org: '2025' },
      { medal: '📋', cls: 'bronze', name: '한국컴퓨터종합학술대회 논문전시',                     org: '2025' },
      { medal: '📋', cls: 'bronze', name: '지산학 한마당 GVALLEY 작품전시',                      org: '2025' },
      { medal: '📋', cls: 'bronze', name: 'KES 한국전자전 서울 코엑스 작품전시',                 org: '2025' },
    ],
  },
  {
    year: '2024',
    items: [
      { medal: '🥇', cls: 'gold',   name: '동양미래대 EXPO 졸업작품 전시회 대상',               org: '2024' },
      { medal: '🥇', cls: 'gold',   name: 'DIGI-STAR PROGRAM IN JEJU 경진대회 대상',            org: '2024' },
      { medal: '🥇', cls: 'gold',   name: '스마트SW 개발 경진대회 최우수상',                    org: '2024' },
      { medal: '🥈', cls: 'silver', name: 'NEXTGEN STARTUP 창업캠프 미니 경진대회 우수상',      org: '2024' },
      { medal: '🥈', cls: 'silver', name: 'LINC 3.0 캡스톤디자인 경진대회 우수상',             org: '2024' },
      { medal: '🥈', cls: 'silver', name: '컴퓨터공학부 교내 경진대회 우수상',                  org: '2024' },
      { medal: '🥉', cls: 'bronze', name: '한국실천공학교육학회 학술발표대회 동상',             org: '2024' },
      { medal: '🥉', cls: 'bronze', name: '스마트SW 개발 경진대회 장려상',                      org: '2024' },
      { medal: '🥉', cls: 'bronze', name: '전국 창의코딩 경진대회 장려상',                      org: '2024' },
      { medal: '🥉', cls: 'bronze', name: '컴퓨터공학부 교내 경진대회 장려상',                  org: '2024' },
      { medal: '📋', cls: 'bronze', name: '한국실천공학교육학회 학술발표대회 특별상',            org: '2024' },
      { medal: '📋', cls: 'bronze', name: '전문대학 신산업분야 성과포럼 수상',                   org: '2024' },
      { medal: '📋', cls: 'bronze', name: '산학연협력 EXPO 부산 벡스코 작품전시',               org: '2024' },
      { medal: '📋', cls: 'bronze', name: 'KES2024 한국전자전 서울 코엑스 작품전시',            org: '2024' },
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
            2024년부터 현재까지 교내외 대회에서 쌓아온 EL의 성과입니다.
          </p>
        </div>

        <div className={styles.timeline}>
          {AWARDS.map((group, gi) => (
            <div
              className={`${styles.yearGroup} fade-up`}
              key={gi}
              style={{ transitionDelay: `${gi * 0.1}s` }}
            >
              <div className={styles.year}>{group.year}</div>
              <div className={styles.items}>
                {group.items.map((item, ii) => (
                  <div className={styles.item} key={ii}>
                    <div className={`${styles.medal} ${styles[item.cls]}`}>
                      {item.medal}
                    </div>
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
