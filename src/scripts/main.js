'use strict';

const thumbs = document.querySelector('#thumbs');
const bigImage = document.querySelector('.gallery__large-img');

thumbs.addEventListener('click', (smth) => {
  smth.preventDefault();

  const link = smth.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  bigImage.src = link.href;
});
