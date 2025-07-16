'use strict';

const thumbs = document.querySelector('#thumbs');
const bigImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (evente) => {
  evente.preventDefault();

  const linkElement = evente.target.closest('a');

  if (!linkElement) {
    return;
  }

  bigImg.src = linkElement.href;
});
