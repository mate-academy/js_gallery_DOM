'use strict';

const thumbsListElement = document.getElementById('thumbs');
const largeImgElement = document.getElementById('largeImg');

thumbsListElement.addEventListener('click', e => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  largeImgElement.src = link.href;
});
