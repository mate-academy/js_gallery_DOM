'use strict';

const displayedImage = document.getElementById('largeImg');

const images = document.getElementsByClassName('gallery__img gallery__thumb');
const links = document.getElementsByClassName('list-item__link');

for (const link of links) {
  link.addEventListener('click', () => {
    event.preventDefault();
    displayedImage.setAttribute('src', link.getAttribute('href'));
  });
}

for (const image of images) {
  image.addEventListener('click', () => {
    event.preventDefault();
    displayedImage.setAttribute('src', image.parentNode.getAttribute('href'));
  });
}
