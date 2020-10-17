'use strict';

const mainImg = document.querySelector('.gallery__large-img');
const picturesList = document.querySelector('.gallery__list');

picturesList.addEventListener('click', (event) => {
  event.preventDefault();
  mainImg.src = event.target.closest('a').href;
});
