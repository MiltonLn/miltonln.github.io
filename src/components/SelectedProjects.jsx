import { projects } from '../content/projects.js'
import { useReveal } from './useReveal.js'
import styles from './SelectedProjects.module.css'

export default function SelectedProjects() {
  const reveal = useReveal()
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <div ref={reveal.ref} className={reveal.className}>
          <p className="eyebrow">Selected work</p>
          <h2 id="projects-title" className="section-title">
            A few things I&rsquo;ve worked on
          </h2>
        </div>
        <ul className={styles.list}>
          {projects.map((p, i) => (
            <li key={p.title} className={styles.item}>
              <span className={styles.num} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div className={styles.header}>
                <h3 className={styles.title}>{p.title}</h3>
                {p.link ? (
                  <a className={styles.link} href={p.link} target="_blank" rel="noreferrer">
                    {p.linkLabel} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className={styles.muted}>{p.linkLabel}</span>
                )}
              </div>
              <p className={styles.blurb}>{p.blurb}</p>
              <ul className={styles.tech} aria-label="Tech used">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
