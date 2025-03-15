'use strict';

const mainImage = document.querySelector('#largeImg');

const thumbs = document.querySelector('#thumbs');

// eslint-disable-next-line no-shadow
thumbs.addEventListener('click', (event) => {
  event.preventDefault();

  const li = event.target.closest('.list-item__link');

  if (!li) {
    return;
  }

  mainImage.src = li.href;
});
