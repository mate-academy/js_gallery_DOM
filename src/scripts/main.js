'use strict';

const bigPicture = document.querySelector('#largeImg');
const smallPicture = document.querySelector('#thumbs');

smallPicture.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  bigPicture.src = link.href;
});
