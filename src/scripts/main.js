'use strict';

const gallery = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

gallery.addEventListener('click', (eve) => {
  eve.preventDefault();

  const nowElement = eve.target.closest('a');

  if (nowElement) {
    const newSrc = nowElement.href;

    largeImg.setAttribute('src', newSrc);
  }
});
