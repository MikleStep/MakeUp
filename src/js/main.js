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