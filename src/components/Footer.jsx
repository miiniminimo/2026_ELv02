import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>EL</span>
      <p className={styles.copy}>© 2026 Engineering Leaders. All rights reserved.</p>
      <p className={styles.email}>otter.m0208@gmail.com</p>
    </footer>
  )
}
