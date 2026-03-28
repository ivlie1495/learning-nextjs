// 2. CSS Modules - scoped styles via .module.css
import styles from '@/components/CardModule.module.css'

export default function CardModule() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>CSS Modules</h3>
      <p className={styles.desc}>
        Scoped styles using .module.css files.
      </p>
      <button className={styles.btn}>Click</button>
    </div>
  )
}
