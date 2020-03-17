import {init as popupInit} from './popup.js';
import {init as annoucmentInit} from './annoucment.js';
import {init as aboutInit} from './about.js';
import {init as reviewsInit} from './reviews.js';
import {init as coursesinit} from './courses.js';

$(document).ready(function() {
  popupInit();
  annoucmentInit();
  aboutInit();
  coursesinit();
  reviewsInit();
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
  $(".btn").click(function () {
    $(".nav-bar").toggle(effect, options, duration);
  });

  $(".btn").click(function () {
    $(this).toggleClass("active");
  });
  $(document).mouseup(function (e) { 
    var block = $(".nav-bar");
    if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
      &&
      block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
      
      $(".nav-bar").hide(effect, options, duration);
      $('.btn').removeClass("active"); // если условия выполняются - скрываем наш элемент
    }
  });
  $(document).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".nav-bar").hide(effect, options, duration);
      $('.btn').removeClass("active");
    }
  });
});