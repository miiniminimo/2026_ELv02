import styles from './Activities.module.css'

/**
 * 활동 사진 추가 방법:
 * 1. /public/activities/ 폴더에 사진 파일 넣기
 * 2. 아래 ACTIVITIES 배열에 항목 추가
 *    ratio: 'tall'(3:4) | 'square'(1:1) | 'wide'(4:3)
 */
const ACTIVITIES = [
  { img: '/activities/activity01.jpg', title: '논문 발표 세션',      category: 'STUDY',   ratio: 'tall'   },
  { img: '/activities/activity02.jpg', title: '정기 스터디 미팅',    category: 'STUDY',   ratio: 'square' },
  { img: '/activities/activity03.jpg', title: '교내 해커톤 참가',    category: 'PROJECT', ratio: 'wide'   },
  { img: '/activities/activity04.jpg', title: '팀 프로젝트 발표',    category: 'PROJECT', ratio: 'tall'   },
  { img: '/activities/activity05.jpg', title: '선배 멘토링 세션',    category: 'NETWORK', ratio: 'square' },
  { img: '/activities/activity06.jpg', title: '동아리 MT',          category: 'EVENT',   ratio: 'tall'   },
  { img: '/activities/activity07.jpg', title: '수상 시상식',         category: 'AWARD',   ratio: 'wide'   },
  { img: '/activities/activity08.jpg', title: '네트워킹 파티',       category: 'EVENT',   ratio: 'square' },
  { img: '/activities/activity09.jpg', title: '논문 리뷰 세션',      category: 'STUDY',   ratio: 'tall'   },
  { img: '/activities/activity10.jpg', title: '오픈소스 컨트리뷰션', category: 'PROJECT', ratio: 'wide'   },
]

const CATEGORY_COLOR = {
  STUDY:   '#6C63FF',
  PROJECT: '#00D4FF',
  NETWORK: '#F5C842',
  EVENT:   '#FF6B9D',
  AWARD:   '#4ADE80',
}

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
        <span className={styles.cardCategory} style={{ color: CATEGORY_COLOR[category] }}>
          #{category}
        </span>
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
