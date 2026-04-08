'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.tagName === 'IMG') {
    largeImg.src = e.target.closest('a').href;
  } else if (e.target.tagName === 'A') {
    largeImg.src = e.target.href;
  }
});
