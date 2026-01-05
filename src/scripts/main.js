'use strict';

const mainImg = document.getElementById('largeImg');

const item = document.querySelector('.gallery__list');

item.addEventListener('click', () => {
  event.preventDefault();

  const link = event.target.closest('a');

  if (link) {
    mainImg.setAttribute('src', link.href);
  }
});
