import styles from './Activities.module.css'

/**
 * 활동 사진 추가 방법:
 * 1. 사진 파일을 /public/activities/ 폴더에 넣기
 * 2. 아래 ACTIVITIES 배열에 항목 추가
 *    { img: '/activities/파일명.jpg', title: '활동명', category: 'STUDY' }
 *
 * category 종류: STUDY | PROJECT | NETWORK | EVENT | AWARD
 */
const ACTIVITIES = [
  { img: '/activities/activity01.jpg', title: '논문 발표 세션',       category: 'STUDY'   },
  { img: '/activities/activity02.jpg', title: '정기 스터디 미팅',     category: 'STUDY'   },
  { img: '/activities/activity03.jpg', title: '교내 해커톤 참가',     category: 'PROJECT' },
  { img: '/activities/activity04.jpg', title: '팀 프로젝트 발표',     category: 'PROJECT' },
  { img: '/activities/activity05.jpg', title: '선배 멘토링 세션',     category: 'NETWORK' },
  { img: '/activities/activity06.jpg', title: '동아리 MT',           category: 'EVENT'   },
  { img: '/activities/activity07.jpg', title: '수상 시상식',          category: 'AWARD'   },
  { img: '/activities/activity08.jpg', title: '네트워킹 파티',        category: 'EVENT'   },
  { img: '/activities/activity09.jpg', title: '논문 리뷰 세션',       category: 'STUDY'   },
  { img: '/activities/activity10.jpg', title: '오픈소스 컨트리뷰션',  category: 'PROJECT' },
]

const CATEGORY_COLOR = {
  STUDY:   '#6C63FF',
  PROJECT: '#00D4FF',
  NETWORK: '#F5C842',
  EVENT:   '#FF6B9D',
  AWARD:   '#4ADE80',
}

function Card({ img, title, category }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        <img
          src={img}
          alt={title}
          className={styles.img}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.nextSibling.style.display = 'flex'
          }}
        />
        {/* 사진 없을 때 플레이스홀더 */}
        <div className={styles.placeholder} style={{ display: 'none' }}>
          <span>📷</span>
        </div>
      </div>
      <div className={styles.cardOverlay}>
        <span
          className={styles.cardCategory}
          style={{ color: CATEGORY_COLOR[category] }}
        >
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
      {/* ── 왼쪽: sticky 텍스트 ── */}
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
        <div className={styles.categories}>
          {Object.entries(CATEGORY_COLOR).map(([cat, color]) => (
            <span key={cat} className={styles.catTag} style={{ borderColor: color, color }}>
              #{cat}
            </span>
          ))}
        </div>
      </div>

      {/* ── 오른쪽: 2열 그리드 (스크롤) ── */}
      <div className={styles.right}>
        {ACTIVITIES.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </section>
  )
}
