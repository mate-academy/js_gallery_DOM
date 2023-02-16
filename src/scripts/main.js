'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link').href;

  largeImg.src = link;
});
