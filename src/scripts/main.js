'use strict';

const body = document.querySelector('body');
const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

body.addEventListener('click', (e) => {
  e.preventDefault();
});

thumbs.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    largeImg.src = e.target.parentElement.href;
  }
});
