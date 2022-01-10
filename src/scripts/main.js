'use strict';

const images = document.querySelectorAll('img');
const largeImage = document.querySelector('.gallery__large-img');

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.classList.contains('gallery__thumb')) {
      const big = e.target.parentNode.href;

      largeImage.setAttribute('src', big);
    };
  });
}
