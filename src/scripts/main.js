'use strict';

const imageLarge = document.getElementById('largeImg');
const thumbs = document.querySelectorAll('.gallery__list li');

thumbs.forEach((photo) => {
  photo.addEventListener('click', (e) => {
    e.preventDefault();

    const link = photo.querySelector('a');
    const newAtr = link.href;

    imageLarge.src = newAtr;

    imageLarge.setAttribute('src', newAtr);
  });
});
