/* eslint-disable no-shadow */
'use strict';

const mainImage = document.getElementById('largeImg');
const additionalImage = document.getElementById('thumbs');

additionalImage.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  mainImage.src = item.href;
});
