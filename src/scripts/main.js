'use strict';

const list = document.querySelector('.gallery__list');
const img = document.querySelector('.gallery__img');

list.addEventListener('click', e => {
  e.preventDefault();

  const formatBigImage = e.target.src
    .replace(/landscape/g, 'images/landscape')
    .split('-')
    .slice(0, e.target.src.split('-').length - 1)
    .join('-') + '.png';

  img.src = formatBigImage;
});
