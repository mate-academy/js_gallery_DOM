'use strict';

const getLargeImg = document.querySelector('#largeImg');

const getLittle =
  document.querySelector('#thumbs') || document.querySelector('.thumbs');

if (!getLargeImg || !getLittle) {
} else {
  getLittle.addEventListener('click', function (e) {
    const box = e.target.closest('a');

    if (!box) {
      return;
    }

    e.preventDefault();

    getLargeImg.src = box.href;
    getLargeImg.alt = box.title || '';
  });
}
