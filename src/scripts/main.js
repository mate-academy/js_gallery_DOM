'use strict';

const list = document.querySelector('.gallery');
const largeImg = document.getElementById('largeImg');

list.addEventListener('click', e => {
  e.preventDefault();

  const item = e.target;

  if (!item.classList.contains('gallery__thumb')
    && !item.classList.contains('list-item__link')) {
    return;
  }

  const closestLink = item.closest('.list-item__link');
  const mainLink = closestLink.href;

  largeImg.src = mainLink;
});
