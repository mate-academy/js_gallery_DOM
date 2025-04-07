'use strict';

const gallery = document.querySelector('.gallery');
const imageSrc = ['first', 'second', 'third', 'fourth', 'fifth'];

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const clickedElement = e.target.closest('.gallery__thumb');

  if (!clickedElement) {
    return;
  }

  const bigImage = document.getElementById('largeImg');
  const thumbnails = [...document.querySelectorAll('.gallery__thumb')];
  const index = thumbnails.indexOf(clickedElement);

  bigImage.src = `http://localhost:3001/images/landscape-${imageSrc[index]}.png`;
});
