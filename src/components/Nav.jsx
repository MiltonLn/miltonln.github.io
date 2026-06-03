import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

const sections = [
  { id: 'focus', label: 'Now' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'interests', label: 'Life' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <header className={styles.bar}>
        <div className={`container ${styles.inner}`}>
          <a className={styles.brand} href="#top">
            Milton Lenis
          </a>
          <button
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
          <nav
            id="primary-nav"
            aria-label="Primary"
            className={`${styles.nav} ${open ? styles.navOpen : ''}`}
          >
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)}>
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}
