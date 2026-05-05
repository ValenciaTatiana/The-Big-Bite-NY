import { FaFacebookF, FaInstagram, FaRegEnvelope } from 'react-icons/fa'

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__phrase">
            <p className="footer__phrase-text">
              La vida es corta. <span className="footer__phrase-text-highlight">Cómete una galleta.</span>
            </p>
          </div>

          <div className="footer__social">
            <a href="/" className="footer__social-link">
              <FaRegEnvelope />
            </a>
            <a href="/" className="footer__social-link">
              <FaFacebookF />
            </a>
            <a href="/" className="footer__social-link">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
