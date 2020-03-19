import {init as popupInit} from './popup.js';
import {init as annoucmentInit} from './annoucment.js';
import {init as aboutInit} from './about.js';
import {init as reviewsInit} from './reviews.js';
import {init as coursesinit} from './courses.js';
$(document).ready(function() {
  popupInit();
  annoucmentInit();
  aboutInit();
  reviewsInit();
  coursesinit();
});


// Анимации



$(document).ready(function () {
  $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top - 50;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});

$(document).ready(function () {
  var options = {
    direction: "right"
  };
  var effect = 'slide';
  var duration = 400;
  $(".header__phone--btn").click(function () {
    $(".header__phone--nav-bar").toggle(effect, options, duration);
    $('.header__phone--btn').toggleClass("active");
  });

  $(document).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".header__phone--nav-bar").hide(effect, options, duration);
      $('.header__phone--btn').removeClass("active");
    }
  });
});

// Работа с виджетом recaptcha
// 1. Получить ответ гугл капчи
var captcha = grecaptcha.getResponse();

// 2. Если ответ пустой, то выводим сообщение о том, что пользователь не прошёл тест.
// Такую форму не будем отправлять на сервер.
if (!captcha.length) {
  // Выводим сообщение об ошибке
  $('#recaptchaError').text('* Вы не прошли проверку "Я не робот"');
} else {
  // получаем элемент, содержащий капчу
  $('#recaptchaError').text('');
}

// 3. Если форма валидна и длина капчи не равно пустой строке, то отправляем форму на сервер (AJAX)
if ((formValid) && (captcha.length)) {
  // добавить в formData значение 'g-recaptcha-response'=значение_recaptcha
  formData.append('g-recaptcha-response', captcha);
}

// 4. Если сервер вернул ответ error, то делаем следующее...
// Сбрасываем виджет reCaptcha
grecaptcha.reset();
// Если существует свойство msg у объекта $data, то...
if ($data.msg) {
  // вывести её в элемент у которого id=recaptchaError
  $('#recaptchaError').text($data.msg);
}