
'use strict';

const mainImage = document.getElementById('largeImg');
const additionalImage = document.getElementById('thumbs');

additionalImage.addEventListener('click', e => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  mainImage.src = item.href;
});
