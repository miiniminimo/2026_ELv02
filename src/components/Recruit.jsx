import styles from './Recruit.module.css'

// ↓ 모집 대상 / 기간 / 일정 / 혜택 — 날짜와 텍스트는 필요에 맞게 수정하세요
const INFO_LEFT = [
  {
    heading: '모집 대상',
    lines: ['컴퓨터소프트웨어공학과 재학생 (1, 2학년)'],
  },
  {
    heading: '모집 기간',
    lines: ['2026.02.23 – 03.08 (18:00 마감)'],
    note: '* 서류 합격자 한에 문자 개별 안내',
  },
]

const INFO_RIGHT = [
  {
    heading: '주요 일정',
    lines: ['1차 합격 안내: 03.08 (20:00 발표)', '면접 일정: 03.09 – 03.10'],
  },
  {
    heading: '동아리 혜택',
    list: [
      '2개의 동아리방과 함께 전자레인지 · 프린터기 사용 가능',
      '작품제작비 및 재료비 전폭 지원',
      '자체 멘토링 및 프로젝트 진행',
    ],
  },
]

export default function Recruit() {
  return (
    <section className={styles.section}>
      <div className={`${styles.header} fade-up`}>
        <p className={styles.eyebrow}>Join the Leader</p>
        <h2 className={styles.title}>24기 신입부원 모집</h2>
        <p className={styles.subtitle}>COMP. SOFTWARE ENGINEERING PD LAB STAR</p>
      </div>

      <div className={styles.grid}>
        <div className={`${styles.col} fade-up`}>
          {INFO_LEFT.map((item) => (
            <div className={styles.item} key={item.heading}>
              <p className={styles.itemLabel}>
                <span className={styles.dot} />{item.heading}
              </p>
              {item.lines.map((line) => (
                <p className={styles.itemValue} key={line}>{line}</p>
              ))}
              {item.note && <p className={styles.itemNote}>{item.note}</p>}
            </div>
          ))}
        </div>

        <div className={`${styles.col} fade-up`} style={{ transitionDelay: '0.08s' }}>
          {INFO_RIGHT.map((item) => (
            <div className={styles.item} key={item.heading}>
              <p className={styles.itemLabel}>
                <span className={styles.dot} />{item.heading}
              </p>
              {item.lines?.map((line) => (
                <p className={styles.itemValue} key={line}>{line}</p>
              ))}
              {item.list && (
                <ul className={styles.benefitList}>
                  {item.list.map((b) => <li key={b}>{b}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.notice} fade-up`}>
        <p className={styles.noticeTitle}>⭐ 복학생 안내 사항</p>
        <p className={styles.noticeDesc}>
          휴학 전 EL 부원이었던 분들 중 복학 후 동아리 활동을 계속하실 의향이 있는 분들은{' '}
          문의 사항의 회장 연락처로 문자 주시기 바랍니다.
        </p>
      </div>

      <a href="#apply" className={`${styles.btn} fade-up`}>지원하기</a>
    </section>
  )
}
