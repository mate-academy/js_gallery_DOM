'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('list-item__link')) {
    largeImg.src = e.target.href;
  }

  if (e.target.classList.contains('gallery__img')) {
    const src = e.target.src.split('8080')[1].split('-thumb')[0];

    largeImg.src = '/images' + src + '.png';
  }
});
