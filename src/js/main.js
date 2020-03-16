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
  headerinit();
});

$(".btn").click(function () {
  var options = {
    direction: "right"
  };
  var effect = 'slide';
  var duration = 400;
  $(".nav-bar").toggle(effect, options, duration);
});

$(".btn").click(function () {
  $(this).toggleClass("active");
});