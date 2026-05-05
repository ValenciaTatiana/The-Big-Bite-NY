import styles from './Hero.module.css'

import chipsUrl from '../../../shared/assets/images/chips.png'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroSubtitle}>Galletas estilo new york</h2>
          <h1 className={styles.heroTitle}>Suaves por dentro. <span className={styles.heroTitleHighlight}>Crujientes por fuera.</span></h1>
          <p className={styles.heroDescription}>Gruesas, Suaves y Cargada de mucho sabor.</p>
        </div>

        {/* Carrusel de imágenes */}
        <div className={styles.heroCarousel}>
          <div className={styles.heroCarouselItem}>
            <img src={chipsUrl} alt="Galleta 1" />
          </div>
        </div>
      </div>
    </section>
  )
}