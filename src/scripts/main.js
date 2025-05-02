'use strict';

document.querySelector('.gallery').onclick = function () {
  const img = event.target.closest('img');

  if (!img) {
    return;
  }
  document.querySelector('.main-image').src = img.src;
};
