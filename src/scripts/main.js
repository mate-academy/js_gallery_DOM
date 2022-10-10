'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

function showThumb(currImg) {
  const thumb = currImg.target.closest('.list-item__link');

  if (!thumb || !thumbs.contains(thumb)) {
    return;
  }

  largeImg.src = thumb.href;
  largeImg.alt = thumb.title;
  currImg.preventDefault();
}

thumbs.addEventListener('click', showThumb);
