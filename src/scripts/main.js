'use strict';

const mainImg = document.querySelector('.gallery__large-img');
const ul = document.querySelector('.gallery__list');

ul.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const clickTarget = clickEvent.target;

  if (clickTarget.tagName === 'IMG') {
    mainImg.src = clickTarget.parentElement.href;
  }
});
