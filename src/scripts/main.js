'use strict';

const img = document.querySelector('.gallery__large-img');
const listImg = document.querySelector('.gallery__list');

listImg.addEventListener('click', evnt => {
  evnt.preventDefault();

  img.src = evnt.target.closest('.list-item__link').href;
});
