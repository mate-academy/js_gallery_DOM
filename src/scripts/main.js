'use strict';

// debugger;

const largeImg = document.getElementById('largeImg');

const imgesListItem = document.querySelector('.gallery__list');

imgesListItem.addEventListener('click', (e) => {
  e.preventDefault();

  const currentImg = document.elementFromPoint(e.clientX, e.clientY);

  const srcCurrentImg = currentImg.getAttribute('src');

  largeImg.setAttribute('src', srcCurrentImg);
  largeImg.style.height = '348px';
});
