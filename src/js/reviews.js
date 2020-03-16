export const init = () => {
  $('.reviews__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 500,
    arrow: true,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 920,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
      }
    }]
  });
};