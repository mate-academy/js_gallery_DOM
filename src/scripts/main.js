'use strict';

const largeImage = document.getElementById('largeImg');
const thumbs = document.getElementById('thumb');

thumbs.addEventListener('click', elem => {
  elem.preventDefault();

  const link = elem.target.closest('.list-item__link').href;

  largeImage.src = link;
});
