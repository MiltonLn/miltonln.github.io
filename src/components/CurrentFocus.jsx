import { currentFocus } from '../content/profile.js'
import { useReveal } from './useReveal.js'
import styles from './CurrentFocus.module.css'

export default function CurrentFocus() {
  const reveal = useReveal()
  return (
    <section id="focus" className="section" aria-labelledby="focus-title">
      <div className="container">
        <div ref={reveal.ref} className={reveal.className}>
          <p className="eyebrow">Right now</p>
          <div className={styles.heading}>
            <h2 id="focus-title" className="section-title">
              What I’m focused on
            </h2>
            {currentFocus.status && (
              <span className={styles.status}>
                <span className={styles.dot} aria-hidden="true" />
                {currentFocus.status}
              </span>
            )}
          </div>
          <div className={`prose ${styles.body}`}>
            {currentFocus.now.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            {currentFocus.next && <p className={styles.next}>{currentFocus.next}</p>}
          </div>
          <dl className={styles.tools}>
            {currentFocus.tools.map((cat) => (
              <div key={cat.group} className={styles.toolGroup}>
                <dt className={styles.toolLabel}>{cat.group}</dt>
                <dd className={styles.toolItems}>
                  <ul>
                    {cat.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
          {currentFocus.updated && (
            <p className={styles.updated}>Last updated {currentFocus.updated}</p>
          )}
        </div>
      </div>
    </section>
  )
}
