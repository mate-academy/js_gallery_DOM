'use strict';

const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  if (e.target.classList.contains('gallery__img')) {
    e.preventDefault();

    document.querySelector('#largeImg').src = e.path[1].href;
  }
});
