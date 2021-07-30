'use strict';

const mainImage = document.querySelector('#largeImg');

const images = document.querySelector('.gallery__list').children;

for (const item of images) {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    mainImage.src = item.firstElementChild.href;
  });
}
