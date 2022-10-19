'use strict';

const mainImage = document.getElementById('largeImg');
const gallery = document.querySelector('.gallery__list');

for (const item of gallery.querySelectorAll('.list-item')) {
  item.addEventListener('click', () => {
    event.preventDefault();
    mainImage.src = item.children[0].href;
  });
}
