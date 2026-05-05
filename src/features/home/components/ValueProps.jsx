import ingredientsUrl from '../../../shared/assets/images/ingredients.png'
import bakedDailyUrl from '../../../shared/assets/images/baked-daily.png'
import smoothnessUrl from '../../../shared/assets/images/smoothness.png'
import loveUrl from '../../../shared/assets/images/love.png'

export const ValueProps = () => {
  return (
    <section className="value-props">
      <div className="value-props__container">
        <div className="value-props__content">
          <h2 className="value-props__title">No Hacemos galletas.
            <span className="value-props__title-highlight">Hacemos momentos.</span>
          </h2>
          <p className="value-props__description">Inspiradas en las calles de Nueva York y obsesionadas con el sabor y la calidad, hacemos galletas que se sienten diferentes. Mas grandes, Mejores.</p>
        </div>
        <div className="value-props__item">
          <div className="value-props__item-icon">
            <img src={ingredientsUrl} alt="Ingredientes reales y de calidad." />
            <h3 className="value-props__item-title">Ingredientes reales y de calidad.</h3>
          </div>

          <div className="value-props__item-icon">
            <img src={bakedDailyUrl} alt="Horneadas cada día." />
            <h3 className="value-props__item-title">Horneadas cada día.</h3>
          </div>

          <div className="value-props__item-icon">
            <img src={smoothnessUrl} alt="Textura suave y cremosa." />
            <h3 className="value-props__item-title">Textura suave y cremosa.</h3>
          </div>

          <div className="value-props__item-icon">
            <img src={loveUrl} alt="Hechas con dedicación." />
            <h3 className="value-props__item-title">Hechas con dedicación.</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
