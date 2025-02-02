'use strict';

const container = document.querySelector('.gallery__list');
const mainPicture = document.querySelector('#largeImg');

container.addEventListener('click', (e) => {
  e.preventDefault();

  mainPicture.src = e.target.closest('a').href;
});
