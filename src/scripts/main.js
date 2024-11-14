'use strict';

const bigImg = document.getElementById('largeImg');

const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  const list = e.target.closest('.list-item');

  if (!list) {
    return;
  }

  e.preventDefault();

  const link = list.querySelector('.list-item__link');

  if (link) {
    bigImg.src = link.href;
  }
});
