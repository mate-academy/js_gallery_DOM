'use strict';

const thumbCollection = document.querySelector('.gallery__list');

thumbCollection.addEventListener('click', function (e) {
  e.preventDefault();

  const largeImg = document.querySelector('#largeImg');
  const target = e.target.closest('a');

  if (!target) {
    return;
  }

  if (!thumbCollection.contains(target)) {
    return;
  }

  largeImg.src = target.href;
});
