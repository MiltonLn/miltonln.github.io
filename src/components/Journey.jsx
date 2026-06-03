import { experience, education, community } from '../content/journey.js'
import { useReveal } from './useReveal.js'
import styles from './Journey.module.css'

export default function Journey() {
  const reveal = useReveal()
  return (
    <section id="journey" className="section" aria-labelledby="journey-title">
      <div className="container">
        <div ref={reveal.ref} className={reveal.className}>
          <p className="eyebrow">Professional journey</p>
          <h2 id="journey-title" className="section-title">
            Where I’ve worked
          </h2>
        </div>

        <ol className={styles.timeline}>
          {experience.map((job) => (
            <li key={`${job.org}-${job.period}`} className={styles.item}>
              <div className={styles.meta}>
                <span className={styles.period}>{job.period}</span>
                <span className={styles.location}>{job.location}</span>
              </div>
              <div className={styles.detail}>
                <h3 className={styles.role}>
                  {job.role} <span className={styles.org}>· {job.org}</span>
                </h3>
                <p className={styles.summary}>{job.summary}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.subgrid}>
          <div>
            <h3 className={styles.subhead}>Education</h3>
            <div className={styles.eduRow}>
              {education.logo && (
                <img
                  className={styles.eduLogo}
                  src={education.logo}
                  alt={education.logoAlt}
                  loading="lazy"
                />
              )}
              <div>
                <p className={styles.role}>
                  {education.degree} <span className={styles.org}>· {education.org}</span>
                </p>
                <p className={styles.metaInline}>{education.period}</p>
              </div>
            </div>
            <p className={styles.summary}>{education.note}</p>
          </div>

          <div>
            <h3 className={styles.subhead}>Speaking &amp; community</h3>
            <p className={styles.summary}>{community.intro}</p>
            <ul className={styles.community}>
              {community.organizing.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <h4 className={styles.talksHead}>Talks &amp; interviews</h4>
            <ul className={styles.talks}>
              {community.talks.map((t) => (
                <li key={t.title}>
                  {t.href ? (
                    <a href={t.href} target="_blank" rel="noreferrer">
                      {t.title} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span>{t.title}</span>
                  )}
                  <span className={styles.talkEvent}>{t.event}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
