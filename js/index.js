TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
  })

  TweenMax.to(".overlay span", 2, {
    delay: .3,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
  })

  TweenMax.to(".overlay", 2, {
    delay: 1,
    top: "-100%",
    ease: Expo.easeInOut
  })

  TweenMax.from(".ellipse__container", 1, {
    delay: 2,
    opacity: 0,
    ease: Expo.easeInOut
  })

  TweenMax.from(".yellow", 1, {
    delay: 3.5,
    opacity: 0,
    ease: Expo.easeInOut
  })

  TweenMax.from(".ellipse__circle1", 1, {
    delay: 2.4,
    opacity: 0,
    ease: Expo.easeInOut
  })

  TweenMax.from(".ellipse__circle2", 1, {
    delay: 2.6,
    opacity: 0,
    ease: Expo.easeInOut
  })

  TweenMax.from(".header__logo", 1, {
    delay: 3,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
  })

  TweenMax.staggerFrom(".header__menu-links ul li", 1, {
    delay: 3.2,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
  }, 0.08)

  TweenMax.from(".header__scrolldown", 1, {
    delay: 3.4,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
  })

  TweenMax.from(".hero__text .hero__title", 1, {
    delay: 3,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
  })

  TweenMax.from(".hero__text p", 1, {
    delay: 3.2,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
  })

  TweenMax.from(".hero__watchnow", 1, {
    delay: 3.4,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut
  })

  TweenMax.staggerFrom(".hero__media ul li", 1, {
    delay: 3,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
  }, 0.08)