'use strict';

const galeryList = document.querySelector('.gallery__list');
const MainPicture = document.getElementById('largeImg');

galeryList.addEventListener('click', e => {
  e.preventDefault();

  const closestLink = e.target.closest('.list-item__link');

  MainPicture.src = closestLink.href;
});
