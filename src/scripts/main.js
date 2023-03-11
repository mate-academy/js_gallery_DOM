'use strict';

const largeImg = document.querySelector('#largeImg');

document.querySelector('#thumbs').addEventListener('click', (e) => {
  e.preventDefault();

  if (!e.target.matches('img')) {
    return;
  }

  largeImg.src = e.target.parentElement.href;
});
