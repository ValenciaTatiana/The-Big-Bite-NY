import styles from './Hero.module.css'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import isotipoUrl from '../../../shared/assets/images/isotipo-sin-fondo.svg'
import chipsAvifUrl from '../../../shared/assets/images/chips.avif'
import chipsWebpUrl from '../../../shared/assets/images/chips.webp'
import chipsUrl from '../../../shared/assets/images/chips.png'
import redAvifUrl from '../../../shared/assets/images/red.avif'
import redWebpUrl from '../../../shared/assets/images/red.webp'
import redUrl from '../../../shared/assets/images/red.png'
import brownieAvifUrl from '../../../shared/assets/images/brownie.avif'
import brownieWebpUrl from '../../../shared/assets/images/brownie.webp'
import brownieUrl from '../../../shared/assets/images/brownie.png'
import mAndMAvifUrl from '../../../shared/assets/images/m-and-m.avif'
import mAndMWebpUrl from '../../../shared/assets/images/m-and-m.webp'
import mAndMUrl from '../../../shared/assets/images/m-and-m.png'

const cookies = [
  { avif: chipsAvifUrl, webp: chipsWebpUrl, image: chipsUrl, className: 'cookieChips' },
  { avif: redAvifUrl, webp: redWebpUrl, image: redUrl, className: 'cookieRed' },
  { avif: brownieAvifUrl, webp: brownieWebpUrl, image: brownieUrl, className: 'cookieBrownie' },
  { avif: mAndMAvifUrl, webp: mAndMWebpUrl, image: mAndMUrl, className: 'cookieMAndM' },
]

export const Hero = () => {
  const cookieRefs = useRef([])

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(cookieRefs.current,
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, duration: 0.8, stagger: 0.12, ease: 'back.out(1.4)' },
      )

      cookieRefs.current.forEach((cookie, index) => {
        gsap.to(cookie, {
          y: index % 2 === 0 ? -18 : 18,
          rotation: index % 2 === 0 ? 5 : -5,
          duration: 3.8 + index * 0.45,
          delay: index * 0.18,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })
    })

    return () => context.revert()
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroSubtitle}>Galletas estilo new york</h2>
          <h1 className={styles.heroTitle}>Suaves por dentro. <span className={styles.heroTitleHighlight}>Crujientes por fuera.</span></h1>
          <p className={styles.heroDescription}>Gruesas, Suaves y Cargada de mucho sabor.</p>
        </div>

        <div className={styles.heroCookies} aria-hidden="true">
          {cookies.map((cookie, index) => (
            <div
              key={cookie.className}
              ref={(element) => { cookieRefs.current[index] = element }}
              className={`${styles.cookie} ${styles[cookie.className]}`}
            >
              <picture>
                <source srcSet={cookie.avif} type="image/avif" />
                <source srcSet={cookie.webp} type="image/webp" />
                <img src={cookie.image} alt="" />
              </picture>
            </div>
          ))}
        </div>

        <div className={styles.heroDetails} aria-hidden="true">
          <img className={styles.detailTop} src={isotipoUrl} alt="" />
          <img className={styles.detailLeft} src={isotipoUrl} alt="" />
          <img className={styles.detailRight} src={isotipoUrl} alt="" />
          <img className={styles.detailBottom} src={isotipoUrl} alt="" />
          <img className={styles.detailTopRight} src={isotipoUrl} alt="" />
          <img className={styles.detailFarLeft} src={isotipoUrl} alt="" />
          <img className={styles.detailFarRight} src={isotipoUrl} alt="" />
          <img className={styles.detailBottomLeft} src={isotipoUrl} alt="" />
        </div>
      </div>
    </section>
  )
}
