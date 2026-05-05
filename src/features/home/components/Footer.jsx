import { FaFacebookF, FaInstagram, FaRegEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerPhrase}>
            <p className={styles.footerPhraseText}>
              La vida es corta. <span className={styles.footerPhraseTextHighlight}>Cómete una galleta.</span>
            </p>
          </div>

          <div className={styles.footerSocial}>
            <a href="/" className={styles.footerSocialLink}>
              <FaRegEnvelope />
            </a>
            <a href="/" className={styles.footerSocialLink}>
              <FaFacebookF />
            </a>
            <a href="/" className={styles.footerSocialLink}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
