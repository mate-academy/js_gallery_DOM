'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (event) => {
  event.preventDefault();

  largeImg.src = event.target.closest('.list-item__link').href;
});
