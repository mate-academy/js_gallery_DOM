'use strict';

const largeImg = document.getElementById('largeImg');
const thumbsLinks = document.querySelector('.gallery__list');

thumbsLinks.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  const imgSrc = link.getAttribute('href');

  largeImg.src = imgSrc;
});
