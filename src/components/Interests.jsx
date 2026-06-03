import { interests } from '../content/interests.js'
import { useReveal } from './useReveal.js'
import styles from './Interests.module.css'

export default function Interests() {
  const reveal = useReveal()
  return (
    <section id="interests" className="section" aria-labelledby="interests-title">
      <div className="container">
        <div ref={reveal.ref} className={reveal.className}>
          <p className="eyebrow">Away from the keyboard</p>
          <h2 id="interests-title" className="section-title">
            {interests.intro}
          </h2>
        </div>
        <dl className={styles.grid}>
          {interests.items.map((item) => (
            <div key={item.title} className={styles.item}>
              {item.icon && <span className={styles.icon} aria-hidden="true">{item.icon}</span>}
              <dt className={styles.term}>{item.title}</dt>
              <dd className={styles.desc}>{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
