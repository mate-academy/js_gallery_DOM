'use strict';

const bigImg = document.querySelector('#largeImg');
const smalls = document.querySelector('#thumbs');

smalls.addEventListener('click', e => {
  e.preventDefault();

  const thumbnail = e.target.closest('.list-item__link');

  if (smalls.contains(thumbnail)) {
    bigImg.src = thumbnail.href;
  }
});
