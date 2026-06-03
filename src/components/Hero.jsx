import { profile } from '../content/profile.js'
import { email, cvUrl } from '../content/links.js'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={`section ${styles.hero}`} aria-labelledby="hero-name">
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <p className="eyebrow">{profile.role} · {profile.location}</p>
          <h1 id="hero-name" className={styles.name}>
            {profile.name}
          </h1>
          <div className={`prose ${styles.intro}`}>
            {profile.intro.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <div className={styles.actions}>
            <a className={styles.primary} href={`mailto:${email}`}>
              Get in touch
            </a>
            <a className={styles.secondary} href={cvUrl} target="_blank" rel="noreferrer">
              Read my CV
            </a>
          </div>
        </div>
        <div className={styles.photoWrap}>
          <img
            className={styles.photo}
            src={profile.photo}
            alt={profile.photoAlt}
            width="320"
            height="320"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
