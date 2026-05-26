import styles from './CustomBox.module.css';
import customBoxAvifUrl from '../../../shared/assets/images/caja-spanish.avif';
import customBoxWebpUrl from '../../../shared/assets/images/caja-spanish.webp';
import customBoxUrl from '../../../shared/assets/images/caja-spanish.png';
export const CustomBox = () => {
  return (
    <>
      <section className={styles.customBox}>
        <div className={styles.customBoxContainer}>
          <div className={styles.customBoxContent}>
            <h2 className={styles.customBoxTitle}>Mejor Juntas. <span className={styles.customBoxTitleHighlight}>Arma tu caja.</span></h2>
            <p className={styles.customBoxDescription}>¿No puedes decidir? Arma tu caja de 4, 6 o 12 galletas y mezcla tus sabores favoritos.</p>
          </div>
          <picture>
            <source srcSet={customBoxAvifUrl} type="image/avif" />
            <source srcSet={customBoxWebpUrl} type="image/webp" />
            <img src={customBoxUrl} alt="Caja de galletas" className={styles.customBoxImage} />
          </picture>
        </div>
      </section>
    </>
  )
}
