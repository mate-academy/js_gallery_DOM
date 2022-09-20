'use strict';

const bigImg = document.querySelector('.gallery__large-img');
const listOfImgs = document.querySelector('.gallery__list');

listOfImgs.addEventListener('click', (clickEvent) => {
  const item = clickEvent.target.closest('.list-item__link');

  clickEvent.preventDefault();
  bigImg.src = item.getAttribute('href');
});
