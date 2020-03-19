export const init = () => {
  $('.header__button').click(function () {
    $('.calendar__container').addClass('calendar__container--shown');
    $('body').addClass('modal-open');
  });
  $('.header__phone--button').click(function () {
    $('.calendar__container').addClass('calendar__container--shown');
    $('body').addClass('modal-open');
  });
  $('.cta__btn').click(function () {
    $('.calendar__container').addClass('calendar__container--shown');
    $('body').addClass('modal-open');
  });
  $('.modal__button--course').click(function () {
    $('.calendar__container').addClass('calendar__container--shown');
    $('body').addClass('modal-open');
  });
  $('.calendar__window--close').click(function () {
    $('.calendar__container').removeClass('calendar__container--shown');
    $('body').removeClass('modal-open');
  });
  $(document).mouseup(function (e) {
    var container = $(".calendar__container");
    if (container.has(e.target).length === 0 && container.hasClass('calendar__container--shown')) {
      container.removeClass('calendar__container--shown');
      $('body').removeClass('modal-open');
    }
  });

}