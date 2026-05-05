import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import isotipoUrl from '../../../shared/assets/images/isotipo-sin-fondo.svg'
import styles from './Navbar.module.css'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open)
    return () => document.body.classList.remove('overflow-hidden')
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.bar}>
          <Link to="/" className={styles.logoContainer}>
            {/* <div className={styles.logo}>
              <img src={isotipoUrl} alt="The Big Bite NY" />
            </div> */}
            <div>
              <span className={styles.logoText}>The Big Bite NY</span>
            </div>
          </Link>

          <button
            type="button"
            className={styles.toggle}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <FaTimes aria-hidden /> : <FaBars aria-hidden />}
          </button>
        </div>

        <nav
          id={menuId}
          className={`${styles.menu} ${open ? styles.menuOpen : ''}`}
          aria-label="Principal"
          inert={!open}
        >
          <a href="/" className={styles.menuLink} onClick={closeMenu}>
            About us
          </a>
          <a href="/" className={styles.menuLink} onClick={closeMenu}>
            Our products
          </a>
          <a href="/" className={styles.menuLink} onClick={closeMenu}>
            Contact us
          </a>
        </nav>
      </header>

      <button
        type="button"
        className={`${styles.backdrop} ${open ? styles.backdropVisible : ''}`}
        aria-hidden="true"
        tabIndex={-1}
        onClick={closeMenu}
      />
    </>
  )
}
