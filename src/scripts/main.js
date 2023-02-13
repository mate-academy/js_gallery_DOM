'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', e => {
  e.preventDefault();

  const bigImg = document.querySelector('.gallery__large-img');

  const smallImg = e.target.closest('.gallery__img');

  if (smallImg && smallImg.id !== 'largeImg') {
    const link = smallImg.parentElement.href;

    bigImg.setAttribute('src', link);
  }
});
