'use strict';

const largeImg = document.querySelector('#largeImg');
const nav = document.querySelector('.gallery__list');

nav.addEventListener('click', (event) => {
  event.preventDefault();

  const link = event.target.closest('.list-item');
  const title = link.querySelector('a').title;

  if (!link) {
    return;
  }

  if (title === 'Image 1') {
    largeImg.src = './images/landscape-first.png';
  }

  if (title === 'Image 2') {
    largeImg.src = './images/landscape-second.png';
  }

  if (title === 'Image 3') {
    largeImg.src = './images/landscape-third.png';
  }

  if (title === 'Image 4') {
    largeImg.src = './images/landscape-fourth.png';
  }

  if (title === 'Image 5') {
    largeImg.src = './images/landscape-fifth.png';
  }
});
