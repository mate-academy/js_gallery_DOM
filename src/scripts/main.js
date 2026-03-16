'use strict';

const image = document.querySelectorAll('.list-item');
const mainImage = document.querySelector('.gallery__large-img');

image.forEach((img) => {
  img.addEventListener('click', (e) => {
    e.preventDefault();

    let newSrc;

    if (e.target.tagName === 'IMG') {
      newSrc = e.target.parentNode.href;
    } else if (e.target.tagName === 'A') {
      newSrc = e.target.href;
    }

    mainImage.src = newSrc;
  });
});
