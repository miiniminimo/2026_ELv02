import styles from './Activities.module.css'

/**
 * 활동 사진 추가 방법:
 * 1. /public/activities/ 폴더에 사진 파일 넣기 (아래 캐러셀은 /public/gallery/ 사용 — 별도 폴더)
 * 2. 아래 ACTIVITIES 배열에 항목 추가
 *    ratio: 'tall'(3:4) | 'square'(1:1) | 'wide'(4:3)
 */
const ACTIVITIES = [
  { img: '/activities/activity01.jpg', title: '2026 솜커톤 대상 수상',        category: 'AWARD', ratio: 'wide'   },
  { img: '/activities/activity02.jpg', title: '동양미래 EXPO 우수상 시상식',  category: 'AWARD', ratio: 'wide'   },
  { img: '/activities/activity03.jpg', title: '동양미래 EXPO 출품작 선정심사', category: 'EVENT', ratio: 'wide'   },
  { img: '/activities/activity04.jpg', title: '학교 축제 동아리 부스 운영',    category: 'EVENT', ratio: 'tall'   },
  { img: '/activities/activity05.jpg', title: 'AI 루키 해커톤 참가',          category: 'EVENT', ratio: 'square' },
  { img: '/activities/activity06.jpg', title: '2025 솜커톤 최우수상 수상',    category: 'AWARD', ratio: 'wide'   },
  { img: '/activities/activity07.jpg', title: 'G밸리 작품 한마당 전시',       category: 'EVENT', ratio: 'tall'   },
  { img: '/activities/activity08.jpg', title: '2026 솜커톤 최우수상 수상',    category: 'AWARD', ratio: 'square' },
  { img: '/activities/activity09.jpg', title: '동양미래 EXPO 부스 운영',      category: 'EVENT', ratio: 'wide'   },
  { img: '/activities/activity10.jpg', title: '메가시티 리그전 수상',         category: 'AWARD', ratio: 'square' },
]

// 홀수 인덱스 → 왼쪽 열 / 짝수 인덱스 → 오른쪽 열
const leftCol  = ACTIVITIES.filter((_, i) => i % 2 === 0)
const rightCol = ACTIVITIES.filter((_, i) => i % 2 !== 0)

function Card({ img, title, category, ratio }) {
  return (
    <div className={styles.card}>
      <div className={`${styles.imgWrap} ${styles[ratio]}`}>
        <img
          src={img}
          alt={title}
          className={styles.img}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.nextSibling.style.display = 'flex'
          }}
        />
        <div className={styles.placeholder} style={{ display: 'none' }}>📷</div>
      </div>

      {/* 카드 아래 텍스트 */}
      <div className={styles.cardInfo}>
        <span className={styles.cardCategory}>#{category}</span>
        <p className={styles.cardTitle}>{title}</p>
      </div>
    </div>
  )
}

export default function Activities() {
  return (
    <section id="activities" className={styles.section}>

      {/* 왼쪽 sticky 텍스트 */}
      <div className={styles.left}>
        <p className={styles.label}>Activities</p>
        <h2 className={styles.title}>
          우리가<br />함께한<br />순간들
        </h2>
        <p className={styles.desc}>
          논문 스터디부터 해커톤,<br />
          네트워킹, 수상까지<br />
          EL의 다양한 활동을 담았습니다.
        </p>
      </div>

      {/* 오른쪽 교차 배열: 두 열을 독립적으로 렌더링 */}
      <div className={styles.grid}>

        {/* 왼쪽 카드 열 (0, 2, 4...) */}
        <div className={styles.colLeft}>
          {leftCol.map((item, i) => <Card key={i} {...item} />)}
        </div>

        {/* 오른쪽 카드 열 (1, 3, 5...) — margin-top으로 아래로 밀어서 교차 효과 */}
        <div className={styles.colRight}>
          {rightCol.map((item, i) => <Card key={i} {...item} />)}
        </div>

      </div>
    </section>
  )
}
