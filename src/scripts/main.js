'use strict';

const mainImg = document.getElementById('largeImg');

const links = document.querySelector('.gallery__list');

links.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  e.preventDefault();

  if (!link) {
    return;
  }

  mainImg.src = link.getAttribute('href');
});
