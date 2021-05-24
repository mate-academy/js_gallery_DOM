'use strict';

const largeImg = document.querySelector('#largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (act) => {
  act.preventDefault();

  if (act.target.classList.contains('gallery__img')) {
    largeImg.src = act.target.src;
  } else if (act.target.classList.contains('list-item__link')) {
    largeImg.src = act.target.href;
  }
});
