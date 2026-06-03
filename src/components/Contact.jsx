import { contact } from '../content/profile.js'
import { email, socials } from '../content/links.js'
import { useReveal } from './useReveal.js'
import styles from './Contact.module.css'

export default function Contact() {
  const reveal = useReveal()
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div ref={reveal.ref} className={`prose ${reveal.className}`}>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className="section-title">
            Let’s talk
          </h2>
          <p className={styles.lead}>{contact.lead}</p>
          <p className={styles.follow}>{contact.followUp}</p>
          <a className={styles.email} href={`mailto:${email}`}>
            {email}
          </a>
          <ul className={styles.socials}>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
