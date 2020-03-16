import {init as popupInit} from './popup.js';
import {init as annoucmentInit} from './annoucment.js';
import {init as aboutInit} from './about.js';
import {init as reviewsInit} from './reviews.js';
import {init as headerinit} from './header.js';

$(document).ready(function() {
  popupInit();
  annoucmentInit();
  aboutInit();
  reviewsInit();
  headerinit();
});