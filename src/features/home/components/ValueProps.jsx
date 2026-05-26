import styles from './ValueProps.module.css'

import ingredientsAvifUrl from '../../../shared/assets/images/ingredients.avif'
import ingredientsWebpUrl from '../../../shared/assets/images/ingredients.webp'
import ingredientsUrl from '../../../shared/assets/images/ingredients.png'
import bakedDailyAvifUrl from '../../../shared/assets/images/baked-daily.avif'
import bakedDailyWebpUrl from '../../../shared/assets/images/baked-daily.webp'
import bakedDailyUrl from '../../../shared/assets/images/baked-daily.png'
import smoothnessAvifUrl from '../../../shared/assets/images/smoothness.avif'
import smoothnessWebpUrl from '../../../shared/assets/images/smoothness.webp'
import smoothnessUrl from '../../../shared/assets/images/smoothness.png'
import loveAvifUrl from '../../../shared/assets/images/love.avif'
import loveWebpUrl from '../../../shared/assets/images/love.webp'
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
            <picture>
              <source srcSet={ingredientsAvifUrl} type="image/avif" />
              <source srcSet={ingredientsWebpUrl} type="image/webp" />
              <img src={ingredientsUrl} alt="Ingredientes reales y de calidad." />
            </picture>
            <div>
              <h3 className={styles.valuePropsItemTitle}>Ingredientes reales y de calidad.</h3>
              <p className={styles.valuePropsItemDescription}>Usamos ingredientes de calidad y reales para hacer nuestras galletas. No usamos ingredientes artificiales o de origen sintético.</p>
            </div>
          </div>

          <div className={styles.valuePropsItemIcon}>
            <picture>
              <source srcSet={bakedDailyAvifUrl} type="image/avif" />
              <source srcSet={bakedDailyWebpUrl} type="image/webp" />
              <img src={bakedDailyUrl} alt="Horneadas cada día." />
            </picture>
            <div>
              <h3 className={styles.valuePropsItemTitle}>Horneadas cada día.</h3>
              <p className={styles.valuePropsItemDescription}>Horneamos nuestras galletas cada día para asegurarnos de que estén frescas y crujientes.</p>
            </div>
          </div>

          <div className={styles.valuePropsItemIcon}>
            <picture>
              <source srcSet={smoothnessAvifUrl} type="image/avif" />
              <source srcSet={smoothnessWebpUrl} type="image/webp" />
              <img src={smoothnessUrl} alt="Textura suave y cremosa." />
            </picture>
            <div>
              <h3 className={styles.valuePropsItemTitle}>Textura suave y cremosa.</h3>
              <p className={styles.valuePropsItemDescription}>Nuestras galletas tienen una textura suave y cremosa, gracias a la combinación de ingredientes y la técnica de horneado.</p>
            </div>
          </div>

          <div className={styles.valuePropsItemIcon}>
            <picture>
              <source srcSet={loveAvifUrl} type="image/avif" />
              <source srcSet={loveWebpUrl} type="image/webp" />
              <img src={loveUrl} alt="Hechas con dedicación." />
            </picture>
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
