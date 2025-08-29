'use strict';

const ul = document.querySelector('#thumbs');
const mainPhoto = document.querySelector('#largeImg');

ul.addEventListener('click', (e) => {
  const anchor = e.target.closest('a');

  if (!anchor || !ul.contains(anchor)) {
    return;
  }

  e.preventDefault();

  mainPhoto.src = anchor.href;

  const thumbImg = anchor.querySelector('img');

  if (thumbImg) {
    mainPhoto.alt = thumbImg.alt;
  }
});
