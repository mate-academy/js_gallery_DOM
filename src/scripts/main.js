'use strict';

const smallImage = document.querySelectorAll('.gallery__thumb');
const imageSrc = ['first', 'second', 'third', 'fourth', 'fifth'];

smallImage.forEach((img, index) => {
  img.addEventListener('click', (e) => {
    e.preventDefault();

    const bigImage = document.getElementById('largeImg');

    bigImage.src = `http://localhost:3001/images/landscape-${imageSrc[index]}.png`;
  });
});
