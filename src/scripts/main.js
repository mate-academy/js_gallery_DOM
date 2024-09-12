'use strict';

const thumbs = document.querySelector('.gallery__list');
const bigImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', clickEvent => {
  clickEvent.preventDefault();

  const link = clickEvent.target.closest('.list-item__link');

  if (link) {
    bigImg.src = link.href;
  }
});
