export const init = () => {
  
  $('.about__slider--item').on(`init reInit`, function (event, slick) {
    console.log(slick.slideCount);
    $('.about__slider--counter').text(1 + ' / ' + slick.slideCount);
  })
  $('.about__slider--item').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
    $('.about__slider--counter').text(currentSlide + 1 + ' / ' + slick.slideCount);
  })
  $('.about__slider--item').slick({
    dots: true,
    appendDots: $('.about__slider--dots'),
    appendArrows: $('.about__slider--controls'),
    prevArrow: '<button id="prev" type="button" class="btn arrow__icon--prev"><i></i></button>',
    nextArrow: '<button id="next" type="button" class="btn arrow__icon--next"><i></i></button>',
    infinite: true,
    adaptiveHeight: true,
    speed: 700,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear'
  });
  
};