'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  largeImg.src = e.target.parentNode.href;
});
