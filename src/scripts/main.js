'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbCollection = document.querySelector('.gallery__list');

thumbCollection.addEventListener('click', function (e) {
  e.preventDefault();

  const target = e.target.closest('a');

  if (!target) {
    return;
  }

  if (!thumbCollection.contains(target)) {
    return;
  }

  selectThumb(target);
});

function selectThumb(thumb) {
  largeImg.src = thumb.href;
}
