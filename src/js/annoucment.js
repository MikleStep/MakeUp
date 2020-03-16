export const init = () => {
    $('.annoucment__slider--item').slick({
      dots: true,
      appendDots: $('.annoucment__slider--dots'),
      appendArrows: $('.annoucment__slider--controls'),
      prevArrow: '<button id="prev" type="button" class="btn arrow__icon--prev"></button>',
      nextArrow: '<button id="next" type="button" class="btn arrow__icon--next"></button>',
      adaptiveHeight: true,
      infinite: true,
      speed: 700,
      fade: true,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: 'linear'
  });
};