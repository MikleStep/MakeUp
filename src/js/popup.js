export const init = () => {
  $(document).mouseup(function (e) {
    var container = $(".calendar__container");
    if (container.has(e.target).length === 0 && container.hasClass('calendar__container--shown')) {
      container.removeClass('calendar__container--shown');
      $('body').removeClass('modal-open');
    }
  });
  $(function () {
    var two_modal = function (id_modal_1, id_modal_2) {
      var show_modal_2 = false;
      $('a[href="' + id_modal_2 + '"]').click(function (e) {
        e.preventDefault();
        show_modal_2 = true;
        $(id_modal_1).modal('hide');
      });
      $(id_modal_1).on('hidden.bs.modal', function (e) {
        if (show_modal_2) {
          show_modal_2 = false;
          $(id_modal_2).modal('show');
        }
      })

    }('#modal-yourself', '#modal-course');

  });
}