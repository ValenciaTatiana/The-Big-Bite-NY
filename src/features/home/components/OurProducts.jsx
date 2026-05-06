import styles from './OurProducts.module.css';

import chipsCookie from '../../../shared/assets/images/chips.png';
import redCookie from '../../../shared/assets/images/red.png';
import brownieCookie from '../../../shared/assets/images/brownie.png';
import mandmCookie from '../../../shared/assets/images/m-and-m.png';

const PRODUCTS = [
  {
    theme: 'chips',
    image: chipsCookie,
    alt: 'Chips Cookie',
    title: 'La clásica chunk chips',
    description:
      'Un clásico que nunca falla. Deliciosas galletas con chips grandes de chocolate.',
  },
  {
    theme: 'redVelvet',
    image: redCookie,
    alt: 'Red Velvet Cookie',
    title: 'Explosión Red Velvet',
    description:
      'Una explosión de sabor con galletas red velvet y chips de chocolate blanco. Suave, rica e iconica.',
  },
  {
    theme: 'brownie',
    image: brownieCookie,
    alt: 'Brownie Cookie',
    title: 'Brownie Chocolate',
    description:
      '¡El brownie perfecto hecho galleta! Con intenso sabor a cacao y trozos de chocolate derretido..',
  },
  {
    theme: 'mandm',
    image: mandmCookie,
    alt: 'M&M Cookie',
    title: 'M&M Cookie',
    description:
      "Para los amantes de los M&M's. Galletas con trozos de chocolate y M&M's.",
  },
];

const themeClassMap = {
  chips: styles.ourProductsItemChips,
  redVelvet: styles.ourProductsItemRedVelvet,
  brownie: styles.ourProductsItemBrownie,
  mandm: styles.ourProductsItemMandm,
};

export const OurProducts = () => {
  return (
    <>
      {/* Revisar cómo usar un hook de react para ir mostrando los productos a medida de que se hace scroll - inspiración del sitio web */}
      <section className={styles.ourProducts}>
        <div className={styles.ourProductsContainer}>
          <h2 className={styles.ourProductsTitle}>Nuestros productos</h2>
        </div>

        {/*Revisar como ir mostrando los productos y que todo el fondo cambie de color de acuerdo al producto que se está mostrando*/}
        <div className={styles.ourProductsItems}>
          {PRODUCTS.map(
            ({ theme, image, alt, title, description }) => (
              <div key={theme} className={`${styles.ourProductsItem} ${themeClassMap[theme]}`}>
                <div className={styles.ourProductsItemImage}>
                  <img src={image} alt={alt} />
                </div>
                <div className={styles.ourProductsItemContent}>
                  <h3 className={styles.ourProductsItemTitle}>{title}</h3>
                  <p className={styles.ourProductsItemDescription}>
                    {description}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </section>
    </>
  );
};