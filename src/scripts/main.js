'use strict';

const mainImg = document.getElementById('largeImg');
const images = document.querySelectorAll('.gallery__img');

for (const item of images) {
  item.addEventListener('click', (elem) => {
    elem.preventDefault();

    mainImg.src = item.src;
  });
};
