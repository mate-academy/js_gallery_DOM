'use strict';

const thumbsList = document.querySelector('#thumbs');
const mainImage = document.querySelector('#largeImg');

thumbsList.addEventListener('click', (e) => {
  e.preventDefault();

  let link = e.target;

  if (link.tagName === 'IMG') {
    link = link.closest('a');
  }

  if (!link || link.tagName !== 'A') {
    return;
  }

  mainImage.src = link.href;
});
