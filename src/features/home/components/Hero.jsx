export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h2 className="hero__subtitle">Galletas estilo new york</h2>
          <h1 className="hero__title">Suaves por dentro. <span className="hero__title-highlight">Crujientes por fuera.</span></h1>
          <p>Gruesas, Suaves y Cargada de mucho sabor.</p>
        </div>

        {/* Carrusel de imágenes */}
        <div className="hero__carousel">
          <div className="hero__carousel-item">
          </div>
        </div>
      </div>
    </section>
  )
}
