'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const url = window.location.origin;

  if (e.target.classList.contains('list-item__link')) {
    largeImg.src = url + e.target.href;
  }

  if (e.target.classList.contains('gallery__img')) {
    const src = e.target.src.split('/landscape')[1].split('-thumb')[0];

    largeImg.src = url + '/images/landscape' + src + '.png';
  }
});
