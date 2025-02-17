'use strict';

const lagreImg = document.querySelector('#largeImg');

const galery = document.querySelector('.gallery__list');

galery.addEventListener('click', (e) => {
  const link = e.target.closest('.gallery__img');

  if (!link) {
    return;
  }

  e.preventDefault();
  lagreImg.setAttribute('src', link.getAttribute('src'));
});
