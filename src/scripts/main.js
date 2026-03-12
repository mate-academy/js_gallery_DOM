/* eslint-disable no-console */
'use strict';

const largeImg = document.getElementById('largeImg');

document.addEventListener('click', (e) => {
  e.preventDefault();

  const imgLink = e.target.closest('.list-item__link');

  if (!imgLink) {
    return;
  }

  largeImg.src = imgLink.href;
});
