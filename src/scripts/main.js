'use strict';

const listG = document.querySelector('.gallery__list');

listG.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('img');

  if (link) {
    const mainG = document.querySelector('#largeImg');

    mainG.src = link.src;
  }
});
