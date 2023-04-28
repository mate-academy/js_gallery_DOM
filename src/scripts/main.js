'use strict';

const gallery = document.querySelector('#largeImg');
const thumbs = document.querySelectorAll('.list-item__link');

for (const image of thumbs) {
  image.addEventListener('click', (evt) => {
    evt.preventDefault();
    gallery.src = image.href;
  });
}
