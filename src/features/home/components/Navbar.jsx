import isotipoUrl from '../../../shared/assets/images/isotipo-sin-fondo.svg'

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={isotipoUrl} alt="The Big Bite NY" />
        </div>

        <nav className="navbar__menu">
          <a href="/" className="navbar__menu-link">About us</a>
          <a href="/" className="navbar__menu-link">Our products</a>
          <a href="/" className="navbar__menu-link">Contact us</a>
        </nav>
      </div>
    </header>
  )
}
