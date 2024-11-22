'use strict';

const bigImg = document.getElementById('largeImg');

const images = document.querySelectorAll('.list-item__link');

for (const image of images) {
  image.addEventListener('click', (e) => {
    e.preventDefault();

    const place = image.getAttribute('href');
    const title = image.getAttribute('title');

    bigImg.setAttribute('src', place);
    bigImg.setAttribute('title', title);
  });
}
