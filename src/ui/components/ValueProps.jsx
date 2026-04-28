import React from 'react'

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
                        <img src="/public/img/Ingredients.png" alt="Ingredientes reales y de calidad." />
                        <h3 className="value-props__item-title">Ingredientes reales y de calidad.</h3>
                    </div>

                    <div className="value-props__item-icon">
                        <img src="/public/img/Baked daily.png" alt="Ingredientes reales y de calidad." />
                        <h3 className="value-props__item-title">Ingredientes reales y de calidad.</h3>
                    </div>

                    <div className="value-props__item-icon">
                        <img src="/public/img/Smoothness.png" alt="Ingredientes reales y de calidad." />
                        <h3 className="value-props__item-title">Ingredientes reales y de calidad.</h3>
                    </div>

                    <div className="value-props__item-icon">
                        <img src="/public/img/Love.png" alt="Ingredientes reales y de calidad." />
                        <h3 className="value-props__item-title">Ingredientes reales y de calidad.</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}