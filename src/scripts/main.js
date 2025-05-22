'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (replace) => {
  replace.preventDefault();

  const link = replace.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  const bigImg = document.querySelector('#largeImg');

  bigImg.src = link.href;
});
