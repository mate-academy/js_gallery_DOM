'use strict';

const list = document.querySelector('.gallery__list');
const mainImg = document.getElementById('largeImg');
const link = document.querySelectorAll('.list-item__link');

list.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target;

  for (let i = 0; i < link.length; i++) {
    if (link[i].contains(item)) {
      mainImg.src = link[i].href;
    }
  }
});
