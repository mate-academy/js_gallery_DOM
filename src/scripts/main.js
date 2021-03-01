'use strict';

const galeryList = document.querySelector('.gallery__list');
const mainPicture = document.getElementById('largeImg');

galeryList.addEventListener('click', e => {
  e.preventDefault();

  const closestLink = e.target.closest('.list-item__link');

  mainPicture.src = closestLink.href;
});
