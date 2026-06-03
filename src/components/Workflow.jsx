import { workflow } from '../content/workflow.js'
import { useReveal } from './useReveal.js'
import styles from './Workflow.module.css'

export default function Workflow() {
  const reveal = useReveal()
  return (
    <section id="workflow" className="section" aria-labelledby="workflow-title">
      <div className="container">
        <div ref={reveal.ref} className={reveal.className}>
          <p className="eyebrow">{workflow.eyebrow}</p>
          <h2 id="workflow-title" className="section-title">
            {workflow.heading}
          </h2>
        </div>
        <dl className={styles.grid}>
          {workflow.items.map((item) => (
            <div key={item.heading} className={styles.item}>
              <dt className={styles.term}>{item.heading}</dt>
              <dd className={styles.desc}>{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
