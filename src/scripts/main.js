'use strict';

const listOfThumbs = document.getElementById('thumbs');
const mainImage = document.getElementById('largeImg');

listOfThumbs.addEventListener('click', (eventClick) => {
  eventClick.preventDefault();

  const link = eventClick.target.closest('.list-item__link');

  mainImage.src = link.href;
});
