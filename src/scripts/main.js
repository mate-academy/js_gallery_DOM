'use strict';

function extractImageName(link) {
  return link.split('/')
    .slice(3)
    .join('')
    .split('-')
    .slice(0, 2)
    .join('-');
}

const largeImage = document.getElementById('largeImg');

const thumbImages = document.querySelectorAll('.gallery__thumb');

const thumbLinks = document.querySelectorAll('.list-item__link');

thumbLinks.forEach(link => {
  link.href = '#largeImg';
});

[...thumbImages]
  .forEach(thumbImage => thumbImage.addEventListener('click', () => {
    const imageName = extractImageName(thumbImage.src);

    largeImage.src = `/images/${imageName}.png`;
  }));
