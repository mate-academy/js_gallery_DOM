'use strict';

const mainImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

// eslint-disable-next-line no-shadow
thumbs.addEventListener('click', (event) => {
  event.preventDefault();

  const link = event.target.closest('a');

  if (link) {
    mainImg.src = link.href;
  }
});
