'use strict';

const images = document.querySelectorAll('li');
const mainImage = document.querySelector('#largeImg');

for (const image of images) {
  image.addEventListener('click', (clickEvent) => {
    clickEvent.preventDefault();

    const target = clickEvent.target.closest('.list-item__link');

    mainImage.src = target.href;
  });
}
