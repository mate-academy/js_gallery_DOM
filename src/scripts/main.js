'use strict';

document.querySelector('.gallery').addEventListener('click', function (ev) {
  if (ev.target.tagName === 'IMG') {
    document.querySelector('.main-image').src = ev.target.src;
  }
});
