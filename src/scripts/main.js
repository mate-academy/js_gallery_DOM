'use strict';

const list = document.querySelector('.gallery__list');

list.addEventListener('click', e => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }

  const largeImg = document.getElementById('largeImg');
  const newSrc = item.getAttribute('href');

  if (newSrc) {
    largeImg.src = newSrc;
  }
});
