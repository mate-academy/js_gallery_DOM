'use strict';

const images = document.getElementsByClassName('list-item__link');
const mainImage = document.getElementById('largeImg');

for (const image of images) {
  image.addEventListener('click', (el) => {
    el.preventDefault();
    mainImage.src = image.href;
  }
  );
}
