'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

// eslint-disable-next-line no-shadow
const replaceImg = (event) => {
  event.preventDefault();

  if (event.target.src) {
    largeImg.src = event.target.closest('a').href;
  }
};

gallery.addEventListener('click', replaceImg);
