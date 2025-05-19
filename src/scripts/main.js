'use strict';

const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }
  e.preventDefault();

  const largeImg = document.getElementById('largeImg');

  largeImg.src = link.href;
});
