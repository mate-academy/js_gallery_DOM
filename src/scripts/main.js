'use strict';

const pictures = document.querySelector('.gallery__list');
const largePic = document.querySelector('#largeImg');

pictures.addEventListener('click', (event) => {
  event.preventDefault();

  largePic.src = event.target.closest('a').href;
});
