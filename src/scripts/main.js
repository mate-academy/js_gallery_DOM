'use strict';

const thumbs = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  if (!item.classList.contains('list-item__link')) {
    return;
  }
  largeImg.src = item.href;
});
