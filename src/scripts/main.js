'use strict';

const smallImage = document.querySelectorAll('.gallery__img');
const imageSrc = ['first', 'second', 'third', 'fourth', 'fifth'];
const baseUrl = 'http://localhost:3001';

smallImage.forEach((img, index) => {
  img.addEventListener('click', (e) => {
    e.preventDefault();

    const bigImage = document.getElementById('largeImg');

    bigImage.src = `${baseUrl}/images/landscape-${imageSrc[index - 1]}.png`;
  });
});
