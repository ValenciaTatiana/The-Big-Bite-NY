import styles from './ValueProps.module.css'

import ingredientsUrl from '../../../shared/assets/images/ingredients.png'
import bakedDailyUrl from '../../../shared/assets/images/baked-daily.png'
import smoothnessUrl from '../../../shared/assets/images/smoothness.png'
import loveUrl from '../../../shared/assets/images/love.png'

export const ValueProps = () => {
  return (
    <section className={styles.valuePropsSection}>
      <div className={styles.valuePropsContainer}>
        <div className={styles.valuePropsContent}>
          <h2 className={styles.valuePropsTitle}>No Hacemos galletas.
            <span className={styles.valuePropsTitleHighlight}>Hacemos momentos.</span>
          </h2>
          <p className={styles.valuePropsDescription}>Inspiradas en las calles de Nueva York y obsesionadas con el sabor y la calidad, hacemos galletas que se sienten diferentes. Más grandes, mejores.</p>
        </div>
        <div className={styles.valuePropsItem}>
          <div className={styles.valuePropsItemIcon}>
            <img src={ingredientsUrl} alt="Ingredientes reales y de calidad." />
            <div>
              <h3 className={styles.valuePropsItemTitle}>Ingredientes reales y de calidad.</h3>
              <p className={styles.valuePropsItemDescription}>Usamos ingredientes de calidad y reales para hacer nuestras galletas. No usamos ingredientes artificiales o de origen sintético.</p>
            </div>
          </div>

          <div className={styles.valuePropsItemIcon}>
            <img src={bakedDailyUrl} alt="Horneadas cada día." />
            <div>
              <h3 className={styles.valuePropsItemTitle}>Horneadas cada día.</h3>
              <p className={styles.valuePropsItemDescription}>Horneamos nuestras galletas cada día para asegurarnos de que estén frescas y crujientes.</p>
            </div>
          </div>

          <div className={styles.valuePropsItemIcon}>
            <img src={smoothnessUrl} alt="Textura suave y cremosa." />
            <div>
              <h3 className={styles.valuePropsItemTitle}>Textura suave y cremosa.</h3>
              <p className={styles.valuePropsItemDescription}>Nuestras galletas tienen una textura suave y cremosa, gracias a la combinación de ingredientes y la técnica de horneado.</p>
            </div>
          </div>

          <div className={styles.valuePropsItemIcon}>
            <img src={loveUrl} alt="Hechas con dedicación." />
            <div>
              <h3 className={styles.valuePropsItemTitle}>Hechas con dedicación.</h3>
              <p className={styles.valuePropsItemDescription}>Cada galleta es hecha con amor y dedicación, para que cada bocado sea una experiencia única y memorable.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
